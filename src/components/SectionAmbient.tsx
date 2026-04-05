import { cn } from "@/lib/utils";

export type AmbientVariant =
  | "hero"
  | "pain"
  | "services"
  | "results"
  | "demo"
  | "about"
  | "process"
  | "contact";

const BLOB =
  "pointer-events-none absolute rounded-full blur-3xl";

/** Three layered blobs — palette changes per section so the page doesn’t feel like one flat wash. */
const LAYERS: Record<AmbientVariant, [string, string, string]> = {
  hero: [
    cn(BLOB, "-left-[20%] top-[-10%] h-[min(480px,80vw)] w-[min(480px,80vw)] bg-sky-400/[0.16]"),
    cn(BLOB, "-right-[12%] top-[20%] h-[min(380px,70vw)] w-[min(380px,70vw)] bg-cyan-400/[0.10]"),
    cn(BLOB, "left-[35%] top-1/2 h-56 w-56 -translate-y-1/2 bg-primary/[0.09]"),
  ],
  pain: [
    cn(BLOB, "-left-[18%] top-[-8%] h-[min(460px,78vw)] w-[min(460px,78vw)] bg-rose-400/[0.14]"),
    cn(BLOB, "-right-[20%] bottom-[-15%] h-[min(400px,72vw)] w-[min(400px,72vw)] bg-red-500/[0.09]"),
    cn(BLOB, "right-[25%] top-[40%] h-48 w-48 bg-amber-500/[0.07]"),
  ],
  services: [
    cn(BLOB, "-left-[15%] top-[-12%] h-[min(500px,82vw)] w-[min(500px,82vw)] bg-violet-500/[0.11]"),
    cn(BLOB, "-right-[10%] bottom-[-18%] h-[min(420px,75vw)] w-[min(420px,75vw)] bg-indigo-500/[0.10]"),
    cn(BLOB, "left-1/2 top-[45%] h-60 w-60 -translate-x-1/2 bg-slate-400/[0.07]"),
  ],
  results: [
    cn(BLOB, "-left-[20%] top-[-10%] h-[min(480px,80vw)] w-[min(480px,80vw)] bg-primary/[0.14]"),
    cn(BLOB, "-right-[15%] bottom-[-20%] h-[min(420px,75vw)] w-[min(420px,75vw)] bg-emerald-500/[0.10]"),
    cn(BLOB, "left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-sky-400/[0.06]"),
  ],
  demo: [
    cn(BLOB, "-left-[22%] top-[-8%] h-[min(470px,80vw)] w-[min(470px,80vw)] bg-amber-400/[0.13]"),
    cn(BLOB, "-right-[8%] bottom-[-12%] h-[min(400px,72vw)] w-[min(400px,72vw)] bg-orange-500/[0.09]"),
    cn(BLOB, "left-[20%] bottom-[15%] h-52 w-52 bg-yellow-400/[0.06]"),
  ],
  about: [
    cn(BLOB, "-left-[12%] top-[-15%] h-[min(440px,76vw)] w-[min(440px,76vw)] bg-fuchsia-500/[0.10]"),
    cn(BLOB, "-right-[18%] bottom-[-10%] h-[min(380px,70vw)] w-[min(380px,70vw)] bg-violet-500/[0.11]"),
    cn(BLOB, "right-[30%] top-[30%] h-48 w-48 bg-purple-400/[0.07]"),
  ],
  process: [
    cn(BLOB, "-left-[20%] top-[-10%] h-[min(460px,78vw)] w-[min(460px,78vw)] bg-teal-500/[0.12]"),
    cn(BLOB, "-right-[15%] bottom-[-22%] h-[min(410px,74vw)] w-[min(410px,74vw)] bg-cyan-500/[0.10]"),
    cn(BLOB, "left-[40%] top-1/2 h-56 w-56 -translate-y-1/2 bg-sky-500/[0.07]"),
  ],
  contact: [
    cn(BLOB, "-left-[18%] top-[-12%] h-[min(500px,82vw)] w-[min(500px,82vw)] bg-indigo-600/[0.11]"),
    cn(BLOB, "-right-[12%] bottom-[-15%] h-[min(430px,76vw)] w-[min(430px,76vw)] bg-violet-600/[0.10]"),
    cn(BLOB, "left-1/2 top-[35%] h-64 w-64 -translate-x-1/2 bg-blue-600/[0.08]"),
  ],
};

type Props = { variant: AmbientVariant };

const SectionAmbient = ({ variant }: Props) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
    {LAYERS[variant].map((layer, i) => (
      <div key={i} className={layer} />
    ))}
  </div>
);

export default SectionAmbient;
