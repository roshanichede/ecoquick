"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white/80 py-3 backdrop-blur md:py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-8">
          <BrandLogo size="sm" />

          <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 md:flex">
            <Link href="/" className="transition hover:text-zinc-900">
              Dashboard
            </Link>
            <Link href="/about" className="transition hover:text-zinc-900">
              About
            </Link>
            <Link href="/business" className="transition hover:text-zinc-900">
              Business
            </Link>
            <Link href="/help" className="transition hover:text-zinc-900">
              Help
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 transition hover:text-zinc-900 sm:inline-flex sm:text-xs"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center rounded-full bg-[#3f0075] px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#2f005a] sm:px-4 sm:text-xs"
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
        <nav className="mt-3 flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-600 md:hidden">
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

