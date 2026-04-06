import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className="invisible inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm" aria-hidden>
        <Moon size={18} />
        Dark Mode
      </span>
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    const next = isDark ? "light" : "dark";
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { finished: Promise<void> } };
    if (typeof doc.startViewTransition === "function") {
      doc.startViewTransition(() => {
        setTheme(next);
      });
    } else {
      setTheme(next);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-3 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-black/[0.04] transition-colors duration-[900ms] ease-out hover:border-primary/35 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={18} className="shrink-0 text-amber-400" aria-hidden /> : <Moon size={18} className="shrink-0 text-slate-600" aria-hidden />}
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
