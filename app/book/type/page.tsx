"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookingStepper } from "../../../components/book/BookingStepper";

export default function BookTypePage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const name = window.sessionStorage.getItem("ecoquickCustomerName");
    if (!name) {
      router.replace("/login");
      return;
    }
    setAllowed(true);
  }, [router]);

  if (!allowed) {
    return null;
  }
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center bg-primary">
            <span className="material-symbols-outlined text-sm text-accent">
              speed
            </span>
          </div>
          <span className="text-xl font-extrabold uppercase tracking-tight text-primary">
            EcoQuick
          </span>
        </div>
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/book/type"
            className="text-sm font-semibold text-primary"
          >
            Request delivery
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/business"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/business"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
          >
            Business
          </Link>
          <Link
            href="/help"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
          >
            Help
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="border-2 border-primary px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            href="/logout"
            className="flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-base">
              logout
            </span>
            Sign out
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center py-10 px-4 md:px-6">
        <div className="w-full max-w-5xl bg-white shadow-[0_20px_50px_-12px_rgba(62,0,116,0.15)]">
          {/* Stepper */}
          <div className="border-b border-slate-100 bg-white px-6 pb-12 pt-10 md:px-8">
            <BookingStepper currentStep={1} />

            <div className="mt-10 text-center">
              <h1 className="text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl">
                Delivery Type
              </h1>
              <p className="mx-auto mt-3 max-w-lg text-sm font-medium text-slate-500">
                Select the urgency and service level required for your
                shipment.
              </p>
            </div>
          </div>

        {/* Content */}
          <div className="bg-white px-6 py-10 md:px-10 md:py-12">
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <Link
                href="/book/route"
                className="group flex h-full flex-col border-2 border-slate-100 bg-slate-50 p-8 text-left transition-all hover:border-slate-300"
              >
                <div className="mb-6 flex w-full justify-between">
                  <div className="flex h-12 w-12 items-center justify-center bg-primary text-white">
                    <span className="material-symbols-outlined text-2xl">
                      bolt
                    </span>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-black uppercase tracking-tight text-primary">
                  Instant delivery
                </h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-600">
                  Best for urgent needs. An electric courier is dispatched
                  immediately for direct point-to-point delivery within 60
                  minutes.
                </p>
                <div className="mt-auto flex items-center gap-2 border-t border-slate-100 pt-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    Couriers available now
                  </span>
                </div>
              </Link>

              <Link
                href="/book/route"
                className="group flex h-full flex-col border-2 border-slate-100 bg-slate-50 p-8 text-left transition-all hover:border-slate-300"
              >
                <div className="mb-6 flex w-full justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-primary bg-white text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-2xl">
                      calendar_today
                    </span>
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-black uppercase tracking-tight text-slate-900">
                  Scheduled
                </h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-600">
                  Plan ahead. Select a specific pickup window up to 2 weeks in
                  advance. Ideal for recurring business logistics.
                </p>
                <div className="mt-auto border-t border-slate-100 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Book up to 14 days ahead
                  </span>
                </div>
              </Link>
            </div>

            <div className="mx-auto mt-12 flex max-w-4xl items-center justify-between border-t border-slate-100 pt-6">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 pl-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-primary"
              >
                <span className="material-symbols-outlined text-sm">
                  west
                </span>
                Back
              </Link>

              <Link
                href="/book/route"
                className="flex items-center gap-3 bg-primary px-8 py-3 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[4px_4px_0px_#ff9b16] transition-all hover:bg-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Continue
                <span className="material-symbols-outlined text-base">
                  east
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

