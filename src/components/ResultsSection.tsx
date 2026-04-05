import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown, ChevronRight, Contact, Pencil } from "lucide-react";

const StatBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="min-w-0 text-center sm:text-left">
    <p className="text-2xl font-semibold tabular-nums tracking-tight text-white md:text-[1.65rem]">{value}</p>
    <p className="mt-1 text-[11px] leading-snug text-slate-400 md:text-xs">{label}</p>
  </div>
);

const ResultsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="results" className="section-alt section-block">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div
          className={`mb-8 text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Proof</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">Real campaign results</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Snapshot from a live Meta lead campaign — calls, lead volume, and delivery at a glance.
          </p>
        </div>

        <div
          className={`grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <figure className="overflow-hidden rounded-xl border border-border/80 bg-muted/30 shadow-card">
            <img
              src="/meta-campaign-results.png"
              alt="Meta Ads dashboard: 16 calls placed, $38.28 cost per call, $600 spent, $20 daily budget, 16 leads, 21,522 reach, 32,390 impressions."
              className="block h-auto w-full align-top"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="border-t border-border/60 bg-card px-4 py-2.5 text-center text-[11px] text-muted-foreground">
              Actual performance metrics from Ads Manager
            </figcaption>
          </figure>

          <div className="rounded-xl border border-slate-700/80 bg-[hsl(222_28%_11%)] p-5 shadow-lg md:p-6">
            <div className="grid grid-cols-1 gap-4 border-b border-white/10 pb-5 sm:grid-cols-3 sm:gap-3 md:gap-4">
              <StatBlock value="16" label="Calls placed" />
              <StatBlock value="$38.28" label="Cost per Call placed" />
              <StatBlock value="$600.00" label="Amount spent" />
            </div>

            <div className="flex justify-end border-b border-white/10 py-3">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400">
                <Pencil size={14} className="shrink-0 opacity-90" aria-hidden />
                $20.00 daily budget
              </span>
            </div>

            <div
              className="flex items-center justify-between gap-3 border-b border-white/10 py-3"
              role="group"
              aria-label="Leads summary"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <Contact size={18} className="shrink-0 text-slate-300" aria-hidden />
                <div>
                  <p className="text-sm font-medium text-white">View leads</p>
                  <p className="text-xs text-slate-400">16 total leads</p>
                </div>
              </div>
              <ChevronRight size={18} className="shrink-0 text-slate-500" aria-hidden />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-5">
              <StatBlock value="21,522" label="Reach" />
              <StatBlock value="32,390" label="Impressions" />
            </div>

            <div className="mt-5 flex justify-center border-t border-white/10 pt-4">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                Show more
                <ChevronDown size={14} aria-hidden />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
