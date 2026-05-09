import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Toaster } from "sonner";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  FileCheck2,
  Flame,
  GraduationCap,
  Headset,
  Home,
  IndianRupee,
  Layers,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  PlayCircle,
  Quote,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
  ZoomIn,
} from "lucide-react";
import logo from "@/assets/mv-realtor-logo.jpeg";
import { LeadForm } from "@/components/LeadForm";
import { SocialProofPopup } from "@/components/SocialProofPopup";

import img18 from "@/assets/picasa/IMG_0918.jpg";
import img19 from "@/assets/picasa/IMG_0919.jpg";
import img20 from "@/assets/picasa/IMG_0920.jpg";
import img21 from "@/assets/picasa/IMG_0921.jpg";
import img22 from "@/assets/picasa/IMG_0922.jpg";
import img23 from "@/assets/picasa/IMG_0923.jpg";
import img24 from "@/assets/picasa/IMG_0924.jpg";
import img25 from "@/assets/picasa/IMG_0925.jpg";
import img27 from "@/assets/picasa/IMG_0927.jpg";
import img28 from "@/assets/picasa/IMG_0928.jpg";
import img29 from "@/assets/picasa/IMG_0929.jpg";
import img30 from "@/assets/picasa/IMG_0930.jpg";
import img31 from "@/assets/picasa/IMG_0931.jpg";
import img32 from "@/assets/picasa/IMG_0932.jpg";
import img33 from "@/assets/picasa/IMG_0933.jpg";
import img34 from "@/assets/picasa/IMG_0934.jpg";
import img35 from "@/assets/picasa/IMG_0935.jpg";
import img36 from "@/assets/picasa/IMG_0936.jpg";
import img37 from "@/assets/picasa/IMG_0937.jpg";
import img38 from "@/assets/picasa/IMG_0938.jpg";
import img39 from "@/assets/picasa/IMG_0939.jpg";
import img40 from "@/assets/picasa/IMG_0940.jpg";
import img41 from "@/assets/picasa/IMG_0941.jpg";
import img42 from "@/assets/picasa/IMG_0942.jpg";

const PHONE_RAW = "919501761157";
const PHONE_DISPLAY = "+91 95017 61157";
const WA_MSG = encodeURIComponent(
  "Hi, I want price, floor plan and site visit details for Picasa Residencies 4BHK homes.",
);
const WA_URL = `https://wa.me/${PHONE_RAW}?text=${WA_MSG}`;
const TEL_URL = `tel:+${PHONE_RAW}`;

const VIDEOS = [
  { id: "1j3-wqLhTjd_5uoxi4iBTFJBoGbF7sk1e", label: "Project Walkthrough", thumb: img31 },
  { id: "1qzRvLMbllTDqkbHI4270CVd14Txwwp8f", label: "Site View", thumb: img22 },
  { id: "1Ph99mnvSYtHe4XNzTPAXrtkM03YN4mn4", label: "Exterior Tour", thumb: img18 },
  { id: "1vcM-DjMblq3jH-fvt74PkII1R5sc556j", label: "Project Visuals", thumb: img33 },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Picasa Residencies 4BHK Homes near Chandigarh University | MV Realtor" },
      {
        name: "description",
        content:
          "Premium 4BHK G+2 low-rise homes on Kharar-Kurali Bypass, Kurali. 150 sq. yd family homes near Chandigarh University. Starting from ₹17 Lakh.",
      },
      { property: "og:title", content: "Picasa Residencies 4BHK Homes near Chandigarh University" },
      {
        property: "og:description",
        content:
          "150 sq. yd G+2 low-rise 4BHK homes in Kurali, near Chandigarh University. Starting from ₹17 Lakh.",
      },
      { property: "og:image", content: img31 },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: img31 },
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
  component: Landing,
});

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#highlights", label: "Highlights" },
  { href: "#location", label: "Location" },
  { href: "#gallery", label: "Gallery" },
  { href: "#walkthrough", label: "Walkthrough" },
  { href: "#faqs", label: "FAQs" },
];

const heroFacts = [
  { value: "4BHK", label: "Family homes" },
  { value: "150", label: "Sq. yard plot" },
  { value: "G+2", label: "Low-rise format" },
  { value: "₹17L+", label: "Starting price" },
];

const tickerItems = [
  { name: "Amit", area: "Kurali", action: "requested floor plan" },
  { name: "Priya", area: "Mohali", action: "booked a site visit" },
  { name: "Rahul", area: "Kharar", action: "downloaded project details" },
  { name: "Simran", area: "Chandigarh", action: "asked for pricing" },
  { name: "Harpreet", area: "Zirakpur", action: "requested payment plan" },
  { name: "Neha", area: "Panchkula", action: "booked a site visit" },
  { name: "Vikram", area: "Kurali", action: "requested floor plan" },
  { name: "Manpreet", area: "Mohali", action: "downloaded project details" },
  { name: "Aarav", area: "Kharar", action: "asked for site visit slot" },
  { name: "Gurleen", area: "CU Belt", action: "requested project brochure" },
];

type Highlight = {
  icon: LucideIcon;
  title: string;
  copy: string;
  metric: string;
  metricLabel: string;
  image?: string;
};

const highlights: Highlight[] = [
  {
    icon: Home,
    title: "Real 4BHK proportions",
    copy: "Separate rooms for parents, kids and guests — none of the squeezed-fit apartment trade-offs.",
    metric: "4BHK",
    metricLabel: "True family format",
    image: img31,
  },
  {
    icon: Layers,
    title: "G+2 low-rise privacy",
    copy: "Fewer neighbours per floor, quieter common areas, and your own family rhythm.",
    metric: "G+2",
    metricLabel: "Low-rise concept",
  },
  {
    icon: Ruler,
    title: "150 sq. yd plot footprint",
    copy: "Real headroom, real balconies, real storage — designed around a family that actually lives in it.",
    metric: "150",
    metricLabel: "Sq. yard plot",
  },
  {
    icon: Sparkles,
    title: "Finished interiors",
    copy: "Premium lighting, modular kitchens and styled bedroom walls — move-in ready aesthetics.",
    metric: "Move-in",
    metricLabel: "Ready aesthetics",
    image: img33,
  },
  {
    icon: MapPin,
    title: "Highway frontage",
    copy: "Direct access from Kharar–Kurali Bypass — Mohali, CU and the airport stay practical.",
    metric: "Bypass",
    metricLabel: "Direct frontage",
  },
  {
    icon: ShieldCheck,
    title: "Buyer-side support",
    copy: "Floor plan, payment plan and document guidance from MV Realtor — no run-around.",
    metric: "End-to-end",
    metricLabel: "Buyer support",
  },
];

const locationItems = [
  { icon: GraduationCap, label: "Chandigarh University", detail: "~5 min" },
  { icon: Plane, label: "Chandigarh Airport", detail: "~20 min" },
  { icon: Building2, label: "Mohali sector access", detail: "~25 min" },
  { icon: Car, label: "Kharar–Kurali Bypass", detail: "Project frontage" },
];

const projectRows: [string, string][] = [
  ["Project", "Picasa Residencies"],
  ["Configuration", "4BHK family homes"],
  ["Plot size", "150 Sq. Yard"],
  ["Concept", "G+2 low-rise"],
  ["Starting price", "₹17 Lakh"],
  ["Location", "Kharar-Kurali Bypass, Kurali"],
  ["Nearby landmark", "Chandigarh University"],
  ["Support", "Site visit & bank loan assistance"],
];

const onCallChecklist = [
  "Latest price & payment plan",
  "Detailed floor plan PDF",
  "Available units snapshot",
  "Site visit time confirmation",
  "Bank loan & documentation help",
];

const galleryImages = [
  { src: img31, label: "Living and dining lounge", className: "md:col-span-4 md:row-span-2" },
  { src: img22, label: "Primary bedroom", className: "md:col-span-2" },
  { src: img19, label: "Modular kitchen", className: "md:col-span-2" },
  { src: img21, label: "Bedroom finish", className: "md:col-span-2" },
  { src: img33, label: "Feature wall detail", className: "md:col-span-2" },
  { src: img42, label: "Bedroom TV wall", className: "md:col-span-2" },
  { src: img27, label: "Bedroom balcony side", className: "md:col-span-2" },
  { src: img35, label: "Interior details", className: "md:col-span-2" },
  { src: img37, label: "Room finish", className: "md:col-span-2" },
  { src: img40, label: "Private room view", className: "md:col-span-2" },
];

const familySliderImages = [
  { src: img20, label: "Kitchen storage wall and appliances" },
  { src: img23, label: "Bedroom entry and wardrobe finish" },
  { src: img24, label: "Bedroom wardrobe and lighting detail" },
  { src: img25, label: "Private room finish detail" },
  { src: img28, label: "Bedroom balcony and curtain wall" },
  { src: img29, label: "Bedroom furnishing and ceiling lighting" },
  { src: img30, label: "Primary room feature detail" },
  { src: img32, label: "Living area seating and ceiling design" },
  { src: img34, label: "Dining and lounge detail" },
  { src: img36, label: "Interior passage and room finish" },
  { src: img38, label: "Private bedroom wall finish" },
  { src: img39, label: "Room detail and wardrobe finish" },
  { src: img41, label: "Finished bedroom layout" },
];

const testimonials = [
  {
    name: "Rajeev S.",
    initials: "RS",
    role: "Family buyer · Mohali",
    text: "Loved the room sizes. It felt much more spacious than the apartments we shortlisted in Kharar — and the team did not waste our time.",
    rating: 5,
  },
  {
    name: "Anita K.",
    initials: "AK",
    role: "Investor · Chandigarh",
    text: "The Chandigarh University belt made sense to us, and the team explained pricing clearly. Got a follow-up call exactly when promised.",
    rating: 5,
  },
  {
    name: "Harpreet G.",
    initials: "HG",
    role: "End user · Kurali",
    text: "Low-rise privacy is exactly what we wanted. The team arranged a site visit on the same day and walked us through the floor plan in detail.",
    rating: 5,
  },
];

const bookingProcess = [
  {
    icon: Phone,
    title: "Submit & callback",
    copy: "Drop your number — MV Realtor calls back during your preferred window with availability and pricing.",
  },
  {
    icon: FileCheck2,
    title: "Floor plan & payment plan",
    copy: "Receive the latest floor plan, unit availability snapshot and payment plan options on WhatsApp.",
  },
  {
    icon: CalendarCheck,
    title: "Coordinated site visit",
    copy: "Visit the project on a slot that suits your family — we coordinate the walk-through end to end.",
  },
];

const faqs = [
  {
    q: "Where is Picasa Residencies located?",
    a: "The project is on the Kharar-Kurali Bypass Highway in Kurali, Punjab, near Chandigarh University.",
  },
  {
    q: "What type of homes are available?",
    a: "Picasa Residencies is positioned around 4BHK homes on a 150 Sq. Yard plot size in a G+2 low-rise format.",
  },
  {
    q: "What is the starting price?",
    a: "The current communication starts from ₹17 Lakh. Latest price, payment plan and availability should be confirmed with MV Realtor before booking.",
  },
  {
    q: "Can I get the floor plan?",
    a: "Yes. Submit the form and the team will share price, floor plan, payment plan and site visit details.",
  },
  {
    q: "Is this suitable for family living?",
    a: "Yes. The project is positioned for self-use families who want room separation, low-rise privacy and practical access toward the Chandigarh University and Mohali belt.",
  },
  {
    q: "Can I schedule a site visit?",
    a: "Yes. Share your preferred call time in the form or contact the team directly on WhatsApp or phone.",
  },
];

function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <Toaster position="top-center" richColors />
      <LiveStrip />
      <Header open={open} setOpen={setOpen} />
      <Hero />
      <ActivityMarquee />
      <Highlights />
      <ProjectSnapshot />
      <LocationProof />
      <Gallery />
      <VideoShowcase />
      <Testimonials />
      <BookingProcess />
      <FAQs />
      <FinalLead />
      <Footer />
      <FloatingCTA />
      <StickyMobileCTA />
      <SocialProofPopup />
    </div>
  );
}

function LiveStrip() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setTick((n) => n + 1), 4500);
    return () => window.clearInterval(t);
  }, []);

  const items = [
    {
      icon: TrendingUp,
      text: (
        <>
          <span className="font-extrabold text-orange">Limited inventory</span>
          <span className="opacity-70"> · 4BHK units booking fast</span>
        </>
      ),
    },
    {
      icon: Users,
      text: (
        <>
          <span className="font-extrabold">30+</span>
          <span className="opacity-70"> families enquired this month</span>
        </>
      ),
    },
    {
      icon: Clock,
      text: (
        <>
          <span className="font-extrabold">Next site-visit slots</span>
          <span className="opacity-70"> available this weekend</span>
        </>
      ),
    },
  ];

  const item = items[tick % items.length];
  const Icon = item.icon;

  return (
    <div className="relative z-[60] overflow-hidden bg-[#0c1024] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-[12px] sm:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inset-0 rounded-full bg-red-500 opacity-70 animate-ping" />
            <span className="relative h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/55">
            Live
          </span>
          <span key={tick} className="flex min-w-0 items-center gap-1.5 truncate animate-fade-up">
            <Icon size={13} className="shrink-0 text-orange" />
            <span className="truncate">{item.text}</span>
          </span>
        </div>
        <a
          href={WA_URL}
          className="hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-white transition hover:bg-white/15 sm:inline-flex"
        >
          <MessageCircle size={12} />
          WhatsApp now
          <ArrowRight size={12} />
        </a>
      </div>
    </div>
  );
}

function Header({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="MV Realtor home">
          <img
            src={logo}
            alt="MV Realtor"
            className="h-10 w-10 rounded-md border border-border bg-white object-contain p-1"
          />
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight text-navy">MV REALTOR</div>
            <div className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-orange">
              Vision meets reality
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold text-foreground/65 transition hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={TEL_URL}
            className="inline-flex items-center gap-2 rounded-full border border-navy/12 px-3 py-1.5 text-[13px] font-bold text-navy transition hover:border-navy/35"
          >
            <Phone size={13} className="text-orange" />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_12px_30px_-16px_rgba(39,53,130,0.85)] transition hover:bg-navy/90"
          >
            Get price
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#lead-form"
            className="rounded-full bg-navy px-3 py-2 text-[12px] font-bold text-white"
          >
            Get price
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-navy"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="mx-auto grid max-w-7xl px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 px-1 py-3 text-sm font-semibold text-navy last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#0c1024] text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${img31})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(12,16,36,0.96)_0%,rgba(12,16,36,0.82)_42%,rgba(12,16,36,0.55)_100%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-15" />
      <div
        aria-hidden
        className="absolute -top-24 right-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(227,132,34,0.18),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-16 lg:grid-cols-12 lg:items-start lg:gap-8 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-sm backdrop-blur">
            <Flame size={13} className="text-orange" />
            Booking open · Picasa Residencies, Kurali
          </div>

          <h1 className="mt-5 text-balance text-[42px] font-extrabold leading-[0.98] tracking-tight text-white sm:text-[58px] lg:text-[72px]">
            Premium 4BHK homes,
            <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="relative z-10 italic font-medium text-orange">low-rise</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-sm bg-orange/30" />
            </span>{" "}
            living near Chandigarh University.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-[17px]">
            150 sq. yd family homes on Kharar–Kurali Bypass. G+2 format, finished interiors, a real
            family floor plan — and entry pricing from ₹17 Lakh.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#lead-form"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-[0_22px_50px_-22px_rgba(227,132,34,0.85)] transition hover:bg-orange/90"
            >
              Get price & floor plan
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={WA_URL}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/[0.1]"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              WhatsApp site visit
            </a>
          </div>

          <div className="mt-10">
            <div className="mb-3 inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.2em] text-orange/90">
              <span className="h-px w-8 bg-orange/60" />
              At a glance
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.65)] sm:grid-cols-4">
              {heroFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-[#0c1024]/85 p-5 backdrop-blur transition hover:bg-[#0c1024]/70"
                >
                  <div className="text-[34px] font-extrabold leading-none tracking-tight text-white sm:text-[36px]">
                    {fact.value}
                  </div>
                  <div className="mt-2.5 text-[10.5px] font-bold uppercase tracking-wide text-white/55">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside id="lead-form" className="lg:col-span-5 lg:sticky lg:top-[88px]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(227,132,34,0.25),transparent_60%)]" />
            <div className="relative">
              <ScarcityBadge />
              <LeadForm source="Hero Form" />
              <div className="mt-3 flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[12px] text-white backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="fill-orange text-orange" />
                    ))}
                  </span>
                  <span className="font-bold text-white">4.9 average</span>
                  <span className="text-white/65">from site visitors</span>
                </div>
                <a href={TEL_URL} className="text-[12px] font-extrabold text-orange">
                  Call agent
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ScarcityBadge() {
  return (
    <div className="mb-3 flex items-center justify-between gap-3 rounded-xl bg-[#0c1024] px-4 py-2.5 text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-orange opacity-70 animate-ping" />
          <span className="relative h-2 w-2 rounded-full bg-orange" />
        </span>
        <div className="leading-tight">
          <div className="text-[12px] font-extrabold tracking-wide">Limited 4BHK units</div>
          <div className="text-[10.5px] font-medium text-white/55">
            Inventory shared on call · Same-day callback
          </div>
        </div>
      </div>
      <Headset size={18} className="text-orange" />
    </div>
  );
}

function ActivityMarquee() {
  const doubled = useMemo(() => [...tickerItems, ...tickerItems], []);
  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-white py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-6 text-[12.5px] font-semibold text-navy/80">
        {doubled.map((item, idx) => (
          <span key={idx} className="inline-flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-orange/10 text-orange">
              <Sparkles size={11} />
            </span>
            <span className="font-bold text-navy">
              {item.name} · {item.area}
            </span>
            <span className="text-muted-foreground">{item.action}</span>
            <span className="text-border">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Highlights() {
  const featured = highlights.filter((h) => h.image);
  const points = highlights.filter((h) => !h.image);

  return (
    <section id="highlights" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-orange/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-[360px] w-[360px] rounded-full bg-navy/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow icon={Sparkles}>Why Picasa</Eyebrow>
            <h2 className="mt-3 text-balance text-[34px] font-extrabold leading-[1.05] tracking-tight text-navy md:text-[52px]">
              The kind of 4BHK that families
              <span className="italic font-medium text-orange"> actually live in</span>.
            </h2>
          </div>
          <p className="md:col-span-5 md:pb-2 text-base leading-7 text-muted-foreground">
            Six things that separate a real family-first project from a brochure-led one — what
            Picasa Residencies does differently from the Kharar belt average.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {featured.map((item) => (
              <HighlightImageCard key={item.title} item={item} />
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {points.map((item, index) => (
              <HighlightPointCard key={item.title} item={item} index={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightImageCard({ item }: { item: Highlight }) {
  const { icon: Icon, title, copy, image, metric, metricLabel } = item;
  return (
    <article className="group relative overflow-hidden rounded-3xl shadow-card min-h-[420px]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/95 via-[#0c1024]/55 to-[#0c1024]/10" />
      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
        <div className="flex items-center justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/20">
            <Icon size={18} />
          </span>
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/85 backdrop-blur">
            {metricLabel}
          </span>
        </div>
        <div>
          <div className="text-[40px] font-extrabold leading-none tracking-tight text-white md:text-[48px]">
            {metric}
          </div>
          <h3 className="mt-4 text-[22px] font-extrabold leading-tight text-white">{title}</h3>
          <p className="mt-2 max-w-md text-[14px] leading-6 text-white/80">{copy}</p>
        </div>
      </div>
    </article>
  );
}

function HighlightPointCard({ item, index }: { item: Highlight; index: number }) {
  const { icon: Icon, title, copy, metric, metricLabel } = item;
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-card">
      <span
        aria-hidden
        className="absolute right-5 top-5 text-[11px] font-extrabold tracking-[0.2em] text-navy/20"
      >
        0{index}
      </span>
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream text-orange ring-1 ring-orange/15 transition group-hover:bg-orange group-hover:text-white group-hover:ring-orange">
          <Icon size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-[17px] font-extrabold leading-tight text-navy">{title}</h3>
          <p className="mt-1.5 text-[13px] leading-6 text-muted-foreground">{copy}</p>
          <div className="mt-3 flex items-center gap-2 border-t border-dashed border-border/70 pt-3">
            <span className="text-[15px] font-extrabold leading-none text-navy">{metric}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {metricLabel}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectSnapshot() {
  return (
    <section id="overview" className="border-y border-border bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Eyebrow icon={FileCheck2}>Project snapshot</Eyebrow>
            <h2 className="mt-3 text-balance text-[34px] font-extrabold leading-tight text-navy md:text-[44px]">
              The numbers a serious buyer checks first.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Clear configuration, plot size, location and pricing — followed by direct support to
              get the real floor plan, payment plan and current availability.
            </p>

            <div className="mt-8 rounded-3xl border border-border/70 bg-cream/60 p-5">
              <div className="text-[11px] font-extrabold uppercase tracking-wide text-orange">
                What you get on call
              </div>
              <ul className="mt-3 grid gap-2.5">
                {onCallChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14px] font-semibold text-navy"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#lead-form"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-[13px] font-bold text-white shadow-[0_18px_40px_-22px_rgba(39,53,130,0.85)] transition hover:bg-navy/90"
              >
                Request all details
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-white shadow-card">
              <div className="grid gap-2 border-b border-border/70 bg-cream/60 px-6 py-5 sm:flex sm:items-center sm:justify-between">
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wide text-orange">
                    Picasa Residencies
                  </div>
                  <div className="mt-1 text-lg font-extrabold text-navy">
                    Kharar–Kurali Bypass, Kurali
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                  <BadgeCheck size={13} />
                  Booking open
                </div>
              </div>
              {projectRows.map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid gap-1 px-6 py-4 sm:grid-cols-5 sm:gap-4 ${index !== projectRows.length - 1 ? "border-b border-border/60" : ""}`}
                >
                  <div className="text-[11px] font-extrabold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                    {label}
                  </div>
                  <div className="text-[15px] font-bold text-navy sm:col-span-3">{value}</div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3 border-t border-border/60 bg-cream/40 px-6 py-4">
                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-2 rounded-full bg-orange px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_18px_40px_-20px_rgba(227,132,34,0.85)] transition hover:bg-orange/90"
                >
                  Get price
                  <ArrowRight size={14} />
                </a>
                <a
                  href={WA_URL}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2.5 text-[13px] font-bold text-navy transition hover:border-navy/35"
                >
                  <MessageCircle size={14} className="text-[#25D366]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationProof() {
  return (
    <section id="location" className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-white shadow-premium">
            <img
              src={img18}
              alt="Picasa Residencies location and finish"
              className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/55 via-transparent to-transparent" />

            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11.5px] font-extrabold text-navy shadow-sm backdrop-blur">
              <Compass size={13} className="text-orange" />
              Kharar–Kurali Bypass
            </div>

            <div className="absolute inset-x-5 bottom-5 grid gap-2 rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur sm:grid-cols-2">
              {locationItems.slice(0, 2).map(({ icon: Icon, label, detail }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-cream text-orange">
                    <Icon size={15} />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[13px] font-extrabold text-navy">{label}</div>
                    <div className="text-[11.5px] font-semibold text-muted-foreground">
                      {detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <Eyebrow icon={MapPin}>Location advantage</Eyebrow>
          <h2 className="mt-3 text-balance text-[34px] font-extrabold leading-tight text-navy md:text-[48px]">
            Highway access, with daily life within reach.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            The address keeps everyday movement practical: the Chandigarh University belt, Mohali
            sectors, healthcare, and airport-side connectivity all fall on the same corridor.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {locationItems.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cream text-orange">
                  <Icon size={18} />
                </span>
                <div className="leading-tight">
                  <div className="text-[14px] font-extrabold text-navy">{label}</div>
                  <div className="mt-0.5 text-[12px] font-semibold text-muted-foreground">
                    {detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-[13px] font-bold text-white shadow-[0_18px_40px_-22px_rgba(39,53,130,0.9)] transition hover:bg-navy/90"
            >
              Get exact location
              <ArrowRight size={14} />
            </a>
            <a
              href={WA_URL}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-3 text-[13px] font-bold text-navy transition hover:border-navy/35"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              Ask on WhatsApp
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Travel times are approximate and may vary with traffic.
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current === null ? 0 : (current + 1) % galleryImages.length));
  };

  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow icon={ZoomIn}>Project gallery</Eyebrow>
            <h2 className="mt-3 text-balance text-[34px] font-extrabold leading-tight text-navy md:text-[52px]">
              Real interiors. Real finish. No staged renders.
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="text-base leading-7 text-muted-foreground">
              Browse actual visuals from the project media set — bedrooms, kitchen, lounge areas
              and detail moments.
            </p>
            <a
              href="#lead-form"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-[13px] font-bold text-white shadow-[0_18px_40px_-22px_rgba(39,53,130,0.85)] transition hover:bg-navy/90"
            >
              Request full gallery
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="grid auto-rows-[240px] gap-3 md:grid-cols-6 md:auto-rows-[260px]">
          {galleryImages.map((image, index) => (
            <button
              key={image.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-3xl bg-cream text-left ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/75 via-transparent to-transparent" />
              <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition group-hover:bg-orange/90">
                <ZoomIn size={15} />
              </span>
              <span className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-12">
                <span className="block text-[10.5px] font-extrabold uppercase tracking-[0.18em] text-orange">
                  Interior
                </span>
                <span className="mt-0.5 block text-[14.5px] font-extrabold text-white">
                  {image.label}
                </span>
              </span>
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-[12px] text-muted-foreground">
          Visuals are for representation where applicable. Final finishes and specifications are
          shared during site visit.
        </p>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#090b12]/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.label}
        >
          <div className="absolute inset-0" onClick={() => setActiveIndex(null)} />
          <div className="relative z-10 grid w-full max-w-5xl gap-4">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white backdrop-blur">
              <div>
                <div className="text-sm font-extrabold">{activeImage.label}</div>
                <div className="mt-0.5 text-xs text-white/55">
                  {String((activeIndex ?? 0) + 1).padStart(2, "0")} / {galleryImages.length}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white"
                aria-label="Close gallery preview"
              >
                <X size={19} />
              </button>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              <img
                src={activeImage.src}
                alt={activeImage.label}
                className="mx-auto max-h-[76vh] w-auto max-w-full object-contain"
              />
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur"
                aria-label="Previous gallery photo"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur"
                aria-label="Next gallery photo"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function VideoShowcase() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section id="walkthrough" className="border-y border-border bg-[#0c1024] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow icon={PlayCircle} tone="dark">
              Project walkthrough
            </Eyebrow>
            <h2 className="mt-3 text-balance text-[34px] font-extrabold leading-tight text-white md:text-[52px]">
              See the layout, finish and surroundings — before you visit.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/65 lg:col-span-5 lg:justify-self-end">
            Tap any clip to play. Then request the latest floor plan, pricing and a site-visit slot
            from MV Realtor.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map((video) => {
            const isPlaying = playing === video.id;
            return (
              <article
                key={video.id}
                className={`group overflow-hidden rounded-3xl border bg-white/[0.04] transition ${
                  isPlaying ? "border-orange/60" : "border-white/10 hover:border-white/25"
                }`}
              >
                <div className="relative aspect-[9/16] bg-black">
                  {isPlaying ? (
                    <>
                      <iframe
                        src={`https://drive.google.com/file/d/${video.id}/preview`}
                        allow="autoplay"
                        className="h-full w-full"
                        title={video.label}
                      />
                      <button
                        type="button"
                        onClick={() => setPlaying(null)}
                        className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-black"
                        aria-label="Close video"
                      >
                        <X size={14} />
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlaying(video.id)}
                      className="absolute inset-0 grid place-items-center"
                      aria-label={`Play ${video.label}`}
                    >
                      <img
                        src={video.thumb}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1024]/85 via-[#0c1024]/15 to-transparent" />
                      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-orange text-white shadow-[0_18px_40px_-12px_rgba(227,132,34,0.85)] transition group-hover:scale-110">
                        <PlayCircle size={26} />
                      </span>
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                        Reel
                      </span>
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                  <div className="min-w-0">
                    <div className="truncate text-[13.5px] font-extrabold text-white">
                      {video.label}
                    </div>
                    <div className="mt-0.5 text-[11px] font-semibold text-white/55">
                      {isPlaying ? "Now playing" : "Tap to play preview"}
                    </div>
                  </div>
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full transition ${
                      isPlaying ? "bg-orange text-white" : "bg-orange/15 text-orange"
                    }`}
                  >
                    {isPlaying ? <X size={14} /> : <PlayCircle size={15} />}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-wide text-orange">
              Guided site visit
            </div>
            <div className="mt-1 text-[14px] font-bold text-white">
              Prefer a guided walkthrough? Submit the form and ask for an available visit slot.
            </div>
          </div>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_18px_40px_-20px_rgba(227,132,34,0.7)]"
          >
            Get price & floor plan
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Eyebrow icon={Quote}>Buyer conversations</Eyebrow>
            <h2 className="mt-3 text-balance text-[34px] font-extrabold leading-tight text-navy md:text-[52px]">
              Site visitors value the space, privacy and clarity.
            </h2>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <div className="inline-flex items-center gap-2.5 rounded-2xl border border-border/70 bg-white px-4 py-3 shadow-sm">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-orange text-orange" />
                ))}
              </span>
              <div className="leading-tight">
                <div className="text-[14px] font-extrabold text-navy">4.9 average</div>
                <div className="text-[11px] font-semibold text-muted-foreground">
                  Site visitor rating
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.name}
              className="relative flex flex-col rounded-3xl border border-border/70 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-premium"
            >
              <Quote size={28} className="text-orange/30" />
              <p className="mt-3 flex-1 text-[15px] leading-7 text-navy">{review.text}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-navy text-[13px] font-extrabold text-white">
                  {review.initials}
                </div>
                <div className="leading-tight">
                  <div className="text-[14px] font-extrabold text-navy">{review.name}</div>
                  <div className="mt-0.5 text-[11.5px] font-semibold text-muted-foreground">
                    {review.role}
                  </div>
                </div>
                <span className="ml-auto flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-orange text-orange" />
                  ))}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingProcess() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c1024] py-20 text-white md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-[0.18]"
        style={{ backgroundImage: `url(${img32})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(12,16,36,0.6)_0%,rgba(12,16,36,0.35)_50%,rgba(12,16,36,0.7)_100%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-15" />
      <div
        aria-hidden
        className="absolute -left-24 -top-32 -z-10 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(227,132,34,0.18),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow icon={Sparkles} tone="dark">
              After you submit
            </Eyebrow>
            <h2 className="mt-3 text-balance text-[34px] font-extrabold leading-tight text-white md:text-[52px]">
              A 3-step path from form to site visit — with no chase calls.
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="text-base leading-7 text-white/70">
              One form, three clear steps. The team handles availability, paperwork pointers and
              visit coordination.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[11.5px] font-bold text-white backdrop-blur">
              <Clock size={12} className="text-orange" />
              Typical first callback within 30 mins (business hours)
            </div>
          </div>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[10%] right-[10%] top-[44px] hidden h-px bg-[linear-gradient(90deg,transparent_0%,rgba(227,132,34,0.5)_15%,rgba(255,255,255,0.18)_50%,rgba(227,132,34,0.5)_85%,transparent_100%)] md:block"
          />

          <div className="grid gap-5 md:grid-cols-3 md:gap-7">
            {bookingProcess.map(({ icon: Icon, title, copy }, idx) => (
              <article key={title} className="group relative flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative z-10 mb-7 grid h-16 w-16 place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-orange text-white">
                    <Icon size={24} />
                  </span>
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full border-2 border-[#0c1024] bg-white text-[10px] font-extrabold tracking-tight text-navy">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="w-full rounded-3xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:border-orange/40 group-hover:bg-white/[0.08]">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-orange/15 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-orange">
                    Step {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-[21px] font-extrabold leading-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-6 text-white/70">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange text-white">
              <Sparkles size={20} />
            </span>
            <div>
              <div className="text-[15px] font-extrabold text-white">
                Ready when you are.
              </div>
              <div className="mt-1 text-[13px] text-white/65">
                Same-day callback during business hours · Floor plan and payment plan over WhatsApp.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-[13.5px] font-bold text-white shadow-[0_22px_50px_-22px_rgba(227,132,34,0.85)] transition hover:bg-orange/90"
            >
              Start with the form
              <ArrowRight size={15} />
            </a>
            <a
              href={WA_URL}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-3 text-[13.5px] font-bold text-white backdrop-blur transition hover:border-white/40"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              Or message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <div className="inline-block">
            <Eyebrow icon={MessageCircle}>FAQs</Eyebrow>
          </div>
          <h2 className="mt-3 text-balance text-[34px] font-extrabold leading-tight text-navy md:text-[48px]">
            Questions before you submit.
          </h2>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className={`overflow-hidden rounded-2xl border bg-white transition ${
                open === index ? "border-orange/40 shadow-card" : "border-border/70"
              }`}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-[15px] font-extrabold text-navy">{faq.q}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                    open === index ? "bg-orange text-white rotate-180" : "bg-cream text-orange"
                  }`}
                >
                  <ChevronDown size={16} />
                </span>
              </button>
              {open === index && (
                <div className="px-5 pb-5 text-[14px] leading-7 text-muted-foreground">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-border/70 bg-cream/60 p-6 text-center">
          <div className="text-[14px] font-extrabold text-navy">Have a different question?</div>
          <p className="max-w-md text-[13px] text-muted-foreground">
            Get in touch on WhatsApp or call MV Realtor — same-day callback during business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href={WA_URL}
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[13px] font-bold text-white"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
            <a
              href={TEL_URL}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2.5 text-[13px] font-bold text-navy"
            >
              <Phone size={14} className="text-orange" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalLead() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-orange">
            <Flame size={12} />
            Booking open
          </div>
          <h2 className="mt-4 text-balance text-[36px] font-extrabold leading-[1.05] text-navy md:text-[56px]">
            Get the latest price, floor plan and your site visit window.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Submit your details once and the MV Realtor team responds with availability, payment
            plan, floor plan and visit coordination — all on WhatsApp or call.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <FactRow icon={IndianRupee} title="₹17L+" copy="Starting price" />
            <FactRow icon={Ruler} title="150 sq.yd" copy="Family plot size" />
            <FactRow icon={Clock} title="Same-day" copy="Callback support" />
          </div>

        </div>

        <div className="lg:col-span-5">
          <LeadForm source="Final Lead Form" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0c1024] py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="MV Realtor"
              className="h-12 w-12 rounded-xl bg-white object-contain p-1"
            />
            <div>
              <div className="font-extrabold tracking-tight">MV REALTOR</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange">
                Vision meets reality
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-[13.5px] leading-7 text-white/65">
            Picasa Residencies, Kharar–Kurali Bypass Highway, Kurali, Punjab. Near Chandigarh
            University.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={WA_URL}
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[12px] font-bold text-white"
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>
            <a
              href={TEL_URL}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[12px] font-bold text-white"
            >
              <Phone size={13} className="text-orange" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-white/50">
            Explore
          </div>
          <div className="grid gap-2 text-[13.5px] text-white/80">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-orange">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="mb-3 text-[12px] font-extrabold uppercase tracking-wide text-white/50">
            Quick promise
          </div>
          <ul className="grid gap-2.5 text-[13px] text-white/80">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange" />
              Same-day callback during business hours
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange" />
              Floor plan, price and payment plan on WhatsApp
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange" />
              Buyer-side support — no spam, no aggressive follow-up
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 sm:px-6">
        <p className="text-[11.5px] leading-6 text-white/50">
          Disclaimer: Visuals are for representation where applicable. Pricing, availability and
          timelines may change. Travel times are approximate. Please verify all information with MV
          Realtor before making a buying decision.
        </p>
        <p className="mt-3 text-[11px] text-white/35">
          © {new Date().getFullYear()} MV Realtor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Eyebrow({
  children,
  icon: Icon,
  tone = "light",
}: {
  children: React.ReactNode;
  icon?: LucideIcon;
  tone?: "light" | "dark";
}) {
  const cls =
    tone === "dark"
      ? "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-orange backdrop-blur"
      : "inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-orange";
  return (
    <div className={cls}>
      {Icon && <Icon size={12} />}
      {children}
    </div>
  );
}

function FactRow({ icon: Icon, title, copy }: { icon: LucideIcon; title: string; copy: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white p-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cream text-orange">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-[14px] font-extrabold leading-tight text-navy">{title}</div>
        <div className="mt-0.5 text-[12px] font-semibold text-muted-foreground">{copy}</div>
      </div>
    </div>
  );
}

function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handler = () => setShow(window.scrollY > 720);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full border border-border/70 bg-white p-1.5 shadow-premium transition-all duration-500 md:flex ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <a
        href="#lead-form"
        className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[13px] font-bold text-white"
      >
        <Sparkles size={14} />
        Get price
      </a>
      <a
        href={WA_URL}
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[13px] font-bold text-white"
        aria-label="WhatsApp"
      >
        <MessageCircle size={14} />
      </a>
      <a
        href={TEL_URL}
        className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2.5 text-[13px] font-bold text-navy"
        aria-label="Call"
      >
        <Phone size={14} />
      </a>
    </div>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-border bg-white p-2.5 shadow-[0_-12px_30px_-12px_rgba(0,0,0,0.18)] md:hidden">
      <a
        href="#lead-form"
        className="col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-[13.5px] font-bold text-white"
      >
        <Sparkles size={15} />
        Get price
      </a>
      <a
        href={WA_URL}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[13.5px] font-bold text-white"
      >
        <MessageCircle size={15} />
        Chat
      </a>
    </div>
  );
}

function useNextVisitSlot() {
  const ref = useRef<string>("");
  if (ref.current) return ref.current;
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  if (day === 0 || day === 6) {
    ref.current = hour < 16 ? `Today, ${dayNames[day]} · 4:00 PM` : `Tomorrow · 11:00 AM`;
    return ref.current;
  }
  const daysToSat = 6 - day;
  if (daysToSat === 1) ref.current = "Tomorrow, Saturday · 11:00 AM";
  else ref.current = `${dayNames[6]} · 11:00 AM`;
  return ref.current;
}
