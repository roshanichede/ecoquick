"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LandingHeader } from "../../components/layout/LandingHeader";
import { LandingFooter } from "../../components/layout/LandingFooter";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [welcomeName, setWelcomeName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const existingCustomerName =
      window.sessionStorage.getItem("ecoquickCustomerName");
    const existingDriverEmail =
      window.sessionStorage.getItem("ecoquickDriverEmail");

    if (existingCustomerName) {
      router.replace("/dashboard");
      return;
    }

    if (existingDriverEmail) {
      router.replace("/driver");
      return;
    }
  }, [router]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    const normalizedEmail = email.trim().toLowerCase();

    const customerEmail = "sam@gmail.com";
    const customerPassword = "test@123";
    const customerName = "Sam Daniel";

    const driverEmail = "driver@gmail.com";
    const driverPassword = "test@123";
    const driverName = "EcoQuick Driver";

    if (normalizedEmail === driverEmail && password === driverPassword) {
      setWelcomeName(driverName);
      setError(null);

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("ecoquickDriverEmail", driverEmail);
        window.sessionStorage.setItem("ecoquickDriverName", driverName);
      }

      router.push("/driver");
    } else if (
      normalizedEmail === customerEmail &&
      password === customerPassword
    ) {
      setWelcomeName(customerName);
      setError(null);

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("ecoquickCustomerName", customerName);
        window.sessionStorage.setItem("ecoquickCustomerEmail", customerEmail);
      }

      router.push("/dashboard");
    } else {
      setWelcomeName(null);
      setError("Invalid email or password. Try the demo account.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfaff] text-[#3e0074]">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <LandingHeader />
      </div>

      <main className="flex flex-1 items-center justify-center p-6 md:p-12">
        <div className="flex w-full max-w-md flex-col items-center">
          <h1 className="mb-4 text-center text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#3e0074] sm:text-5xl md:text-6xl">
            Welcome back
          </h1>




          <div className="sharp-corners w-full bg-white p-8 shadow-[0_20px_50px_rgba(62,0,116,0.05)] md:p-12">
            <div className="mb-8">
              <h2 className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#3e0074]/40">
                Login
              </h2>
              <p className="text-sm font-medium text-[#3e0074]/90">
                Please enter your credentials to access your dashboard.
              </p>
            </div>

            {welcomeName && (
              <div className="mb-4 rounded border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                Signed in as {welcomeName}.
              </div>
            )}
            {error && !welcomeName && (
              <div className="mb-4 rounded border border-red-300 bg-red-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3e0074]/60"
                >
                  Email address
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-accent">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="sharp-corners w-full border border-[#3e0074]/30 bg-white px-3 py-3 pl-10 pr-4 text-sm text-[#3e0074] placeholder:text-[#3e0074]/30 focus:border-[#3e0074] focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3e0074]/60"
                >
                  Password
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-accent">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="4" y="10" width="16" height="10" rx="2" />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                    </svg>
                  </span>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="sharp-corners w-full border border-[#3e0074]/30 bg-white px-3 py-3 pl-10 pr-4 text-sm text-[#3e0074] placeholder:text-[#3e0074]/30 focus:border-[#3e0074] focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    className="sharp-corners h-4 w-4 border border-[#3e0074] text-[#3e0074] accent-[#3e0074]"
                  />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#3e0074] underline-offset-4 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="group sharp-corners relative w-full overflow-hidden bg-[#3e0074] py-4 text-xs font-bold uppercase tracking-[0.22em] text-white"
              >
                <span className="relative z-10">Sign in</span>
                <div className="absolute bottom-0 left-0 h-1 w-full translate-y-full bg-[#ff9b16] transition-transform duration-300 group-hover:translate-y-0" />
                <div className="absolute right-0 top-0 h-full w-1 bg-[#ff9b16]/60" />
              </button>
            </form>

            <div className="mt-8 border-t border-[#3e0074]/10 pt-8 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#3e0074]/60">
                New to EcoQuick?{" "}
                <Link
                  href="/signup"
                  className="text-[#3e0074] underline-offset-4 hover:underline"
                >
                  Create one here
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6 text-[#3e0074]/40">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-current text-[11px] font-bold">
                  ✓
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                  End-to-end encrypted
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-current text-[11px] font-bold">
                  ⚿
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                  Secure authentication
                </span>
              </div>
            </div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} EcoQuick Logistics. All rights
              reserved.
            </p>
          </div>
        </div>
      </main>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <LandingFooter />
      </div>
    </div>
  );
}

