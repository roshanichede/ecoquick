"use client";

import { usePathname, useRouter } from "next/navigation";
import { BrandLogo } from "./BrandLogo";

export function CustomerTopBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isDashboard = pathname === "/dashboard";
  const isOrders = pathname.startsWith("/orders");
  const isBook = pathname.startsWith("/book");
  const isImpact = pathname.startsWith("/impact");
  const isAccount = pathname.startsWith("/account");
  const isHelp = pathname.startsWith("/help");

  const linkBase =
    "text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] transition-colors";

  const navButton = (label: string, active: boolean, onClick: () => void) => (
    <button
      key={label}
      onClick={onClick}
      className={`${linkBase} ${
        active
          ? "text-primary border-b-2 border-primary pb-1"
          : "text-zinc-400 hover:text-primary"
      }`}
    >
      {label}
    </button>
  );

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("ecoquickCustomerName");
      window.sessionStorage.removeItem("ecoquickCustomerEmail");
    }
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
        <div className="flex flex-1 items-center gap-8">
          <button onClick={() => router.push("/dashboard")}>
            <BrandLogo size="sm" />
          </button>

          <nav className="hidden items-center gap-7 text-zinc-500 md:flex">
          {navButton("Dashboard", isDashboard, () => router.push("/dashboard"))}
          {navButton("Book", isBook, () => router.push("/book/type"))}
          {navButton("Orders", isOrders, () => router.push("/orders"))}
          {navButton("Impact", isImpact, () => router.push("/impact"))}
          {navButton("Account", isAccount, () => router.push("/account/settings"))}
          {navButton("Help", isHelp, () => router.push("/help"))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] transition hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 sm:flex"
            onClick={() => router.push("/help")}
          >
            <span className="material-symbols-outlined text-base">
              notifications
            </span>
          </button>
          <button
            className="hidden h-9 items-center rounded-full border border-zinc-300 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-700 transition hover:border-[#3f0075] hover:bg-[#3f0075] hover:text-white sm:inline-flex"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}

