import { cn } from "@/lib/utils";

type EyebrowTone =
  | "default"
  | "destructive"
  | "sky"
  | "violet"
  | "fuchsia"
  | "amber"
  | "teal"
  | "indigo";

type EyebrowProps = {
  children: React.ReactNode;
  align?: "center" | "start" | "responsive-start";
  variant?: EyebrowTone;
  className?: string;
};

const toneClass: Record<EyebrowTone, string> = {
  default:
    "border-primary/25 bg-gradient-to-r from-primary/10 via-primary/[0.07] to-emerald-500/10 text-primary ring-primary/10",
  destructive:
    "border-destructive/30 bg-gradient-to-r from-destructive/[0.12] via-destructive/[0.08] to-destructive/[0.05] text-destructive ring-destructive/15",
  sky: "border-sky-400/35 bg-gradient-to-r from-sky-500/15 via-cyan-500/10 to-primary/10 text-sky-800 ring-sky-400/15",
  violet:
    "border-violet-400/35 bg-gradient-to-r from-violet-500/12 via-indigo-500/10 to-violet-500/8 text-violet-700 ring-violet-400/15",
  fuchsia:
    "border-fuchsia-400/35 bg-gradient-to-r from-fuchsia-500/12 via-purple-500/10 to-violet-500/8 text-fuchsia-800 ring-fuchsia-400/15",
  amber:
    "border-amber-400/40 bg-gradient-to-r from-amber-500/14 via-orange-500/10 to-amber-500/8 text-amber-800 ring-amber-400/15",
  teal: "border-teal-400/35 bg-gradient-to-r from-teal-500/12 via-cyan-500/10 to-teal-500/8 text-teal-800 ring-teal-400/15",
  indigo:
    "border-indigo-400/35 bg-gradient-to-r from-indigo-600/14 via-violet-600/10 to-indigo-500/8 text-indigo-800 ring-indigo-400/15",
};

const Eyebrow = ({ children, align = "center", variant = "default", className }: EyebrowProps) => {
  const alignClass =
    align === "center"
      ? "justify-center"
      : align === "start"
        ? "justify-start"
        : "justify-center lg:justify-start";

  return (
    <div className={cn("mb-2 flex", alignClass, className)}>
      <span
        className={cn(
          "inline-flex items-center rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] shadow-sm ring-1",
          toneClass[variant]
        )}
      >
        {children}
      </span>
    </div>
  );
};

export default Eyebrow;
