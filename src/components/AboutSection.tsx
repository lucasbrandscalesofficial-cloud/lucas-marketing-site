import { useScrollReveal } from "@/hooks/useScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import SectionAmbient from "@/components/SectionAmbient";
import { heading } from "@/lib/visualStyles";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="section-block relative overflow-hidden">
      <SectionAmbient variant="about" />
      <div
        ref={ref}
        className={`relative mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:gap-10 sm:text-left transition-all duration-[1900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "opacity-100 translate-y-0 scale-100 blur-0" : "opacity-0 translate-y-6 scale-[0.998] blur-sm"}`}
      >
        <div className="relative flex-shrink-0">
          <div className="pointer-events-none absolute -inset-2 rounded-[1.25rem] bg-primary/25 blur-xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/45 via-sky-500/30 to-emerald-500/35 p-[2px] shadow-xl shadow-primary/15">
            <div className="overflow-hidden rounded-[0.9rem] ring-1 ring-white/15">
              <img
                src="/luke-headshot.png"
                alt="Lucas, founder of Lucas Marketing"
                className="aspect-square h-40 w-40 object-cover object-center sm:h-44 sm:w-44"
              />
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <Eyebrow variant="fuchsia" align="responsive-start">
            About
          </Eyebrow>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            <span className={heading.about}>Lucas</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            I run Lucas Marketing and help local service businesses generate leads through Meta ads.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
