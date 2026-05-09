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
import pnbHousingLogo from "@/assets/brand/pnb-housing-finance.png";
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
  "Hi, I want the latest price list, floor plan, payment plan and site visit details for Picasa Residencies 4BHK + Store homes.",
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
      { title: "Picasa Residencies 4BHK Luxury Floors in Kharar | MV Realtor" },
      {
        name: "description",
        content:
          "Premium 4BHK + Store luxury floors in Kharar. 1350 sq. ft. G+2 low-rise homes with premium interiors, MC Kharar approval, and connectivity near Chandigarh-Manali Highway and PR-1.",
      },
      { property: "og:title", content: "Picasa Residencies 4BHK Luxury Floors in Kharar" },
      {
        property: "og:description",
        content:
          "1350 sq. ft. 4BHK + Store low-rise residential floors in Kharar with premium interiors, parking, flexible payment options and PNB Housing Finance support.",
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
  { href: "#highlights", label: "Why Picasa" },
  { href: "#location", label: "Location" },
  { href: "#gallery", label: "Gallery" },
  { href: "#payments", label: "Payments" },
  { href: "#faqs", label: "FAQs" },
];

const heroFacts = [
  { value: "4BHK+", label: "Store layout" },
  { value: "1350", label: "Sq. ft. size" },
  { value: "G+2", label: "Low-rise format" },
  { logo: pnbHousingLogo, label: "PNB Housing Finance", value: "Tie-up" },
];

const tickerItems = [
  { name: "Amit", area: "Kharar", action: "requested floor plan" },
  { name: "Priya", area: "Mohali", action: "booked a site visit" },
  { name: "Rahul", area: "Kharar", action: "downloaded project details" },
  { name: "Simran", area: "Chandigarh", action: "asked for pricing" },
  { name: "Harpreet", area: "Aerocity", action: "requested payment plan" },
  { name: "Neha", area: "PR-1 corridor", action: "booked a site visit" },
  { name: "Vikram", area: "Kharar", action: "requested floor plan" },
  { name: "Manpreet", area: "Mohali", action: "downloaded project details" },
  { name: "Aarav", area: "Kharar", action: "asked for site visit slot" },
  { name: "Gurleen", area: "Chandigarh", action: "requested project brochure" },
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
    title: "Spacious 4BHK + Store planning",
    copy: "Four bedrooms, four bathrooms and a separate store give modern families the room separation they actually need.",
    metric: "1350",
    metricLabel: "Sq. ft. layout",
    image: img31,
  },
  {
    icon: Layers,
    title: "G+2 low-rise privacy",
    copy: "A lower-density format with fewer households, quieter common areas and a more private daily rhythm.",
    metric: "G+2",
    metricLabel: "Low-rise concept",
  },
  {
    icon: Ruler,
    title: "Practical family proportions",
    copy: "Spacious living and dining zones, functional bedrooms, natural light, ventilation and parking support everyday family life.",
    metric: "4+4",
    metricLabel: "Bedrooms + baths",
  },
  {
    icon: Sparkles,
    title: "Premium interiors included",
    copy: "Wardrobes, TV panels, modular kitchen, premium paint, wallpaper, lighting, false ceiling and fittings are already planned in.",
    metric: "Included",
    metricLabel: "Interior package",
    image: img33,
  },
  {
    icon: MapPin,
    title: "Highway growth corridor",
    copy: "Located on the Chandigarh-Manali Highway with access toward PR-1, Mohali, Aerocity and commercial growth zones.",
    metric: "PR-1",
    metricLabel: "Nearby access",
  },
  {
    icon: ShieldCheck,
    title: "Approval and financing support",
    copy: "MC Kharar approval, flexible payment options and MV Realtor assistance for PNB Housing Finance coordination.",
    metric: "MC",
    metricLabel: "Kharar approved",
  },
];

const locationItems = [
  { icon: Car, label: "Chandigarh-Manali Highway", detail: "Highway location" },
  { icon: Compass, label: "PR-1 access", detail: "Close connectivity" },
  { icon: Building2, label: "Mohali and Aerocity", detail: "Smooth corridor access" },
  { icon: Plane, label: "Chandigarh Airport", detail: "Convenient driving distance" },
];

const projectRows: [string, string][] = [
  ["Project", "Picasa Residencies"],
  ["Property type", "Low-rise residential floors"],
  ["Status", "For sale"],
  ["Configuration", "4BHK + Store"],
  ["Size", "1350 Sq. Ft."],
  ["Bedrooms / Bathrooms", "4 bedrooms / 4 bathrooms"],
  ["Store room", "Available"],
  ["Parking", "1 garage / parking allocation"],
  ["Total floors", "G+2"],
  ["Year built", "2025"],
  ["Booking amount", "25%"],
  ["Price list", "Available on request"],
  ["Approval", "MC Kharar approved"],
  ["Financing", "Flexible payment options + PNB Housing Finance assistance"],
  ["Location", "Kharar, near Chandigarh-Manali Highway and PR-1"],
];

const onCallChecklist = [
  "Latest price list and payment plan",
  "Detailed 4BHK + Store floor plan",
  "Available units snapshot",
  "Site visit time confirmation",
  "Financing and documentation guidance",
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
    text: "The 4BHK + Store layout felt practical for a joint family. The price plan and site visit details were explained clearly.",
    rating: 5,
  },
  {
    name: "Anita K.",
    initials: "AK",
    role: "Investor · Chandigarh",
    text: "The highway location and nearby commercial development made sense for investment. MV Realtor also walked us through payment options.",
    rating: 5,
  },
  {
    name: "Harpreet G.",
    initials: "HG",
    role: "End user · Kharar",
    text: "Low-rise privacy is exactly what we wanted. The team arranged a site visit and shared the floor plan before we went.",
    rating: 5,
  },
];

const bookingProcess = [
  {
    icon: Phone,
    title: "Get latest details",
    copy: "Submit your number and MV Realtor shares the latest price list, unit availability and floor plan.",
  },
  {
    icon: FileCheck2,
    title: "Payment and financing support",
    copy: "Understand the 25% booking amount, flexible payment options and PNB Housing Finance coordination.",
  },
  {
    icon: CalendarCheck,
    title: "Book your site visit",
    copy: "Visit the project on a slot that suits your family and review layout, interiors, parking and location in person.",
  },
];

const paymentHighlights = [
  {
    icon: BadgeCheck,
    title: "25% booking amount",
    copy: "Clear booking structure shared with current unit availability and payment milestones.",
  },
  {
    icon: IndianRupee,
    title: "Flexible payment options",
    copy: "Understand the payment plan before your site visit so decision-making stays practical.",
  },
  {
    icon: FileCheck2,
    title: "PNB Housing Finance tie-up",
    copy: "MV Realtor helps coordinate loan discussion, document flow and lender-side next steps.",
  },
  {
    icon: Headset,
    title: "Buyer-side assistance",
    copy: "Get pricing, floor plan, documents and visit coordination through one advisor.",
  },
];

const faqs = [
  {
    q: "Where is Picasa Residencies located?",
    a: "Picasa Residencies is in Kharar, positioned near the Chandigarh-Manali Highway with close access toward PR-1, Mohali, Aerocity and nearby commercial growth zones.",
  },
  {
    q: "What type of homes are available?",
    a: "The project offers 1350 sq. ft. 4BHK + Store low-rise residential floors with 4 bedrooms, 4 bathrooms, parking and a G+2 format.",
  },
  {
    q: "How do I get the current price list?",
    a: "Submit the form or message MV Realtor on WhatsApp. The team will share the current price list, availability and payment plan before your site visit.",
  },
  {
    q: "What is included with the interiors?",
    a: "The homes include planned premium interior features such as wardrobes, TV panels, modular kitchen, premium paint, wallpaper, lighting, false ceiling, fittings, store room and parking. Chimney space can be discussed during the site visit.",
  },
  {
    q: "Is the project approved?",
    a: "The project is communicated as MC Kharar approved. Buyers should verify documentation and approvals during the booking process.",
  },
  {
    q: "Is financing support available?",
    a: "Yes. MV Realtor helps buyers understand financing steps, documents and PNB Housing Finance tie-up support. Final loan eligibility and approval remain subject to lender policy.",
  },
  {
    q: "Is this suitable for family living and investment?",
    a: "Yes. The project is positioned for families who want a spacious 4BHK home and investors looking at the Kharar, Mohali, Aerocity and PR-1 growth corridor.",
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
      <Gallery />
      <Highlights />
      <ProjectSnapshot />
      <LocationProof />
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
          <span className="opacity-70"> · 4BHK + Store floors booking fast</span>
        </>
      ),
    },
    {
      icon: Users,
      text: (
        <>
          <span className="font-extrabold">30+</span>
          <span className="opacity-70"> families requested details this month</span>
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
            Get Price List
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#lead-form"
            className="rounded-full bg-navy px-3 py-2 text-[12px] font-bold text-white"
          >
            Price List
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
  const city = useRotatingWords(["Kharar", "Kurali", "Mohali"], 1800);

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

      <div className="relative mx-auto grid max-w-7xl gap-x-7 gap-y-7 px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-16 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:gap-y-0 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-sm backdrop-blur">
            <Flame size={13} className="text-orange" />
            Booking open · Picasa Residencies, Kharar
          </div>

          <h1 className="mt-5 text-balance text-[42px] font-extrabold leading-[0.98] tracking-tight text-white sm:text-[58px] lg:text-[72px]">
            Premium 4BHK luxury floors
            <br className="hidden md:block" />
            <span className="relative inline-block align-baseline">
              <span className="relative z-10 italic font-medium text-orange">low-rise</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-sm bg-orange/30" />
            </span>{" "}
            living near{" "}
            <span className="inline-grid min-w-[4.4em] overflow-hidden align-baseline text-orange">
              <span key={city} className="animate-fade-up">
                {city}
              </span>
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-[17px]">
            Spacious 1350 sq. ft. 4BHK + Store homes with modular kitchen, wardrobes, TV panels,
            premium interiors, ample parking and excellent connectivity near Chandigarh-Manali
            Highway and PR-1.
          </p>
        </div>

        <aside id="lead-form" className="lg:col-span-5 lg:row-span-2 lg:sticky lg:top-[88px]">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(227,132,34,0.25),transparent_60%)]" />
            <div className="relative">
              <div className="hidden lg:block">
                <ScarcityBadge />
              </div>
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

        <div className="lg:col-span-7">
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#lead-form"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-[0_22px_50px_-22px_rgba(227,132,34,0.85)] transition hover:bg-orange/90"
            >
              Get Price List & Site Visit Details
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-10">
            <div className="mb-3 inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.2em] text-orange/90">
              <span className="h-px w-8 bg-orange/60" />
              Key project highlights
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.65)] sm:grid-cols-4">
              {heroFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex min-h-[148px] flex-col justify-center bg-[#0c1024]/85 p-5 backdrop-blur transition hover:bg-[#0c1024]/70"
                >
                  {"logo" in fact ? (
                    <div className="flex h-14 max-w-[180px] items-center rounded-xl bg-white px-3 py-2">
                      <img
                        src={fact.logo}
                        alt={fact.label}
                        className="max-h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-[34px] font-extrabold leading-none tracking-tight text-white sm:text-[36px]">
                      {fact.value}
                    </div>
                  )}
                  <div className="mt-2.5 text-[10.5px] font-bold uppercase tracking-wide text-white/55">
                    {"logo" in fact ? fact.value : fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
            Price list on request · Same-day callback
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
              Why Picasa Residencies should be your
              <span className="italic font-medium text-orange"> next home</span>.
            </h2>
          </div>
          <p className="md:col-span-5 md:pb-2 text-base leading-7 text-muted-foreground">
            A spacious 4BHK + Store format, low-rise privacy, premium interiors, gated society
            planning and highway-side connectivity make the project practical for families and
            credible for long-term appreciation.
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
              Spacious 4BHK + Store floors designed for modern families.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Every home is planned around usable space, premium finishes, natural light,
              ventilation and a refined low-rise living experience in a fast-growing Kharar
              location.
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

            <div className="mt-4 rounded-3xl border border-border/70 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-extrabold uppercase tracking-wide text-orange">
                    Financing support
                  </div>
                  <p className="mt-2 max-w-sm text-[13.5px] leading-6 text-muted-foreground">
                    MV Realtor helps buyers understand payment planning, document flow and PNB
                    Housing Finance tie-up coordination.
                  </p>
                </div>
                <img
                  src={pnbHousingLogo}
                  alt="PNB Housing Finance"
                  className="h-10 w-auto max-w-[180px] object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-[11px] leading-5 text-muted-foreground">
                Loan approval, amount and terms are subject to lender eligibility and policy.
              </p>
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
                    Kharar · Chandigarh-Manali Highway · PR-1 access
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                  <BadgeCheck size={13} />
                  MC Kharar approved
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
                  Get Price List
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
              Chandigarh-Manali Highway
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
            Prime highway location near PR-1 and major connectivity points.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Picasa Residencies sits on the Chandigarh-Manali Highway, giving practical access to
            Kharar, Mohali, Aerocity, PR-1, Chandigarh, schools, hospitals, markets and nearby
            commercial developments.
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
          <div className="mt-5 rounded-2xl border border-border/70 bg-white p-5">
            <div className="text-[12px] font-extrabold uppercase tracking-wide text-orange">
              Investment angle
            </div>
            <p className="mt-2 text-[13.5px] leading-6 text-muted-foreground">
              The highway location, PR-1 access and nearby commercial growth can support future
              appreciation and rental demand for buyers evaluating both self-use and investment.
            </p>
          </div>
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
              See the space, finishes and interiors before you visit.
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="text-base leading-7 text-muted-foreground">
              Browse project visuals across bedrooms, kitchen, lounge areas, TV panels, wardrobes,
              false ceiling details and practical family spaces.
            </p>
            <a
              href="#lead-form"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-[13px] font-bold text-white shadow-[0_18px_40px_-22px_rgba(39,53,130,0.85)] transition hover:bg-navy/90"
            >
              Request full gallery and floor plan
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
              See the layout, interiors and surroundings before your site visit.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/65 lg:col-span-5 lg:justify-self-end">
            Tap any clip to play. Then request the latest floor plan, price list, payment plan and
            site-visit slot from MV Realtor.
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
              Prefer a guided walkthrough? Submit the form and ask for an available site visit slot.
            </div>
          </div>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_18px_40px_-20px_rgba(227,132,34,0.7)]"
          >
            Get Price List
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
    <section
      id="payments"
      className="relative isolate overflow-hidden bg-[#0c1024] py-20 text-white md:py-28"
    >
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
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Eyebrow icon={IndianRupee} tone="dark">
              Payments and booking
            </Eyebrow>
            <h2 className="mt-3 max-w-xl text-balance text-[34px] font-extrabold leading-[1.08] text-white md:text-[48px]">
              Clear booking steps with financing support.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/68">
              Get the current price list privately, review the 25% booking structure, and speak with
              MV Realtor for payment planning and PNB Housing Finance coordination.
            </p>

            <div className="mt-7 rounded-3xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="rounded-2xl bg-white px-4 py-3">
                  <img
                    src={pnbHousingLogo}
                    alt="PNB Housing Finance"
                    className="h-10 w-auto max-w-[180px] object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-[15px] font-extrabold text-white">
                    Bank tie-up support available
                  </div>
                  <p className="mt-1.5 text-[12.5px] leading-5 text-white/60">
                    Loan eligibility, amount and terms are subject to lender policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {paymentHighlights.map(({ icon: Icon, title, copy }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/12 bg-white/[0.055] p-5 backdrop-blur-xl transition hover:border-orange/40 hover:bg-white/[0.08]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange text-white">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 text-[18px] font-extrabold leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-6 text-white/64">{copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {bookingProcess.map(({ icon: Icon, title, copy }, idx) => (
            <article
              key={title}
              className="rounded-3xl border border-white/12 bg-[#10162c]/85 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange text-white">
                  <Icon size={20} />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/35">
                  Step {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-[21px] font-extrabold leading-tight text-white">{title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-6 text-white/65">{copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-white/12 bg-white/[0.055] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[14px] font-extrabold text-white">
              Want the latest payment plan?
            </div>
            <p className="mt-1 text-[13px] leading-6 text-white/60">
              Share your number and MV Realtor will send the current price list, floor plan and site
              visit slot options.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-[13.5px] font-bold text-white shadow-[0_22px_50px_-22px_rgba(227,132,34,0.85)] transition hover:bg-orange/90"
            >
              Get Price List
              <ArrowRight size={15} />
            </a>
            <a
              href={WA_URL}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-3 text-[13.5px] font-bold text-white backdrop-blur transition hover:border-white/40"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              WhatsApp
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
    <section className="relative isolate overflow-hidden bg-[#0c1024] py-16 text-white md:py-24">
      <img
        src={img31}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,16,36,0.96)_0%,rgba(12,16,36,0.88)_45%,rgba(12,16,36,0.72)_100%)]" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-[0.08]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/25 bg-orange/15 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-orange">
            <Flame size={12} />
            Booking open
          </div>
          <h2 className="mt-5 max-w-3xl text-balance text-[38px] font-extrabold leading-[1.02] text-white md:text-[64px]">
            Book your site visit at Picasa Residencies.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-[18px]">
            Inventory is moving fast. Get the latest price list, floor plan, payment plan and a
            confirmed site visit slot from an MV Realtor advisor.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <FactRow icon={IndianRupee} title="Price list" copy="Shared on request" />
            <FactRow icon={Ruler} title="1350 sq.ft" copy="4BHK + Store" />
            <FactRow icon={ShieldCheck} title="MC Kharar" copy="Approved project" />
          </div>

          <div className="mt-6 flex max-w-2xl items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] p-4 text-[13px] font-semibold leading-6 text-white/75 backdrop-blur">
            <CalendarCheck size={20} className="shrink-0 text-orange" />
            Same-day callback during business hours for price, payment plan and site visit
            coordination.
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(232,132,28,0.32),rgba(42,56,145,0.08)_48%,transparent_72%)] blur-xl" />
            <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-white/80 backdrop-blur">
              <span className="inline-flex items-center gap-2">
                <Clock size={14} className="text-orange" />
                Advisor callback
              </span>
              <span className="text-orange">2-step enquiry</span>
            </div>
            <LeadForm source="Final Lead Form" />
          </div>
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
            Picasa Residencies, Kharar, Punjab. Premium 4BHK + Store low-rise floors near
            Chandigarh-Manali Highway and PR-1.
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
              Floor plan, price list and payment plan on WhatsApp
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange" />
              Financing guidance, site visit coordination and no aggressive follow-up
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
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.09] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange/15 text-orange ring-1 ring-orange/20">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-[14px] font-extrabold leading-tight text-white">{title}</div>
        <div className="mt-0.5 text-[12px] font-semibold text-white/62">{copy}</div>
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
        href={WA_URL}
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-[13px] font-bold text-white"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={14} />
        Chat on WhatsApp
      </a>
    </div>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white p-2.5 shadow-[0_-12px_30px_-12px_rgba(0,0,0,0.18)] md:hidden">
      <a
        href="#lead-form"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy py-3.5 text-[14px] font-bold text-white shadow-[0_16px_36px_-18px_rgba(39,53,130,0.9)]"
      >
        <CalendarCheck size={16} />
        Book a Site Visit
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

function useRotatingWords(words: string[], intervalMs: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs, words.length]);

  return words[index] ?? "";
}
