import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowDown, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import SectionAmbient from "@/components/SectionAmbient";
import { heading } from "@/lib/visualStyles";

const ResultsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="results" className="section-alt section-block relative overflow-hidden">
      <SectionAmbient variant="results" />

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <div
          className={`mb-10 text-center transition-all duration-[1900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "opacity-100 translate-y-0 scale-100 blur-0" : "opacity-0 translate-y-6 scale-[0.998] blur-sm"}`}
        >
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-gradient-to-r from-primary/10 via-primary/[0.07] to-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary shadow-sm ring-1 ring-primary/10">
              <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Real Ads Manager numbers
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            <span className={heading.results}>Real campaign results</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            Watch the shift from day one to today — same campaign,{" "}
            <span className="font-semibold text-foreground">serious momentum</span>.
          </p>
        </div>

        <div
          className={`transition-all delay-100 duration-[1900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "opacity-100 translate-y-0 scale-100 blur-0" : "opacity-0 translate-y-7 scale-[0.998] blur-sm"}`}
        >
          <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-6 xl:gap-10">
            {/* Before */}
            <div
              className={`min-w-0 flex-1 transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:max-w-[min(100%,420px)] ${visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.998] opacity-0"}`}
              style={{ transitionDelay: visible ? "80ms" : "0ms" }}
            >
              <div className="mb-3 flex flex-col items-center gap-1.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">Before</p>
                <span className="text-[10px] font-medium text-muted-foreground/80">The baseline</span>
              </div>
              <figure className="group relative overflow-hidden rounded-2xl border border-dashed border-muted-foreground/35 bg-muted/30 p-1 shadow-inner ring-1 ring-black/[0.04]">
                <div className="overflow-hidden rounded-[0.9rem] bg-[hsl(222_28%_9%)] ring-1 ring-black/[0.06] dark:bg-black/60 dark:ring-white/10">
                  <img
                    src="/campaign-results-before.png"
                    alt="Ads Manager at campaign start: 1 call placed, $23.69 cost per call, $23.69 spent, $20 daily budget, 1 lead, 975 reach, 1,158 impressions."
                    className="block h-auto w-full align-top opacity-[0.92] transition duration-300 group-hover:opacity-100"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
              <p className="mt-3 text-center text-xs text-muted-foreground">Day one — first 24 hours</p>
            </div>

            {/* Arrow */}
            <div className="flex shrink-0 flex-col items-center gap-1 lg:px-2" aria-hidden>
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 via-primary/15 to-primary/5 text-primary shadow-lg shadow-primary/20 ring-2 ring-primary/35 ring-offset-4 ring-offset-background"
              >
                <ArrowDown size={26} strokeWidth={2.5} className="animate-results-nudge-y lg:hidden" />
                <ArrowRight size={28} strokeWidth={2.5} className="hidden animate-results-nudge-x lg:block" />
              </div>
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 lg:block">
                Growth
              </span>
            </div>

            {/* Now */}
            <div
              className={`min-w-0 flex-1 transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:max-w-[min(100%,420px)] ${visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.998] opacity-0"}`}
              style={{ transitionDelay: visible ? "180ms" : "0ms" }}
            >
              <div className="mb-3 flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">NOW</p>
                  <TrendingUp className="h-4 w-4 text-emerald-600" strokeWidth={2.5} aria-hidden />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-500/25 dark:text-emerald-400">
                  The payoff
                </span>
              </div>

              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-[1.4rem] bg-primary/25 blur-2xl animate-results-glow"
                  aria-hidden
                />
                <div className="relative rounded-[1.15rem] bg-gradient-to-br from-primary via-sky-500/90 to-emerald-500/85 p-[2.5px] shadow-2xl shadow-primary/25">
                  <figure className="overflow-hidden rounded-[1.05rem] bg-[hsl(222_28%_9%)] ring-1 ring-white/10 dark:bg-black/60">
                    <img
                      src="/campaign-results-now.png"
                      alt="Ads Manager current: 16 calls placed, $38.28 cost per call, $600 spent, $20 daily budget, 16 leads, 21,522 reach, 32,390 impressions."
                      className="block h-auto w-full align-top transition duration-300 hover:scale-[1.02] hover:brightness-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </div>
              </div>
              <p className="mt-3 text-center text-sm font-medium text-foreground">
                Latest snapshot —{" "}
                <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text font-semibold text-transparent">
                  scaled delivery and lead flow
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
