"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-center p-6">
        <ul className="flex gap-8 text-sm font-medium">
          {navItems.map(({ label, href }) => {
            const isActive =
              href === "/" ? pathname === href : pathname.startsWith(href);

            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`transition-colors duration-300 hover:text-accent text-lg ${
                    isActive ? "text-accent" : "text-foreground/80"
                  }`}
                >
                  {label}
                </Link>

                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-accent rounded-full"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
