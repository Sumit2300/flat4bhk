import { useState } from "react";
import { toast } from "sonner";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          toast.success("Thanks! MV Realtor will reach out shortly.");
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
      className={`bg-white rounded-3xl shadow-soft border border-border/80 p-6 sm:p-7 ${compact ? "" : ""}`}
    >
      <div className="mb-5">
        <div className="inline-flex items-center gap-2 bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" /> Limited Units Available
        </div>
        <h3 className="text-xl sm:text-2xl font-bold leading-tight">Get Price, Floor Plan & Site Visit Details</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Share your details and MV Realtor will send you the latest availability, payment plan, and site visit options.
        </p>
      </div>
      <div className="space-y-3">
        <input required name="name" placeholder="Full Name" className="w-full h-12 px-4 rounded-full border border-border bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-navy/30" />
        <input required name="phone" type="tel" pattern="[0-9+\s-]{7,}" placeholder="Phone Number" className="w-full h-12 px-4 rounded-full border border-border bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-navy/30" />
        <select required name="purpose" defaultValue="" className="w-full h-12 px-4 rounded-full border border-border bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-navy/30">
          <option value="" disabled>Buying Purpose</option>
          <option>Family Use</option>
          <option>Investment</option>
          <option>Both</option>
        </select>
        <select required name="time" defaultValue="" className="w-full h-12 px-4 rounded-full border border-border bg-[#FAFAF7] focus:outline-none focus:ring-2 focus:ring-navy/30">
          <option value="" disabled>Preferred Call Time</option>
          <option>ASAP</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
        <button
          disabled={loading}
          className="w-full py-3.5 rounded-full bg-navy hover:bg-navy/90 transition text-white font-semibold text-base shadow-md disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Me Project Details →"}
        </button>
      </div>
      <p className="text-xs text-muted-foreground mt-3 text-center">
        No spam. Only project details, pricing, and site visit assistance.
      </p>
      <p className="text-xs text-navy/70 mt-2 text-center font-medium">
        Response from MV Realtor team.
      </p>
    </form>
  );
}
