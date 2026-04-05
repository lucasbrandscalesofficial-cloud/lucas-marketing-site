import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown, ChevronRight, Contact, Pencil } from "lucide-react";

type SnapshotMetrics = {
  callsPlaced: string;
  costPerCall: string;
  amountSpent: string;
  dailyBudget: string;
  totalLeads: string;
  reach: string;
  impressions: string;
};

const StatBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="min-w-0 text-center sm:text-left">
    <p className="text-2xl font-semibold tabular-nums tracking-tight text-white md:text-[1.65rem]">{value}</p>
    <p className="mt-1 text-[11px] leading-snug text-slate-400 md:text-xs">{label}</p>
  </div>
);

const CampaignSnapshot = ({
  badge,
  title,
  caption,
  imageSrc,
  imageAlt,
  metrics,
  visible,
}: {
  badge: string;
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
  metrics: SnapshotMetrics;
  visible: boolean;
}) => (
  <div
    className={`grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-start transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
  >
    <figure className="overflow-hidden rounded-xl border border-border/80 bg-muted/30 shadow-card">
      <img src={imageSrc} alt={imageAlt} className="block h-auto w-full align-top" loading="lazy" decoding="async" />
      <figcaption className="border-t border-border/60 bg-card px-4 py-3 text-left">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{badge}</span>
        <p className="mt-0.5 text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">{caption}</p>
      </figcaption>
    </figure>

    <div className="rounded-xl border border-slate-700/80 bg-[hsl(222_28%_11%)] p-5 shadow-lg md:p-6">
      <div className="grid grid-cols-1 gap-4 border-b border-white/10 pb-5 sm:grid-cols-3 sm:gap-3 md:gap-4">
        <StatBlock value={metrics.callsPlaced} label="Calls placed" />
        <StatBlock value={metrics.costPerCall} label="Cost per Call placed" />
        <StatBlock value={metrics.amountSpent} label="Amount spent" />
      </div>

      <div className="flex justify-end border-b border-white/10 py-3">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400">
          <Pencil size={14} className="shrink-0 opacity-90" aria-hidden />
          {metrics.dailyBudget} daily budget
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
            <p className="text-xs text-slate-400">{metrics.totalLeads} total leads</p>
          </div>
        </div>
        <ChevronRight size={18} className="shrink-0 text-slate-500" aria-hidden />
      </div>

      <div className="grid grid-cols-2 gap-4 pt-5">
        <StatBlock value={metrics.reach} label="Reach" />
        <StatBlock value={metrics.impressions} label="Impressions" />
      </div>

      <div className="mt-5 flex justify-center border-t border-white/10 pt-4">
        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
          Show more
          <ChevronDown size={14} aria-hidden />
        </span>
      </div>
    </div>
  </div>
);

const startMetrics: SnapshotMetrics = {
  callsPlaced: "1",
  costPerCall: "$23.69",
  amountSpent: "$23.69",
  dailyBudget: "$20.00",
  totalLeads: "1",
  reach: "975",
  impressions: "1,158",
};

const currentMetrics: SnapshotMetrics = {
  callsPlaced: "16",
  costPerCall: "$38.28",
  amountSpent: "$600.00",
  dailyBudget: "$20.00",
  totalLeads: "16",
  reach: "21,522",
  impressions: "32,390",
};

const ResultsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="results" className="section-alt section-block">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div
          className={`mb-10 text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Proof</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">Real campaign results</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Where we started after day one — and how performance looks today in Ads Manager.
          </p>
        </div>

        <div className="space-y-12 md:space-y-14">
          <CampaignSnapshot
            badge="Start"
            title="Day one"
            caption="Right after launch — first 24 hours of the campaign."
            imageSrc="/meta-campaign-results-start.png"
            imageAlt="Meta Ads dashboard at start: 1 call placed, $23.69 cost per call, $23.69 spent, $20 daily budget, 1 lead, 975 reach, 1,158 impressions."
            metrics={startMetrics}
            visible={visible}
          />
          <CampaignSnapshot
            badge="Now"
            title="Current performance"
            caption="Latest snapshot — same campaign, scaled delivery and lead volume."
            imageSrc="/meta-campaign-results-current.png"
            imageAlt="Meta Ads dashboard current: 16 calls placed, $38.28 cost per call, $600 spent, $20 daily budget, 16 leads, 21,522 reach, 32,390 impressions."
            metrics={currentMetrics}
            visible={visible}
          />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
