"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function DownloadCV() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownload = (lang: "pt" | "en") => {
    const file =
      lang === "pt"
        ? "/jamerson-aguiar-curriculum-portuguese.pdf"
        : "/jamerson-aguiar-curriculum-english.pdf";
    window.open(file, "_blank");
    setOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-accent rounded-sm px-4 py-2 font-bold text-white cursor-pointer hover:opacity-90 transition"
      >
        Download CV
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-44 rounded-sm border border-border bg-background shadow-lg z-10">
          <ul className="flex flex-col text-sm font-medium">
            <li>
              <button
                onClick={() => handleDownload("pt")}
                className="w-full text-left px-4 py-2 hover:bg-accent/20 transition-colors cursor-pointer"
              >
                🇧🇷 Download in Portuguese
              </button>
            </li>
            <li>
              <button
                onClick={() => handleDownload("en")}
                className="w-full text-left px-4 py-2 hover:bg-accent/20 transition-colors cursor-pointer"
              >
                🇺🇸 Download in English
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
