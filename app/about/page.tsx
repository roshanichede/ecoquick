import Link from "next/link";
import { LandingHeader } from "../../components/layout/LandingHeader";
import { LandingFooter } from "../../components/layout/LandingFooter";

export default function AboutPage() {
  return (
    <div className="landing-shell min-h-screen bg-white text-[#3e0074] antialiased">
      <div className="landing-grid-layer" />

      <div className="landing-content mx-auto w-full max-w-6xl px-6 md:px-10">
        <LandingHeader />
      </div>

      <main className="pt-16 md:pt-24">
        {/* Hero */}
        <section className="pb-16 px-6 md:px-10 md:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-12">
              <div className="col-span-12 lg:col-span-10">
                <h1 className="satoshi-thin mb-8 text-[12vw] leading-[0.9] uppercase md:mb-12 md:text-[8vw]">
                  Redefining
                  <br />
                  <span className="md:pl-[8vw]">The Pulse</span>
                  <br />
                  Of The City
                </h1>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <p className="max-w-xl text-lg font-light leading-relaxed text-[#3e0074]/80 md:text-xl">
                  We are building the architectural framework for zero-emission
                  urban logistics. Born from a necessity for speed and a
                  commitment to the planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="border-y border-[#3e0074]/5 bg-[rgba(62,0,116,0.05)] py-16 px-6 md:px-10 md:py-24">
          <div className="mx-auto max-w-3xl text-center md:text-left">
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">
              Our Mission
            </span>
            <h2 className="satoshi-thin text-2xl font-light leading-snug italic md:text-4xl lg:text-5xl">
              &quot;To accelerate the global transition to sustainable urban
              distribution by optimizing every meter, ensuring speed never costs
              the Earth.&quot;
            </h2>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-6 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col items-start justify-between border-b border-[#3e0074]/10 pb-8 md:mb-16 md:flex-row md:items-end">
              <h2 className="satoshi-thin mb-4 text-5xl uppercase md:mb-0 md:text-7xl">
                Process
              </h2>
              <p className="max-w-[200px] text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 md:text-right">
                Four stages of seamless, carbon-neutral logistics.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-12">
              {[
                {
                  k: "01",
                  title: "Order Placed",
                  body: "Automated ingestion into our high-speed dispatch architecture.",
                },
                {
                  k: "02",
                  title: "Instant Dispatch",
                  body: "Predictive routing assigns the nearest eco-rider in sub-seconds.",
                },
                {
                  k: "03",
                  title: "Eco-Delivery",
                  body: "Zero-emission transit via our proprietary electric fleet.",
                },
                {
                  k: "04",
                  title: "Verification",
                  body: "Proof of delivery verified with end-to-end encryption.",
                },
              ].map((step) => (
                <div
                  key={step.k}
                  className="group col-span-12 border-l border-[#3e0074]/10 py-8 pl-6 sm:col-span-6 lg:col-span-3"
                >
                  <span className="satoshi-thin text-3xl opacity-20 transition-opacity group-hover:opacity-100">
                    {step.k}
                  </span>
                  <h3 className="satoshi-bold mt-6 mb-3 text-base uppercase">
                    {step.title}
                  </h3>
                  <p className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.2em] opacity-60">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#fafafa] py-16 px-6 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-10 md:grid-cols-12">
              <div className="mb-12 col-span-12 lg:col-span-4 lg:sticky lg:top-32 lg:mb-0">
                <h2 className="satoshi-thin mb-6 text-5xl uppercase md:text-7xl">
                  Values
                </h2>
                <div className="h-px w-16 bg-[#3e0074]/20" />
              </div>

              <div className="col-span-12 grid border border-[#3e0074]/10 bg-[#3e0074]/10 lg:col-span-8 md:grid-cols-2 gap-px">
                {[
                  {
                    title: "Speed & Reliability",
                    body: "Precision is the heartbeat of our operation, measured in milliseconds.",
                    variant: "white",
                  },
                  {
                    title: "Sustainability",
                    body: "Committed to a 100% carbon-neutral future, without compromise.",
                    variant: "subtle",
                  },
                  {
                    title: "Simplicity",
                    body: "Elegant solutions for complex logistics problems.",
                    variant: "subtle",
                  },
                  {
                    title: "Community",
                    body: "Empowering local commerce and providing dignified driver roles.",
                    variant: "white",
                  },
                ].map((value, idx) => (
                  <div
                    key={value.title}
                    className={`space-y-4 p-10 md:p-12 ${
                      value.variant === "subtle"
                        ? "bg-[rgba(62,0,116,0.05)]"
                        : "bg-white"
                    }`}
                  >
                    <h4 className="satoshi-bold text-xl uppercase">
                      {value.title}
                    </h4>
                    <p className="text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] opacity-60">
                      {value.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="relative z-10 col-span-12 lg:col-span-6">
                <h2 className="satoshi-thin mb-12 text-5xl uppercase md:mb-16 md:text-7xl">
                  Our Story
                </h2>
                <div className="relative space-y-16 md:space-y-20">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-[#3e0074]/10" />
                  {[
                    {
                      label: "2020 — Genesis",
                      title: "The First Mile",
                      body: "Reclaiming city streets from diesel fumes. We proved that efficiency and ecology are not mutually exclusive.",
                    },
                    {
                      label: "2022 — Expansion",
                      title: "The Scale-Up",
                      body: "Developing our proprietary AI engine allowed us to expand across entire metropolitan regions.",
                    },
                    {
                      label: "Present — Impact",
                      title: "The Future",
                      body: "EcoQuick is the benchmark for sustainable logistics, serving thousands with purpose.",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="relative pl-10 md:pl-16"
                    >
                      <div className="absolute left-0 top-2 h-px w-4 bg-[#3e0074]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
                        {item.label}
                      </span>
                      <h4 className="satoshi-bold mt-3 mb-4 text-2xl uppercase">
                        {item.title}
                      </h4>
                      <p className="max-w-md text-base font-light leading-relaxed text-[#3e0074]/70">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden h-[600px] lg:col-span-6 lg:block">
                <div className="relative h-full w-full">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhKcjyztmFZGN68NIFNIUf-34BnGfiwhqcjbuccaL6ZMl1ze4dP383ErbNOy_C_4m8SbinEGjk7s-eAWmWHDO1cYtRMSw0hl0mw3uqwyEPs59KlVZLLKFvpdBgaq7_7YanCoooFkqM43WU5jMB7pZMGv5v7YRkfxVaBronbOz3kB4Yihp6FntBRtgykZQVMTdfn0gxARO9S-yuqxZhl82xRYH1oS_drw4nSWiizMTHc4j5I3voN3VlKrq7eklc0oqvMZ4o14AtmD4"
                    alt="EcoQuick Delivery"
                    className="h-full w-full object-cover opacity-80 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto min-h-[50vh] max-w-6xl border border-[#3e0074]/5 bg-[rgba(62,0,116,0.05)] p-12 md:p-24 lg:p-32">
            <div className="relative z-10 w-full">
              <div className="grid items-center gap-10 md:grid-cols-12">
                <div className="col-span-12 lg:col-span-7">
                  <h2 className="satoshi-thin mb-8 text-5xl uppercase leading-[0.9] md:text-7xl lg:text-8xl">
                    Join The
                    <br />
                    Revolution
                  </h2>
                  <p className="mb-10 text-xs font-light uppercase tracking-[0.2em] opacity-60 md:text-sm">
                    Building the future of urban movement together.
                  </p>
                </div>
                <div className="col-span-12 flex flex-col gap-4 sm:flex-row lg:col-span-5 lg:flex-col">
                  <Link
                    href="/signup"
                    className="sharp-corners flex-1 border border-[#3e0074] bg-[#3e0074] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-black"
                  >
                    Book your first delivery
                  </Link>
                  <Link
                    href="/signup"
                    className="sharp-corners flex-1 border border-[#3e0074] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#3e0074] transition-all hover:bg-[#3e0074] hover:text-white"
                  >
                    Become an eco driver
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="landing-content mx-auto w-full max-w-6xl px-6 md:px-10">
        <LandingFooter />
      </div>
    </div>
  );
}

