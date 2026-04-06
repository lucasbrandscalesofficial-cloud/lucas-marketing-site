import { useScrollReveal } from "@/hooks/useScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import SectionAmbient from "@/components/SectionAmbient";
import { heading } from "@/lib/visualStyles";

const painPoints = [
  { title: "Not enough leads", sub: "Quiet phone. Gaps on the calendar." },
  { title: "Feast or famine", sub: "Busy one week, slow the next." },
  { title: "No reliable system", sub: "Nothing predictable week to week." },
  { title: "Unclear ROI", sub: "Spend goes out; results feel fuzzy." },
];

const PainPointsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-pain section-block relative overflow-hidden">
      <SectionAmbient variant="pain" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl transition-all duration-[3800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-[2px]"}`}
      >
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="text-center lg:sticky lg:top-28 lg:text-left">
            <Eyebrow variant="destructive" align="responsive-start" className="lg:mb-3">
              The problem
            </Eyebrow>
            <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              <span className={heading.pain}>Where will the next job come from?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground lg:mx-0">
              Most local owners hit these gaps before there is a clear ad system.
            </p>
          </div>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {painPoints.map((point, i) => (
              <li
                key={point.title}
                className={`flex flex-col rounded-2xl border border-destructive/30 bg-white/95 p-4 shadow-lg shadow-destructive/[0.08] ring-1 ring-destructive/10 transition-all duration-[3100ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-xl dark:bg-card/95 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                style={{ transitionDelay: visible ? `${i * 55}ms` : "0ms" }}
              >
                <p className="text-[15px] font-bold leading-tight text-foreground">{point.title}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{point.sub}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
