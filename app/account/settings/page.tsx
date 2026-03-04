 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CustomerMobileNav } from "../../../components/layout/CustomerMobileNav";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { CustomerTopBar } from "@/components/layout/CustomerTopBar";

export default function AccountSettingsPage() {
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

  if (!customerName) return null;

  return (
    <div className="page-fade min-h-screen overflow-x-hidden bg-[#fdfdfd] text-slate-900">
      <CustomerTopBar />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col pb-16">
        <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-primary bg-white md:block">
          <nav className="space-y-1 p-4 text-xs font-bold uppercase tracking-tight">
            <div className="mb-4 px-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Dashboard Menu
            </div>
            <button className="sidebar-link active flex w-full items-center gap-3 px-3 py-2 bg-primary text-white">
              <span className="material-symbols-outlined text-sm">person</span>
              Profile Info
            </button>
            <button className="sidebar-link flex w-full items-center gap-3 px-3 py-2 hover:bg-slate-50">
              <span className="material-symbols-outlined text-sm">
                payments
              </span>
              Payments
            </button>
            <button className="sidebar-link flex w-full items-center gap-3 px-3 py-2 hover:bg-slate-50">
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              Saved Addresses
            </button>
            <button className="sidebar-link flex w-full items-center gap-3 px-3 py-2 hover:bg-slate-50">
              <span className="material-symbols-outlined text-sm">
                security
              </span>
              Security
            </button>
            <button className="sidebar-link flex w-full items-center gap-3 px-3 py-2 hover:bg-slate-50">
              <span className="material-symbols-outlined text-sm">
                notifications
              </span>
              Notifications
            </button>
          </nav>
        </aside>

        {/* Main content */}
        <section className="mx-auto flex w-full flex-grow flex-col gap-8 p-6 md:p-8">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tighter text-primary">
                Account Settings
              </h1>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">
                Manage your professional profile and delivery preferences
              </p>
            </div>
            <button className="border border-primary bg-accent px-6 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary transition-colors hover:bg-white">
              Save All Changes
            </button>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Left column */}
            <div className="col-span-12 space-y-8 lg:col-span-7">
              {/* Personal info */}
              <section className="border border-primary bg-white p-6">
                <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-2">
                  <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-primary">
                    <span className="material-symbols-outlined text-lg">
                      badge
                    </span>
                    Personal Information
                  </h2>
                  <button className="text-[10px] font-black uppercase text-accent underline">
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-tight text-slate-400">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue={customerName.split(" ")[0] ?? "Jonathan"}
                      className="high-density-input"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-tight text-slate-400">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue={customerName.split(" ").slice(1).join(" ") || "Doe"}
                      className="high-density-input"
                    />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-tight text-slate-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue={
                        typeof window !== "undefined"
                          ? window.sessionStorage.getItem(
                              "ecoquickCustomerEmail",
                            ) ?? "j.doe@example.com"
                          : "j.doe@example.com"
                      }
                      className="high-density-input"
                    />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-tight text-slate-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+44 20 7946 0958"
                      className="high-density-input"
                    />
                  </div>
                </div>
              </section>

              {/* Saved addresses */}
              <section className="border border-primary bg-white p-6">
                <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-2">
                  <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-primary">
                    <span className="material-symbols-outlined text-lg">
                      home_pin
                    </span>
                    Saved Addresses
                  </h2>
                  <button className="bg-primary px-3 py-1 text-[10px] font-black uppercase text-white">
                    + Add New
                  </button>
                </div>
                <div className="space-y-3 text-xs">
                  {[
                    {
                      label: "Home",
                      detail: "221B Baker Street, London, NW1 6XE",
                      icon: "home",
                    },
                    {
                      label: "Office",
                      detail:
                        "The Shard, 32 London Bridge St, London SE1 9SG",
                      icon: "work",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border border-slate-100 p-3 transition-colors hover:border-primary"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400">
                          {item.icon}
                        </span>
                        <div>
                          <p className="font-bold uppercase">{item.label}</p>
                          <p className="text-[11px] text-slate-500">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined cursor-pointer text-sm text-slate-400">
                        more_vert
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="col-span-12 space-y-8 lg:col-span-5">
              {/* Payment methods */}
              <section className="border border-primary bg-white p-6">
                <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-2">
                  <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-primary">
                    <span className="material-symbols-outlined text-lg">
                      credit_card
                    </span>
                    Payment Methods
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="relative border border-primary bg-slate-50 p-4">
                    <div className="absolute right-0 top-0 bg-primary px-2 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white">
                      Primary
                    </div>
                    <div className="mb-4 flex items-start justify-between">
                      <span className="material-symbols-outlined text-2xl text-primary">
                        account_balance_wallet
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                        VISA •••• 4421
                      </span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[9px] font-black uppercase text-slate-400">
                          Expiry
                        </p>
                        <p className="text-xs font-bold">12 / 2027</p>
                      </div>
                      <button className="text-[10px] font-black uppercase text-accent underline">
                        Update
                      </button>
                    </div>
                  </div>
                  <button className="flex w-full items-center justify-center gap-2 border border-dashed border-slate-300 p-4 text-slate-400 transition-colors hover:border-primary hover:text-primary">
                    <span className="material-symbols-outlined text-sm">
                      add_circle
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.22em]">
                      Add Digital Wallet
                    </span>
                  </button>
                </div>
              </section>

              {/* Notifications */}
              <section className="border border-primary bg-white p-6">
                <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-2">
                  <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-primary">
                    <span className="material-symbols-outlined text-lg">
                      notifications_active
                    </span>
                    Notifications
                  </h2>
                </div>
                <div className="space-y-4 text-xs">
                  {[
                    {
                      title: "Delivery Updates",
                      body: "Push notifications for live tracking",
                      checked: true,
                    },
                    {
                      title: "Marketing Emails",
                      body: "Weekly offers and eco-tips",
                      checked: false,
                    },
                    {
                      title: "SMS Alerts",
                      body: "Critical account security notices",
                      checked: true,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-bold uppercase tracking-tight">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {item.body}
                        </p>
                      </div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="sr-only"
                          defaultChecked={item.checked}
                        />
                        <div className="custom-toggle" />
                      </label>
                    </div>
                  ))}
                </div>
              </section>

              {/* Security checklist */}
              <section className="bg-primary p-6 text-white">
                <h2 className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] opacity-70">
                  Security Checklist
                </h2>
                <ul className="space-y-3 text-[11px] font-bold">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-emerald-400">
                      check_circle
                    </span>
                    Email Verified
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-emerald-400">
                      check_circle
                    </span>
                    2FA Enabled
                  </li>
                  <li className="flex items-center gap-3 opacity-60">
                    <span className="material-symbols-outlined text-sm text-slate-300">
                      circle
                    </span>
                    Backup Codes Downloaded
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-primary bg-white px-8 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 md:flex-row">
          <div className="flex items-center gap-2">
            <BrandLogo size="sm" />
            <span className="ml-4 text-[10px] text-slate-400">
              Architectural Dashboard v1.0.4
            </span>
          </div>
          <div className="flex gap-8">
            <Link
              href="/help"
              className="transition-colors hover:text-primary"
            >
              Support
            </Link>
            <Link
              href="/help"
              className="transition-colors hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="/help"
              className="transition-colors hover:text-primary"
            >
              Terms
            </Link>
          </div>
          <p className="text-[10px] text-slate-400">
            © 2024 EcoQuick Logistics
          </p>
        </div>
      </footer>
      <CustomerMobileNav />
    </div>
  );
}

