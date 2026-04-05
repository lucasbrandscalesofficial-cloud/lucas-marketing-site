/** Decorative background blobs — matches the Results section energy. */
const SectionAmbient = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    <div className="absolute -left-[20%] top-[-10%] h-[min(480px,80vw)] w-[min(480px,80vw)] rounded-full bg-primary/[0.14] blur-3xl" />
    <div className="absolute -right-[15%] bottom-[-20%] h-[min(420px,75vw)] w-[min(420px,75vw)] rounded-full bg-emerald-500/[0.10] blur-3xl" />
    <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.06] blur-3xl" />
  </div>
);

export default SectionAmbient;
