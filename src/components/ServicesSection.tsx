import { Megaphone, FileText, Palette } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Megaphone,
    title: "Meta lead gen",
    description: "Facebook and Instagram campaigns aimed at people ready to hire.",
  },
  {
    icon: FileText,
    title: "Instant forms",
    description: "Leads stay in platform — quick to submit, easy for you to call.",
  },
  {
    icon: Palette,
    title: "Creative and offers",
    description: "Headlines and offers tested to bring down cost per lead.",
  },
];

const ServicesSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="section-block">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div
          className={`mb-8 text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Services</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">What I run</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">Three pieces. One outcome: more qualified leads.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`flex min-h-[200px] flex-col rounded-xl border border-border/70 bg-card p-5 shadow-card transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: visible ? `${100 + i * 60}ms` : "0ms" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <service.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-base font-bold tracking-tight text-foreground">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
