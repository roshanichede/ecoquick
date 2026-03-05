"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, FormEvent, useState } from "react";
import { LandingHeader } from "@/components/layout/LandingHeader";
import { LandingFooter } from "@/components/layout/LandingFooter";

export default function SignupPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<"customer" | "driver">("customer");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const existingName = window.sessionStorage.getItem("ecoquickCustomerName");
    if (existingName) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fullName = (formData.get("fullName") as string) || "EcoQuick Customer";
    const email =
      (formData.get("email") as string) || "customer@example.com";

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("ecoquickCustomerName", fullName);
      window.sessionStorage.setItem("ecoquickCustomerEmail", email);
    }

    router.push("/dashboard");
  };
  return (
    <div className="min-h-screen bg-white text-[#3e0074]">
      {/* Full-width header */}
      <div className="px-4 md:px-6">
        <LandingHeader />
      </div>

      <main className="flex min-h-screen flex-col items-center px-4 py-12 md:py-24">
        <div className="w-full max-w-3xl" id="signup-form">
          <h1 className="mb-12 text-center text-5xl uppercase leading-[0.85] tracking-[-0.06em] md:text-[70px]">
            Join EcoQuick
          </h1>

          <div className="space-y-12">
            <section className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#3e0074]/60">
                01 / Select Profile
              </span>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <div
                  className={`group flex min-w-[120px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-3 text-xs md:text-sm transition-all md:px-6 md:py-3.5 ${
                    profile === "customer"
                      ? "border-[#3e0074] bg-[#3e0074] text-white shadow-lg shadow-[#3e0074]/30"
                      : "border-[#3e0074]/30 bg-white text-[#3e0074] hover:border-[#3e0074] hover:bg-[#3e0074]/5"
                  }`}
                  onClick={() => setProfile("customer")}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-accent transition-colors ${
                      profile === "customer"
                        ? "bg-white/15"
                        : "bg-[#3e0074]/5"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M5.5 19c1.2-3 3.3-4.5 6.5-4.5S16.8 16 18 19" />
                    </svg>
                  </span>
                  <span className="text-[11px] md:text-xs font-semibold tracking-[0.16em]">
                    Customer
                  </span>
                </div>
                <div
                  className={`group flex min-w-[120px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border px-4 py-3 text-xs md:text-sm transition-all md:px-6 md:py-3.5 ${
                    profile === "driver"
                      ? "border-[#3e0074] bg-[#3e0074] text-white shadow-lg shadow-[#3e0074]/30"
                      : "border-[#3e0074]/30 bg-white text-[#3e0074] hover:border-[#3e0074] hover:bg-[#3e0074]/5"
                  }`}
                  onClick={() => setProfile("driver")}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-accent transition-colors ${
                      profile === "driver"
                        ? "bg-white/15"
                        : "bg-[#3e0074]/5"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="7" width="11" height="8" rx="1" />
                      <path d="M14 9h3.5L21 11.5V15h-3" />
                      <circle cx="8" cy="17" r="1.8" />
                      <circle cx="18" cy="17" r="1.8" />
                    </svg>
                  </span>
                  <span className="text-[11px] md:text-xs font-semibold tracking-[0.16em]">
                    Driver
                  </span>
                </div>
              </div>
            </section>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <section className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#3e0074]/60">
                  {profile === "customer"
                    ? "02 / Personal details"
                    : "02 / Driver details"}
                </span>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.22em] text-[#3e0074]/60">
                      Full name
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Johnathan Doe"
                      className="sharp-corners w-full border border-[#3e0074] bg-white p-4 text-xs font-bold uppercase text-[#3e0074] placeholder:opacity-50 focus:border-[#3e0074] focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.22em] text-[#3e0074]/60">
                        Email address
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="john@ecoquick.com"
                        className="sharp-corners w-full border border-[#3e0074] bg-white p-4 text-xs font-bold uppercase text-[#3e0074] placeholder:opacity-50 focus:border-[#3e0074] focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.22em] text-[#3e0074]/60">
                        Phone number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+44 000 000 0000"
                        className="sharp-corners w-full border border-[#3e0074] bg-white p-4 text-xs font-bold uppercase text-[#3e0074] placeholder:opacity-50 focus:border-[#3e0074] focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.22em] text-[#3e0074]/60">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••••••"
                        className="sharp-corners w-full border border-[#3e0074] bg-white p-4 text-xs font-bold uppercase text-[#3e0074] placeholder:opacity-50 focus:border-[#3e0074] focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.22em] text-[#3e0074]/60">
                        {profile === "customer"
                          ? "Date of birth"
                          : "License expiry"}
                      </label>
                      <input
                        type="date"
                        className="sharp-corners w-full border border-[#3e0074] bg-white p-4 text-xs font-bold uppercase text-[#3e0074] focus:border-[#3e0074] focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="sharp-corners space-y-4 border border-[#3e0074]/20 bg-[#3e0074]/5 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#3e0074] text-xs font-bold">
                    ✓
                  </span>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.22em]">
                    Identity verification
                  </h4>
                </div>
                <ul className="space-y-2 text-[9px] font-bold uppercase leading-relaxed text-[#3e0074]/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 bg-accent" />
                    Required for UK age verification laws and secure courier
                    operations.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 bg-accent" />
                    Documents are securely encrypted and stored with bank‑grade
                    protocols.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 bg-accent" />
                    Used exclusively for age and professional verification
                    purposes.
                  </li>
                </ul>
              </section>

              <section className="space-y-4 pt-4">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    className="sharp-corners h-4 w-4 border border-[#3e0074] text-[#3e0074] accent-[#3e0074]"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3e0074]/70">
                    I agree to the Terms of Service
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    className="sharp-corners h-4 w-4 border border-[#3e0074] text-[#3e0074] accent-[#3e0074]"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3e0074]/70">
                    I agree to the Privacy Policy
                  </span>
                </label>
              </section>

              <button
                type="submit"
                className="sharp-corners mt-8 w-full bg-[#3e0074] py-6 text-xs font-bold uppercase tracking-[0.3em] text-white transition hover:bg-[#2f0058]"
              >
                Create account
              </button>
            </form>

            <div className="border-t border-[#3e0074]/10 pt-8 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3e0074]/60">
                Already have an account?
                <Link
                  href="/login"
                  className="ml-2 border-b border-[#3e0074] text-[#3e0074]"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <LandingFooter />
      </div>
    </div>
  );
}

