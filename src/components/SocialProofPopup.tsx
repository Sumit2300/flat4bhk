import { useEffect, useState } from "react";
import { CheckCircle2, X, Download } from "lucide-react";

const EVENTS = [
  { name: "Amit", area: "Kurali", action: "downloaded project details" },
  { name: "Priya", area: "Mohali", action: "requested floor plan" },
  { name: "Rahul", area: "Kharar", action: "booked a site visit" },
  { name: "Simran", area: "Chandigarh", action: "downloaded the brochure" },
  { name: "Harpreet", area: "Zirakpur", action: "asked for pricing on WhatsApp" },
  { name: "Neha", area: "Panchkula", action: "requested floor plan" },
  { name: "Vikram", area: "Kurali", action: "downloaded project details" },
  { name: "Manpreet", area: "Mohali", action: "booked a site visit" },
  { name: "Aarav", area: "Kharar", action: "requested floor plan" },
  { name: "Gurleen", area: "Chandigarh University", action: "downloaded project details" },
  { name: "Sahil", area: "Landran", action: "asked for pricing" },
  { name: "Ritika", area: "Kurali", action: "booked a site visit" },
];

const intervals = ["just now", "1 min ago", "2 min ago", "3 min ago", "5 min ago"];

export function SocialProofPopup() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const cycle = () => {
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        setIndex((i) => (i + 1) % EVENTS.length);
      }, 5000); // visible 5s
    };

    // first popup after 4s, then every 10s gap (5s visible + 5s gap)
    showTimer = setTimeout(function loop() {
      cycle();
      showTimer = setTimeout(loop, 10000);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [closed]);

  if (closed) return null;

  const ev = EVENTS[index];
  const time = intervals[index % intervals.length];

  return (
    <div
      aria-live="polite"
      className={`fixed z-40 left-4 bottom-24 md:left-6 md:bottom-6 max-w-[320px] transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center gap-3 overflow-hidden rounded-lg border border-border bg-white py-3.5 pl-4 pr-9 shadow-card">
        <span className="absolute left-0 top-0 bottom-0 w-1 bg-orange" />
        <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-md bg-orange/10 text-orange">
          <Download size={18} />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-orange ring-2 ring-white animate-pulse" />
        </div>
        <div className="min-w-0">
          <p className="text-[13px] leading-snug text-navy">
            <span className="font-bold">
              {ev.name} from {ev.area}
            </span>{" "}
            <span className="text-foreground/80">{ev.action}</span>
          </p>
          <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1.5">
            <CheckCircle2 size={11} className="text-orange" /> Verified · {time}
          </p>
        </div>
        <button
          aria-label="Dismiss"
          onClick={() => setClosed(true)}
          className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-md text-muted-foreground hover:bg-cream"
        >
          <X size={13} />
        </button>
      </div>
    </div>
  );
}
