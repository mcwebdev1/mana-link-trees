"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const brands = [
  { href: "/", label: "Hubs" },
  { href: "/common", label: "Common" },
  { href: "/fashion", label: "Fashion" },
  { href: "/tech", label: "Tech" },
] as const;

export function BrandNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mana divisions"
      className="fixed top-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#0d0d10]/75 px-2 py-1 text-[12px] leading-none text-white backdrop-blur-sm"
    >
      {brands.map((brand) => {
        const active = pathname === brand.href;
        return (
          <Link
            key={brand.href}
            href={brand.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              active ? "bg-white font-bold text-[#0d0d10]" : "opacity-80"
            }`}
          >
            {brand.label}
          </Link>
        );
      })}
    </nav>
  );
}
