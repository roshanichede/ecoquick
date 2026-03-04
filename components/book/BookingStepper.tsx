type StepId = 1 | 2 | 3 | 4;

type Props = {
  currentStep: StepId;
};

const steps: { id: StepId; label: string; href: string }[] = [
  { id: 1, label: "Service", href: "/book/type" },
  { id: 2, label: "Route", href: "/book/route" },
  { id: 3, label: "Parcel", href: "/book/parcel" },
  { id: 4, label: "Payment", href: "/book/confirm" },
];

export function BookingStepper({ currentStep }: Props) {
  return (
    <div className="relative mx-auto flex max-w-3xl items-center justify-between">
      <div className="absolute left-0 top-1/2 h-px w-full -z-10 bg-slate-100" />
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const isActive = currentStep === step.id;
        const isComplete = step.id < currentStep;

        return (
          <div
            key={step.id}
            className="relative z-10 flex flex-1 items-center justify-center"
          >
            <div className="flex flex-col items-center gap-3 rounded-md bg-slate-50 px-4 py-3 shadow-sm/5">
              <div
                className={[
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors",
                  isComplete
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "",
                  isActive && !isComplete
                    ? "border-primary bg-white text-primary"
                    : "",
                  !isActive && !isComplete
                    ? "border-slate-300 bg-white text-slate-500"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {isComplete && (
                  <span className="material-symbols-outlined text-base">
                    check
                  </span>
                )}
                {isActive && !isComplete && (
                  <span className="text-[10px] font-bold">
                    {String(step.id).padStart(2, "0")}
                  </span>
                )}
                {!isActive && !isComplete && (
                  <span className="text-[10px] font-bold">
                    {String(step.id).padStart(2, "0")}
                  </span>
                )}
              </div>
              <span
                className={[
                  "text-[10px] font-bold uppercase tracking-[0.2em]",
                  isActive || isComplete ? "text-primary" : "text-slate-400",
                ].join(" ")}
              >
                {step.label}
              </span>
            </div>
            {!isLast && <div className="hidden md:block flex-1" />}
          </div>
        );
      })}
    </div>
  );
}

