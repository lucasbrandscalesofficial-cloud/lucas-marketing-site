import { Megaphone, FileText, Palette } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import SectionAmbient from "@/components/SectionAmbient";
import { heading } from "@/lib/visualStyles";

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
    <section id="services" className="section-block relative overflow-hidden">
      <SectionAmbient variant="services" />
      <div ref={ref} className="relative mx-auto max-w-5xl">
        <div
          className={`mb-8 text-center transition-all duration-[1150ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "opacity-100 translate-y-0 scale-100 blur-0" : "opacity-0 translate-y-14 scale-[0.96] blur-md"}`}
        >
          <Eyebrow variant="violet">Services</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            <span className={heading.services}>What I run</span>
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">Three pieces. One outcome: more qualified leads.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group flex min-h-[200px] flex-col rounded-2xl border border-border/50 bg-card/90 p-5 shadow-lg shadow-primary/[0.06] ring-1 ring-black/[0.04] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.97]"}`}
              style={{ transitionDelay: visible ? `${100 + i * 60}ms` : "0ms" }}
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-indigo-500/15 ring-1 ring-violet-400/25 transition group-hover:from-violet-500/35 group-hover:to-indigo-500/25">
                <service.icon size={18} className="text-violet-700" />
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
