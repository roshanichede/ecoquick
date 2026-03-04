"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BrandLogo } from "@/components/layout/BrandLogo";

export default function DriverActiveDeliveryPage() {
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
    <div className="flex min-h-screen flex-col overflow-hidden bg-white text-primary">
      <header className="z-20 flex items-center justify-between border-b border-primary bg-white px-6 py-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <BrandLogo size="sm" labelSuffix="Driver" />
          <nav className="flex items-center gap-8">
            <h2 className="text-lg font-black uppercase tracking-tighter">
              Active Delivery
            </h2>
            <div className="flex gap-6">
              <button
                className="border-b-2 border-primary pb-1 text-xs font-bold uppercase tracking-widest"
                onClick={() => router.push("/driver")}
              >
                Dashboard
              </button>
              <button className="text-xs font-bold uppercase tracking-widest text-primary/40 transition-colors hover:text-primary">
                History
              </button>
              <button
                className="text-xs font-bold uppercase tracking-widest text-primary/40 transition-colors hover:text-primary"
                onClick={() => router.push("/driver/earnings")}
              >
                Earnings
              </button>
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="p-2 text-primary transition-colors hover:bg-[rgba(62,0,116,0.05)]">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-primary transition-colors hover:bg-[rgba(62,0,116,0.05)]">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div className="mx-2 h-10 w-px bg-primary/20" />
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/50">
                Driver ID #8842
              </p>
              <p className="text-sm font-bold">Marcus Chen</p>
            </div>
            <div className="size-10 border border-primary bg-white p-0.5" />
          </div>
        </div>
      </header>

      <main className="relative flex flex-1 overflow-hidden">
        <aside className="z-10 flex w-full flex-col border-r border-primary bg-white lg:w-[450px]">
          <div className="border-b border-primary bg-white p-8">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">
                  Active Job Order
                </p>
                <h1 className="text-4xl font-black tracking-tighter">
                  EQ-98422
                </h1>
              </div>
              <div className="border border-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                EST. 14 MINS
              </div>
            </div>
            <div className="flex items-center gap-4 border border-primary bg-[rgba(62,0,116,0.05)] p-4">
              <div className="flex size-10 items-center justify-center bg-primary">
                <span className="material-symbols-outlined text-white">
                  near_me
                </span>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">
                  Next Objective
                </p>
                <p className="text-lg font-bold">Pickup at Kingston Hall</p>
              </div>
            </div>
          </div>

          <div className="custom-scrollbar flex-1 space-y-8 overflow-y-auto p-8">
            <div className="space-y-6">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-primary/20">
                  <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2 bg-primary" />
                  <div className="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 border border-primary bg-white" />
                </div>
                <div className="mb-8">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-primary/40">
                    Origin Point
                  </p>
                  <p className="text-base font-bold">Kingston Hall, Wing B</p>
                  <p className="text-sm text-primary/60">
                    123 Delivery St, Business District, Floor 4
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-primary/40">
                    Final Destination
                  </p>
                  <p className="text-base font-bold">
                    The Penthouse Residences
                  </p>
                  <p className="text-sm text-primary/60">
                    88 Skyview Terrace, Uptown Circle
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-primary/20 bg-[rgba(62,0,116,0.05)] p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center border border-primary bg-white">
                    <span className="material-symbols-outlined text-primary">
                      person
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">
                      Client
                    </p>
                    <p className="text-lg font-bold">Sarah Jenkins</p>
                  </div>
                </div>
                <button className="sharp-edge bg-primary px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white transition-opacity hover:opacity-90">
                  Call
                </button>
              </div>
            </div>

            <div className="border border-primary/20">
              <div className="grid grid-cols-2">
                <div className="border-r border-b border-primary/20 bg-[rgba(62,0,116,0.05)] p-6">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-primary/40">
                    Cargo Type
                  </p>
                  <p className="flex items-center gap-2 font-bold">
                    <span className="material-symbols-outlined text-lg">
                      description
                    </span>
                    Documents
                  </p>
                </div>
                <div className="border-b border-primary/20 bg-[rgba(62,0,116,0.05)] p-6">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-primary/40">
                    Net Weight
                  </p>
                  <p className="font-bold">0.45 kg</p>
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-primary/40">
                  Internal Instructions
                </p>
                <p className="text-sm font-medium leading-relaxed text-primary/80">
                  &quot;Ring the buzzer for Wing B. Security will let you up to
                  the 4th floor. Please leave at reception if I&apos;m not at
                  the desk.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary bg-white p-8">
            <button className="group flex w-full items-center justify-center gap-4 bg-primary py-6 text-lg font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-primary/95">
              Slide to Complete
              <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </aside>

        <div className="relative flex-1 bg-[#f0f0f0]">
          <div className="absolute inset-0 bg-white">
            <svg
              className="h-full w-full opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 600"
              fill="none"
            >
              <path
                d="M100 500L250 450L350 550L500 400L450 250L600 150"
                stroke="#3e0074"
                strokeWidth="4"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
              <defs>
                <pattern
                  id="mapGrid"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="none"
                    stroke="rgba(62,0,116,0.08)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapGrid)" />
            </svg>

            <div className="absolute top-[150px] left-[600px] -translate-x-1/2 -translate-y-full">
              <div className="relative flex flex-col items-center">
                <div className="mb-0 border border-primary bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                  Kingston Hall
                </div>
                <div className="flex size-8 items-center justify-center border-2 border-primary bg-accent shadow-lg">
                  <span className="material-symbols-outlined text-xl font-bold text-primary">
                    location_on
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[100px] left-[100px] -translate-x-1/2 -translate-y-1/2">
              <div className="keep-rounded relative flex size-10 items-center justify-center border-2 border-white bg-primary shadow-2xl">
                <span className="material-symbols-outlined text-lg text-white">
                  navigation
                </span>
              </div>
            </div>
          </div>

          <div className="absolute right-8 top-8 flex flex-col gap-px border border-primary shadow-xl">
            <button className="bg-white p-3 text-primary transition-colors hover:bg-[rgba(62,0,116,0.05)]">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="bg-white p-3 text-primary transition-colors hover:bg-[rgba(62,0,116,0.05)]">
              <span className="material-symbols-outlined">remove</span>
            </button>
            <button className="bg-white p-3 text-primary transition-colors hover:bg-[rgba(62,0,116,0.05)]">
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>

          <div className="absolute left-8 top-8">
            <div className="border-2 border-primary bg-white p-6 shadow-xl">
              <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-primary/40">
                Estimated Arrival
              </p>
              <p className="text-4xl font-black tracking-tighter text-primary">
                14:45
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="keep-rounded h-2 w-2 bg-accent" />
                <p className="text-[10px] font-bold uppercase text-primary">
                  Traffic: Moderate
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="hidden items-center justify-between border-t border-primary px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary lg:flex">
        <div className="flex gap-10">
          <div className="flex items-center gap-3">
            <span className="keep-rounded h-2 w-2 animate-pulse bg-primary" />
            <span>GNSS ACTIVE / 1.2m PRECISION</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[14px]">
              battery_charging_full
            </span>
            <span>System: 88%</span>
          </div>
        </div>
        <div className="flex gap-10">
          <span>Channel: 5G-UL_ENCRY</span>
          <span className="opacity-40">UTC: 12:31:04</span>
        </div>
      </footer>
    </div>
  );
}

