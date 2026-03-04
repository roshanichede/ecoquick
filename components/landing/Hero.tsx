"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [deliveredText, setDeliveredText] = useState("");
  const [instantlyText, setInstantlyText] = useState("");
  const deliveredComplete = deliveredText === "Delivered";

  useEffect(() => {
    const fullDelivered = "Delivered";
    const fullInstantly = "Instantly";
    let deliveredIndex = 0;
    let instantlyIndex = 0;

    const interval = setInterval(() => {
      if (deliveredIndex < fullDelivered.length) {
        setDeliveredText(fullDelivered.slice(0, deliveredIndex + 1));
        deliveredIndex += 1;
      } else if (instantlyIndex < fullInstantly.length) {
        setInstantlyText(fullInstantly.slice(0, instantlyIndex + 1));
        instantlyIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-fade flex flex-col items-center text-center">
      <div className="hero-chip-fade mt-6 flex flex-wrap items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
        <span className="inline-flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-accent" />
          Live tracking
        </span>
        <span className="text-zinc-300">•</span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-accent" />
          Quick delivery
        </span>
        <span className="text-zinc-300">•</span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-accent" />
          Zero emissions
        </span>
      </div>

      <h1 className="mt-10 text-balance text-5xl uppercase leading-[0.92] tracking-tight text-[#3f0075] sm:text-6xl md:text-7xl lg:text-8xl">
        <span className="block">Why wait?</span>
        <span className="block">Get your parcels</span>
        <span className="block font-bold text-[#cdbfe0]">
          {deliveredText || "Delivered"}
          <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-[#cdbfe0]" />
        </span>
        <span className="block text-[#d9cfe7]">
          {deliveredComplete ? instantlyText || "Instantly" : ""}
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
        Hyperlocal, fast, and secure deliveries for all your parcels.
      </p>

      <div
        id="get-started"
        className="hero-buttons-fade mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Link
          href="/signup"
          className="inline-flex h-11 items-center justify-center rounded-full bg-[#3f0075] px-7 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#2f005a] hover:shadow-lg"
        >
          Start now
        </Link>
        <Link
          href="/login"
          className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-7 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-900 transition-transform duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-md"
        >
          Deliver a parcel
        </Link>
      </div>
    </section>
  );
}

