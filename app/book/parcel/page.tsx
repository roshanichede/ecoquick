"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookingStepper } from "../../../components/book/BookingStepper";
import { BrandLogo } from "@/components/layout/BrandLogo";

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
    <div className="flex min-h-screen flex-col bg-[#fafafa] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandLogo size="sm" />
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/book/type"
              className="text-sm font-bold uppercase tracking-[0.2em] text-primary"
            >
              Request delivery
            </Link>
            <Link
              href="/about"
              className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/business"
              className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="/help"
              className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 transition-colors hover:text-primary"
            >
              Help
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-600">
              <span className="material-symbols-outlined text-xl">
                account_circle
              </span>
              Account
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-5xl">
          <div className="mb-10">
            <BookingStepper currentStep={3} />
          </div>

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-black uppercase tracking-[0.2em] text-primary md:text-4xl">
              Package details
            </h1>
            <div className="mx-auto mt-4 h-1 w-12 bg-primary" />
          </div>

          <div className="border border-primary bg-white p-10 shadow-[12px_12px_0px_0px_rgba(62,0,116,0.1)]">
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

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-6">
                <Link
                  href="/book/route"
                  className="flex items-center gap-3 border-2 border-primary bg-transparent px-8 py-3 text-[10px] font-black uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <span className="material-symbols-outlined text-lg">
                    arrow_back
                  </span>
                  Back
                </Link>
                <Link
                  href="/book/confirm"
                  className="flex items-center gap-3 bg-primary px-10 py-3 text-[10px] font-black uppercase tracking-[0.25em] text-white shadow-[0_8px_20px_-6px_rgba(62,0,116,0.4)] transition-colors hover:bg-opacity-90"
                >
                  Review order
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

