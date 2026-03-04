"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookingStepper } from "../../../components/book/BookingStepper";

export default function BookConfirmPage() {
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center bg-primary">
              <span className="material-symbols-outlined text-xl text-accent">
                bolt
              </span>
            </div>
            <span className="text-xl font-extrabold uppercase tracking-tight text-primary">
              EcoQuick
            </span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/book/type"
              className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary"
            >
              Request delivery
            </Link>
            <Link
              href="/about"
              className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/business"
              className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="/help"
              className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary"
            >
              Help
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400 text-lg">
                account_circle
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                Dashboard
              </span>
            </div>
            <Link
              href="/logout"
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-primary"
            >
              Sign out
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        {/* Stepper */}
        <div className="mb-12">
          <BookingStepper currentStep={4} />
        </div>

        <div className="mb-10 text-center">
          <h1 className="mb-2 text-2xl font-black uppercase tracking-tight text-primary">
            Review your order
          </h1>
          <div className="mx-auto h-1 w-12 bg-primary" />
        </div>

        {/* Summary card */}
        <div className="overflow-hidden bg-white ring-1 ring-slate-200">
          <div className="grid border-b border-slate-200 md:grid-cols-2">
            <div className="border-b border-slate-100 p-8 md:border-r">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  01. Service mode
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-slate-900 text-white">
                  <span className="material-symbols-outlined text-2xl">
                    bolt
                  </span>
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tight text-slate-900">
                    Instant eco‑delivery
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                    Carbon neutral verified
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-slate-100 p-8">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  02. Cargo specs
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Dimensions
                  </p>
                  <p className="text-xs font-black uppercase text-slate-900">
                    Medium (40×30×20)
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Weight
                  </p>
                  <p className="text-xs font-black uppercase text-slate-900">
                    2.5 kg net
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-slate-100 p-8 md:border-r">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  03. Origin
                </h3>
              </div>
              <p className="text-xs font-black uppercase tracking-tight text-slate-900">
                KT1 2HT, Kingston upon Thames
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-wide text-slate-500">
                Sender details to be confirmed
              </p>
            </div>

            <div className="border-b border-slate-100 p-8">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  04. Destination
                </h3>
              </div>
              <p className="text-xs font-black uppercase tracking-tight text-slate-900">
                KT2 6DF, Kingston upon Thames
              </p>
              <p className="mt-1 text-[10px] font-bold tracking-wide text-slate-500">
                Standard drop‑off · contactless
              </p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 text-white">
            <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="hidden w-full max-w-xs md:block">
                <div className="border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm text-[#ff9b16]">★</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9b16]">
                      Premium member
                    </span>
                  </div>
                  <p className="text-[10px] font-medium leading-relaxed text-slate-300">
                    You are saving £2.00 on this shipment thanks to your
                    eco‑credits balance.
                  </p>
                </div>
              </div>

              <div className="w-full space-y-3 md:w-auto md:min-w-[320px]">
                <div className="flex items-baseline justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                  <span>Base freight rate</span>
                  <span className="text-white">£12.50</span>
                </div>
                <div className="flex items-baseline justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                  <span>Distance (4.2 mi)</span>
                  <span className="text-white">£4.80</span>
                </div>
                <div className="flex items-baseline justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                  <span>Priority handling</span>
                  <span className="text-white">£1.20</span>
                </div>
                <div className="flex items-baseline justify-between py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                  <span>Eco‑incentive</span>
                  <span>-£2.00</span>
                </div>
                <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="w-fit bg-white px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                      Total quote
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      VAT included
                    </span>
                  </div>
                  <span className="text-4xl font-black tracking-tighter md:text-5xl">
                    £16.50
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/book/parcel"
            className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
            Back
          </Link>
          <Link
            href="/order/confirmed"
            className="flex items-center gap-3 bg-primary px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-900/20 transition-all hover:bg-slate-800"
          >
            Get quote &amp; continue
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 border border-slate-200 bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <span className="material-symbols-outlined text-primary text-lg">
              verified_user
            </span>
            Secure architectural protocol
          </div>
          <p className="max-w-md text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Final valuation is subject to real‑time verification at pickup
            point. EcoQuick maintains carbon neutrality across all operations.
          </p>
        </div>
      </main>
    </div>
  );
}

