import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowDown, ArrowRight } from "lucide-react";

const ResultsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="results" className="section-alt section-block">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div
          className={`mb-10 text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Proof</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">Real campaign results</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Before and after — from day one to where the campaign stands today.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-5 xl:gap-8">
            {/* Before */}
            <div className="min-w-0 flex-1 lg:max-w-[min(100%,420px)]">
              <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                BEFORE
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border/80 bg-[hsl(222_28%_9%)] shadow-card ring-1 ring-black/[0.06]">
                <img
                  src="/campaign-results-before.png"
                  alt="Ads Manager at campaign start: 1 call placed, $23.69 cost per call, $23.69 spent, $20 daily budget, 1 lead, 975 reach, 1,158 impressions."
                  className="block h-auto w-full align-top"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <p className="mt-2.5 text-center text-xs text-muted-foreground">Day one — first 24 hours</p>
            </div>

            {/* Arrow */}
            <div
              className="flex shrink-0 justify-center text-primary lg:px-1"
              aria-hidden
            >
              <ArrowDown size={28} strokeWidth={2.25} className="lg:hidden" />
              <ArrowRight size={32} strokeWidth={2.25} className="hidden lg:block" />
            </div>

            {/* Now */}
            <div className="min-w-0 flex-1 lg:max-w-[min(100%,420px)]">
              <p className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-primary">NOW</p>
              <figure className="overflow-hidden rounded-2xl border border-border/80 bg-[hsl(222_28%_9%)] shadow-card ring-1 ring-black/[0.06]">
                <img
                  src="/campaign-results-now.png"
                  alt="Ads Manager current: 16 calls placed, $38.28 cost per call, $600 spent, $20 daily budget, 16 leads, 21,522 reach, 32,390 impressions."
                  className="block h-auto w-full align-top"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <p className="mt-2.5 text-center text-xs text-muted-foreground">Latest performance snapshot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
