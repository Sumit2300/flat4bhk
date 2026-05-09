const INDIAN_MOBILE_RE = /^[6-9]\d{9}$/;

export function normalizeIndianMobile(input: string): string | null {
  if (!input) return null;
  const digits = input.replace(/[^\d]/g, "");
  let stripped = digits;
  if (stripped.length === 12 && stripped.startsWith("91")) stripped = stripped.slice(2);
  else if (stripped.length === 13 && stripped.startsWith("091")) stripped = stripped.slice(3);
  else if (stripped.length === 11 && stripped.startsWith("0")) stripped = stripped.slice(1);
  return INDIAN_MOBILE_RE.test(stripped) ? stripped : null;
}

export function isValidIndianMobile(input: string): boolean {
  return normalizeIndianMobile(input) !== null;
}

export function formatIndianMobileDisplay(normalized: string): string {
  return INDIAN_MOBILE_RE.test(normalized)
    ? `+91 ${normalized.slice(0, 5)} ${normalized.slice(5)}`
    : normalized;
}
