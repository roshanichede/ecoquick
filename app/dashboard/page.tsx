"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CustomerSidebar } from "../../components/layout/CustomerSidebar";

export default function CustomerDashboardPage() {
  const router = useRouter();
  const [customerName, setCustomerName] = useState<string | null>(null);

  const scrollToId = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedName = window.sessionStorage.getItem("ecoquickCustomerName");

    if (!storedName) {
      router.replace("/login");
      return;
    }

    setCustomerName(storedName);
  }, [router]);

  if (!customerName) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-primary">
      <CustomerSidebar />

      <main className="min-h-screen pb-20 lg:ml-64 lg:pb-0">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-primary bg-white px-4 py-2 lg:px-12 lg:py-3">
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex h-7 w-7 items-center justify-center bg-primary sharp-edge">
              <span className="material-symbols-outlined text-base text-white">
                bolt
              </span>
            </div>
            <span className="text-lg font-black uppercase tracking-tighter">
              EQ
            </span>
          </div>
          <div className="ml-auto flex flex-col items-end gap-1">
            <div className="flex items-center gap-4 lg:gap-6">
              <button
                className="material-symbols-outlined text-xl text-primary transition-colors hover:text-accent"
                onClick={() => router.push("/help")}
              >
                notifications
              </button>
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="hidden text-right sm:block">
                  <p className="text-[9px] font-black uppercase tracking-widest">
                    {customerName}
                  </p>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-accent">
                    Member Since 2023
                  </p>
                </div>
                <div className="sharp-edge h-8 w-8 border border-primary p-0.5 lg:h-9 lg:w-9">
                  <div className="flex h-full w-full items-center justify-center bg-primary">
                    <span className="material-symbols-outlined text-xs text-white lg:text-sm">
                      person
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary underline-offset-4 hover:underline"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.sessionStorage.removeItem("ecoquickCustomerName");
                  window.sessionStorage.removeItem("ecoquickCustomerEmail");
                }
                router.push("/login");
              }}
            >
              Sign out
            </button>
          </div>
        </header>

        <div
          className="max-w-[1400px] px-4 py-6 lg:px-12 lg:py-8"
          id="dashboard-top"
        >
          <section className="mb-6 lg:mb-8">
            <h1 className="mb-4 text-2xl font-black leading-none tracking-tighter lg:mb-5 lg:text-3xl">
              Hello, <span className="accent-underline">{customerName}</span>
            </h1>
            <div className="flex w-full flex-row border border-primary lg:w-fit">
              <button
                className="sharp-edge flex flex-1 items-center justify-center gap-2 bg-primary px-3 py-2.5 text-[9px] font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-black lg:flex-none lg:px-8 lg:py-3.5 lg:text-[10px]"
                onClick={() => router.push("/book/type")}
              >
                <span className="material-symbols-outlined text-sm text-accent">
                  add_circle
                </span>
                New
              </button>
              <button className="sharp-edge flex-1 border-l border-primary bg-white px-3 py-2.5 text-[9px] font-black uppercase tracking-[0.1em] text-primary transition-colors hover:bg-primary/5 lg:flex-none lg:px-8 lg:py-3.5 lg:text-[10px]">
                Track
              </button>
              <button className="sharp-edge flex-1 border-l border-primary bg-white px-3 py-2.5 text-[9px] font-black uppercase tracking-[0.1em] text-primary transition-colors hover:bg-primary/5 lg:flex-none lg:px-8 lg:py-3.5 lg:text-[10px]">
                History
              </button>
            </div>
          </section>

          <section className="relative mb-8 overflow-hidden border border-primary bg-white p-6 lg:mb-10 lg:p-8">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 translate-x-1/2 -skew-x-12 bg-primary/5" />
            <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="mb-1.5 text-xl font-black uppercase leading-tight tracking-tighter lg:mb-2 lg:text-2xl">
                Ready for your first delivery?
              </h2>
              <p className="mb-5 max-w-sm px-4 text-[10px] font-medium text-primary/60 lg:mb-6 lg:max-w-md lg:px-0 lg:text-xs">
                Precision, speed, and environmental accountability for
                high-value assets.
              </p>
              <button
                className="sharp-edge border border-accent/30 bg-primary px-6 py-3 text-[9px] font-black uppercase tracking-[0.3em] text-white shadow-[4px_4px_0px_#ff9b16] transition-colors hover:bg-black lg:px-10 lg:py-4 lg:text-[10px] lg:shadow-[6px_6px_0px_#ff9b16]"
                onClick={() => router.push("/book/type")}
              >
                Book Now
              </button>
            </div>
          </section>

          <section className="mb-8 lg:mb-10" id="overview-section">
            <h3 className="mb-3 text-[8px] font-black uppercase tracking-[0.2em] opacity-40 lg:mb-4 lg:text-[9px]">
              System Overview
            </h3>
            <div className="checkerboard-grid grid grid-cols-2 lg:grid-cols-4">
              <div className="flex min-h-[130px] flex-col justify-between p-4 lg:min-h-[140px] lg:p-6 aspect-square lg:aspect-auto">
                <span className="material-symbols-outlined text-xl text-accent lg:text-2xl">
                  inventory_2
                </span>
                <div>
                  <p className="text-2xl font-black leading-none lg:text-4xl">
                    24
                  </p>
                  <p className="mt-0.5 text-[7px] font-black uppercase tracking-widest lg:text-[9px]">
                    Active
                  </p>
                </div>
              </div>
              <div className="flex min-h-[130px] flex-col justify-between p-4 lg:min-h-[140px] lg:p-6 aspect-square lg:aspect-auto">
                <span className="material-symbols-outlined text-xl text-accent lg:text-2xl">
                  eco
                </span>
                <div>
                  <p className="text-2xl font-black leading-none text-white lg:text-4xl">
                    12.8kg
                  </p>
                  <p className="mt-0.5 text-[7px] font-black uppercase tracking-widest lg:text-[9px]">
                    CO2 Offset
                  </p>
                </div>
              </div>
              <div className="flex min-h-[130px] flex-col justify-between p-4 lg:min-h-[140px] lg:p-6 aspect-square lg:aspect-auto">
                <span className="material-symbols-outlined text-xl text-accent lg:text-2xl">
                  payments
                </span>
                <div>
                  <p className="text-2xl font-black leading-none text-white lg:text-4xl">
                    £482
                  </p>
                  <p className="mt-0.5 text-[7px] font-black uppercase tracking-widest lg:text-[9px]">
                    Credits
                  </p>
                </div>
              </div>
              <div className="flex min-h-[130px] flex-col justify-between p-4 lg:min-h-[140px] lg:p-6 aspect-square lg:aspect-auto">
                <span className="material-symbols-outlined text-xl text-accent lg:text-2xl">
                  star
                </span>
                <div>
                  <p className="text-2xl font-black leading-none lg:text-4xl">
                    4.9
                  </p>
                  <p className="mt-0.5 text-[7px] font-black uppercase tracking-widest lg:text-[9px]">
                    Rating
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8 lg:mb-12" id="impact-section">
            <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden border-b-2 border-accent bg-primary p-6 text-white lg:flex-row lg:gap-8 lg:p-8">
              <div className="relative z-10 w-full text-center lg:text-left">
                <h3 className="mb-3 text-[8px] font-black uppercase tracking-[0.2em] opacity-60 lg:mb-4 lg:text-[9px]">
                  Impact Efficiency
                </h3>
                <div className="mb-1 flex items-center justify-center gap-3 lg:justify-start">
                  <span className="text-4xl font-black leading-none lg:text-6xl">
                    85%
                  </span>
                  <span className="material-symbols-outlined text-2xl text-accent lg:text-4xl">
                    energy_savings_leaf
                  </span>
                </div>
                <p className="mx-auto max-w-xs text-[10px] font-bold leading-tight opacity-90 lg:mx-0 lg:max-w-md lg:text-sm">
                  Supply chain outperforming 85% of regional competitors.
                </p>
              </div>
              <div className="relative z-10 w-full lg:w-auto">
                <button
                  className="sharp-edge w-full border border-accent px-6 py-3 text-[8px] font-black uppercase tracking-[0.2em] text-accent transition-all hover:bg-accent hover:text-primary lg:w-auto lg:px-8 lg:py-3.5 lg:text-[10px]"
                  onClick={() => router.push("/business")}
                >
                  Export Data
                </button>
              </div>
            </div>
          </section>

          <footer className="flex flex-col items-center justify-between gap-4 border-t border-primary/10 pb-10 pt-6 text-center text-[8px] font-black uppercase tracking-[0.2em] opacity-40 lg:flex-row lg:items-start lg:pb-6 lg:pt-8 lg:text-left lg:text-[9px]">
            <div className="space-y-0.5 lg:space-y-1">
              <p>© 2024 EcoQuick Logistics Intl.</p>
              <p>Architecture V2.1.0-Compact</p>
            </div>
            <div className="flex gap-4 lg:gap-8">
              <button
                className="hover:text-primary"
                onClick={() => router.push("/help")}
              >
                Terms
              </button>
              <button
                className="hover:text-primary"
                onClick={() => router.push("/help")}
              >
                Privacy
              </button>
              <button
                className="hover:text-primary"
                onClick={() => router.push("/help")}
              >
                API Docs
              </button>
            </div>
          </footer>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-14 items-center justify-around border-t border-accent/20 bg-primary px-2 text-white lg:hidden">
        <button
          className="flex flex-col items-center gap-0.5 text-accent"
          onClick={() => scrollToId("dashboard-top")}
        >
          <span className="material-symbols-outlined text-lg">dashboard</span>
          <span className="text-[6px] font-bold uppercase tracking-widest">
            Dash
          </span>
        </button>
        <button
          className="flex flex-col items-center gap-0.5 opacity-60"
          onClick={() => router.push("/book/type")}
        >
          <span className="material-symbols-outlined text-lg">
            local_shipping
          </span>
          <span className="text-[6px] font-bold uppercase tracking-widest">
            Book
          </span>
        </button>
        <button
          className="flex flex-col items-center gap-0.5 opacity-60"
          onClick={() => scrollToId("impact-section")}
        >
          <span className="material-symbols-outlined text-lg">eco</span>
          <span className="text-[6px] font-bold uppercase tracking-widest">
            Impact
          </span>
        </button>
        <button
          className="flex flex-col items-center gap-0.5 opacity-60"
          onClick={() => router.push("/account/settings")}
        >
          <span className="material-symbols-outlined text-lg">person</span>
          <span className="text-[6px] font-bold uppercase tracking-widest">
            Account
          </span>
        </button>
      </nav>
    </div>
  );
}

