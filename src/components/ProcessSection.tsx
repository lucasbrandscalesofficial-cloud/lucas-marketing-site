import { useScrollReveal } from "@/hooks/useScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import SectionAmbient from "@/components/SectionAmbient";
import { heading } from "@/lib/visualStyles";

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
    <section id="process" className="section-alt section-block relative overflow-hidden">
      <SectionAmbient variant="process" />
      <div ref={ref} className="relative mx-auto max-w-5xl">
        <div
          className={`mb-8 text-center transition-all duration-[4600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-[2px]"}`}
        >
          <Eyebrow variant="teal">Process</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            <span className={heading.process}>How it works</span>
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex min-h-[180px] flex-col rounded-2xl border border-border/50 bg-card/90 p-5 shadow-lg shadow-primary/[0.06] ring-1 ring-black/[0.04] transition-all duration-[3900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              style={{ transitionDelay: visible ? `${100 + i * 60}ms` : "0ms" }}
            >
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-xs font-bold tabular-nums text-transparent">
                {step.number}
              </span>
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
