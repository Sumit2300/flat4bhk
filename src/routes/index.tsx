import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "sonner";
import {
  MapPin, Phone, MessageCircle, ChevronDown, Menu, X, ArrowRight,
  Plane, Hospital, GraduationCap, Home, Ruler, Building2, IndianRupee,
  ShieldCheck, Users, TrendingUp, PlayCircle, Sparkles,
} from "lucide-react";
import logo from "@/assets/mv-realtor-logo.jpeg";
import { LeadForm } from "@/components/LeadForm";

// ---- Real project images from Google Drive ----
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
import img33 from "@/assets/picasa/IMG_0933.jpg";
import img35 from "@/assets/picasa/IMG_0935.jpg";
import img37 from "@/assets/picasa/IMG_0937.jpg";
import img40 from "@/assets/picasa/IMG_0940.jpg";
import img42 from "@/assets/picasa/IMG_0942.jpg";

// ---- Contact ----
const PHONE_RAW = "919501761157";
const PHONE_DISPLAY = "+91 95017 61157";
const WA_MSG = encodeURIComponent("Hi, I want details about Picasa Residencies 4BHK homes.");
const WA_URL = `https://wa.me/${PHONE_RAW}?text=${WA_MSG}`;
const TEL_URL = `tel:+${PHONE_RAW}`;

// ---- Drive videos (preview embed) ----
const VIDEOS = [
  { id: "1j3-wqLhTjd_5uoxi4iBTFJBoGbF7sk1e", label: "Project Walkthrough" },
  { id: "1qzRvLMbllTDqkbHI4270CVd14Txwwp8f", label: "Site View" },
  { id: "1Ph99mnvSYtHe4XNzTPAXrtkM03YN4mn4", label: "Exterior Tour" },
  { id: "1vcM-DjMblq3jH-fvt74PkII1R5sc556j", label: "Project Visuals" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Picasa Residencies — Premium 4BHK Homes near Chandigarh University | MV Realtor" },
      { name: "description", content: "Premium 4BHK homes on Kharar-Kurali Bypass Highway, Kurali. 150 sq. yd, G+2 low-rise concept. Near Chandigarh University. Starting from ₹17 Lakh." },
      { property: "og:title", content: "Picasa Residencies — Premium 4BHK Homes near Chandigarh University" },
      { property: "og:description", content: "150 sq. yd G+2 4BHK homes near Chandigarh University. Starting from ₹17 Lakh." },
      { property: "og:image", content: img21 },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: img21 },
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
  { href: "#highlights", label: "Highlights" },
  { href: "#location", label: "Location" },
  { href: "#snapshot", label: "Project" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faqs", label: "FAQs" },
];

function Landing() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#FAFAF7] pb-24 md:pb-0">
      <Toaster position="top-center" richColors />
      <Header open={open} setOpen={setOpen} />
      <Hero />
      <HighlightStrip />
      <WhyBuyers />
      <Location />
      <Snapshot />
      <Lifestyle />
      <FamilyVsInvestor />
      <Gallery />
      <VideoShowcase />
      <MidCTA />
      <FAQs />
      <FinalLead />
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
}

function Header({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/85 backdrop-blur border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="MV Realtor" className="h-10 w-10 object-contain rounded-md" />
          <div className="leading-tight">
            <div className="text-navy font-bold text-base tracking-tight">MV Realtor</div>
            <div className="text-[9px] tracking-[0.22em] text-orange font-semibold">VISION MEETS REALITY</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center pill-nav shadow-sm">
          {navLinks.map((l, i) => (
            <span key={l.href} className="flex items-center">
              <a href={l.href} className="text-[12px] font-medium text-foreground/75 hover:text-navy transition px-4 py-2 uppercase tracking-wider">{l.label}</a>
              {i < navLinks.length - 1 && <span className="text-border">|</span>}
            </span>
          ))}
        </nav>
        <a href="#lead-form" className="hidden md:inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-navy/90 transition shadow-sm">
          Enquire Now <ArrowRight size={14} />
        </a>
        <div className="md:hidden flex items-center gap-2">
          <a href="#lead-form" className="bg-orange text-white text-xs font-semibold px-3.5 py-2 rounded-full">Get Price</a>
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

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={img21} alt="Picasa Residencies premium 4BHK home" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start px-6 sm:px-10 lg:px-14 pt-14 pb-20 lg:pt-20 lg:pb-28">
          <div className="lg:col-span-7 lg:pt-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 text-white/85 text-[11px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-[0.18em]">
              <MapPin size={12} className="text-orange" /> Kurali · Near Chandigarh University
            </div>
            <h1 className="mt-6 text-white text-[36px] sm:text-5xl lg:text-[62px] font-bold leading-[1.04] tracking-tight">
              Premium 4BHK Homes <br className="hidden sm:block" />
              on <span className="text-orange">Kharar-Kurali Bypass</span>
            </h1>
            <p className="mt-5 text-white/85 text-base sm:text-lg max-w-xl leading-relaxed">
              150 Sq. Yard · G+2 low-rise concept · near Chandigarh University. Designed for family living and smart investment — starting from ₹17 Lakh.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#lead-form" className="bg-orange hover:bg-orange/90 text-white font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-orange/25">
                Get Price & Floor Plan <ArrowRight size={16} />
              </a>
              <a href={WA_URL} className="bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20 text-white font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2">
                <MessageCircle size={16} /> Book a Site Visit
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {[
                ["4BHK","Homes"],
                ["150","Sq. Yard"],
                ["G+2","Low-Rise"],
                ["₹17L+","Entry"],
              ].map(([n,l]) => (
                <div key={l} className="bg-white/8 backdrop-blur border border-white/15 rounded-2xl px-4 py-3">
                  <div className="text-orange font-bold text-xl leading-none">{n}</div>
                  <div className="text-white/75 text-[11px] uppercase tracking-[0.16em] mt-1.5">{l}</div>
                </div>
              ))}
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

/* ---------- HIGHLIGHT STRIP ---------- */
function HighlightStrip() {
  const items = [
    { n: "4BHK", l: "Premium Homes" },
    { n: "150", l: "Sq. Yard" },
    { n: "G+2", l: "Low-Rise" },
    { n: "₹17L+", l: "Starting Price" },
    { n: "Near", l: "Chandigarh University" },
  ];
  return (
    <section className="relative -mt-10 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[28px] shadow-soft border border-border/60 px-3 sm:px-6 py-4 flex flex-wrap items-stretch divide-y sm:divide-y-0 sm:divide-x divide-border">
          {items.map((it, i) => (
            <div key={i} className="flex-1 min-w-[45%] sm:min-w-0 px-3 sm:px-5 py-3 text-center">
              <div className="text-navy font-bold text-lg sm:text-xl leading-tight">{it.n}</div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-1">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY BUYERS (editorial bento) ---------- */
function WhyBuyers() {
  return (
    <section id="highlights" className="bg-[#FAFAF7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14">
          <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">Why Picasa Residencies</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
            Built for buyers who want <em className="not-italic text-orange">space, privacy</em> and a project worth showing up for.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          {/* Big feature */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[360px] group">
            <img src={img19} alt="Spacious 4BHK layout" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/35 to-transparent" />
            <div className="relative h-full p-8 md:p-10 flex flex-col justify-end text-white">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-orange font-bold mb-3"><Home size={14}/> Spacious Layout</div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight max-w-md">A real 4BHK — bedrooms big enough for a growing family.</h3>
              <p className="mt-3 text-white/85 max-w-lg text-sm md:text-base leading-relaxed">Separate rooms for parents, kids, guests and a work-from-home setup. Better proportions than a typical city flat.</p>
            </div>
          </div>

          {/* 2x stacked */}
          <div className="lg:col-span-5 grid gap-5">
            <FeatureCard icon={Building2} title="G+2 Low-Rise Concept" desc="Limited floors per block, fewer neighbours, more privacy than crowded high-rise apartments." />
            <FeatureCard icon={Ruler} title="150 Sq. Yard" desc="Premium plot size that translates into wider rooms, balconies and breathing space." />
          </div>

          {/* Bottom row */}
          <FeatureCard className="lg:col-span-4" icon={MapPin} title="On the Bypass Highway" desc="Direct access toward Mohali, Chandigarh University and the airport corridor." />
          <FeatureCard className="lg:col-span-4" icon={IndianRupee} title="Starts at ₹17 Lakh" desc="A practical entry point for buyers exploring the Kharar-Kurali growth belt." />
          <FeatureCard className="lg:col-span-4" icon={ShieldCheck} title="Family + Investor Friendly" desc="Suitable for self-use today, and well placed for rental or resale tomorrow." />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc, className = "" }: any) {
  return (
    <div className={`bg-white border border-border rounded-3xl p-7 hover:shadow-soft transition ${className}`}>
      <div className="w-11 h-11 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-5">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-bold leading-snug">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mt-2">{desc}</p>
    </div>
  );
}

/* ---------- LOCATION ---------- */
function Location() {
  const items = [
    { icon: GraduationCap, label: "Chandigarh University", time: "Just minutes away" },
    { icon: Plane, label: "Chandigarh Airport", time: "Approx. 20 min" },
    { icon: Hospital, label: "Max Hospital", time: "Approx. 15 min" },
    { icon: Hospital, label: "PGI Chandigarh", time: "Approx. 20 min" },
  ];
  return (
    <section id="location" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">Location Advantage</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.06]">
            On the highway. <br />Close to <span className="text-orange">what matters daily.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            Picasa Residencies sits on the Kharar-Kurali Bypass Highway in Kurali — connected to Chandigarh University, healthcare, the airport corridor and Mohali side.
          </p>
          <a href={WA_URL} className="mt-7 inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-6 py-3.5 rounded-full shadow-md">
            <MessageCircle size={18} /> Get Exact Location
          </a>
          <p className="text-[11px] text-muted-foreground mt-3">Travel times are approximate and may vary with traffic.</p>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="relative rounded-3xl overflow-hidden border border-border bg-white p-3">
            <div className="rounded-2xl overflow-hidden">
              <img src={img22} alt="Project surroundings" className="w-full aspect-[16/10] object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {items.map(({ icon: Icon, label, time }) => (
                <div key={label} className="bg-[#FAFAF7] rounded-2xl p-4 flex items-start gap-3 border border-border/60">
                  <div className="w-10 h-10 rounded-xl bg-orange/10 text-orange flex items-center justify-center shrink-0"><Icon size={18}/></div>
                  <div>
                    <div className="font-semibold text-navy text-sm leading-tight">{label}</div>
                    <div className="text-[12px] text-muted-foreground mt-0.5">{time}</div>
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

/* ---------- SNAPSHOT ---------- */
function Snapshot() {
  const rows: [string, string][] = [
    ["Project", "Picasa Residencies"],
    ["Configuration", "4BHK"],
    ["Size", "150 Sq. Yard"],
    ["Concept", "G+2 Low-Rise"],
    ["Starting Price", "₹17 Lakh"],
    ["Location", "Kharar-Kurali Bypass, Kurali"],
    ["Nearby Landmark", "Chandigarh University"],
    ["Best Suited For", "Family Living & Investment"],
  ];
  return (
    <section id="snapshot" className="bg-[#FAFAF7] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">Project Snapshot</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Everything you'd ask in the first call — in one panel.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Quick overview of size, concept, pricing and location. For floor plans and unit availability, request the full details.
          </p>
          <a href="#lead-form" className="mt-6 inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold px-6 py-3.5 rounded-full shadow-md shadow-orange/30">
            Request Full Details <ArrowRight size={16}/>
          </a>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-border shadow-soft overflow-hidden">
            {rows.map(([k, v], i) => (
              <div key={k} className={`grid grid-cols-5 px-6 py-4 ${i !== rows.length - 1 ? "border-b border-border" : ""} ${k === "Starting Price" ? "bg-orange/5" : ""}`}>
                <div className="col-span-2 text-[13px] uppercase tracking-wider text-muted-foreground font-semibold">{k}</div>
                <div className="col-span-3 text-navy font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- LIFESTYLE (split editorial) ---------- */
function Lifestyle() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-7 grid grid-cols-6 grid-rows-6 gap-3 min-h-[460px] md:min-h-[560px]">
          <div className="col-span-4 row-span-4 rounded-3xl overflow-hidden">
            <img src={img18} alt="Premium living" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden">
            <img src={img23} alt="Interior detail" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden">
            <img src={img25} alt="Bedroom detail" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-4 row-span-2 rounded-3xl overflow-hidden">
            <img src={img20} alt="Exterior view" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-5 lg:py-10 flex flex-col justify-center">
          <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">Lifestyle</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
            A home designed for <span className="text-orange">space, privacy and better living.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            Larger rooms, smarter distribution, fewer neighbours per floor. Picasa Residencies is built for families who want a real upgrade — not another cramped flat.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Better room sizing for growing families",
              "Low-rise privacy and quieter daily living",
              "Practical layout — useful storage and balconies",
              "Strong value proposition for both end users and investors",
            ].map(t => (
              <li key={t} className="flex items-start gap-3 text-navy">
                <span className="w-5 h-5 rounded-full bg-orange/15 text-orange grid place-items-center mt-0.5"><Sparkles size={11}/></span>
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAMILY vs INVESTOR ---------- */
function FamilyVsInvestor() {
  return (
    <section className="bg-[#FAFAF7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">Who It's For</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">Whether you're moving in — or buying smart.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {/* Families */}
          <div className="relative rounded-3xl overflow-hidden bg-cream border border-border p-8 md:p-10">
            <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-orange/15 text-orange grid place-items-center"><Users size={20}/></div>
            <div className="text-orange text-[11px] font-bold tracking-[0.2em] uppercase">For Families</div>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">A 4BHK that actually feels like home.</h3>
            <ul className="mt-6 space-y-3 text-navy">
              {["Larger 4BHK layout for joint or growing families","Low-rise living — quieter and more private","Peaceful Kurali setting with highway access","Daily convenience nearby"].map(t => (
                <li key={t} className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange mt-2.5"/><span className="text-sm md:text-base">{t}</span></li>
              ))}
            </ul>
          </div>
          {/* Investors */}
          <div className="relative rounded-3xl overflow-hidden bg-navy text-white p-8 md:p-10">
            <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-orange/15 blur-3xl" />
            <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-orange text-white grid place-items-center"><TrendingUp size={20}/></div>
            <div className="text-orange text-[11px] font-bold tracking-[0.2em] uppercase">For Investors</div>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">Entry from ₹17 Lakh in a growing corridor.</h3>
            <ul className="mt-6 space-y-3">
              {["Practical budget entry for the Mohali belt","Located on the Chandigarh University growth route","Limited low-rise inventory — scarcity advantage","Potential for rental and future resale"].map(t => (
                <li key={t} className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange mt-2.5"/><span className="text-sm md:text-base text-white/85">{t}</span></li>
              ))}
            </ul>
            <a href="#lead-form" className="mt-7 inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-semibold px-6 py-3 rounded-full">
              Get Investment Details <ArrowRight size={16}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">Project Gallery</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">See the project up close.</h2>
            <p className="mt-3 text-muted-foreground">Real visuals of Picasa Residencies — exterior, interiors and design finish.</p>
          </div>
          <a href="#lead-form" className="inline-flex items-center gap-2 self-start md:self-end bg-navy text-white font-semibold px-5 py-3 rounded-full text-sm">
            Request Full Gallery <ArrowRight size={14}/>
          </a>
        </div>

        {/* curated mosaic */}
        <div className="grid grid-cols-6 gap-3 md:gap-4">
          <GItem className="col-span-6 md:col-span-4 aspect-[16/10]" src={img22} />
          <GItem className="col-span-3 md:col-span-2 aspect-[3/4]" src={img27} />
          <GItem className="col-span-3 md:col-span-2 aspect-[3/4]" src={img28} />
          <GItem className="col-span-3 md:col-span-2 aspect-[3/4]" src={img29} />
          <GItem className="col-span-6 md:col-span-2 aspect-[3/4]" src={img31} />
          <GItem className="col-span-3 md:col-span-3 aspect-[4/3]" src={img20} />
          <GItem className="col-span-3 md:col-span-3 aspect-[4/3]" src={img19} />
          <GItem className="col-span-2 md:col-span-2 aspect-[3/4]" src={img33} />
          <GItem className="col-span-2 md:col-span-2 aspect-[3/4]" src={img35} />
          <GItem className="col-span-2 md:col-span-2 aspect-[3/4]" src={img37} />
          <GItem className="col-span-3 md:col-span-3 aspect-[4/3]" src={img40} />
          <GItem className="col-span-3 md:col-span-3 aspect-[4/3]" src={img42} />
        </div>
        <p className="text-xs text-muted-foreground mt-5 text-center">Visuals are for representation. Final finishes and specifications shared during site visit.</p>
      </div>
    </section>
  );
}
function GItem({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-cream group ${className}`}>
      <img src={src} alt="Picasa Residencies" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
    </div>
  );
}

/* ---------- VIDEO SHOWCASE ---------- */
function VideoShowcase() {
  const [active, setActive] = useState(VIDEOS[0].id);
  return (
    <section className="bg-[#0c1130] text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">Project Walkthrough</div>
            <h2 className="text-white text-3xl md:text-5xl font-bold leading-[1.05]">
              See Picasa Residencies <span className="text-orange">in motion.</span>
            </h2>
            <p className="mt-3 text-white/70">Take a closer look at the project, site and surroundings.</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-9 rounded-3xl overflow-hidden bg-black aspect-video border border-white/10">
            <iframe
              key={active}
              src={`https://drive.google.com/file/d/${active}/preview`}
              allow="autoplay"
              className="w-full h-full"
              title="Project walkthrough"
            />
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {VIDEOS.map(v => (
              <button
                key={v.id}
                onClick={() => setActive(v.id)}
                className={`group relative rounded-2xl overflow-hidden border text-left transition aspect-video lg:aspect-[4/3] ${active === v.id ? "border-orange ring-2 ring-orange/40" : "border-white/10 hover:border-white/30"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/50 to-orange/30" />
                <div className="absolute inset-0 grid place-items-center text-white/90"><PlayCircle size={36} /></div>
                <div className="absolute bottom-2 left-2 right-2 text-[11px] font-semibold uppercase tracking-wider text-white/90 truncate">{v.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MID CTA ---------- */
function MidCTA() {
  return (
    <section className="bg-[#FAFAF7] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-orange text-white p-8 md:p-14">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05]">
                Want the latest price, floor plan and availability?
              </h2>
              <p className="mt-4 text-white/90 text-base md:text-lg max-w-2xl">
                Share your details — we'll send current pricing, floor plan, payment plan, and site visit info on call or WhatsApp.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <a href={WA_URL} className="bg-white text-orange font-semibold px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-lg">
                <MessageCircle size={18}/> Get Details on WhatsApp
              </a>
              <a href={TEL_URL} className="bg-navy/90 hover:bg-navy text-white font-semibold px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2">
                <Phone size={18}/> Request a Callback
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "Where is Picasa Residencies located?", a: "On the Kharar-Kurali Bypass Highway in Kurali, Punjab — near Chandigarh University, with connectivity toward Mohali and Chandigarh side." },
  { q: "Is this project near Chandigarh University?", a: "Yes — the project is in the Chandigarh University belt, just minutes away by road." },
  { q: "What is the starting price of the project?", a: "Pricing starts from ₹17 Lakh. Latest prices, payment plans and unit availability are shared on call." },
  { q: "What is the size of the 4BHK units?", a: "Each unit is built on a 150 Sq. Yard premium plot size in a G+2 low-rise format." },
  { q: "Is the project suitable for investment?", a: "Yes — practical entry pricing, the Chandigarh University corridor and limited low-rise inventory make it suitable for both end users and investors." },
  { q: "What does the G+2 concept mean?", a: "G+2 means Ground + 2 upper floors. Fewer homes per block, more privacy, and a low-rise feel compared to high-rise apartments." },
  { q: "Can I get the floor plan and payment details?", a: "Yes — fill the form and our team will share the floor plan, pricing, payment plan and availability." },
  { q: "Can I schedule a site visit?", a: "Yes. Share your preferred time and we'll arrange a site visit at Picasa Residencies." },
];
function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">FAQs</div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Quick answers, before you call.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#FAFAF7] border border-border rounded-2xl overflow-hidden">
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

/* ---------- FINAL LEAD ---------- */
function FinalLead() {
  return (
    <section className="bg-[#FAFAF7] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center bg-white rounded-[32px] border border-border shadow-soft p-6 md:p-12 overflow-hidden relative">
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-orange/10 blur-3xl" />
          <div className="lg:col-span-7 relative">
            <div className="text-orange text-xs font-bold tracking-[0.2em] uppercase mb-3">Final Step</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.05]">
              Get latest price, floor plan & site visit details.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Limited 4BHK units at Picasa Residencies. Our team will connect with you on call or WhatsApp.
            </p>
            <div className="mt-7 hidden lg:flex gap-3">
              <a href={TEL_URL} className="bg-navy text-white font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2"><Phone size={16}/> {PHONE_DISPLAY}</a>
              <a href={WA_URL} className="bg-orange text-white font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2"><MessageCircle size={16}/> WhatsApp</a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-navy text-white pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="MV Realtor" className="h-12 w-12 object-contain bg-white rounded-lg p-1" />
            <div>
              <div className="font-bold text-lg">MV REALTOR</div>
              <div className="text-[10px] tracking-[0.18em] text-orange font-semibold">VISION MEETS REALITY</div>
            </div>
          </div>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">Picasa Residencies — Kharar-Kurali Bypass Highway, Kurali, Punjab. Near Chandigarh University.</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-white/75">
            <li><a href={TEL_URL} className="flex items-center gap-2 hover:text-orange"><Phone size={14} className="text-orange" /> {PHONE_DISPLAY}</a></li>
            <li><a href={WA_URL} className="flex items-center gap-2 hover:text-orange"><MessageCircle size={14} className="text-orange" /> WhatsApp Us</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Explore</div>
          <ul className="space-y-2 text-sm text-white/75">
            {navLinks.map(l => <li key={l.href}><a href={l.href} className="hover:text-orange transition">{l.label}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-white/10">
        <p className="text-xs text-white/55 leading-relaxed">
          Disclaimer: Visuals are for representation where applicable. Pricing, availability and timelines may change. Travel times are approximate. Please verify all information with MV Realtor before making a buying decision.
        </p>
        <p className="text-xs text-white/40 mt-4">© {new Date().getFullYear()} MV Realtor. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ---------- FLOATING WHATSAPP (desktop) ---------- */
function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      aria-label="Chat on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-5 py-3.5 rounded-full shadow-2xl shadow-black/20 transition"
    >
      <MessageCircle size={18} /> Chat on WhatsApp
    </a>
  );
}

/* ---------- STICKY MOBILE CTA ---------- */
function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white border-t border-border shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.18)] grid grid-cols-2 gap-2 p-2.5">
      <a href={WA_URL} className="bg-[#25D366] text-white font-semibold rounded-full py-3 inline-flex items-center justify-center gap-2 text-sm">
        <MessageCircle size={16} /> WhatsApp
      </a>
      <a href={TEL_URL} className="bg-navy text-white font-semibold rounded-full py-3 inline-flex items-center justify-center gap-2 text-sm">
        <Phone size={16} /> Call Agent
      </a>
    </div>
  );
}
