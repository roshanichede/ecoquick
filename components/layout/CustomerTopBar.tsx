"use client";

import { usePathname, useRouter } from "next/navigation";
import { BrandLogo } from "./BrandLogo";

export function CustomerTopBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isDashboard = pathname === "/dashboard";
  const isOrders = pathname.startsWith("/orders");
  const isBook = pathname.startsWith("/book");
  const isAccount = pathname.startsWith("/account");
  const isHelp = pathname.startsWith("/help");

  const linkBase =
    "nav-tab text-[11px] sm:text-sm font-semibold tracking-[0.08em] transition-colors";

  const navButton = (label: string, active: boolean, onClick: () => void) => (
    active ? (
      <span
        key={label}
        className={`${linkBase} nav-tab-active text-primary`}
        aria-current="page"
      >
        {label}
      </span>
    ) : (
      <button
        key={label}
        onClick={onClick}
        className={`${linkBase} text-zinc-600 hover:text-primary`}
      >
        {label}
      </button>
    )
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
      <div className="relative mx-auto flex max-w-6xl items-center gap-4 px-5 sm:px-6">
        {/* Left: logo */}
        <div className="flex items-center">
          <button onClick={() => router.push("/dashboard")}>
            <BrandLogo size="md" />
          </button>
        </div>

        {/* Center: nav – fixed centered */}
        <nav className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-6 text-zinc-500 md:flex">
          {navButton("Dashboard", isDashboard, () => router.push("/dashboard"))}
          {navButton("Book", isBook, () => router.push("/book/type"))}
          {navButton("Orders", isOrders, () => router.push("/orders"))}
          {navButton("Account", isAccount, () => router.push("/account/settings"))}
          {navButton("Help", isHelp, () => router.push("/help"))}
        </nav>

        {/* Right: actions */}
        <div className="ml-auto flex items-center gap-3">
          <button
            aria-label="Notifications"
            title="Notifications"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] transition hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 sm:flex"
            onClick={() => router.push("/notifications")}
          >
            <span className="material-symbols-outlined text-base">
              notifications
            </span>
          </button>
          <button
            className="hidden h-9 items-center rounded-full border border-zinc-300 px-3 text-sm font-medium text-zinc-700 transition hover:border-[#3f0075] hover:bg-[#3f0075] hover:text-white sm:inline-flex"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}

