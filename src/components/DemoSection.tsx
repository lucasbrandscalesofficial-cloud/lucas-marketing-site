import { useScrollReveal } from "@/hooks/useScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import SectionAmbient from "@/components/SectionAmbient";
import { heading } from "@/lib/visualStyles";
import demoCar from "@/assets/demos/demo-car-detailing.png";
import demoRoof from "@/assets/demos/demo-roofing.png";
import demoDog from "@/assets/demos/demo-dog-grooming.png";

const demos: {
  label: string;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    label: "Sample",
    title: "Car detailing",
    description: "Before and after split — builds trust fast.",
    image: demoCar,
  },
  {
    label: "Sample",
    title: "Roofing",
    description: "Offer plus proof — inspection focused.",
    image: demoRoof,
  },
  {
    label: "Sample",
    title: "Dog grooming",
    description: "Urgency and clear CTA for local promos.",
    image: demoDog,
  },
];

const DemoSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="demos" className="section-alt section-block relative overflow-hidden">
      <SectionAmbient variant="demo" />
      <div ref={ref} className="relative mx-auto max-w-5xl">
        <div
          className={`mb-8 text-center transition-all duration-[1900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "opacity-100 translate-y-0 scale-100 blur-0" : "opacity-0 translate-y-6 scale-[0.998] blur-sm"}`}
        >
          <Eyebrow variant="amber">Demo work</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            <span className={heading.demo}>Demo campaigns</span>
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">Examples of creatives built for real local offers.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, i) => (
            <div
              key={demo.title}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/95 shadow-lg shadow-primary/[0.05] ring-1 ring-black/[0.04] transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15 ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-[0.998]"}`}
              style={{ transitionDelay: visible ? `${100 + i * 60}ms` : "0ms" }}
            >
              <div className="overflow-hidden bg-muted ring-1 ring-black/[0.04]">
                <img
                  src={demo.image}
                  alt={`${demo.title} sample ad creative`}
                  className="block h-auto w-full max-w-full align-top transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex min-h-[100px] flex-1 flex-col p-5">
                <span className="mb-2 inline-block w-fit rounded-full border border-amber-400/35 bg-gradient-to-r from-amber-500/15 to-orange-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 ring-1 ring-amber-400/20">
                  {demo.label}
                </span>
                <h3 className="text-base font-bold tracking-tight text-foreground">{demo.title}</h3>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{demo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
