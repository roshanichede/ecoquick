import Link from "next/link";
import { LandingHeader } from "../../components/layout/LandingHeader";
import { LandingFooter } from "../../components/layout/LandingFooter";

export default function BusinessPage() {
  return (
    <div className="landing-shell bg-white text-[#151018] antialiased">
      <div className="landing-grid-layer" />

      <div className="landing-content mx-auto w-full max-w-6xl px-6 lg:px-16">
        <LandingHeader />
      </div>

      <main className="landing-content flex min-h-screen flex-col overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white px-6 pb-32 pt-24 lg:px-16 lg:pb-40 lg:pt-32">
          <div className="absolute top-0 right-0 -z-10 h-full w-1/3 border-l border-[#f2f0f5] bg-[#faf9fc]" />
          <div className="absolute bottom-0 left-0 -z-10 h-1/3 w-2/3 border-t border-[#f2f0f5]" />

          <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-12">
            <div className="relative z-10 flex flex-col gap-10 lg:col-span-6">
              <div className="space-y-6">
                <div className="inline-flex w-fit items-center gap-2 border border-[#3e0075]/20 bg-[#3e0075]/5 px-3 py-1">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-white/40 text-[#ff9b16]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19 10 11 14 15 20 7" />
                      <path d="M4 4v15h16" />
                    </svg>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3e0075]">
                    High-Performance Logistics
                  </span>
                </div>
                <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-[#151018] lg:text-7xl">
                  Scale your business with{" "}
                  <span className="italic text-[#3e0075]">eco-friendly</span>{" "}
                  delivery.
                </h1>
                <p className="max-w-xl text-lg font-light leading-loose text-[#5a5a5a] lg:text-xl">
                  Comprehensive delivery infrastructure architected for
                  enterprise businesses. Reduce your carbon footprint without
                  sacrificing speed or reliability.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-4">
                <Link
                  href="/signup"
                  className="flex h-14 items-center gap-3 bg-[#3e0075] px-10 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#3e0075]/20 transition-all hover:bg-[#2a0050]"
                >
                  Get started <span>→</span>
                </Link>
                <a
                  href="#solutions"
                  className="flex h-14 items-center border border-[#151018]/20 px-10 text-sm font-bold uppercase tracking-[0.2em] text-[#151018] transition-colors hover:border-[#3e0075] hover:text-[#3e0075]"
                >
                  View solutions
                </a>
              </div>
            </div>

            <div className="relative flex h-full items-center justify-center lg:col-span-6 lg:justify-end">
              <div className="relative aspect-[4/5] w-full max-w-lg lg:aspect-square">
                <div className="absolute -inset-4 border border-[#e5e5e5]" />
                <div className="absolute -inset-2 z-10 border border-[#f0f0f0] bg-white shadow-xl shadow-gray-200/50">
                  <div className="relative h-full w-full overflow-hidden bg-gray-50">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo3E0Te4E9J0TWFHBghTHzhry9jahaqxiEH7-KRU5Skpm2hnhH2ImiygamatCSB9wQmCTen8k9NJkY2X0BJM6bILl0bLR4GBwQIMoQVIl8NswKRPrgI3SPRx2X7YMSZfF5HEBMdGNCg5ea4Vkzd4hSPgieecSpAOIgFJ4y-cM8mRtV7Ty9X1QK__lUoE2Z_lHzdZPrLvPX10vm1_nm2bcGi6EaYRjqkNx7nNZ65Qpp8cXBlNpCLJV7R2LK-qASwev2mCyXZnbZVpc"
                      alt="Logistics warehouse interior"
                      className="h-full w-full object-cover opacity-90 transition-transform duration-[1000ms] hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#3e0075]/20 to-transparent mix-blend-overlay" />
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 z-20 max-w-[200px] border border-white/50 bg-white/90 p-6 shadow-2xl backdrop-blur-md">
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5a5a5a]">
                      Efficiency
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded bg-[#ff9b16]/10 text-[#ff9b16]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="4" y="10" width="3" height="8" />
                        <rect x="10.5" y="7" width="3" height="11" />
                        <rect x="17" y="4" width="3" height="14" />
                      </svg>
                    </span>
                  </div>
                  <div className="font-display text-3xl font-bold text-[#3e0075]">
                    +142%
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#5a5a5a]">
                    Year-over-year growth for partner fleets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          id="solutions"
          className="relative overflow-hidden border-y border-[#f0ebf5] bg-[#faf9fc]"
        >
          <div className="pointer-events-none architectural-grid absolute inset-0 opacity-30" />
          <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
            <div className="grid divide-y divide-[#e0dce8] md:grid-cols-3 md:divide-y-0 md:divide-x">
              {[
                {
                  title: "Cost Optimization",
                  body: "Reduce operational overhead significantly. Our AI-driven routing engine cuts costs by up to 40%.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M12 7v10" />
                      <path d="M9 10c0-1.1.9-2 3-2s3 .9 3 2-1 2-3 2-3 .9-3 2 1 2 3 2 3-.9 3-2" />
                    </svg>
                  ),
                },
                {
                  title: "Seamless Integration",
                  body: "Plug-and-play architecture for your stack. We guarantee 99.9% uptime for mission-critical logistics.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 3h4v4H5zM15 3h4v4h-4zM5 17h4v4H5zM15 17h4v4h-4z" />
                      <path d="M7 7v10M17 7v10M9 5h6M9 19h6" />
                    </svg>
                  ),
                },
                {
                  title: "Enterprise Support",
                  body: "Direct line to specialized logistics experts available 24/7 for immediate resolution.",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M7 9v2" />
                      <path d="M12 9v2" />
                      <path d="M17 9v2" />
                      <path d="M8 17h8" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group py-20 md:px-12 lg:px-16"
                >
                  <div className="flex h-full flex-col justify-between gap-8">
                    <div className="flex size-12 items-center justify-center border border-[#e0dce8] bg-white text-2xl text-[#ff9b16] shadow-sm transition-colors group-hover:border-[#3e0075]/30">
                      {item.icon}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-medium tracking-tight text-[#151018]">
                        {item.title}
                      </h3>
                      <p className="font-light leading-relaxed text-[#5a5a5a]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tailored solutions */}
        <section
          id="api"
          className="bg-white px-6 py-32 lg:px-16"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-20 grid items-end gap-16 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-display text-4xl font-medium tracking-tight text-[#151018] lg:text-5xl">
                  Tailored Business Solutions
                </h2>
                <p className="mt-6 max-w-2xl text-xl font-light leading-relaxed text-[#5a5a5a]">
                  Scalable infrastructure built for the complex demands of
                  modern commerce.
                </p>
              </div>
              <div className="lg:col-span-5 flex lg:justify-end">
                <div className="h-px flex-grow self-center bg-[#e5e5e5] lg:w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px border border-[#f0f0f0] bg-[#f0f0f0] md:grid-cols-2">
              {/* Bulk Delivery */}
              <div className="group relative h-[420px] overflow-hidden bg-white">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-[1000ms] group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1566576912906-600aceeb7aef?q=80&w=2070&auto=format&fit=crop)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f23]/90 via-[#1a0f23]/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="mb-4 flex items-end justify-between border-b border-white/20 pb-4">
                      <h3 className="font-display text-2xl font-medium text-white">
                        Bulk Delivery
                      </h3>
                      <span className="bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#ff9b16] backdrop-blur-sm">
                        High volume
                      </span>
                    </div>
                    <p className="max-w-sm text-base font-light leading-relaxed text-white/80 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                      Efficient handling of high-volume orders with consolidated
                      pickup and drop-off points designed for scale.
                    </p>
                  </div>
                </div>
              </div>

              {/* Account management */}
              <div className="group relative flex h-[420px] flex-col justify-between bg-white p-10 transition-colors hover:bg-[#faf9fc]">
                <div className="flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center border border-[#3e0075]/10 bg-[#3e0075]/5 text-[#ff9b16]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="8.5" r="3" />
                      <circle cx="17" cy="9.5" r="3" />
                      <path d="M4 19.5c.6-2.3 2.5-4 5-4s4.4 1.7 5 4" />
                      <path d="M11.5 18.5c.7-1.9 2.2-3 4-3 2.2 0 3.8 1.4 4.5 3.5" />
                    </svg>
                  </div>
                  <span className="text-6xl font-thin text-[#e5e5e5] transition-colors group-hover:text-[#3e0075]/10">
                    ◔
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-[#151018]">
                    Account Management
                  </h3>
                  <p className="mt-3 text-base font-light leading-relaxed text-[#5a5a5a]">
                    Dedicated account managers assigned to optimize your
                    logistics strategy quarterly, ensuring peak performance.
                  </p>
                  <div className="mt-6 h-px w-12 bg-[#3e0075] opacity-30 transition-all duration-700 ease-out group-hover:w-full" />
                </div>
              </div>

              {/* API automation */}
              <div className="group relative flex h-[420px] flex-col justify-between bg-white p-10 transition-colors hover:bg-[#faf9fc]">
                <div className="flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center border border-[#3e0075]/10 bg-[#3e0075]/5 text-[#ff9b16]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 4c2 2 4 2 6 0" />
                      <path d="M7 20c2-2 4-2 6 0" />
                      <path d="M7 4v16" />
                      <path d="M13 4v16" />
                      <path d="M10 9h4" />
                      <path d="M6 15h4" />
                    </svg>
                  </div>
                  <span className="text-6xl font-thin text-[#e5e5e5] transition-colors group-hover:text-[#3e0075]/10">
                    ◎
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-[#151018]">
                    API Automation
                  </h3>
                  <p className="mt-3 text-base font-light leading-relaxed text-[#5a5a5a]">
                    Full webhook support and RESTful API to automate your entire
                    logistics workflow instantly and reliably.
                  </p>
                  <div className="mt-6 h-px w-12 bg-[#3e0075] opacity-30 transition-all duration-700 ease-out group-hover:w-full" />
                </div>
              </div>

              {/* White label */}
              <div className="group relative h-[420px] overflow-hidden bg-white">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-[1000ms] group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1626260848529-58d3509903f6?q=80&w=2070&auto=format&fit=crop)",
                  }}
                />
                <div className="absolute inset-0 bg-[#3e0075]/90 mix-blend-multiply" />
                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="mb-4 flex items-end justify-between border-b border-white/20 pb-4">
                      <h3 className="font-display text-2xl font-medium text-white">
                        White-Label Solutions
                      </h3>
                      <span className="border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                        Enterprise
                      </span>
                    </div>
                    <p className="max-w-sm text-base font-light leading-relaxed text-white/80 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                      Custom branding for your delivery tracking pages and
                      notifications to maintain seamless brand consistency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="relative bg-[#faf9fc] px-6 py-32 lg:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
          <div className="relative z-10 mx-auto max-w-[1400px]">
            <div className="mx-auto mb-24 max-w-3xl text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-[#151018]">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-lg font-light text-[#5a5a5a]">
                Choose the infrastructure that fits your scale.
              </p>
            </div>

            <div className="grid items-start gap-8 md:grid-cols-3">
              {/* Starter */}
              <div className="flex flex-col border border-white bg-white/60 p-0 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/80 hover:shadow-2xl">
                <div className="flex h-full flex-col p-10">
                  <div className="mb-8">
                    <h3 className="mb-2 text-lg font-bold uppercase tracking-[0.2em] text-[#151018]">
                      Starter
                    </h3>
                    <p className="text-sm font-light text-[#5a5a5a]">
                      Essential tools for small businesses.
                    </p>
                  </div>
                  <div className="mb-8 flex items-baseline">
                    <span className="font-display text-5xl font-light text-[#151018]">
                      $0
                    </span>
                    <span className="ml-2 text-sm font-medium uppercase tracking-wide text-[#5a5a5a]">
                      / month
                    </span>
                  </div>
                  <ul className="mb-10 flex flex-grow flex-col gap-4">
                    {[
                      "Pay-as-you-go rates",
                      "Standard 9–5 support",
                      "Basic analytics dashboard",
                    ].map((text) => (
                      <li
                        key={text}
                        className="flex items-center gap-3 text-sm text-[#5a5a5a]"
                      >
                        <span className="text-lg text-[#3e0075]">✓</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border border-[#151018]/10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#151018] transition-colors hover:bg-[#151018] hover:text-white">
                    Start free
                  </button>
                </div>
              </div>

              {/* Professional */}
              <div className="relative z-10 flex scale-105 flex-col border border-[#3e0075]/20 bg-white/80 p-0 shadow-2xl backdrop-blur-xl">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#3e0075] to-[#ff9b16]" />
                <div className="flex h-full flex-col p-10">
                  <div className="mb-8 flex items-start justify-between">
                    <div>
                      <h3 className="mb-2 text-lg font-bold uppercase tracking-[0.2em] text-[#3e0075]">
                        Professional
                      </h3>
                      <p className="text-sm font-light text-[#5a5a5a]">
                        Advanced power for growing teams.
                      </p>
                    </div>
                    <span className="border border-[#ff9b16]/20 bg-[#ff9b16]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9b16]">
                      Popular
                    </span>
                  </div>
                  <div className="mb-8 flex items-baseline">
                    <span className="font-display text-5xl font-light text-[#151018]">
                      $499
                    </span>
                    <span className="ml-2 text-sm font-medium uppercase tracking-wide text-[#5a5a5a]">
                      / month
                    </span>
                  </div>
                  <ul className="mb-10 flex flex-grow flex-col gap-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-[#151018]">
                      <span className="text-lg text-[#ff9b16]">★</span>
                      <span className="bg-[#ff9b16]/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-[#ff9b16]">
                        15% discount
                      </span>
                    </li>
                    {[
                      "Priority 24/7 support",
                      "Advanced heatmap analytics",
                      "5 team seats",
                    ].map((text) => (
                      <li
                        key={text}
                        className="flex items-center gap-3 text-sm text-[#5a5a5a]"
                      >
                        <span className="text-lg text-[#3e0075]">✓</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#3e0075] py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#3e0075]/20 transition-colors hover:bg-[#2a0050]">
                    Upgrade now
                  </button>
                </div>
              </div>

              {/* Enterprise */}
              <div className="flex flex-col border border-white bg-white/60 p-0 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/80 hover:shadow-2xl">
                <div className="flex h-full flex-col p-10">
                  <div className="mb-8">
                    <h3 className="mb-2 text-lg font-bold uppercase tracking-[0.2em] text-[#151018]">
                      Enterprise
                    </h3>
                    <p className="text-sm font-light text-[#5a5a5a]">
                      Custom scale for large operations.
                    </p>
                  </div>
                  <div className="mb-8 flex items-baseline">
                    <span className="font-display text-5xl font-light text-[#151018]">
                      Custom
                    </span>
                  </div>
                  <ul className="mb-10 flex flex-grow flex-col gap-4">
                    {[
                      "30%+ shipping discount",
                      "Dedicated account manager",
                      "Custom API & webhooks",
                      "SLA guarantees",
                    ].map((text) => (
                      <li
                        key={text}
                        className="flex items-center gap-3 text-sm text-[#5a5a5a]"
                      >
                        <span className="text-lg text-[#3e0075]">✓</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border border-[#151018]/10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#151018] transition-colors hover:bg-[#151018] hover:text-white">
                    Contact sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership form */}
        <section
          id="contact"
          className="grid min-h-[700px] lg:grid-cols-12"
        >
          <div className="relative flex flex-col justify-center bg-[#3e0075] p-12 text-white lg:col-span-5 lg:p-20">
            <div className="absolute top-0 right-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full border border-white/5" />
            <div className="absolute bottom-0 left-0 size-64 translate-y-1/2 -translate-x-1/3 rounded-full border border-white/5" />
            <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl font-medium uppercase leading-tight lg:text-5xl">
                Apply for
                <br />
                <span className="font-light italic text-white/80">
                  Partnership
                </span>
              </h2>
              <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-white/70">
                Join over 5,000 enterprise partners scaling their logistics with
                EcoQuick today. Fill out the form to request a personalized
                demo.
              </p>
              <div className="mt-12 flex items-center gap-4 border-t border-white/10 py-4">
                <span className="text-2xl text-[#ff9b16]">✔</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                  GDPR Compliant &amp; Secure
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center bg-white p-12 lg:col-span-7 lg:p-24">
            <div className="absolute right-10 top-10 size-20 border-r border-t border-gray-100" />
            <div className="absolute bottom-10 left-10 size-20 border-b border-l border-gray-100" />
            <form className="relative z-10 mx-auto w-full max-w-lg space-y-8 bg-white/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {["First name", "Last name"].map((label) => (
                  <div
                    key={label}
                    className="group flex flex-col gap-3"
                  >
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#5a5a5a] transition-colors group-focus-within:text-[#3e0075]">
                      {label}
                    </label>
                    <input
                      type="text"
                      placeholder={label === "First name" ? "Jane" : "Doe"}
                      className="border-b border-[#e5e5e5] bg-transparent px-0 py-3 text-base placeholder-gray-300 transition-colors focus:border-[#3e0075] focus:outline-none focus:ring-0"
                    />
                  </div>
                ))}
              </div>

              <div className="group flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#5a5a5a] transition-colors group-focus-within:text-[#3e0075]">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="border-b border-[#e5e5e5] bg-transparent px-0 py-3 text-base placeholder-gray-300 transition-colors focus:border-[#3e0075] focus:outline-none focus:ring-0"
                />
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="group flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#5a5a5a] transition-colors group-focus-within:text-[#3e0075]">
                    Company size
                  </label>
                  <select className="border-b border-[#e5e5e5] bg-transparent px-0 py-3 text-base text-[#151018] focus:border-[#3e0075] focus:outline-none focus:ring-0">
                    <option>1–50 employees</option>
                    <option>51–200 employees</option>
                    <option>201–1000 employees</option>
                    <option>1000+ employees</option>
                  </select>
                </div>
                <div className="group flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-[#5a5a5a] transition-colors group-focus-within:text-[#3e0075]">
                    Monthly volume
                  </label>
                  <select className="border-b border-[#e5e5e5] bg-transparent px-0 py-3 text-base text-[#151018] focus:border-[#3e0075] focus:outline-none focus:ring-0">
                    <option>&lt; 1,000 pkgs</option>
                    <option>1k – 10k pkgs</option>
                    <option>10k – 50k pkgs</option>
                    <option>50k+ pkgs</option>
                  </select>
                </div>
              </div>

              <button className="mt-8 h-14 w-full bg-[#151018] text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-colors hover:bg-[#3e0075]">
                Submit request
              </button>
            </form>
          </div>
        </section>

        {/* Transform CTA */}
        <section className="border-t border-[#e5e5e5] bg-[#f8f6fa] px-6 py-32 lg:px-16">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-16 md:flex-row">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-3 border border-[#e5e5e5] bg-white px-4 py-2">
                <div className="size-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5a5a5a]">
                  Systems operational
                </span>
              </div>
              <h2 className="font-display text-4xl font-medium tracking-tight text-[#151018]">
                Ready to transform?
              </h2>
              <p className="max-w-md text-lg font-light text-[#5a5a5a]">
                Our onboarding team is ready to deploy your fleet within 24
                hours.
              </p>
            </div>

            <div className="flex flex-col items-end gap-6">
              <div className="flex items-center gap-6 border border-[#e5e5e5] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="rounded-full bg-[#3e0075]/5 p-4 text-[#ff9b16]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 4a2 2 0 0 1 2.2-2l2.1.4a2 2 0 0 1 1.6 1.6l.3 1.7a2 2 0 0 1-.6 1.8l-1 1a11 11 0 0 0 5 5l1-1a2 2 0 0 1 1.8-.6l1.7.3a2 2 0 0 1 1.6 1.6l.4 2.1A2 2 0 0 1 20 21h-1c-8.3-0.4-15-7.1-15.4-15.4V4Z" />
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#5a5a5a]">
                    Sales hotline
                  </p>
                  <p className="font-display text-2xl font-bold tracking-tight text-[#151018]">
                    +44 20 1234 5678
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-70">
                <span className="text-sm text-[#3e0075]">✓</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#151018]">
                  24/7 enterprise support included
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-16">
        <LandingFooter />
      </div>
    </div>
  );
}

