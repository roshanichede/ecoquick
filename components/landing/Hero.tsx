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
    <section className="hero-fade relative flex flex-col items-center text-center">
      <div className="hero-chip-fade mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
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

      <h1 className="mt-6 sm:mt-8 md:mt-10 text-balance text-5xl uppercase leading-[0.92] tracking-tight text-[#3f0075] sm:text-6xl md:text-7xl lg:text-8xl">
        <span className="block">Why wait?</span>
        <span className="block">Get your parcels</span>
        <span className="block font-black text-[#3f0075]">
          {deliveredText || "Delivered"}
        </span>
        <span className="block font-black text-[#3f0075]">
          {deliveredComplete ? instantlyText || "Instantly" : ""}
        </span>
      </h1>

      <p className="mt-4 sm:mt-5 max-w-2xl text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
        Hyperlocal, fast, and secure deliveries for all your parcels.
      </p>

      <div
        id="get-started"
        className="hero-buttons-fade mt-6 sm:mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4"
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

      {/* Bike animation – full-width lined road */}
      <div
        className="relative mt-1 w-screen overflow-hidden"
        style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}
      >
        {/* Road surface */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-zinc-200/60" aria-hidden />
        {/* Center dashed line */}
        <div
          className="absolute inset-x-0 bottom-8 h-0.5 w-full"
          style={{
            background: "repeating-linear-gradient(90deg, rgb(161 161 170 / 0.6) 0, rgb(161 161 170 / 0.6) 12px, transparent 12px, transparent 24px)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-zinc-400/60"
          aria-hidden
        />
        <div className="relative h-24 w-full md:h-40">
          <div className="absolute bottom-0 left-0 flex items-end">
            <img
              src="/bike.png"
              alt=""
              className="animate-bike-ride block h-24 w-auto object-contain object-bottom md:h-36"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

