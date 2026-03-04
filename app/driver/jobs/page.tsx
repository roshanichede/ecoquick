"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DriverJobsPage() {
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
    <div className="min-h-screen bg-white text-primary">
      <div className="relative flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-6 md:px-12">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">
                local_shipping
              </span>
              <h2 className="text-xl font-black uppercase tracking-tighter">
                EcoQuick
              </h2>
            </div>
            <nav className="hidden items-center gap-10 lg:flex">
              <span className="border-b-2 border-primary pb-1 text-xs font-black uppercase tracking-[0.2em] text-primary">
                Available Jobs
              </span>
              <button className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-primary">
                My Trips
              </button>
              <button
                className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-primary"
                onClick={() => router.push("/driver/earnings")}
              >
                Earnings
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-2 text-gray-400 md:flex">
              <span className="material-symbols-outlined text-xl">search</span>
              <input
                type="text"
                placeholder="SEARCH CITY..."
                className="w-40 border-none bg-transparent text-[10px] font-black uppercase tracking-widest placeholder:text-gray-300 focus:ring-0"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="text-primary">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="size-10 overflow-hidden bg-gray-100" />
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 py-12">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h1 className="mb-2 text-4xl font-black uppercase tracking-tighter">
                Available Jobs
              </h1>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                Live dispatch feed • Updated every 30s
              </p>
            </div>
            <div className="flex flex-wrap gap-0">
              <button className="sharp-edge border-r border-white/10 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:brightness-110">
                Near Me
              </button>
              <button className="sharp-edge border-r border-white/10 bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:brightness-110">
                High Pay
              </button>
              <button className="sharp-edge bg-primary px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:brightness-110">
                Scheduled
              </button>
            </div>
          </div>

          <div className="flex flex-col border-t border-gray-100">
            <div className="hidden grid-cols-12 gap-4 border-b border-gray-100 bg-gray-50/50 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 md:grid">
              <div className="col-span-3">Route</div>
              <div className="col-span-2 text-center">Distance</div>
              <div className="col-span-2 text-center">Priority</div>
              <div className="col-span-2 text-right">Pay</div>
              <div className="col-span-3" />
            </div>

            {[
              {
                from: "Downtown Metro Hub",
                to: "North Suburbs Plaza",
                distance: "12.4 MI",
                priority: "Express",
                priorityVariant: "accent",
                pay: "$45.50",
              },
              {
                from: "East Industrial Park",
                to: "West Side Logistics",
                distance: "8.2 MI",
                priority: "Standard",
                priorityVariant: "outline",
                pay: "$22.00",
              },
              {
                from: "Airport Terminal 4",
                to: "Grand Central Hotel",
                distance: "15.7 MI",
                priority: "Express",
                priorityVariant: "accent",
                pay: "$64.25",
              },
              {
                from: "University Campus E",
                to: "Student Union South",
                distance: "1.5 MI",
                priority: "Standard",
                priorityVariant: "outline",
                pay: "$12.50",
              },
              {
                from: "Medical District C",
                to: "General Hospital East",
                distance: "4.8 MI",
                priority: "Express",
                priorityVariant: "accent",
                pay: "$28.00",
              },
            ].map((job) => (
              <div
                key={`${job.from}-${job.to}-${job.pay}`}
                className="group grid grid-cols-1 items-center gap-4 border-b border-gray-100 px-6 py-8 transition-colors hover:bg-[rgba(62,0,116,0.05)] md:grid-cols-12"
              >
                <div className="flex flex-col md:col-span-3">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-gray-400">
                      location_on
                    </span>
                    <span className="text-sm font-black uppercase tracking-tight">
                      {job.from}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-gray-300">
                      subdirectory_arrow_right
                    </span>
                    <span className="text-sm font-bold uppercase tracking-tight text-gray-500">
                      {job.to}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2 text-center">
                  <span className="text-sm font-black uppercase tracking-widest">
                    {job.distance}
                  </span>
                </div>
                <div className="flex justify-center md:col-span-2">
                  {job.priorityVariant === "accent" ? (
                    <span className="bg-accent px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white">
                      {job.priority}
                    </span>
                  ) : (
                    <span className="border border-primary/20 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-primary">
                      {job.priority}
                    </span>
                  )}
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="text-4xl font-black leading-none">
                    {job.pay}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <button className="sharp-edge w-full py-4 bg-primary text-[11px] font-black uppercase tracking-[0.3em] text-white transition-transform hover:scale-[1.02]">
                    Accept Job
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex items-center justify-center gap-0">
            <button className="flex h-14 w-14 items-center justify-center border border-gray-100 transition-colors hover:bg-gray-50">
              <span className="material-symbols-outlined text-primary">
                chevron_left
              </span>
            </button>
            <button className="flex h-14 w-14 items-center justify-center bg-primary text-white font-black">
              01
            </button>
            <button className="flex h-14 w-14 items-center justify-center border border-gray-100 font-black text-gray-400 transition-colors hover:bg-gray-50">
              02
            </button>
            <button className="flex h-14 w-14 items-center justify-center border border-gray-100 font-black text-gray-400 transition-colors hover:bg-gray-50">
              03
            </button>
            <button className="flex h-14 w-14 items-center justify-center border border-gray-100 transition-colors hover:bg-gray-50">
              <span className="material-symbols-outlined text-primary">
                chevron_right
              </span>
            </button>
          </div>
        </main>

        <footer className="border-t border-gray-100 bg-white px-6 py-12">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                © 2024 Logistics Platform
              </span>
            </div>
            <div className="flex gap-12">
              <button className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 transition-colors hover:text-primary">
                Support
              </button>
              <button className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 transition-colors hover:text-primary">
                Safety
              </button>
              <button className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 transition-colors hover:text-primary">
                System Status
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

