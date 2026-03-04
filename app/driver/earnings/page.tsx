"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BrandLogo } from "@/components/layout/BrandLogo";

export default function DriverEarningsPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedDriverEmail = window.sessionStorage.getItem(
      "ecoquickDriverEmail",
    );
    if (!storedDriverEmail) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-primary">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/10 bg-white px-8 py-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <BrandLogo size="sm" labelSuffix="Driver" />
          <nav className="hidden items-center gap-8 md:flex">
            <button
              className="text-xs font-bold uppercase tracking-widest text-primary/60 transition-colors hover:text-primary"
              onClick={() => router.push("/driver")}
            >
              Dashboard
            </button>
            <span className="border-b-2 border-primary text-xs font-bold uppercase tracking-widest text-primary">
              Earnings
            </span>
            <button className="text-xs font-bold uppercase tracking-widest text-primary/60 transition-colors hover:text-primary">
              Deliveries
            </button>
            <button className="text-xs font-bold uppercase tracking-widest text-primary/60 transition-colors hover:text-primary">
              Fleet
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <button className="p-2 transition-colors hover:bg-primary/5">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 transition-colors hover:bg-primary/5">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
          <div className="h-10 w-10 border border-primary bg-gray-100" />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col space-y-16 px-8 py-12">
        <section className="flex flex-col items-start gap-6 border-b-2 border-primary pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-black uppercase tracking-tighter text-primary text-5xl md:text-7xl lg:text-8xl">
              Weekly Earnings
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary/60">
              <span>Period: Oct 23 — Oct 29</span>
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span className="text-accent">Live Status: Active</span>
            </div>
          </div>
          <button className="sharp-edge flex items-center gap-3 bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:opacity-90">
            <span className="material-symbols-outlined text-sm">download</span>
            Statement
          </button>
        </section>

        <section className="grid grid-cols-1 gap-0 border-2 border-primary lg:grid-cols-12">
          <div className="grid grid-cols-2 lg:col-span-8">
            <div className="flex aspect-square flex-col justify-between border-r border-b border-primary/20 bg-white p-10 lg:aspect-auto">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                Today&apos;s Earnings
              </p>
              <div>
                <p className="font-black leading-none text-4xl md:text-5xl">
                  $248.50
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-accent">
                  +18% Peak Hour
                </p>
              </div>
            </div>
            <div className="flex aspect-square flex-col justify-between border-b border-primary bg-primary p-10 text-white lg:aspect-auto">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                Deliveries
              </p>
              <div>
                <p className="font-black leading-none text-4xl md:text-5xl">
                  48
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest">
                  Completed
                </p>
              </div>
            </div>
            <div className="flex aspect-square flex-col justify-between border-r border-primary bg-primary p-10 text-white lg:aspect-auto">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                Drive Time
              </p>
              <div>
                <p className="font-black leading-none text-4xl md:text-5xl">
                  32.2h
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest">
                  Active Week
                </p>
              </div>
            </div>
            <div className="flex aspect-square flex-col justify-between bg-white p-10 lg:aspect-auto">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                Avg. Per Trip
              </p>
              <div>
                <p className="font-black leading-none text-4xl md:text-5xl">
                  $25.8
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Top 5% Performance
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between border-l-2 border-primary bg-primary p-10 lg:col-span-4">
            <div>
              <div className="mb-6 flex items-center gap-2 text-white">
                <span className="material-symbols-outlined">eco</span>
                <h3 className="text-xs font-bold uppercase tracking-widest">
                  Incentive Status
                </h3>
              </div>
              <h2 className="mb-4 font-black uppercase leading-tight text-white text-3xl md:text-4xl">
                Eco-Bonus Active
              </h2>
              <p className="max-w-xs text-sm font-medium leading-relaxed text-white/70">
                You&apos;ve maintained 100% electric miles this period. Bonus
                applied to all completed trips.
              </p>
            </div>
            <div className="mt-12">
              <div className="text-[64px] font-black leading-none text-accent md:text-[80px]">
                +10%
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                Revenue Multiplier
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-12 py-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-12 flex items-end justify-between">
              <h3 className="text-2xl font-black uppercase tracking-tight">
                Performance Graph
              </h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Daily Total
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-80 items-end justify-between gap-4 border-b-2 border-primary pb-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, index) => {
                  const heights = [45, 60, 90, 50, 100, 75, 35];
                  const height = heights[index];
                  const isPeak = day === "Wed" || day === "Fri";
                  return (
                    <div
                      key={day}
                      className="flex w-full flex-col items-center gap-4"
                    >
                      <div
                        className={`w-full transition-all ${
                          isPeak ? "bg-primary" : "bg-primary/10 hover:bg-primary"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-[10px] font-bold uppercase">
                        {day}
                      </span>
                    </div>
                  );
                },
              )}
            </div>
          </div>

          <div className="flex flex-col justify-end space-y-6">
            <div className="border border-primary/20 bg-white p-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest opacity-60">
                Efficiency Rating
              </p>
              <p className="text-4xl font-black">98.4%</p>
              <div className="mt-4 h-1 w-full bg-primary/10">
                <div className="h-full bg-accent" style={{ width: "98.4%" }} />
              </div>
            </div>
            <div className="border border-primary/20 bg-white p-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest opacity-60">
                Carbon Saved
              </p>
              <p className="text-4xl font-black">124kg</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-accent">
                Equivalent to 6 trees
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black uppercase tracking-tight">
              Completed Deliveries
            </h3>
            <div className="flex gap-4">
              <button className="border-b-2 border-primary text-[10px] font-black uppercase tracking-[0.2em]">
                Current Week
              </button>
              <button className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 transition-opacity hover:opacity-100">
                History
              </button>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <table className="w-full border-t-2 border-primary">
              <thead>
                <tr className="border-b border-primary/10 text-left">
                  <th className="px-4 py-6 text-[10px] font-black uppercase tracking-widest">
                    Trip Reference
                  </th>
                  <th className="px-4 py-6 text-[10px] font-black uppercase tracking-widest">
                    Date / Time
                  </th>
                  <th className="px-4 py-6 text-center text-[10px] font-black uppercase tracking-widest">
                    Efficiency
                  </th>
                  <th className="px-4 py-6 text-right text-[10px] font-black uppercase tracking-widest">
                    Net Earning
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                {[
                  {
                    id: "#EQ-49221",
                    label: "Retail Logistics",
                    date: "OCT 29, 2023",
                    time: "16:22 PM",
                    rating: "A+ Rating",
                    earning: "$24.50",
                  },
                  {
                    id: "#EQ-49218",
                    label: "Express Courier",
                    date: "OCT 29, 2023",
                    time: "14:15 PM",
                    rating: "A Rating",
                    earning: "$18.20",
                  },
                  {
                    id: "#EQ-49195",
                    label: "Bulk Delivery",
                    date: "OCT 28, 2023",
                    time: "11:04 AM",
                    rating: "A+ Rating",
                    earning: "$42.00",
                  },
                ].map((row) => (
                  <tr
                    key={row.id}
                    className="group transition-colors hover:bg-primary/[0.02]"
                  >
                    <td className="px-4 py-6">
                      <div className="text-lg font-black">{row.id}</div>
                      <div className="text-[10px] font-bold uppercase opacity-50">
                        {row.label}
                      </div>
                    </td>
                    <td className="px-4 py-6">
                      <div className="text-sm font-bold">{row.date}</div>
                      <div className="text-[10px] font-bold uppercase opacity-60">
                        {row.time}
                      </div>
                    </td>
                    <td className="px-4 py-6 text-center">
                      <span className="bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                        {row.rating}
                      </span>
                    </td>
                    <td className="px-4 py-6 text-right">
                      <div className="text-xl font-black">{row.earning}</div>
                      <div className="text-[10px] font-bold uppercase text-accent">
                        +10% ECO
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8 flex justify-center">
              <button className="sharp-edge border-2 border-primary px-12 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-primary hover:text-white">
                Load Comprehensive History
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-primary/10 bg-white px-8 py-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-primary/30">
              <span className="material-symbols-outlined">electric_bolt</span>
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                EcoQuick Architectural Console v2.4
              </p>
            </div>
          </div>
          <div className="flex gap-12">
            <button className="text-[10px] font-bold uppercase tracking-widest opacity-40 transition-opacity hover:opacity-100">
              Network Status
            </button>
            <button className="text-[10px] font-bold uppercase tracking-widest opacity-40 transition-opacity hover:opacity-100">
              Legal Documentation
            </button>
            <button className="text-[10px] font-bold uppercase tracking-widest opacity-40 transition-opacity hover:opacity-100">
              Support Systems
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

