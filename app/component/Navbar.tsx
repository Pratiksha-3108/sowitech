"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Industries", href: "/#industries" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveFn = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || (pathname?.startsWith(href) && href !== "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled
          ? "shadow-[0_2px_20px_rgba(13,66,125,0.10)] py-2 border-b border-slate-100"
          : "py-3 border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <a
          href="/"
          className="flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.03]"
          aria-label="Sowitech Home"
        >
          <Image
            src="/assets/logo_bgremove.png"
            alt="Sowitech Engineering Pvt. Ltd."
            width={160}
            height={50}
            className="h-12 sm:h-14 w-auto object-contain"
            priority
          />
        </a>

        {/* ── Desktop Nav Links ── */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = isActiveFn(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2.5 text-[13.5px] font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap group rounded-lg ${
                  active
                    ? "text-[#0D427D]"
                    : "text-[#2d3748] hover:text-[#0D427D]"
                }`}
              >
                {link.name}
                {/* animated orange underline */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-[2.5px] rounded-full bg-[#F39A1E] transition-transform duration-200 origin-left ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center shrink-0">
          <a
            href="/contact"
            id="navbar-enquiry-cta"
            className="group flex items-center gap-2 bg-[#F39A1E] hover:bg-[#e08b12] text-white px-5 py-2.5 rounded-full font-bold text-[12px] tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
          >
            <span>Enquiry Now!</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-[#173247] hover:bg-slate-100 rounded-xl transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-6 py-5 shadow-xl space-y-1">
          {navLinks.map((link) => {
            const active = isActiveFn(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between py-3 px-3 rounded-xl text-[15px] font-semibold transition-colors ${
                  active
                    ? "text-[#0D427D] bg-blue-50"
                    : "text-[#2d3748] hover:text-[#0D427D] hover:bg-slate-50"
                }`}
              >
                <span>{link.name}</span>
                {active && <span className="w-2 h-2 rounded-full bg-[#F39A1E]" />}
              </a>
            );
          })}
          <div className="pt-3">
            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-[#F39A1E] hover:bg-[#e08b12] text-white py-3 rounded-full font-bold text-[13px] uppercase tracking-wider shadow-md transition-all"
            >
              Enquiry Now!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
