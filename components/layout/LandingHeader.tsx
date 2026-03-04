"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white/80 py-3 backdrop-blur md:py-4">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
        <Image
          src="/ecoquick-logo.png"
          alt="EcoQuick logo"
          width={40}
          height={40}
          className="h-9 w-9 rounded-xl object-contain"
          priority
        />
        <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-zinc-950">
          EcoQuick
        </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="inline-flex text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 transition hover:text-zinc-900 sm:text-xs"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center rounded-full bg-[#3f0075] px-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#2f005a]"
          >
            Get started
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="block h-[1px] w-4 bg-current" />
            <span className="mt-1 block h-[1px] w-4 bg-current" />
            <span className="mt-1 block h-[1px] w-4 bg-current" />
          </button>
        </div>
      </div>

      <nav className="mt-3 hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 md:flex">
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
        </nav>
      )}
    </header>
  );
}

