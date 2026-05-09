import { createFileRoute, useLocation } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";

import { formatIndianMobileDisplay, normalizeIndianMobile } from "@/lib/phone";

const PHONE_RAW = "919501761157";
const TEL_URL = `tel:+${PHONE_RAW}`;

type ThankYouSearch = {
  name: string;
  phone: string;
  purpose: string;
  time: string;
  sourceUrl: string;
};

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

function buildWhatsAppUrl(search: ThankYouSearch): string {
  const normalizedPhone = normalizeIndianMobile(search.phone);
  const displayPhone = normalizedPhone
    ? formatIndianMobileDisplay(normalizedPhone)
    : search.phone || "-";
  const message = encodeURIComponent(
    [
      "Hi, I submitted an enquiry for Picasa Residencies 4BHK + Store homes.",
      "Please share the price list, floor plan, payment plan and site visit details.",
      "",
      `Name: ${search.name || "-"}`,
      `Phone: ${displayPhone}`,
      `Interested in: ${search.purpose || "-"}`,
      `Preferred call time: ${search.time || "-"}`,
      `Form source: ${search.sourceUrl || "-"}`,
    ].join("\n"),
  );
  return `https://wa.me/${PHONE_RAW}?text=${message}`;
}

function readThankYouSearch(searchStr: string): ThankYouSearch {
  const params = new URLSearchParams(searchStr);
  return {
    name: params.get("name")?.trim() ?? "",
    phone: params.get("phone")?.trim() ?? "",
    purpose: params.get("purpose")?.trim() ?? "",
    time: params.get("time")?.trim() ?? "",
    sourceUrl: params.get("sourceUrl")?.trim() ?? "",
  };
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
  }),
  component: ThankYou4Bhk,
});

function ThankYou4Bhk() {
  const searchStr = useLocation({ select: (location) => location.searchStr });
  const search = readThankYouSearch(searchStr);
  const whatsappUrl = buildWhatsAppUrl(search);
  const name = firstName(search.name);

  return (
    <main className="min-h-screen bg-[#0c1024] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center justify-center">
        <section className="w-full rounded-3xl border border-white/15 bg-white p-6 text-navy shadow-[0_30px_90px_-45px_rgba(0,0,0,0.7)] sm:p-10">
          <div className="mx-auto grid max-w-2xl gap-6 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={30} />
            </div>

            <div>
              <h1 className="text-balance text-[32px] font-extrabold leading-tight tracking-tight sm:text-[46px]">
                Thank You! Your Enquiry Has Been Received
              </h1>
              <p className="mt-4 text-balance text-[19px] font-bold leading-7 text-navy sm:text-[24px] sm:leading-9">
                Thank you, {name}. {intentCopy(search.purpose)}
              </p>
              <p className="mt-4 text-[15px] font-medium leading-7 text-muted-foreground sm:text-[17px]">
                Our property advisor will contact you shortly with the price list, floor plan,
                payment plan, and site visit details.
              </p>
            </div>

            <div className="rounded-2xl border border-orange/25 bg-orange/5 p-5 text-left">
              <p className="text-center text-[18px] font-extrabold text-navy">
                Want faster assistance?
              </p>
              <p className="mt-2 text-center text-sm font-semibold text-muted-foreground">
                Chat with us on WhatsApp now and get:
              </p>
              <ul className="mt-4 grid gap-2 text-[15px] font-bold text-navy sm:grid-cols-2">
                {[
                  "Latest price list",
                  "Floor plan",
                  "Location details",
                  "Site visit availability",
                  "Payment plan information",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="shrink-0 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-[15px] font-extrabold text-white shadow-[0_18px_40px_-20px_rgba(37,211,102,0.8)]"
              >
                <MessageCircle size={18} />
                Continue on WhatsApp
              </a>
              <a
                href={TEL_URL}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-5 text-[15px] font-extrabold text-white shadow-[0_18px_40px_-20px_rgba(39,53,130,0.8)]"
              >
                <Phone size={18} />
                Call Our Agent
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
