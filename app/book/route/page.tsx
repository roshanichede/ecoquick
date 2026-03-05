"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookingStepper } from "../../../components/book/BookingStepper";
import { CustomerTopBar } from "@/components/layout/CustomerTopBar";

export default function BookRoutePage() {
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
            <BookingStepper currentStep={2} />
            <div className="mt-10 text-center">
              <h1 className="text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl">
                Pickup &amp; Delivery Details
              </h1>
              <div className="mx-auto mt-4 h-1 w-12 bg-primary" aria-hidden />
            </div>
          </div>

          {/* Content */}
          <div className="bg-white px-6 py-10 md:px-10 md:py-12">
            <div className="mb-10 border border-primary bg-white p-8 md:p-10">
          <form className="space-y-14">
            <section>
              <div className="mb-8 flex items-center gap-3 border-b border-primary/10 pb-4">
                <span className="material-symbols-outlined text-xl text-accent">
                  location_on
                </span>
                <h2 className="text-xl font-black uppercase tracking-tight">
                  Pickup address
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
                <div className="space-y-2 md:col-span-8">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    Address line 1
                  </label>
                  <input
                    className="w-full border border-primary bg-transparent px-4 py-3 text-sm uppercase tracking-wide"
                    placeholder="E.g. 123 Kingston Road"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:col-span-4">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    Postcode
                  </label>
                  <input
                    className="w-full border border-primary bg-transparent px-4 py-3 text-sm uppercase tracking-wide"
                    placeholder="E.g. KT1 1QT"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:col-span-4">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    City
                  </label>
                  <input
                    className="w-full border border-primary bg-transparent px-4 py-3 text-sm uppercase tracking-wide"
                    placeholder="E.g. London"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:col-span-4">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    Sender name
                  </label>
                  <input
                    className="w-full border border-primary bg-transparent px-4 py-3 text-sm uppercase tracking-wide"
                    placeholder="Full name"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:col-span-4">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    Sender phone
                  </label>
                  <input
                    className="w-full border border-primary bg-transparent px-4 py-3 text-sm uppercase tracking-wide"
                    placeholder="+44 7000 000000"
                    type="tel"
                  />
                </div>
              </div>
            </section>

            <section>
              <div className="mb-8 flex items-center gap-3 border-b border-primary/10 pb-4">
                <span className="material-symbols-outlined text-xl text-accent">
                  local_shipping
                </span>
                <h2 className="text-xl font-black uppercase tracking-tight">
                  Delivery address
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
                <div className="space-y-2 md:col-span-8">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    Address line 1
                  </label>
                  <input
                    className="w-full border border-primary bg-transparent px-4 py-3 text-sm uppercase tracking-wide"
                    placeholder="E.g. 45 Richmond Hill"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:col-span-4">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    Postcode
                  </label>
                  <input
                    className="w-full border border-primary bg-transparent px-4 py-3 text-sm uppercase tracking-wide"
                    placeholder="E.g. TW10 6RW"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:col-span-4">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    City
                  </label>
                  <input
                    className="w-full border border-primary bg-transparent px-4 py-3 text-sm uppercase tracking-wide"
                    placeholder="E.g. Richmond"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:col-span-4">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    Recipient name
                  </label>
                  <input
                    className="w-full border border-primary bg-transparent px-4 py-3 text-sm uppercase tracking-wide"
                    placeholder="Full name"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:col-span-4">
                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    Recipient phone
                  </label>
                  <input
                    className="w-full border border-primary bg-transparent px-4 py-3 text-sm uppercase tracking-wide"
                    placeholder="+44 7000 000000"
                    type="tel"
                  />
                </div>
              </div>
            </section>
          </form>
            </div>

            <div className="mx-auto mt-12 flex max-w-4xl items-center justify-between border-t border-slate-100 pt-6">
              <Link
                href="/book/type"
                className="group flex items-center gap-2 pl-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-primary"
              >
                <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">
                  arrow_back
                </span>
                Back
              </Link>
              <Link
                href="/book/parcel"
                className="flex items-center gap-3 bg-primary px-8 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-black"
              >
                Continue
                <span className="material-symbols-outlined text-base text-accent">
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

