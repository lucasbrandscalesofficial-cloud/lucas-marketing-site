import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Instagram } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { ref, visible } = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-block pb-16 md:pb-20">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md ring-1 ring-black/[0.04] md:p-1">
          <div className="grid md:grid-cols-2 md:gap-0">
            <div className="flex flex-col justify-center bg-primary/[0.06] p-6 md:p-8 lg:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Next step</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">Book a call</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">15 minutes. No pressure. See if it makes sense.</p>
              <Button variant="hero" size="lg" className="mt-6 w-full shadow-md sm:w-auto sm:min-w-[220px]" asChild>
                <a href="https://calendly.com/lucasbrandscalesofficial/new-meeting" target="_blank" rel="noopener noreferrer">
                  Book a Call <ArrowRight size={18} />
                </a>
              </Button>
              <div className="mt-8 space-y-2.5 text-sm text-muted-foreground">
                <a
                  href="mailto:lucasbrandscalesofficial@gmail.com"
                  className="group flex gap-2.5 rounded-lg border border-border/80 bg-background/80 p-3 transition-colors hover:border-primary/35 hover:text-foreground"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                  <span className="min-w-0 break-all leading-snug">lucasbrandscalesofficial@gmail.com</span>
                </a>
                <a
                  href="https://instagram.com/lucasmarketing.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit max-w-full items-center gap-2.5 rounded-lg border border-border/80 bg-background/80 px-3 py-2.5 transition-colors hover:border-primary/35 hover:text-foreground"
                >
                  <Instagram size={16} className="shrink-0 text-primary" aria-hidden />
                  <span className="font-medium text-foreground">@lucasmarketing.co</span>
                </a>
              </div>
            </div>

            <form className="min-w-0 space-y-3 p-6 md:p-8 lg:p-10" onSubmit={(e) => e.preventDefault()}>
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
                  className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                  className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Business type and city."
                />
              </div>
              <Button type="submit" variant="secondary" size="lg" className="w-full font-semibold">
                Send <ArrowRight size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
