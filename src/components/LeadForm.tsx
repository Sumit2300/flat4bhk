import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import { toast } from "sonner";
import { isValidIndianMobile, normalizeIndianMobile } from "@/lib/phone";

const PHONE_RAW = "919501761157";
const PHONE_DISPLAY = "+91 95017 61157";
const BASE_WA_MSG =
  "Hi, I want price, floor plan and site visit details for Picasa Residencies 4BHK homes.";
const TEL_URL = `tel:+${PHONE_RAW}`;

const TURNSTILE_SITE_KEY = String(import.meta.env.VITE_TURNSTILE_SITE_KEY ?? "").trim();
const GOOGLE_ADS_CONVERSION_ID = String(
  import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID ?? "",
).trim();
const GOOGLE_ADS_CONVERSION_LABEL = String(
  import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL ?? "",
).trim();

type LeadFormValues = {
  name: string;
  phone: string;
  purpose: string;
  time: string;
};

type LeadAttribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
};

type LeadFormProps = {
  compact?: boolean;
  source?: string;
  className?: string;
  variant?: "default" | "inverse";
};

const initialValues: LeadFormValues = {
  name: "",
  phone: "",
  purpose: "",
  time: "",
};

const PURPOSE_OPTIONS = ["Family Use", "Investment", "Both"] as const;
const TIME_OPTIONS = ["ASAP", "Morning", "Afternoon", "Evening"] as const;

type TurnstileApi = {
  render: (
    container: HTMLElement,
    opts: {
      sitekey: string;
      size?: "normal" | "compact" | "invisible" | "flexible";
      theme?: "light" | "dark" | "auto";
      callback?: (token: string) => void;
      "error-callback"?: () => void;
      "expired-callback"?: () => void;
    },
  ) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId?: string) => void;
  getResponse: (widgetId?: string) => string | undefined;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function collectAttribution(url: URL): LeadAttribution {
  const keys: (keyof LeadAttribution)[] = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "fbclid",
    "msclkid",
  ];
  return keys.reduce<LeadAttribution>((acc, key) => {
    const value = url.searchParams.get(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
}

function fireConversionEvents(source: string) {
  if (typeof window === "undefined") return;
  if (window.gtag && GOOGLE_ADS_CONVERSION_ID && GOOGLE_ADS_CONVERSION_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
    });
  }
  if (window.gtag) {
    window.gtag("event", "generate_lead", {
      source,
      project: "Picasa Residencies",
    });
  }
  if (window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "Picasa Residencies",
      source,
    });
  }
}

export function LeadForm({
  compact = false,
  source = "Landing Page",
  className = "",
  variant = "default",
}: LeadFormProps) {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const mountedAtRef = useRef(Date.now());
  const turnstileWidgetRef = useRef<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileTokenRef = useRef<string>("");
  const autoAdvanceRef = useRef<number | null>(null);

  const isInverse = variant === "inverse";
  const isSubmitting = status === "submitting";

  // URL prefill on mount (helps WhatsApp / retargeting traffic).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const prefillName = url.searchParams.get("name");
    const prefillPhone = url.searchParams.get("phone");
    if (prefillName || prefillPhone) {
      setValues((current) => ({
        ...current,
        name: prefillName ?? current.name,
        phone: prefillPhone ?? current.phone,
      }));
    }
  }, []);

  // Render Turnstile widget when on step 2 (submission step) and key present.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || step !== 2) return;
    let cancelled = false;

    const tryRender = () => {
      if (cancelled) return;
      if (!window.turnstile || !turnstileContainerRef.current) {
        window.setTimeout(tryRender, 200);
        return;
      }
      if (turnstileWidgetRef.current) return;
      try {
        turnstileWidgetRef.current = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          size: "flexible",
          theme: isInverse ? "dark" : "light",
          callback: (token) => {
            turnstileTokenRef.current = token;
          },
          "expired-callback": () => {
            turnstileTokenRef.current = "";
          },
          "error-callback": () => {
            turnstileTokenRef.current = "";
          },
        });
      } catch {
        // Silently ignore — server will reject if token missing and key configured.
      }
    };
    tryRender();

    return () => {
      cancelled = true;
      if (turnstileWidgetRef.current && window.turnstile) {
        try {
          window.turnstile.remove(turnstileWidgetRef.current);
        } catch {
          // ignore
        }
        turnstileWidgetRef.current = null;
        turnstileTokenRef.current = "";
      }
    };
  }, [step, isInverse]);

  const fallbackMessage = encodeURIComponent(
    `${BASE_WA_MSG}\n\nName: ${values.name || "-"}\nPhone: ${values.phone || "-"}\nPurpose: ${values.purpose || "-"}\nPreferred call time: ${values.time || "-"}`,
  );
  const fallbackWhatsAppUrl = `https://wa.me/${PHONE_RAW}?text=${fallbackMessage}`;

  const updateValue = (field: keyof LeadFormValues, value: string) => {
    let next = value;
    if (field === "phone") next = value.replace(/[^\d]/g, "").slice(0, 10);
    setValues((current) => ({ ...current, [field]: next }));
    if (status === "error" || status === "success") {
      setStatus("idle");
      setError("");
    }
  };

  const validateStep1 = () => {
    if (values.name.trim().length < 2) return "Please enter your full name.";
    if (!isValidIndianMobile(values.phone))
      return "Please enter a valid 10-digit Indian mobile number.";
    return "";
  };

  const goNext = () => {
    const err = validateStep1();
    if (err) {
      setStatus("error");
      setError(err);
      return;
    }
    setStatus("idle");
    setError("");
    setStep(2);
  };

  // Auto-advance when step 1 becomes valid (debounced to avoid jumpiness).
  useEffect(() => {
    if (step !== 1) return;
    if (validateStep1()) return;
    autoAdvanceRef.current && window.clearTimeout(autoAdvanceRef.current);
    autoAdvanceRef.current = window.setTimeout(() => {
      setStep(2);
      setStatus("idle");
      setError("");
    }, 350);
    return () => {
      if (autoAdvanceRef.current) {
        window.clearTimeout(autoAdvanceRef.current);
        autoAdvanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.name, values.phone, step]);

  const submitWith = async (overrides?: Partial<LeadFormValues>) => {
    const merged: LeadFormValues = { ...values, ...overrides };
    if (overrides) setValues(merged);

    const step1Err =
      merged.name.trim().length < 2
        ? "Please enter your full name."
        : !isValidIndianMobile(merged.phone)
          ? "Please enter a valid 10-digit Indian mobile number."
          : "";
    if (step1Err) {
      setStep(1);
      setStatus("error");
      setError(step1Err);
      return;
    }
    if (!merged.purpose || !merged.time) {
      setStatus("error");
      setError("Please select your buying purpose and preferred call time.");
      return;
    }

    if (TURNSTILE_SITE_KEY && !turnstileTokenRef.current) {
      setStatus("error");
      setError("Please complete the verification just above the button.");
      return;
    }

    setStatus("submitting");
    setError("");

    const url = new URL(window.location.href);
    const payload = {
      name: merged.name.trim(),
      phone: normalizeIndianMobile(merged.phone) ?? merged.phone,
      purpose: merged.purpose,
      time: merged.time,
      source,
      attribution: collectAttribution(url),
      pageUrl: url.toString(),
      referrer: document.referrer || "",
      website: "",
      formMs: Date.now() - mountedAtRef.current,
      turnstileToken: turnstileTokenRef.current,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res
        .json()
        .catch(() => ({ ok: false, code: "upstream" }))) as {
        ok: boolean;
        code?: string;
        message?: string;
      };

      if (!res.ok || !data.ok) {
        const code = data.code ?? "upstream";
        if (code === "duplicate") {
          setStatus("success");
          toast.success("We already have your request — MV Realtor will reach out shortly.");
          setValues(initialValues);
          setStep(1);
          return;
        }
        setStatus("error");
        if (code === "rate_limited") {
          setError("Too many submissions just now. Please try again in a minute or use WhatsApp.");
        } else if (code === "turnstile") {
          setError("Verification failed. Please tick the verification above and try again.");
          if (window.turnstile && turnstileWidgetRef.current) {
            window.turnstile.reset(turnstileWidgetRef.current);
            turnstileTokenRef.current = "";
          }
        } else if (code === "invalid") {
          setError("Some details look invalid. Please re-check your name and number.");
        } else {
          setError("We couldn't send the form. Please try WhatsApp or call.");
        }
        toast.error("Lead form could not be sent.");
        return;
      }

      setStatus("success");
      setValues(initialValues);
      setStep(1);
      toast.success("Thanks. MV Realtor will contact you shortly.");
      fireConversionEvents(source);
    } catch {
      setStatus("error");
      setError("Network error. Please try again or use WhatsApp.");
      toast.error("Lead form could not be sent.");
    }
  };

  const submitLead = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitWith();
  };

  const wrapperBase = isInverse
    ? "border border-white/15 bg-white/[0.05] text-white backdrop-blur-xl shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]"
    : "border border-border/70 bg-white shadow-[0_30px_80px_-40px_rgba(39,53,130,0.45)]";

  const labelClass = isInverse
    ? "grid gap-2 text-[12px] font-bold uppercase tracking-wide text-white/70"
    : "grid gap-2 text-[12px] font-bold uppercase tracking-wide text-navy/70";

  const inputBase = isInverse
    ? "h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 text-white placeholder:text-white/40 outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/30"
    : "h-12 w-full rounded-xl border border-border bg-[#f8f8f4] px-4 text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";

  const phonePrefixClass = isInverse
    ? "absolute left-3 top-1/2 -translate-y-1/2 select-none rounded-md bg-white/10 px-2 py-1 text-[13px] font-bold text-white/85"
    : "absolute left-3 top-1/2 -translate-y-1/2 select-none rounded-md bg-navy/10 px-2 py-1 text-[13px] font-bold text-navy";

  const headingClass = isInverse ? "text-white" : "text-navy";
  const subTextClass = isInverse ? "text-white/65" : "text-muted-foreground";

  const stepDotBase = "h-1.5 flex-1 rounded-full transition-all duration-500";
  const dotActive = "bg-orange";
  const dotIdle = isInverse ? "bg-white/15" : "bg-border";

  return (
    <form
      onSubmit={submitLead}
      className={`relative overflow-hidden rounded-2xl ${wrapperBase} ${compact ? "p-5" : "p-6 sm:p-7"} ${className}`}
      noValidate
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${
          isInverse
            ? "bg-[linear-gradient(90deg,var(--orange),transparent)]"
            : "bg-[linear-gradient(90deg,var(--orange),var(--navy))]"
        }`}
      />

      {/* Honeypot — bots fill it, humans never see it. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value=""
            onChange={() => {
              /* readonly via state — tracked separately if filled by bots via DOM */
            }}
          />
        </label>
      </div>

      <div className="flex items-center justify-between">
        <div
          className={`inline-flex items-center gap-2 rounded-full ${isInverse ? "bg-orange/15 text-orange" : "bg-orange/10 text-orange"} px-3 py-1 text-[11px] font-bold uppercase tracking-wide`}
        >
          <Sparkles size={12} />
          {step === 1 ? "Start with the basics" : "Last step"}
        </div>
        <div className={`text-[11px] font-semibold ${subTextClass}`}>Step {step} of 2</div>
      </div>

      <div className="mt-3 flex gap-1.5">
        <span className={`${stepDotBase} ${dotActive}`} />
        <span className={`${stepDotBase} ${step === 2 ? dotActive : dotIdle}`} />
      </div>

      <div className="mt-5">
        <h3 className={`text-[24px] leading-tight sm:text-[26px] ${headingClass}`}>
          {step === 1 ? "Get price & floor plan" : "Almost there — when can we call?"}
        </h3>
        {!compact && (
          <p className={`mt-2 text-[13.5px] leading-6 ${subTextClass}`}>
            {step === 1
              ? "Floor plan + price list on WhatsApp in under 5 minutes."
              : "We respect your time. Pick a window that suits you and we'll match it."}
          </p>
        )}
      </div>

      {step === 1 ? (
        <div className="mt-5 grid gap-3.5">
          <label className={labelClass}>
            <span className="flex items-center gap-1.5">
              <User size={11} /> Full name
            </span>
            <input
              required
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) => updateValue("name", event.target.value)}
              className={inputBase}
              placeholder="Your name"
              maxLength={80}
            />
          </label>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5">
              <Phone size={11} /> Mobile number
            </span>
            <div className="relative">
              <span className={phonePrefixClass}>+91</span>
              <input
                required
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                value={values.phone}
                onChange={(event) => updateValue("phone", event.target.value)}
                className={`${inputBase} pl-16`}
                placeholder="98XXX XXXXX"
                maxLength={10}
                pattern="[6-9][0-9]{9}"
              />
            </div>
            <span className={`text-[11px] ${subTextClass}`}>
              We send floor plan + price on WhatsApp within 5 minutes.
            </span>
          </label>
        </div>
      ) : (
        <div className="mt-5 grid gap-3.5">
          <div
            className={`flex items-center justify-between rounded-xl ${
              isInverse ? "border border-white/10 bg-white/[0.04]" : "border border-border bg-cream"
            } px-4 py-3`}
          >
            <div className="min-w-0">
              <div className={`truncate text-[13px] font-bold ${headingClass}`}>{values.name}</div>
              <div className={`mt-0.5 truncate text-[12px] ${subTextClass}`}>+91 {values.phone}</div>
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-[12px] font-bold text-orange"
            >
              Edit
            </button>
          </div>

          <div className="grid gap-1.5">
            <span className={labelClass}>Buying purpose</span>
            <div className="grid grid-cols-3 gap-2">
              {PURPOSE_OPTIONS.map((option) => {
                const active = values.purpose === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateValue("purpose", option)}
                    className={`rounded-xl px-2 py-3 text-[12.5px] font-bold transition ${
                      active
                        ? "bg-navy text-white shadow-[0_10px_24px_-14px_rgba(39,53,130,0.7)]"
                        : isInverse
                          ? "border border-white/12 bg-white/[0.03] text-white/85 hover:border-orange/60"
                          : "border border-border bg-[#f8f8f4] text-navy hover:border-navy/40"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-1.5">
            <span className={labelClass}>Preferred call time</span>
            <div className="grid grid-cols-4 gap-2">
              {TIME_OPTIONS.map((option) => {
                const active = values.time === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateValue("time", option)}
                    className={`rounded-xl px-2 py-3 text-[12px] font-bold transition ${
                      active
                        ? "bg-orange text-white shadow-[0_10px_24px_-14px_rgba(227,132,34,0.7)]"
                        : isInverse
                          ? "border border-white/12 bg-white/[0.03] text-white/85 hover:border-orange/60"
                          : "border border-border bg-[#f8f8f4] text-navy hover:border-orange/60"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {TURNSTILE_SITE_KEY && (
            <div ref={turnstileContainerRef} className="mt-1" />
          )}

          <button
            type="button"
            onClick={() =>
              submitWith({
                purpose: values.purpose || "Both",
                time: values.time || "ASAP",
              })
            }
            className={`text-left text-[12px] font-semibold underline-offset-4 hover:underline ${
              isInverse ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-navy"
            }`}
          >
            Skip — just call me anytime
          </button>
        </div>
      )}

      {status === "success" && (
        <div className="mt-4 grid gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
          <div className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <span>Saved. The MV Realtor team will reach out shortly.</span>
          </div>
          <a
            href={fallbackWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white"
          >
            <MessageCircle size={13} /> Open WhatsApp to get the floor plan instantly
            <ArrowRight size={12} />
          </a>
        </div>
      )}

      {status === "error" && error && (
        <div
          className={`mt-4 rounded-xl ${
            isInverse
              ? "border border-orange/40 bg-orange/10 text-white"
              : "border border-orange/30 bg-orange/10 text-navy"
          } p-3 text-sm`}
        >
          <div className="flex gap-2">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
            <span>{error}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={fallbackWhatsAppUrl}
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white"
            >
              <MessageCircle size={13} /> WhatsApp details
            </a>
            <a
              href={TEL_URL}
              className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold ${
                isInverse ? "border border-white/20 text-white" : "border border-navy/20 text-navy"
              }`}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}

      <div className="mt-5 grid gap-2">
        {step === 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-navy px-5 text-sm font-bold text-white shadow-[0_18px_40px_-22px_rgba(39,53,130,0.9)] transition hover:bg-navy/90"
          >
            See my pricing options <ArrowRight size={15} />
          </button>
        ) : (
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-4 text-sm font-bold transition ${
                isInverse
                  ? "border border-white/20 text-white hover:bg-white/[0.06]"
                  : "border border-navy/20 text-navy hover:bg-navy/[0.04]"
              }`}
            >
              <ArrowLeft size={15} />
            </button>
            <button
              disabled={isSubmitting}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange px-5 text-sm font-bold text-white shadow-[0_18px_40px_-18px_rgba(227,132,34,0.85)] transition hover:bg-orange/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send me project details"}
              {!isSubmitting && <ArrowRight size={15} />}
            </button>
          </div>
        )}
      </div>

      <p
        className={`mt-4 flex items-center justify-center gap-2 text-center text-[11.5px] leading-5 ${subTextClass}`}
      >
        <ShieldCheck size={12} className="text-orange" />
        Your details stay private. No spam — only project information.
      </p>
    </form>
  );
}
