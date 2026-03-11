import Image from "next/image";

const WORKFLOW_STEPS = [
  {
    k: "01",
    title: "Book instantly",
    body: "Simple interface for immediate dispatch.",
    image: "/ordered.png",
  },
  {
    k: "02",
    title: "Track live",
    body: "Watch your delivery move across the city in real-time.",
    image: "/livetracking.png",
  },
  {
    k: "03",
    title: "Delivered",
    body: "Instant photo confirmation and digital signature.",
    image: "/delivered.png",
  },
] as const;

export function WorkflowSection() {
  return (
    <section id="workflow" className="mt-16 border-t border-zinc-400 pt-12">
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
        01 / Workflow
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {WORKFLOW_STEPS.map((step) => (
          <div
            key={step.k}
            className="space-y-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="overflow-hidden border border-zinc-300 bg-white">
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  priority={step.k === "01"}
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 33vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.12),transparent_60%)] mix-blend-screen" />
                <div className="absolute bottom-4 right-4 rounded-full border border-zinc-300 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-600 backdrop-blur">
                  {step.k}
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-900">
                {step.k}. {step.title}
              </p>
              <p className="mt-1 text-sm text-zinc-600">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

