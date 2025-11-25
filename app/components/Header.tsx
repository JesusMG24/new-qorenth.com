"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-ink/80 border-b border-pale/30"
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-marble text-2xl font-bold tracking-tight flex items-center gap-2"
        >
          Qorenth
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-marble/80 text-sm font-medium uppercase tracking-wide">
          <Link
            href="/#systems"
            className="hover:text-gold transition-colors duration-200"
          >
            What We Build
          </Link>
          <Link
            href="/#process"
            className="hover:text-gold transition-colors duration-200"
          >
            Process
          </Link>
          <Link
            href="/#pricing"
            className="hover:text-gold transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="/#contact"
            className="hover:text-gold transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 font-semibold bg-gold text-ink rounded-lg hover:bg-gold-hover transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Book Evaluation →
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-marble focus:outline-none focus:ring-2 focus:ring-gold p-2"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col bg-ink border-t border-pale/30 text-marble text-center md:hidden">
          <Link
            href="/#systems"
            className="py-4 border-b border-pale/20 hover:text-gold transition"
          >
            What We Build
          </Link>
          <Link
            href="/#process"
            className="py-4 border-b border-pale/20 hover:text-gold transition"
          >
            Process
          </Link>
          <Link
            href="/#pricing"
            className="py-4 border-b border-pale/20 hover:text-gold transition"
          >
            Pricing
          </Link>
          <Link href="/#contact" className="py-4 hover:text-gold transition">
            Contact
          </Link>
          <Link
            href="#contact"
            className="py-4 font-semibold text-gold hover:text-gold-hover transition uppercase"
          >
            Book Evaluation →
          </Link>
        </div>
      )}
    </header>
  );
}
