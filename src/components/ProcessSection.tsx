import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Plan",
    description: "Goals, offer, audience — mapped to your market.",
  },
  {
    number: "02",
    title: "Launch",
    description: "You approve creative and targeting before spend turns on.",
  },
  {
    number: "03",
    title: "Optimize",
    description: "Track results and improve what's not working.",
  },
];

const ProcessSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="process" className="section-alt section-block">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div
          className={`mb-8 text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Process</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">How it works</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex min-h-[180px] flex-col rounded-xl border border-border/70 bg-card p-5 shadow-card transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: visible ? `${100 + i * 60}ms` : "0ms" }}
            >
              <span className="text-xs font-bold text-primary">{step.number}</span>
              <h3 className="mt-2 text-base font-bold tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
