"use client";

export default function Footer() {
  return (
    <footer className="border-t border-pale/30 bg-ink py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-marble tracking-wide">
            Qorenth
          </h3>
          <p className="text-sm text-marble/70 mt-2 max-w-sm">
            Bulletproof full-stack systems in Next.js + Django + PostgreSQL.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-marble/70">
          <a
            href="#systems"
            className="hover:text-gold transition-colors duration-300"
          >
            What We Build
          </a>
          <a
            href="#process"
            className="hover:text-gold transition-colors duration-300"
          >
            Process
          </a>
          <a
            href="#pricing"
            className="hover:text-gold transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="hover:text-gold transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>

      <hr className="my-8 border-pale/20 max-w-7xl mx-auto" />

      <div className="text-center text-xs text-marble/60 tracking-wide">
        © {new Date().getFullYear()} Qorenth. All rights reserved
      </div>
    </footer>
  );
}
