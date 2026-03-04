"use client";

import { usePathname, useRouter } from "next/navigation";

export function CustomerMobileNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isDashboard = pathname === "/dashboard";
  const isOrders = pathname.startsWith("/orders");
  const isImpact = pathname.startsWith("/impact");
  const isAccount = pathname.startsWith("/account");

  const baseClasses =
    "flex flex-col items-center gap-0.5 text-[10px] font-bold uppercase tracking-widest";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-14 items-center justify-around border-t border-accent/20 bg-primary px-2 text-white lg:hidden">
      <button
        className={`${baseClasses} ${isDashboard ? "text-accent" : "opacity-70"}`}
        onClick={() => router.push("/dashboard")}
      >
        <span className="material-symbols-outlined text-lg">dashboard</span>
        <span>Dash</span>
      </button>
      <button
        className={`${baseClasses} ${isOrders ? "text-accent" : "opacity-70"}`}
        onClick={() => router.push("/orders")}
      >
        <span className="material-symbols-outlined text-lg">
          local_shipping
        </span>
        <span>Orders</span>
      </button>
      <button
        className={`${baseClasses} ${isImpact ? "text-accent" : "opacity-70"}`}
        onClick={() => router.push("/impact")}
      >
        <span className="material-symbols-outlined text-lg">eco</span>
        <span>Impact</span>
      </button>
      <button
        className={`${baseClasses} ${isAccount ? "text-accent" : "opacity-70"}`}
        onClick={() => router.push("/account/settings")}
      >
        <span className="material-symbols-outlined text-lg">person</span>
        <span>Account</span>
      </button>
    </nav>
  );
}

