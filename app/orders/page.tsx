"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CustomerSidebar } from "../../components/layout/CustomerSidebar";

export default function OrderHistoryPage() {
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

  const orders = [
    {
      id: "EQ-9421-XB",
      price: "£42.50",
      status: "Delivered",
      statusClass:
        "text-emerald-600 bg-emerald-50 border border-emerald-100",
      destination: "221B Baker St, London, NW1 6XE",
      meta: "Express Bike Delivery",
      date: "Oct 24, 2023",
      time: "14:22 PM",
    },
    {
      id: "EQ-8830-ZA",
      price: "£128.00",
      status: "Cancelled",
      statusClass: "text-slate-600 bg-slate-50 border border-slate-200",
      destination: "10 Downing St, London SW1A 2AA",
      meta: "Scheduled Cargo Van",
      date: "Oct 22, 2023",
      time: "09:15 AM",
    },
    {
      id: "EQ-7712-PL",
      price: "£24.90",
      status: "Delivered",
      statusClass:
        "text-emerald-600 bg-emerald-50 border border-emerald-100",
      destination: "The Shard, 32 London Bridge St",
      meta: "Instant Bike Delivery",
      date: "Oct 21, 2023",
      time: "18:45 PM",
    },
    {
      id: "EQ-6540-MN",
      price: "£55.00",
      status: "Delivered",
      statusClass:
        "text-emerald-600 bg-emerald-50 border border-emerald-100",
      destination: "Buckingham Palace, London SW1A 1AA",
      meta: "Express Bike Delivery",
      date: "Oct 19, 2023",
      time: "11:30 AM",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <CustomerSidebar />
      <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_0_0,rgba(62,0,116,0.08),transparent_35%),radial-gradient(circle_at_20px_20px,rgba(62,0,116,0.04),transparent_35%)] text-slate-900 lg:ml-64">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b-4 border-primary bg-white px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center bg-primary">
            <span className="material-symbols-outlined text-white">speed</span>
          </div>
          <span className="text-2xl font-black uppercase tracking-tighter text-primary">
            EcoQuick
          </span>
        </div>
        <nav className="hidden items-center gap-10 lg:flex text-xs font-black uppercase tracking-[0.22em]">
          <Link
            href="/dashboard"
            className="transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <span className="border-b-2 border-primary pb-1 text-primary">
            Order History
          </span>
          <Link
            href="/business"
            className="transition-colors hover:text-primary"
          >
            Invoices
          </Link>
          <Link
            href="/impact"
            className="transition-colors hover:text-primary"
          >
            Sustainability Report
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden text-right sm:block">
            <p className="text-[10px] font-bold uppercase tracking-tight text-slate-400">
              Verified Account
            </p>
            <p className="text-sm font-black uppercase text-primary">
              {customerName}
            </p>
          </div>
          <button
            className="flex h-10 w-10 items-center justify-center bg-slate-100 transition-colors hover:bg-primary hover:text-white"
            onClick={() => router.push("/account/settings")}
          >
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 sm:px-8">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-black uppercase tracking-tighter text-primary sm:text-5xl md:text-6xl">
              Order History
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                32 Total Orders
              </span>
              <span className="bg-emerald-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                100% Carbon Neutral
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 border-2 border-primary bg-white p-1 text-[10px] font-black uppercase tracking-[0.22em] shadow-[4px_4px_0px_0px_#3e0074] sm:shadow-[4px_4px_0px_0px_#3e0074] md:shadow-[4px_4px_0px_0px_#3e0074]">
            <button className="bg-primary px-4 py-2 text-white">
              All Orders
            </button>
            <button className="px-4 py-2 text-primary hover:bg-primary/5">
              Delivered
            </button>
            <button className="px-4 py-2 text-primary hover:bg-primary/5">
              In Transit
            </button>
            <button className="px-4 py-2 text-primary hover:bg-primary/5">
              Cancelled
            </button>
            <div className="mx-2 h-8 w-px self-center bg-slate-200" />
            <button className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/5">
              Last 30 Days
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </button>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden border-2 border-primary bg-white shadow-[8px_8px_0px_0px_#3e0074] md:block">
          <div className="grid grid-cols-12 bg-primary px-6 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white">
            <div className="col-span-2">Order ID</div>
            <div className="col-span-2">Date &amp; Time</div>
            <div className="col-span-4">Destination</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1 text-right">Price</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>
          <div className="divide-y divide-slate-100">
            {orders.map((order, idx) => (
              <div
                key={order.id}
                className={`order-row grid grid-cols-12 items-center px-6 py-5 transition-colors ${
                  idx % 2 === 1 ? "bg-primary/5" : "bg-white"
                } hover:bg-primary/10`}
              >
                <div className="col-span-2 text-sm font-black tracking-tight">
                  {order.id}
                </div>
                <div className="col-span-2 text-sm font-medium text-slate-500">
                  {order.date}
                  <span className="block text-[10px] uppercase opacity-50">
                    {order.time}
                  </span>
                </div>
                <div className="col-span-4 pr-8">
                  <p className="truncate text-sm font-bold">
                    {order.destination}
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-tight text-slate-400">
                    {order.meta}
                  </p>
                </div>
                <div className="col-span-1">
                  <span
                    className={`px-2 py-1 text-[10px] font-black uppercase tracking-[0.22em] ${order.statusClass}`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="col-span-1 text-right font-black text-primary">
                  {order.price}
                </div>
                <div className="col-span-2 flex justify-end gap-1">
                  <button className="bg-accent px-3 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-white hover:brightness-110">
                    Repeat
                  </button>
                  <button className="bg-slate-900 px-3 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-white hover:bg-primary">
                    Invoice
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
              Showing 4 of 32 orders
            </span>
            <div className="flex gap-1">
              <button className="flex h-8 w-8 items-center justify-center border border-slate-300 hover:bg-primary hover:text-white">
                <span className="material-symbols-outlined text-sm">
                  chevron_left
                </span>
              </button>
              <button className="flex h-8 w-8 items-center justify-center border border-primary bg-primary text-[10px] font-black text-white">
                1
              </button>
              <button className="flex h-8 w-8 items-center justify-center border border-slate-300 text-[10px] font-black hover:bg-primary hover:text-white">
                2
              </button>
              <button className="flex h-8 w-8 items-center justify-center border border-slate-300 text-[10px] font-black hover:bg-primary hover:text-white">
                3
              </button>
              <button className="flex h-8 w-8 items-center justify-center border border-slate-300 hover:bg-primary hover:text-white">
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="mt-6 space-y-4 md:hidden">
          {orders.slice(0, 2).map((order) => (
            <div
              key={order.id}
              className="border-2 border-primary bg-white p-4 text-xs shadow-[4px_4px_0px_0px_#3e0074]"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-tight text-primary">
                    {order.id}
                  </p>
                  <p className="mt-1 text-sm font-black">{order.price}</p>
                </div>
                <span
                  className={`px-2 py-1 text-[9px] font-black uppercase tracking-[0.22em] ${order.statusClass}`}
                >
                  {order.status}
                </span>
              </div>
              <p className="mb-1 text-xs font-bold text-slate-500">
                {order.destination}
              </p>
              <p className="mb-4 text-[10px] font-medium text-slate-400">
                {order.date} • {order.time}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-accent py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                  Repeat Order
                </button>
                <button className="bg-primary py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                  View Invoice
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-slate-900 px-8 py-12 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center bg-white">
                <span className="material-symbols-outlined text-sm text-primary">
                  speed
                </span>
              </div>
            </div>
            <p className="mb-6 text-xs font-medium leading-relaxed text-slate-400">
              Hyper-efficient, architectural delivery infrastructure for the
              modern eco-conscious business ecosystem.
            </p>
            <div className="border-l-2 border-accent pl-4">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-accent">
                Status: Active
              </p>
              <p className="text-[10px] font-medium text-slate-400">
                Node Cluster: London-East
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.22em]">
              <li>
                <Link
                  href="/dashboard"
                  className="transition-colors hover:text-accent"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="transition-colors hover:text-accent"
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="transition-colors hover:text-accent"
                >
                  Invoices
                </Link>
              </li>
              <li>
                <Link
                  href="/account/settings"
                  className="transition-colors hover:text-accent"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              System
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.22em]">
              <li>
                <Link
                  href="/help"
                  className="transition-colors hover:text-accent"
                >
                  API Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="transition-colors hover:text-accent"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="transition-colors hover:text-accent"
                >
                  Uptime Status
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="transition-colors hover:text-accent"
                >
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-primary p-6">
            <h4 className="mb-4 text-[10px] font-black uppercase tracking-[0.2em]">
              Newsletter Node
            </h4>
            <p className="mb-4 text-[10px] font-medium leading-relaxed text-slate-300">
              Join 10k+ businesses optimizing their delivery supply chain.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full border-none bg-white/10 px-3 py-3 text-[10px] font-black placeholder:text-slate-300 focus:bg-white/20 focus:outline-none"
              />
              <button className="bg-accent px-4 py-3">
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 text-[9px] font-bold uppercase tracking-[0.3em] text-white/60 md:flex-row">
          <p>
            © 2026 ECOQUICK ARCHITECTURAL DELIVERY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-2">
            <div className="h-2 w-2 bg-emerald-500" />
            <div className="h-2 w-2 bg-white/20" />
            <div className="h-2 w-2 bg-white/20" />
          </div>
        </div>
        <div className="fixed bottom-8 left-8 z-50">
          <div className="flex items-center gap-4 border-2 border-primary bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary shadow-[4px_4px_0px_0px_#3e0074]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Live Network: Optimized
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

