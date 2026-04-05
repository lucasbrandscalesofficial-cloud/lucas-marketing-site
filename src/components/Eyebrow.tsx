import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  align?: "center" | "start" | "responsive-start";
  variant?: "default" | "destructive";
  className?: string;
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
          "inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] shadow-sm ring-1",
          variant === "destructive"
            ? "border border-destructive/30 bg-gradient-to-r from-destructive/[0.12] via-destructive/[0.08] to-destructive/[0.05] text-destructive ring-destructive/15"
            : "border border-primary/25 bg-gradient-to-r from-primary/10 via-primary/[0.07] to-emerald-500/10 text-primary ring-primary/10"
        )}
      >
        {children}
      </span>
    </div>
  );
};

export default Eyebrow;
