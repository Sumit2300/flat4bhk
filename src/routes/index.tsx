import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "sonner";
import {
  Home, Ruler, Building2, MapPin, Users, Sparkles, Plane, Hospital,
  Phone, MessageCircle, ChevronDown, Menu, X, CheckCircle2, ArrowRight,
} from "lucide-react";
import logo from "@/assets/mv-realtor-logo.jpeg";
import heroVilla from "@/assets/hero-villa.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";
import familyLiving from "@/assets/family-living.jpg";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PICASA Residencies — Premium 4BHK Luxury Floors in Mohali | MV Realtor" },
      { name: "description", content: "Spacious 4BHK luxury floors near Kharar-Kurali Bypass, Mohali. 150 sq. yard G+2 low-rise homes. Investment entry from ₹17 Lacs. Limited units." },
      { property: "og:title", content: "PICASA Residencies — Premium 4BHK Luxury Floors in Mohali" },
      { property: "og:description", content: "G+2 low-rise 4BHK homes near Chandigarh Airport, Max Hospital & PGI. Investment entry from ₹17 Lacs." },
      { property: "og:image", content: heroVilla },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroVilla },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap" },
    ],
  }),
  component: Landing,
});

const navLinks = [
  { href: "#details", label: "Project Details" },
  { href: "#location", label: "Location" },
  { href: "#highlights", label: "Highlights" },
  { href: "#faqs", label: "FAQs" },
];

function Landing() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#FAFAF7] pb-20 md:pb-0">
      <Toaster position="top-center" richColors />
      <Header open={open} setOpen={setOpen} />
      <Hero />
      <TrustStrip />
      <Highlights />
      <Location />
      <FamilyLiving />
      <Investment />
      <Snapshot />
      <Gallery />
      <SiteVisitCTA />
      <FAQs />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

function Header({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="MV Realtor" className="h-9 w-9 object-contain" />
          <div className="leading-tight">
            <div className="text-navy font-bold text-base tracking-tight">MV Realtor</div>
            <div className="text-[9px] tracking-[0.22em] text-orange font-semibold">VISION MEETS REALITY</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center pill-nav shadow-sm">
          {navLinks.map((l, i) => (
            <span key={l.href} className="flex items-center">
              <a href={l.href} className="text-[13px] font-medium text-foreground/75 hover:text-navy transition px-4 py-2 uppercase tracking-wide">{l.label}</a>
              {i < navLinks.length - 1 && <span className="text-border">|</span>}
            </span>
          ))}
        </nav>
        <a href="#lead-form" className="hidden md:inline-flex items-center gap-2 border border-navy/15 bg-white text-navy text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-navy hover:text-white transition shadow-sm">
          Enquire
        </a>
        <div className="md:hidden flex items-center gap-2">
          <a href="#lead" className="bg-orange text-white text-xs font-semibold px-3.5 py-2 rounded-full">Get Price</a>
          <button onClick={() => setOpen(!open)} className="p-2 text-navy" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-2 py-3 text-sm font-medium text-foreground/85 border-b border-border/60">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="lead" className="relative w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroVilla} alt="Luxury 4BHK home" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
        <div className="absolute inset-0 hex-pattern opacity-40" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-center px-6 sm:px-10 lg:px-14 py-16 lg:py-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur border border-white/15 text-white/85 text-[11px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-[0.18em]">
              <MapPin size={12} className="text-orange" /> Picasa Residencies · Mohali
            </div>
            <h1 className="mt-6 text-white text-[40px] sm:text-5xl lg:text-[64px] font-bold leading-[1.02] tracking-tight">
              Easy way to find a <br className="hidden sm:block" />
              <span className="text-orange">perfect 4BHK home</span>
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl leading-relaxed">
              Premium 150 sq. yard, G+2 low-rise floors near Kharar-Kurali Bypass — minutes from Chandigarh Airport, Max Hospital and PGI.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#lead-form" className="bg-orange hover:bg-orange/90 text-white font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-orange/25">
                Check Price & Availability <ArrowRight size={16} />
              </a>
              <a href="https://wa.me/919999999999" className="bg-white/8 hover:bg-white/12 backdrop-blur border border-white/20 text-white font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2">
                <MessageCircle size={16} /> Floor Plan on WhatsApp
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-white/80 text-xs uppercase tracking-[0.18em]">
              <div><span className="text-orange font-bold text-lg block tracking-normal">₹17L+</span>Entry Investment</div>
              <div className="w-px h-8 bg-white/25" />
              <div><span className="text-orange font-bold text-lg block tracking-normal">150</span>Sq. Yard</div>
              <div className="w-px h-8 bg-white/25" />
              <div><span className="text-orange font-bold text-lg block tracking-normal">G+2</span>Low-Rise</div>
            </div>
          </div>

          <div className="lg:col-span-5" id="lead-form">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: Home, label: "Premium 4BHK Flats" },
    { icon: Ruler, label: "150 Sq. Yard Size" },
    { icon: Building2, label: "G+2 Limited Floors" },
    { icon: MapPin, label: "Kharar-Kurali Bypass" },
    { icon: Sparkles, label: "From ₹17 Lacs" },
  ];
  return (
    <section className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 bg-white rounded-2xl border border-border/70 px-4 py-3">
            <div className="w-9 h-9 rounded-full bg-navy/5 flex items-center justify-center text-navy"><Icon size={16} /></div>
            <span className="text-sm font-semibold text-navy">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl mb-10 md:mb-14">
      {eyebrow && <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}

function Highlights() {
  const cards = [
    { icon: Home, title: "Spacious 4BHK Homes", desc: "Designed for families who need larger bedrooms, better living space, privacy, and room for guests." },
    { icon: Ruler, title: "150 Sq. Yard Premium Size", desc: "A practical home size for buyers looking beyond compact apartments." },
    { icon: Building2, title: "G+2 Low-Rise Concept", desc: "Limited floors, fewer residents, and a more private living experience compared to crowded high-rise buildings." },
    { icon: MapPin, title: "Kharar-Kurali Bypass Location", desc: "Strong road connectivity with quick access toward Chandigarh, Kharar, Kurali, and nearby essentials." },
    { icon: Users, title: "Family + Investment Friendly", desc: "Suitable for end users as well as buyers looking for growth potential in Mohali's expanding residential belt." },
    { icon: Sparkles, title: "Limited Units Available", desc: "Low-rise projects have limited inventory, so availability can change quickly." },
  ];
  return (
    <section id="highlights" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader eyebrow="Project Highlights" title="Why PICASA Residencies Is Getting Attention in Mohali" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-cream/60 border border-border rounded-2xl p-7 hover:bg-white hover:shadow-soft transition">
              <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-5 group-hover:bg-orange transition">
                <Icon size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#lead-form" className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-7 py-3.5 rounded-lg">
            Check Current Availability <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Location() {
  const items = [
    { icon: Plane, label: "Chandigarh Airport", time: "Approx. 20 minutes away" },
    { icon: Hospital, label: "Max Hospital", time: "Approx. 15 minutes away" },
    { icon: Hospital, label: "PGI Chandigarh", time: "Approx. 20 minutes away" },
    { icon: MapPin, label: "Kharar-Kurali Bypass", time: "Direct highway access" },
  ];
  return (
    <section id="location" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Location Advantage"
            title="Connected to Chandigarh, Mohali, Hospitals & Daily Needs"
            sub="PICASA Residencies is located bang on the Kharar-Kurali Bypass Highway, giving residents better access to nearby commercial zones, healthcare, airport routes, and Chandigarh-side movement. The location works well for families who want more space without being cut off from key city access points."
          />
          <a href="https://wa.me/919999999999" className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold px-6 py-3.5 rounded-lg shadow-md shadow-orange/30">
            <MessageCircle size={18} /> Get Exact Location on WhatsApp
          </a>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map(({ icon: Icon, label, time }) => (
            <div key={label} className="bg-white border border-border rounded-2xl p-6 shadow-card">
              <div className="w-11 h-11 rounded-lg bg-orange/10 text-orange flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <div className="font-bold text-navy">{label}</div>
              <div className="text-sm text-muted-foreground mt-1">{time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FamilyLiving() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-soft order-2 lg:order-1">
          <img src={familyLiving} alt="Family living space" loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader
            eyebrow="Built For Families"
            title="Built for Families Who Need More Than a Small Flat"
            sub="A 4BHK home gives your family room to live properly. You get separate bedrooms, space for parents, children, guests, work-from-home setup, and storage. The G+2 concept also keeps the project more private, with fewer families per block and less daily crowding."
          />
          <div className="bg-cream border-l-4 border-orange p-5 rounded-r-xl">
            <p className="text-navy font-semibold text-lg leading-snug">
              This is for buyers who want more space, better privacy, and a practical long-term home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Investment() {
  return (
    <section className="bg-navy text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-4">Investment Outlook</div>
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          Why This Project Makes Sense for Buyers and Investors
        </h2>
        <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Mohali's outer residential belts are seeing demand from families, working professionals, and buyers who want better space near Chandigarh without paying central Chandigarh prices. A low-rise 4BHK project near a highway corridor can attract both end users and investors, especially when inventory is limited.
        </p>
        <p className="mt-5 text-white/55 text-sm max-w-2xl mx-auto">
          Final pricing, payment plan, possession details, and documentation should be confirmed directly with MV Realtor.
        </p>
        <a href="#lead-form" className="mt-8 inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-orange/30">
          Check Investment Details <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

function Snapshot() {
  const rows = [
    ["Project Name", "PICASA Residencies"],
    ["Realtor", "MV Realtor"],
    ["Property Type", "Premium 4BHK Flats"],
    ["Location", "Kharar-Kurali Bypass Highway, Mohali"],
    ["Size", "150 Sq. Yard"],
    ["Concept", "G+2 Low-Rise Floors"],
    ["Suitable For", "Family Living and Investment"],
    ["Investment Entry", "Starting From ₹17 Lacs"],
    ["Availability", "Limited Units"],
  ];
  return (
    <section id="details" className="bg-cream py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader eyebrow="At A Glance" title="PICASA Residencies Project Snapshot" />
        <div className="bg-white border border-border rounded-2xl shadow-soft overflow-hidden">
          {rows.map(([k, v], i) => (
            <div key={k} className={`flex flex-col sm:flex-row sm:items-center px-6 py-4 ${i !== rows.length - 1 ? "border-b border-border" : ""} ${i === rows.length - 2 ? "bg-orange/5" : ""}`}>
              <div className="text-sm text-muted-foreground font-medium sm:w-1/3">{k}</div>
              <div className="text-navy font-semibold mt-1 sm:mt-0">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { img: heroVilla, label: "Modern Luxury Exterior" },
    { img: galleryLiving, label: "Spacious Living Area" },
    { img: galleryBedroom, label: "Premium Bedroom Space" },
    { img: galleryExterior, label: "Private Low-Rise Living" },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Visual Gallery"
          title="A Home Designed for Space, Privacy & Better Living"
          sub="Explore the look and lifestyle buyers expect from a spacious 4BHK low-rise home in Mohali."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ img, label }) => (
            <div key={label} className="group rounded-2xl overflow-hidden shadow-card relative">
              <img src={img} alt={label} loading="lazy" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white font-semibold">{label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-6 text-center max-w-2xl mx-auto">
          Images are for visual representation. Actual project details, layout, and specifications should be confirmed during inquiry or site visit.
        </p>
      </div>
    </section>
  );
}

function SiteVisitCTA() {
  return (
    <section className="bg-navy py-16 md:py-20 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-orange/20 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-orange/10 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          Want to Visit PICASA Residencies?
        </h2>
        <p className="mt-5 text-white/80 text-base md:text-lg max-w-2xl mx-auto">
          Share your phone number and MV Realtor will help you with project details, latest availability, payment plan, location guidance, and site visit scheduling.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#lead-form" className="bg-orange hover:bg-orange/90 text-white font-semibold px-7 py-3.5 rounded-lg inline-flex items-center gap-2 shadow-lg shadow-orange/40">
            Book a Site Visit <ArrowRight size={18} />
          </a>
          <a href="tel:+919999999999" className="bg-white/10 backdrop-blur border border-white/25 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-lg inline-flex items-center gap-2">
            <Phone size={18} /> Call MV Realtor
          </a>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Where is PICASA Residencies located?", a: "PICASA Residencies is located on the Kharar-Kurali Bypass Highway in Mohali, with access to Chandigarh Airport, Max Hospital, PGI, and nearby residential areas." },
  { q: "What type of homes are available?", a: "The project offers spacious 4BHK luxury flats with a 150 sq. yard premium size." },
  { q: "What does G+2 concept mean?", a: "G+2 means the building has a ground floor plus two upper floors. This creates a low-rise residential setup with fewer floors and limited homes." },
  { q: "Is this project good for family living?", a: "Yes, the 4BHK layout, low-rise concept, and peaceful location make it suitable for families who need more space and privacy." },
  { q: "Is this project suitable for investment?", a: "It can be suitable for buyers looking at Mohali's growing residential belt, highway connectivity, and limited-unit low-rise housing. Final investment decisions should be based on pricing, documentation, possession timeline, and site visit." },
  { q: "What is the starting investment?", a: "Investment entry starts from ₹17 lacs. Confirm the latest payment plan, total cost, and availability directly with MV Realtor." },
  { q: "How can I get the floor plan and price details?", a: "Fill out the form on this page and MV Realtor will share the latest floor plan, pricing, payment plan, and site visit details." },
];

function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader eyebrow="FAQs" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white border border-border rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="font-semibold text-navy">{f.q}</span>
                <ChevronDown size={20} className={`text-orange shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center bg-cream rounded-3xl p-8 md:p-14 border border-border">
        <div>
          <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">Final Step</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Get the Latest Price, Floor Plan & Availability</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Limited 4BHK units are available at PICASA Residencies. Share your details to get the latest project information from MV Realtor.
          </p>
          <div className="mt-6 space-y-3">
            {["Latest pricing & payment plan","Floor plan & layout","Site visit assistance"].map(t => (
              <div key={t} className="flex items-center gap-3 text-navy font-medium">
                <CheckCircle2 size={18} className="text-orange" /> {t}
              </div>
            ))}
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="MV Realtor" className="h-12 w-12 object-contain bg-white rounded-lg p-1" />
            <div>
              <div className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>MV REALTOR</div>
              <div className="text-[10px] tracking-[0.18em] text-orange font-semibold">VISION MEETS REALITY</div>
            </div>
          </div>
          <p className="mt-4 text-white/70 text-sm">PICASA Residencies, Mohali — Kharar-Kurali Bypass Highway</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-white/75">
            <li className="flex items-center gap-2"><Phone size={14} className="text-orange" /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><MessageCircle size={14} className="text-orange" /> WhatsApp: +91 99999 99999</li>
            <li className="flex items-center gap-2"><span className="text-orange">@</span> hello@mvrealtor.in</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm text-white/75">
            {navLinks.map(l => <li key={l.href}><a href={l.href} className="hover:text-orange transition">{l.label}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-white/10">
        <p className="text-xs text-white/55 leading-relaxed">
          Disclaimer: Property details, pricing, availability, and timelines are subject to change. Please verify all information with MV Realtor before making a buying decision.
        </p>
        <p className="text-xs text-white/40 mt-4">© {new Date().getFullYear()} MV Realtor. All rights reserved.</p>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white border-t border-border shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)] grid grid-cols-2 gap-2 p-2.5">
      <a href="tel:+919999999999" className="bg-navy text-white font-semibold rounded-lg py-3 inline-flex items-center justify-center gap-2 text-sm">
        <Phone size={16} /> Call Now
      </a>
      <a href="https://wa.me/919999999999" className="bg-orange text-white font-semibold rounded-lg py-3 inline-flex items-center justify-center gap-2 text-sm">
        <MessageCircle size={16} /> WhatsApp
      </a>
    </div>
  );
}
