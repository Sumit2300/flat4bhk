import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";

import { formatIndianMobileDisplay, normalizeIndianMobile } from "@/lib/phone";
import { readThankYouLead, type ThankYouLead } from "@/lib/thank-you-lead";

const PHONE_RAW = "919501761157";
const SECOND_AGENT_PHONE_RAW = "918728820700";
const TEL_URL = `tel:+${PHONE_RAW}`;
const SECOND_AGENT_TEL_URL = `tel:+${SECOND_AGENT_PHONE_RAW}`;

function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] || "there";
}

function intentCopy(purpose: string): string {
  if (purpose === "Investment") {
    return "MV Realtor congratulates you for taking the first step to invest in a high-yielding property.";
  }

  if (purpose === "Both") {
    return "MV Realtor congratulates you for taking the first step toward a dream home with strong investment potential.";
  }

  return "MV Realtor congratulates you for taking the first step to buy your dream home.";
}

function personalizedCopy(lead: ThankYouLead | null): string {
  if (!lead) {
    return "Thank you. MV Realtor congratulates you for taking the first step toward your Picasa Residencies enquiry.";
  }

  return `Thank you, ${firstName(lead.name)}. ${intentCopy(lead.purpose)}`;
}

function buildWhatsAppUrl(lead: ThankYouLead | null): string {
  const normalizedPhone = normalizeIndianMobile(lead?.phone ?? "");
  const displayPhone = normalizedPhone
    ? formatIndianMobileDisplay(normalizedPhone)
    : lead?.phone || "-";
  const lines = [
    lead
      ? "Hi, I submitted an enquiry for Picasa Residencies 4BHK + Store homes."
      : "Hi, I want faster assistance for Picasa Residencies 4BHK + Store homes.",
    "Please share the price list, floor plan, payment plan and site visit details.",
  ];

  if (lead) {
    lines.push(
      "",
      `Name: ${lead.name || "-"}`,
      `Phone: ${displayPhone}`,
      `Interested in: ${lead.purpose || "-"}`,
      `Preferred call time: ${lead.time || "-"}`,
      `Form source: ${lead.sourceUrl || "-"}`,
    );
  }

  const message = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${PHONE_RAW}?text=${message}`;
}

export const Route = createFileRoute("/thankyou-4bhk")({
  head: () => ({
    meta: [
      { title: "Thank You | Picasa Residencies 4BHK" },
      {
        name: "description",
        content:
          "Thank you for enquiring about Picasa Residencies 4BHK luxury floors. Continue on WhatsApp or call MV Realtor for faster assistance.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800;12..96,900&display=swap",
      },
    ],
  }),
  component: ThankYou4Bhk,
});

function ThankYou4Bhk() {
  const [lead, setLead] = useState<ThankYouLead | null>(null);

  useEffect(() => {
    setLead(readThankYouLead());
    if (window.location.search || window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const whatsappUrl = buildWhatsAppUrl(lead);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c1024] px-4 py-7 text-white sm:px-6 sm:py-10">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(39,53,130,0.22),transparent_34%,rgba(227,132,34,0.16)_100%)]"
      />
      <div aria-hidden className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-5xl items-center justify-center">
        <section className="w-full overflow-hidden rounded-[28px] border border-white/15 bg-white text-navy shadow-[0_34px_100px_-48px_rgba(0,0,0,0.85)]">
          <div className="h-1.5 bg-[linear-gradient(90deg,var(--orange),var(--navy))]" />
          <div className="grid gap-6 p-5 text-center sm:p-9 lg:p-12">
            <div className="mx-auto flex max-w-4xl items-center justify-center gap-3 sm:gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-600 shadow-[0_18px_40px_-28px_rgba(16,185,129,0.85)] sm:h-14 sm:w-14">
                <CheckCircle2 size={30} strokeWidth={2.5} />
              </span>
              <h1 className="text-balance text-left text-[30px] font-black leading-[1.03] tracking-tight text-navy sm:text-center sm:text-[48px]">
                Thank You! Your Enquiry Has Been Received
              </h1>
            </div>

            <div className="mx-auto max-w-4xl rounded-3xl border border-orange/30 bg-[#fff8f0] px-5 py-5 shadow-[0_22px_60px_-45px_rgba(227,132,34,0.9)] sm:px-8 sm:py-6">
              <p className="text-balance text-[22px] font-black leading-[1.2] tracking-tight text-orange sm:text-[32px]">
                {personalizedCopy(lead)}
              </p>
            </div>

            <p className="mx-auto max-w-2xl text-[17px] font-semibold leading-7 text-muted-foreground sm:text-[19px] sm:leading-8">
              Our property advisor will contact you shortly with the price list, floor plan, payment
              plan, and site visit details.
            </p>

            <div className="mx-auto w-full max-w-3xl rounded-3xl border border-border bg-[#fbfbf8] p-5 text-left shadow-[0_24px_70px_-52px_rgba(39,53,130,0.65)] sm:p-6">
              <p className="text-center text-[22px] font-black tracking-tight text-navy">
                Want faster assistance?
              </p>
              <p className="mt-2 text-center text-[16px] font-bold text-muted-foreground">
                Chat with us on WhatsApp now and get:
              </p>
              <ul className="mt-5 grid gap-3 text-[16px] font-extrabold text-navy sm:grid-cols-2">
                {[
                  "Latest price list",
                  "Floor plan",
                  "Location details",
                  "Site visit availability",
                  "Payment plan information",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="shrink-0 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-[17px] font-black text-white shadow-[0_20px_46px_-22px_rgba(37,211,102,0.8)] transition hover:translate-y-[-1px] sm:col-span-2"
              >
                <MessageCircle size={18} />
                Continue on WhatsApp
              </a>
              <a
                href={TEL_URL}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-navy px-5 text-[14px] font-black text-white shadow-[0_20px_46px_-22px_rgba(39,53,130,0.8)] transition hover:translate-y-[-1px] sm:text-[15px]"
              >
                <Phone size={18} />
                Call +91 95017 61157
              </a>
              <a
                href={SECOND_AGENT_TEL_URL}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-5 text-[14px] font-black text-navy shadow-[0_20px_46px_-28px_rgba(39,53,130,0.65)] transition hover:translate-y-[-1px] sm:text-[15px]"
              >
                <Phone size={18} />
                Call +91 87288 20700
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
