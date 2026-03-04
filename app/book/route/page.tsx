"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookingStepper } from "../../../components/book/BookingStepper";

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
    <div className="flex min-h-screen flex-col bg-white text-primary">
      <nav className="border-b border-primary/10">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black uppercase tracking-tighter">
              EcoQuick
            </span>
          </div>
          <div className="hidden items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] md:flex">
            <Link href="/dashboard" className="hover:opacity-60">
              Dashboard
            </Link>
            <Link href="/about" className="hover:opacity-60">
              About
            </Link>
            <Link href="/business" className="hover:opacity-60">
              Business
            </Link>
            <Link href="/help" className="hover:opacity-60">
              Help
            </Link>
            <Link href="/login" className="hover:opacity-60">
              Log in
            </Link>
          </div>
          <Link
            href="/signup"
            className="rounded-none bg-primary px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-opacity-90 md:px-8 md:py-3"
          >
            Get started
          </Link>
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-5xl flex-grow flex-col px-6 py-10">
        {/* Stepper */}
        <div className="mx-auto mb-10 max-w-3xl">
          <BookingStepper currentStep={2} />
        </div>

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
            Pickup &amp; Delivery Details
          </h1>
          <div className="mx-auto mt-4 h-1 w-12 bg-primary" />
        </div>

        {/* Form */}
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

        <div className="mt-4 flex items-center justify-between">
          <Link
            href="/book/type"
            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
            Back
          </Link>

          <Link
            href="/book/parcel"
            className="group flex items-center gap-4 rounded-none bg-primary px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-opacity-90"
          >
            Continue
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

