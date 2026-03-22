import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-24 sm:px-5 md:pb-14 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-20%,hsl(210_100%_46%/0.16),transparent_58%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-5xl animate-fade-up items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary lg:justify-start">
            Lucas Marketing
          </p>
          <h1 className="mb-3 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.45rem]">
            More local leads from Meta ads — without the guesswork.
          </h1>
          <p className="mx-auto mb-7 max-w-md text-base leading-snug text-muted-foreground lg:mx-0">
            Facebook and Instagram lead campaigns for service businesses. More booked calls, less wasted spend.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="min-w-[200px] shadow-md sm:min-h-12 sm:px-10" asChild>
              <a href="#contact">
                Book a call
                <ArrowRight size={18} />
              </a>
            </Button>
            <a
              href="#demos"
              className="text-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
            >
              See sample ads
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/[0.07] to-white p-6 shadow-sm ring-1 ring-black/[0.04]">
          <p className="text-[11px] font-bold uppercase tracking-wide text-primary">What you get</p>
          <ul className="mt-4 space-y-3 text-sm font-medium leading-snug text-foreground">
            <li className="flex gap-2.5">
              <span className="mt-0.5 text-primary" aria-hidden>
                •
              </span>
              <span>Local audience targeting</span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 text-primary" aria-hidden>
                •
              </span>
              <span>Instant forms built to convert</span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 text-primary" aria-hidden>
                •
              </span>
              <span>Creative tested to lower lead cost</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
