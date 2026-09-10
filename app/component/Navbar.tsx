"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "WTP", href: "/#wtp" },
  { name: "TTP", href: "/#ttp" },
  { name: "Water Recycling", href: "/#water-recycling" },
  { name: "YAHA Technology", href: "/about#yaha-technology" },
  { name: "Industries", href: "/#industries" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 sm:py-5 px-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-[1536px] mx-auto flex items-center justify-between gap-4">

        {/* Logo Section (Left) */}
        <a
          href="/"
          className={`pointer-events-auto flex items-center group px-3.5 py-1.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-md border border-white/20"
              : "bg-white/85 backdrop-blur-md shadow-lg border border-white/30 hover:bg-white"
          }`}
        >
          <Image
            src="/assets/homelogo.png"
            alt="SOWITECH Engineering Pvt. Ltd."
            width={160}
            height={48}
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </a>

        {/* Center Floating Translucent Glass Capsule Nav */}
        <nav
          className={`pointer-events-auto hidden lg:flex items-center gap-1.5 xl:gap-3 px-5 py-2 rounded-full border transition-all duration-300 shadow-xl ${
            isScrolled
              ? "bg-[#0D427D]/90 backdrop-blur-xl border-white/15 text-white"
              : "bg-white/10 backdrop-blur-md border-white/20 text-white"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-medium hover:text-cyan-300 transition-colors whitespace-nowrap px-2.5 py-1 rounded-full hover:bg-white/10 relative group"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button (Pill Style) */}
        <div className="pointer-events-auto hidden sm:flex items-center shrink-0">
          <a
            href="/contact"
            className="group flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0D427D] px-5 py-2.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span className="font-bold text-[11px] xl:text-xs tracking-wider uppercase whitespace-nowrap">
              REQUEST A WATER AUDIT
            </span>
            <span className="w-6 h-6 rounded-full bg-[#0D427D] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="pointer-events-auto lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 text-white bg-white/15 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/25 transition-colors shadow-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMenuOpen && (
        <div className="pointer-events-auto lg:hidden mt-3 max-w-md mx-auto bg-[#0D427D]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-2 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-base font-medium text-white hover:text-cyan-300 py-2 border-b border-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex items-center gap-2">
            <a
              href="/contact"
              className="flex-1 text-center bg-white text-[#0D427D] py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              REQUEST A WATER AUDIT
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;



