import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  withWordmark?: boolean;
  size?: "sm" | "md";
  labelSuffix?: string;
};

export function BrandLogo({
  href = "/",
  withWordmark = true,
  size = "md",
  labelSuffix,
}: BrandLogoProps) {
  const iconSize = size === "sm" ? 24 : 32;

  const wrapper = (
    <div className="flex items-center gap-2">
      <Image
        src="/ecoquick-logo.png"
        alt="EcoQuick logo"
        width={iconSize}
        height={iconSize}
        className="rounded-xl object-contain"
        priority
      />
      {withWordmark && (
        <span
          className={`font-extrabold uppercase tracking-[0.22em] text-zinc-950 ${
            size === "sm" ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"
          }`}
        >
          ECOQUICK{labelSuffix ? ` ${labelSuffix}` : ""}
        </span>
      )}
    </div>
  );

  return (
    <Link href={href} className="inline-flex items-center">
      {wrapper}
    </Link>
  );
}

