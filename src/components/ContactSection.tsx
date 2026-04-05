import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Eyebrow from "@/components/Eyebrow";
import SectionAmbient from "@/components/SectionAmbient";
import { heading } from "@/lib/visualStyles";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { ref, visible } = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-block relative overflow-hidden pb-16 md:pb-20">
      <SectionAmbient variant="contact" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-5xl transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="relative rounded-[1.15rem] bg-gradient-to-br from-primary/50 via-sky-500/40 to-emerald-500/45 p-[2px] shadow-2xl shadow-primary/20">
          <div className="overflow-hidden rounded-[1.05rem] border border-white/10 bg-card ring-1 ring-black/[0.04] md:p-px">
            <div className="grid md:grid-cols-2 md:gap-0">
              <div className="relative flex flex-col justify-center bg-gradient-to-br from-primary/[0.08] via-primary/[0.05] to-emerald-500/[0.06] p-6 md:p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,hsl(210_100%_46%/0.12),transparent_55%)]" aria-hidden />
                <div className="relative">
                  <Eyebrow variant="indigo" align="start">
                    Next step
                  </Eyebrow>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                    <span className={heading.contact}>Book a call</span>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">15 minutes. No pressure. See if it makes sense.</p>
                  <Button variant="hero" size="lg" className="mt-6 w-full shadow-lg shadow-primary/25 sm:w-auto sm:min-w-[220px]" asChild>
                    <a href="https://calendly.com/lucasbrandscalesofficial/new-meeting" target="_blank" rel="noopener noreferrer">
                      Book a Call <ArrowRight size={18} />
                    </a>
                  </Button>
                  <div className="mt-8 space-y-2.5 text-sm text-muted-foreground">
                    <a
                      href="mailto:lucasbrandscalesofficial@gmail.com"
                      className="group flex gap-2.5 rounded-xl border border-border/70 bg-background/90 p-3 shadow-sm ring-1 ring-black/[0.03] transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md hover:shadow-primary/10"
                    >
                      <Mail size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                      <span className="min-w-0 break-all leading-snug">lucasbrandscalesofficial@gmail.com</span>
                    </a>
                    <a
                      href="https://instagram.com/lucasmarketing.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit max-w-full items-center gap-2.5 rounded-xl border border-border/70 bg-background/90 px-3 py-2.5 shadow-sm ring-1 ring-black/[0.03] transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md hover:shadow-primary/10"
                    >
                      <Instagram size={16} className="shrink-0 text-primary" aria-hidden />
                      <span className="font-medium text-foreground">@lucasmarketing.co</span>
                    </a>
                  </div>
                </div>
              </div>

              <form className="min-w-0 space-y-3 bg-background/80 p-6 backdrop-blur-sm md:p-8 lg:p-10" onSubmit={(e) => e.preventDefault()}>
                <p className="mb-1 text-sm font-semibold text-foreground">Or send a message</p>
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground shadow-sm ring-1 ring-black/[0.03] focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground shadow-sm ring-1 ring-black/[0.03] focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm ring-1 ring-black/[0.03] focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Business type and city."
                  />
                </div>
                <Button type="submit" variant="secondary" size="lg" className="w-full font-semibold shadow-sm">
                  Send <ArrowRight size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
