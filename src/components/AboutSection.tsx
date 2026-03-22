import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="section-block">
      <div
        ref={ref}
        className={`mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:gap-10 sm:text-left transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="flex-shrink-0 overflow-hidden rounded-2xl border border-border/60 shadow-sm ring-1 ring-black/[0.04]">
          <img
            src="/luke-headshot.png"
            alt="Lucas, founder of Lucas Marketing"
            className="aspect-square h-40 w-40 object-cover object-center sm:h-44 sm:w-44"
          />
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">About</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">Lucas</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            I run Lucas Marketing and help local service businesses generate leads through Meta ads.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
