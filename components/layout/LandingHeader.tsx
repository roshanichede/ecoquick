"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";

export function LandingHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkBase =
    "nav-tab text-[11px] sm:text-sm font-semibold tracking-[0.08em] transition-colors";

  const NavItem = ({ href, label }: { href: string; label: string }) => {
    const isActive =
      (href === "/" && pathname === "/") ||
      (href !== "/" && pathname.startsWith(href));

    const className = `${linkBase} ${
      isActive
        ? "nav-tab-active text-primary"
        : "text-zinc-600 hover:text-primary"
    }`;

    if (isActive) {
      return (
        <span className={className} aria-current="page">
          {label}
        </span>
      );
    }

    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  };

  return (
    <header className="border-b border-zinc-200 bg-white/80 py-3 backdrop-blur md:py-4">
      <div className="relative flex items-center gap-4">
        {/* Left: logo */}
        <div className="flex items-center">
          <BrandLogo size="md" />
        </div>

        {/* Center: nav – fixed centered */}
        <nav className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 md:flex">
          <NavItem href="/" label="Dashboard" />
          <NavItem href="/about" label="About" />
          <NavItem href="/business" label="Business" />
          <NavItem href="/help" label="Help" />
        </nav>

        {/* Right: auth actions */}
        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-zinc-600 transition hover:text-zinc-900 md:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center rounded-full bg-[#3f0075] px-5 text-sm font-semibold text-white transition hover:bg-[#2f005a]"
          >
            Get started
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] transition hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined text-[20px] leading-none">
              menu
            </span>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="mt-3 flex flex-col gap-2 text-[11px] font-medium tracking-[0.05em] text-zinc-600 md:hidden">
          <Link href="/" className="py-0.5 transition hover:text-zinc-900">
            Dashboard
          </Link>
          <Link href="/about" className="py-0.5 transition hover:text-zinc-900">
            About
          </Link>
          <Link
            href="/business"
            className="py-0.5 transition hover:text-zinc-900"
          >
            Business
          </Link>
          <Link href="/help" className="py-0.5 transition hover:text-zinc-900">
            Help
          </Link>
          <Link
            href="/login"
            className="py-0.5 transition hover:text-zinc-900"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="py-0.5 text-[#3f0075] transition hover:text-zinc-900"
          >
            Get started
          </Link>
        </nav>
      )}
    </header>
  );
}

