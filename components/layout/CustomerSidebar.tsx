"use client";

import { usePathname, useRouter } from "next/navigation";
import { BrandLogo } from "./BrandLogo";

export function CustomerSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const isDashboard = pathname === "/dashboard";
  const isOrders = pathname.startsWith("/orders");
  const isImpact = pathname.startsWith("/impact");
  const isAccount = pathname.startsWith("/account");
  const isHelp = pathname.startsWith("/help");

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-primary bg-white lg:flex">
      <div className="border-b border-primary p-6">
        <BrandLogo size="sm" />
      </div>
      <nav className="flex-1 space-y-1 p-4">
        <button
          className={`flex items-center gap-3 px-4 py-3 text-[10px] font-bold uppercase tracking-widest sharp-edge ${
            isDashboard
              ? "bg-primary text-white"
              : "text-primary transition-all hover:bg-primary/5"
          }`}
          onClick={() => router.push("/dashboard")}
        >
          <span className="material-symbols-outlined text-lg text-accent">
            dashboard
          </span>
          <span>Dashboard</span>
        </button>
        <button
          className={`flex items-center gap-3 px-4 py-3 text-[10px] font-bold uppercase tracking-widest sharp-edge ${
            isOrders
              ? "bg-primary text-white"
              : "text-primary transition-all hover:bg-primary/5"
          }`}
          onClick={() => router.push("/orders")}
        >
          <span className="material-symbols-outlined text-lg text-accent">
            local_shipping
          </span>
          <span>Orders</span>
        </button>
        <button
          className={`flex items-center gap-3 px-4 py-3 text-[10px] font-bold uppercase tracking-widest sharp-edge ${
            isImpact
              ? "bg-primary text-white"
              : "text-primary transition-all hover:bg-primary/5"
          }`}
          onClick={() => router.push("/impact")}
        >
          <span className="material-symbols-outlined text-lg text-accent">
            eco
          </span>
          <span>Impact</span>
        </button>
        <button
          className={`flex items-center gap-3 px-4 py-3 text-[10px] font-bold uppercase tracking-widest sharp-edge ${
            isAccount
              ? "bg-primary text-white"
              : "text-primary transition-all hover:bg-primary/5"
          }`}
          onClick={() => router.push("/account/settings")}
        >
          <span className="material-symbols-outlined text-lg text-accent">
            person
          </span>
          <span>Account</span>
        </button>
        <button
          className={`flex items-center gap-3 px-4 py-3 text-[10px] font-bold uppercase tracking-widest sharp-edge ${
            isHelp
              ? "bg-primary text-white"
              : "text-primary transition-all hover:bg-primary/5"
          }`}
          onClick={() => router.push("/help")}
        >
          <span className="material-symbols-outlined text-lg">help</span>
          <span>Help</span>
        </button>
      </nav>
    </aside>
  );
}

