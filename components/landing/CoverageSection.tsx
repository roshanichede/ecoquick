export function CoverageSection() {
  return (
    <section id="coverage" className="mt-16 border-t border-zinc-200 pt-12">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-[#3f0075] sm:text-3xl">
            London
            <br />
            coverage
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600">
          Operating at the core of Kingston upon Thames and expanding through
          Richmond, Twickenham, and the surrounding London territories.
        </p>
      </div>

      <div className="mt-8 overflow-hidden border border-zinc-200">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            "Kingston",
            "Richmond",
            "Twickenham",
            "Wimbledon",
            "Surbiton",
            "Teddington",
            "Putney",
            "Hampton",
          ].map((area, idx) => (
            <div
              key={area}
              className={[
                "flex items-center justify-center px-4 py-5 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-700",
                "border-zinc-200",
                idx % 2 === 0 ? "bg-white" : "bg-zinc-50",
                "border-b",
                "md:border-b-0",
                "transition-colors duration-200 hover:bg-primary/5",
              ].join(" ")}
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

