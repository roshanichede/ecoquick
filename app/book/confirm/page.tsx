 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookingStepper } from "../../../components/book/BookingStepper";
import { CustomerTopBar } from "@/components/layout/CustomerTopBar";

const BoltIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="shrink-0"
    aria-hidden
  >
    <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0"
    aria-hidden
  >
    <path
      d="M12 3L5 6v6c0 4.243 2.686 7.657 7 9 4.314-1.343 7-4.757 7-9V6l-7-3Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12.5 11 14.5 15 10.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowEastIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0"
    aria-hidden
  >
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
    <div className="page-fade flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <CustomerTopBar />

      <main className="flex flex-1 flex-col items-center py-8 px-4 md:px-6">
        <div className="w-full max-w-5xl bg-white shadow-[0_20px_50px_-12px_rgba(62,0,116,0.15)]">
          {/* Stepper – same section on all booking pages */}
          <div className="border-b border-slate-100 bg-white px-6 pb-12 pt-10 md:px-8">
            <BookingStepper currentStep={4} />
            <div className="mt-10 text-center">
              <h1 className="text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl">
                Review your order
              </h1>
              <div className="mx-auto mt-4 h-1 w-12 bg-primary" aria-hidden />
            </div>
          </div>

          {/* Content */}
          <div className="bg-white px-6 py-10 md:px-10 md:py-12">
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
                <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/10 bg-primary text-white">
                  <BoltIcon />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tight text-primary">
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

        <div className="mx-auto mt-12 flex max-w-4xl items-center justify-between border-t border-slate-100 pt-6">
          <Link
            href="/book/parcel"
            className="group flex items-center gap-2 pl-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
            Back
          </Link>
          <Link
            href="/order/confirmed"
            className="flex items-center gap-3 bg-primary px-8 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-black"
          >
            Get quote &amp; continue
            <span className="text-accent">
              <ArrowEastIcon />
            </span>
          </Link>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 border border-slate-200 bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <span className="text-primary">
              <ShieldCheckIcon />
            </span>
            Secure architectural protocol
          </div>
          <p className="max-w-md text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Final valuation is subject to real‑time verification at pickup
            point. EcoQuick maintains carbon neutrality across all operations.
          </p>
        </div>
          </div>
        </div>
      </main>
    </div>
  );
}
