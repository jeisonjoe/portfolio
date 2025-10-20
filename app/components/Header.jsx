"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../util";

export default function Header() {
  const pathname = usePathname();
  const headerClass =
    pathname == "/gallery"
      ? "text-white"
      : "text-primary bg-white/10 header-blur";

  return (
    <header
      className={`w-full h-fit p-8 px-16 z-[10] fixed top-0 left-0  ${headerClass} max-md:px-6 max-md:py-6 `}
    >
      <div className="flex justify-between items-center">
        <Link
          href={"/"}
          className=" font-inter uppercase font-bold text-lg max-md:text-sm"
        >
          Jeison Joe
        </Link>
        <nav className="flex justify-end gap-12 max-lg:gap-8 max-md:gap-5">
          {navLinks.map((item) => {
            return (
              <Link key={item.name} href={item.link} className="max-md:text-xs">
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
