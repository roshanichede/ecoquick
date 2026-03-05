"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CustomerTopBar } from "@/components/layout/CustomerTopBar";
import { CustomerMobileNav } from "@/components/layout/CustomerMobileNav";

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
    <div className="page-fade min-h-screen overflow-x-hidden bg-white text-slate-900">
      <CustomerTopBar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-10 sm:px-6 lg:py-12">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Activity
            </p>
            <h1 className="mb-3 text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl">
              ORDER HISTORY
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 font-semibold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                32 total orders
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                100% carbon neutral
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-1 py-1 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur">
            <button className="rounded-full bg-primary px-4 py-1.5 text-white shadow-sm">
              All orders
            </button>
            <button className="rounded-full px-4 py-1.5 hover:bg-slate-50">
              Delivered
            </button>
            <button className="rounded-full px-4 py-1.5 hover:bg-slate-50">
              In transit
            </button>
            <button className="rounded-full px-4 py-1.5 hover:bg-slate-50">
              Cancelled
            </button>
            <span className="mx-1 h-4 w-px bg-slate-200" />
            <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 hover:bg-slate-50">
              Last 30 days
              <span className="material-symbols-outlined text-xs">
                expand_more
              </span>
            </button>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-12 border-b border-slate-100 bg-slate-50/80 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              <div className="col-span-2">Order ID</div>
              <div className="col-span-2">Date &amp; time</div>
              <div className="col-span-4">Destination</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1 text-right">Price</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>
            <div className="divide-y divide-slate-100">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="grid grid-cols-12 items-center bg-white/80 px-6 py-4 text-sm transition-colors hover:bg-slate-50"
                >
                  <div className="col-span-2 font-semibold tracking-tight text-slate-900">
                    {order.id}
                  </div>
                  <div className="col-span-2 text-sm font-medium text-slate-500">
                    {order.date}
                    <span className="block text-[10px] uppercase opacity-50">
                      {order.time}
                    </span>
                  </div>
                  <div className="col-span-4 pr-8">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      {order.destination}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-tight text-slate-400">
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
                  <div className="col-span-2 flex justify-end gap-2">
                    <button className="rounded-full border border-slate-200 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700 hover:border-primary hover:text-primary">
                      Repeat
                    </button>
                    <button className="rounded-full bg-primary/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-primary">
                      Invoice
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/60 px-6 py-3 text-[11px] text-slate-500">
              <span>Showing 4 of 32 orders</span>
              <div className="flex gap-1">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-xs text-slate-500 hover:border-primary hover:text-primary">
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-primary text-[10px] font-semibold text-white">
                  1
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-[10px] font-semibold text-slate-600 hover:border-primary hover:text-primary">
                  2
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-[10px] font-semibold text-slate-600 hover:border-primary hover:text-primary">
                  3
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-xs text-slate-500 hover:border-primary hover:text-primary">
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="mt-6 space-y-4 md:hidden">
          {orders.slice(0, 2).map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs shadow-sm backdrop-blur-sm"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-tight text-slate-500">
                    {order.id}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {order.price}
                  </p>
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
                <button className="rounded-full border border-slate-200 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700 hover:border-primary hover:text-primary">
                  Repeat Order
                </button>
                <button className="rounded-full bg-primary py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  View Invoice
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="mt-10 border-t border-primary/10 pt-4 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
        © 2026 EcoQuick. All rights reserved.
      </footer>
      <CustomerMobileNav />
    </div>
  );
}

