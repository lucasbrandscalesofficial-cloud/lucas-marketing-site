import { useScrollReveal } from "@/hooks/useScrollReveal";
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
    <section id="demos" className="section-alt section-block">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div
          className={`mb-8 text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Demo work</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">Demo campaigns</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">Examples of creatives built for real local offers.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, i) => (
            <div
              key={demo.title}
              className={`flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card shadow-card transition-all duration-500 ease-out hover:shadow-card-hover ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: visible ? `${100 + i * 60}ms` : "0ms" }}
            >
              <div className="bg-muted">
                <img
                  src={demo.image}
                  alt={`${demo.title} sample ad creative`}
                  className="block h-auto w-full max-w-full align-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex min-h-[100px] flex-1 flex-col p-5">
                <span className="mb-2 inline-block w-fit rounded bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
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
