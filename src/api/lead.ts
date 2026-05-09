import { z } from "zod";
import { isValidIndianMobile, normalizeIndianMobile } from "../lib/phone";

type KVNamespace = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
};

export type LeadEnv = {
  LEADS_RL?: KVNamespace;
  LEAD_WEBHOOK_URL?: string;
  TURNSTILE_SECRET_KEY?: string;
};

const DEFAULT_LEAD_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbz4mTI0wx2ng4zZf8iTDDzHjy41gjXj_7A3dhIpZfybdKJ8yT9nJ3wy-yghwf3gbu01cQ/exec";

const Body = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().refine(isValidIndianMobile, "Invalid Indian mobile"),
  purpose: z.enum(["Family Use", "Investment", "Both"]),
  time: z.enum(["INSTANT", "Morning", "Afternoon", "Evening"]),
  source: z.string().max(60),
  attribution: z.record(z.string(), z.string()).optional(),
  pageUrl: z.string().url(),
  referrer: z.string().optional().default(""),
  website: z.string().max(0),
  formMs: z.number().int().min(2500).max(1_800_000),
  turnstileToken: z.string().optional().default(""),
});

type LeadCode = "ok" | "invalid" | "turnstile" | "rate_limited" | "duplicate" | "upstream";

function jsonResponse(status: number, body: { ok: boolean; code: LeadCode; message?: string }) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function clientIp(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function configuredWebhookUrl(env: LeadEnv): string {
  const processEnv =
    typeof process === "undefined" ? undefined : process.env.LEAD_WEBHOOK_URL?.trim();
  return env.LEAD_WEBHOOK_URL?.trim() || processEnv || DEFAULT_LEAD_WEBHOOK_URL;
}

function configuredTurnstileSecret(env: LeadEnv): string {
  const processEnv =
    typeof process === "undefined" ? undefined : process.env.TURNSTILE_SECRET_KEY?.trim();
  return env.TURNSTILE_SECRET_KEY?.trim() || processEnv || "";
}

async function verifyTurnstile(secret: string, token: string, ip: string): Promise<boolean> {
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

async function checkRateLimit(
  kv: KVNamespace,
  ip: string,
  phone: string,
  source: string,
): Promise<{ blocked: boolean; reason?: "rate_limited" | "duplicate" }> {
  const ipKey = `ip:${ip}`;
  const ipCountStr = await kv.get(ipKey);
  const ipCount = ipCountStr ? parseInt(ipCountStr, 10) || 0 : 0;
  if (ipCount >= 5) return { blocked: true, reason: "rate_limited" };

  const dedupeKey = `lead:${phone}:${source}`;
  const seen = await kv.get(dedupeKey);
  if (seen) return { blocked: true, reason: "duplicate" };

  await kv.put(ipKey, String(ipCount + 1), { expirationTtl: 60 });
  await kv.put(dedupeKey, "1", { expirationTtl: 60 * 60 * 24 });
  return { blocked: false };
}

export async function handleLead(request: Request, env: LeadEnv): Promise<Response> {
  if (request.method !== "POST") {
    return jsonResponse(405, { ok: false, code: "invalid", message: "Method not allowed" });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return jsonResponse(400, { ok: false, code: "invalid", message: "Invalid JSON" });
  }

  const parsed = Body.safeParse(raw);
  if (!parsed.success) {
    return jsonResponse(400, { ok: false, code: "invalid", message: "Validation failed" });
  }
  const data = parsed.data;
  const ip = clientIp(request);

  const turnstileSecret = configuredTurnstileSecret(env);
  if (turnstileSecret) {
    const ok = await verifyTurnstile(turnstileSecret, data.turnstileToken, ip);
    if (!ok) return jsonResponse(403, { ok: false, code: "turnstile" });
  }

  const normalizedPhone = normalizeIndianMobile(data.phone)!;

  if (env.LEADS_RL) {
    const rl = await checkRateLimit(env.LEADS_RL, ip, normalizedPhone, data.source);
    if (rl.blocked) {
      return jsonResponse(429, { ok: false, code: rl.reason ?? "rate_limited" });
    }
  }

  const webhookUrl = configuredWebhookUrl(env);
  if (!webhookUrl) {
    return jsonResponse(500, {
      ok: false,
      code: "upstream",
      message: "Webhook not configured",
    });
  }

  const payload = {
    project: "Picasa Residencies",
    name: data.name,
    phone: normalizedPhone,
    purpose: data.purpose,
    time: data.time,
    source: data.source,
    pageUrl: data.pageUrl,
    referrer: data.referrer,
    submittedAt: new Date().toISOString(),
    attribution: data.attribution ?? {},
    ip,
    userAgent: request.headers.get("user-agent") ?? "",
  };

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    if (!upstream.ok) {
      return jsonResponse(502, { ok: false, code: "upstream" });
    }
  } catch {
    return jsonResponse(502, { ok: false, code: "upstream" });
  }

  return jsonResponse(200, { ok: true, code: "ok" });
}
