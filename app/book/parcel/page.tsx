"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookingStepper } from "../../../components/book/BookingStepper";
import { CustomerTopBar } from "@/components/layout/CustomerTopBar";

export default function BookParcelPage() {
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
            <BookingStepper currentStep={3} />
            <div className="mt-10 text-center">
              <h1 className="text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl">
                Package details
              </h1>
              <div className="mx-auto mt-4 h-1 w-12 bg-primary" aria-hidden />
            </div>
          </div>

          {/* Content */}
          <div className="bg-white px-6 py-10 md:px-10 md:py-12">
            <div className="border border-primary bg-white p-10 shadow-[0_20px_50px_-12px_rgba(62,0,116,0.15)]">
            <form className="space-y-10">
              <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                <div className="space-y-4">
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary">
                    Package category *
                  </label>
                  <select className="h-14 w-full border border-primary bg-white px-4 text-sm font-bold uppercase tracking-wide text-primary">
                    <option value="">Select category</option>
                    <option value="documents">Documents</option>
                    <option value="electronics">Electronics</option>
                    <option value="food">Food &amp; groceries</option>
                    <option value="clothing">Clothing &amp; apparel</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary">
                    Package size *
                  </label>
                  <select className="h-14 w-full border border-primary bg-white px-4 text-sm font-bold uppercase tracking-wide text-primary">
                    <option value="">Select size</option>
                    <option value="envelope">Envelope (up to 0.5kg)</option>
                    <option value="small">Small (up to 2kg)</option>
                    <option value="medium">Medium (up to 10kg)</option>
                    <option value="large">Large (up to 25kg)</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary">
                    Approximate weight *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      className="h-14 w-full border border-primary bg-white px-4 text-sm font-bold tracking-wide text-primary"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                      kg
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary">
                    Total items
                  </label>
                  <input
                    type="number"
                    placeholder="1"
                    className="h-14 w-full border border-primary bg-white px-4 text-sm font-bold tracking-wide text-primary"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary">
                  Handling instructions &amp; notes
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-primary bg-white p-5 text-sm font-medium tracking-wide text-primary/80"
                  placeholder="E.g. fragile items, gate codes, specific recipient instructions..."
                />
              </div>

            </form>
            </div>

            <div className="mx-auto mt-12 flex max-w-4xl items-center justify-between border-t border-slate-100 pt-6">
              <Link
                href="/book/route"
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-primary"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back
              </Link>
              <Link
                href="/book/confirm"
                className="flex items-center gap-3 bg-primary px-8 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-black"
              >
                Review order
                <span className="material-symbols-outlined text-base text-accent">east</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

