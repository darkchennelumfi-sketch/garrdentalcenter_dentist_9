import { Asterisk } from "lucide-react";

const items = [
  "Supra-gingival dentistry",
  "SOLEA laser care",
  "Cosmetic smile makeovers",
  "Dental implants",
  "Full mouth reconstruction",
  "Sleep, snoring & airway",
  "Compassionate patient service",
];

export function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden border-y border-pine-900/15 bg-pine-900 py-3.5 text-cream">
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-6 pl-6 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cream/70"
              >
                {item}
                <Asterisk className="size-3.5 text-copper-400" strokeWidth={1.6} />
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">
        Supra-gingival dentistry, SOLEA laser care, cosmetic smile makeovers,
        dental implants, full mouth reconstruction, sleep, snoring and airway
        treatments, and compassionate patient service.
      </span>
    </div>
  );
}
