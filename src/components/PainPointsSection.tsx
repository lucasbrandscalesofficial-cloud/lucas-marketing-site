import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  { title: "Not enough leads", sub: "Quiet phone. Gaps on the calendar." },
  { title: "Feast or famine", sub: "Busy one week, slow the next." },
  { title: "No reliable system", sub: "Nothing predictable week to week." },
  { title: "Unclear ROI", sub: "Spend goes out; results feel fuzzy." },
];

const PainPointsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-pain section-block">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[4px]"}`}
      >
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="text-center lg:sticky lg:top-28 lg:text-left">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-destructive">The problem</p>
            <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
              Where will the next job come from?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground lg:mx-0">
              Most local owners hit these gaps before there is a clear ad system.
            </p>
          </div>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {painPoints.map((point, i) => (
              <li
                key={point.title}
                className={`flex flex-col rounded-xl border border-destructive/35 bg-white p-4 shadow-sm ring-1 ring-destructive/10 transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
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
