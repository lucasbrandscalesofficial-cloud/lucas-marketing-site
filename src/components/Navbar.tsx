import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Work", href: "#demos" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/75 shadow-sm shadow-primary/[0.06] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden />
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-lg font-bold tracking-tight text-transparent">
          Lucas Marketing
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="default" className="shadow-md shadow-primary/20" asChild>
            <a href="#contact">Book a Call</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="p-2 text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="space-y-4 border-b border-border/80 bg-background/95 px-6 pb-6 pt-2 shadow-lg shadow-primary/[0.04] backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="default" className="mt-4 w-full shadow-md shadow-primary/20" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>
              Book a Call
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
