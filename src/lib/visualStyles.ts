/** Per-section headline gradients — same technique, different hue stops so blocks feel distinct. */
export const heading = {
  hero: "bg-gradient-to-r from-foreground via-sky-600 to-primary bg-clip-text text-transparent",
  pain: "bg-gradient-to-r from-foreground via-[hsl(0_72%_46%)] to-rose-700 bg-clip-text text-transparent",
  services: "bg-gradient-to-r from-foreground via-violet-600 to-indigo-600 bg-clip-text text-transparent",
  /** Win / proof — original blue → green payoff */
  results:
    "bg-gradient-to-r from-foreground via-primary to-[hsl(160_55%_32%)] bg-clip-text text-transparent",
  demo: "bg-gradient-to-r from-foreground via-amber-600 to-orange-600 bg-clip-text text-transparent",
  about: "bg-gradient-to-r from-foreground via-fuchsia-600 to-violet-600 bg-clip-text text-transparent",
  process: "bg-gradient-to-r from-foreground via-teal-600 to-cyan-600 bg-clip-text text-transparent",
  contact: "bg-gradient-to-r from-foreground via-indigo-600 to-violet-600 bg-clip-text text-transparent",
} as const;

/** @deprecated Use `heading.results` — kept for quick grep */
export const headingGradient = heading.results;
