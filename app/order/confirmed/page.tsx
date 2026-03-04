"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OrderConfirmedPage() {
  const router = useRouter();
  const [customerName, setCustomerName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const name = window.sessionStorage.getItem("ecoquickCustomerName");
    if (!name) {
      router.replace("/login");
      return;
    }
    setCustomerName(name);
  }, [router]);

  if (!customerName) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center bg-primary">
            <span className="material-symbols-outlined text-sm text-accent">
              bolt
            </span>
          </div>
          <span className="text-xl font-extrabold uppercase tracking-tight text-primary">
            EcoQuick
          </span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/dashboard"
            className="text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            href="/book/type"
            className="text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-primary"
          >
            Deliveries
          </Link>
          <Link
            href="/business"
            className="text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-primary"
          >
            Invoices
          </Link>
          <Link
            href="/help"
            className="text-[11px] font-bold uppercase tracking-widest text-slate-400 transition-colors hover:text-primary"
          >
            Support
          </Link>
        </nav>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden flex-col items-end md:flex">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Account
            </span>
            <span className="text-xs font-bold tracking-tight text-primary">
              {customerName}
            </span>
          </div>
          <button
            className="flex h-10 w-10 items-center justify-center border border-slate-200 transition-colors hover:bg-slate-50"
            onClick={() => router.push("/dashboard")}
          >
            <span className="material-symbols-outlined text-xl text-slate-400">
              person
            </span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-white px-6 py-16 md:py-20">
        <div className="architectural-grid pointer-events-none absolute inset-0" />
        <div className="relative z-10 w-full max-w-xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-primary/5 blur-3xl" />
              <span className="material-symbols-outlined success-checkmark">
                check_circle
              </span>
            </div>
          </div>

          <h1 className="mb-4 text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl">
            Order Confirmed
          </h1>
          <p className="mx-auto mb-10 max-w-sm text-sm font-medium text-slate-500">
            Your delivery has been scheduled and a rider is being assigned.
          </p>

          {/* Order summary card */}
          <div className="mb-8 border border-primary/10 bg-primary/5 p-1">
            <div className="border border-primary/5 bg-white p-6 text-left">
              <div className="mb-6 flex items-start justify-between border-b border-slate-100 pb-6">
                <div>
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Order Status
                  </span>
                  <div className="inline-flex items-center gap-2 bg-accent/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-accent">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    Priority Processing
                  </div>
                </div>
                <div className="text-right">
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Confirmation ID
                  </span>
                  <span className="font-mono text-sm font-bold tracking-tight text-primary">
                    EQ-8829-X01
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Estimated Pickup
                  </span>
                  <span className="block text-lg font-bold tracking-tight text-primary">
                    14:30
                  </span>
                  <span className="block text-[10px] font-medium uppercase text-slate-400">
                    Today, Oct 24
                  </span>
                </div>
                <div>
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Estimated Delivery
                  </span>
                  <span className="block text-lg font-bold tracking-tight text-primary">
                    15:15
                  </span>
                  <span className="block text-[10px] font-medium uppercase text-slate-400">
                    Today, Oct 24
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                  <span className="material-symbols-outlined text-sm text-accent">
                    local_shipping
                  </span>
                </div>
                <div>
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Delivery Route
                  </span>
                  <span className="text-xs font-bold tracking-tight text-slate-900">
                    Kensington (SW7) → Shoreditch (EC2A)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            className="flex w-full items-center justify-center gap-3 bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition-all hover:bg-black"
            onClick={() => router.push("/order/track")}
          >
            Track Order
            <span className="material-symbols-outlined text-lg">
              arrow_right_alt
            </span>
          </button>

          <div className="mt-8 flex justify-center gap-8">
            <Link
              href="/dashboard"
              className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 transition-colors hover:text-primary"
            >
              Download Receipt
            </Link>
            <Link
              href="/help"
              className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 transition-colors hover:text-primary"
            >
              Support Center
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 pb-8 pt-12 md:px-8 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-10 md:grid-cols-4 md:gap-12">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center bg-primary">
                  <span className="material-symbols-outlined text-sm text-accent">
                    bolt
                  </span>
                </div>
                <span className="text-xl font-extrabold uppercase tracking-tight text-primary">
                  EcoQuick
                </span>
              </div>
              <p className="mb-6 max-w-xs text-xs font-medium leading-relaxed text-slate-500">
                Next-generation logistical infrastructure for the modern
                enterprise.
              </p>
              <div className="inline-flex items-center gap-2 border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700">
                <span className="material-symbols-outlined text-xs">
                  eco
                </span>
                Carbon Neutral
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">
                Architecture
              </h4>
              <ul className="space-y-4 text-xs font-medium text-slate-500">
                <li>
                  <Link
                    href="/help"
                    className="transition-colors hover:text-primary"
                  >
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="transition-colors hover:text-primary"
                  >
                    Fleet Sync
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="transition-colors hover:text-primary"
                  >
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">
                Legal
              </h4>
              <ul className="space-y-4 text-xs font-medium text-slate-500">
                <li>
                  <Link
                    href="/help"
                    className="font-bold text-primary transition-colors hover:text-primary/80"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="transition-colors hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="transition-colors hover:text-primary"
                  >
                    Insurance Details
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900">
                Contact
              </h4>
              <ul className="space-y-4 text-xs font-medium text-slate-500">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-primary">
                    terminal
                  </span>
                  ops-london-central
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm text-primary">
                    alternate_email
                  </span>
                  corporate@ecoquick.com
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 md:flex-row">
            <p>© 2026 EcoQuick Infrastructure Group</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 text-slate-500">
                <span>v.2.4.0-STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating support */}
      <button
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center bg-primary text-white shadow-xl transition-colors hover:bg-black"
        onClick={() => router.push("/help")}
        aria-label="Open support"
      >
        <span className="material-symbols-outlined">support_agent</span>
      </button>
    </div>
  );
}

