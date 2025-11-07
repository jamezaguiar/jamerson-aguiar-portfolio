"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-6">
        <Link
          href="/"
          className="text-accent font-heading font-semibold text-lg"
        >
          Jamerson Aguiar
        </Link>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
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

        {/* Botão hamburger (mobile only) */}
        <button
          className="md:hidden text-foreground hover:text-accent transition"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg"
        >
          <ul className="flex flex-col items-center gap-4 py-6 text-base font-medium">
            {navItems.map(({ label, href }) => {
              const isActive =
                href === "/" ? pathname === href : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors duration-300 hover:text-accent ${
                      isActive ? "text-accent" : "text-foreground/80"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
