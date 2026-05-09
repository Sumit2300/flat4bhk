export type ThankYouLead = {
  name: string;
  phone: string;
  purpose: string;
  time: string;
  source: string;
  sourceUrl: string;
  savedAt: number;
};

const THANK_YOU_LEAD_STORAGE_KEY = "mv-realtor:thankyou-4bhk-lead";
const MAX_STORAGE_AGE_MS = 24 * 60 * 60 * 1000;

export function buildLandingPageSourceUrl(url: URL): string {
  return `${url.origin}${url.pathname}`;
}

export function saveThankYouLead(lead: Omit<ThankYouLead, "savedAt">) {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.setItem(
      THANK_YOU_LEAD_STORAGE_KEY,
      JSON.stringify({ ...lead, savedAt: Date.now() }),
    );
  } catch {
    // Session storage can be unavailable in private or restricted browsing modes.
  }
}

export function readThankYouLead(): ThankYouLead | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.sessionStorage.getItem(THANK_YOU_LEAD_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<ThankYouLead>;
    const savedAt = Number(parsed.savedAt);
    if (!Number.isFinite(savedAt) || Date.now() - savedAt > MAX_STORAGE_AGE_MS) {
      window.sessionStorage.removeItem(THANK_YOU_LEAD_STORAGE_KEY);
      return null;
    }

    const lead = {
      name: String(parsed.name ?? "").trim(),
      phone: String(parsed.phone ?? "").trim(),
      purpose: String(parsed.purpose ?? "").trim(),
      time: String(parsed.time ?? "").trim(),
      source: String(parsed.source ?? "").trim(),
      sourceUrl: String(parsed.sourceUrl ?? "").trim(),
      savedAt,
    };

    if (!lead.name && !lead.phone) return null;

    return lead;
  } catch {
    return null;
  }
}
