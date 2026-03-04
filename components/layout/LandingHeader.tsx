import Link from "next/link";
import Image from "next/image";

export function LandingHeader() {
  return (
    <header className="flex flex-col gap-4 border-b border-zinc-200 py-4 md:flex-row md:items-center md:justify-between md:py-5">
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

      <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 md:gap-x-7 md:text-xs">
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

      <div className="flex items-center gap-3">
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
      </div>
    </header>
  );
}

