"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Droplets, Filter, RefreshCw, Settings } from "lucide-react";

const solutionLinks = [
  {
    name: "Water Treatment Plants (WTP)",
    href: "/solutions/wtp",
    desc: "Raw water to high-purity process water",
    icon: Droplets,
  },
  {
    name: "Tertiary Treatment Plants (TTP)",
    href: "/solutions/ttp",
    desc: "STP water recovery for cooling & utilities",
    icon: Filter,
  },
  {
    name: "Water Recycling Solutions",
    href: "/solutions/water-recycling",
    desc: "Closed-loop industrial water reuse",
    icon: RefreshCw,
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "YAHA Technology", href: "/yaha-technology" },
  { name: "Industries", href: "/#industries" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
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
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = isActiveFn(link.href);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <a
                    href={link.href}
                    className={`relative px-4 py-2.5 text-[13.5px] font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap group rounded-lg flex items-center gap-1.5 ${
                      active || isSolutionsOpen
                        ? "text-[#0D427D]"
                        : "text-[#2d3748] hover:text-[#0D427D]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSolutionsOpen ? "rotate-180 text-[#0D427D]" : "text-slate-400 group-hover:text-[#0D427D]"
                      }`}
                    />

                    {/* animated orange underline */}
                    <span
                      className={`absolute bottom-1 left-4 right-4 h-[2.5px] rounded-full bg-[#F39A1E] transition-transform duration-200 origin-left ${
                        active || isSolutionsOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>

                  {/* Dropdown Menu matching uploaded reference design */}
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-1 w-[540px] bg-white rounded-2xl shadow-[0_15px_45px_rgba(13,66,125,0.18)] border border-slate-100 p-0 z-50 overflow-hidden flex flex-row min-h-[200px]"
                      >
                        {/* Left Card: Flush Image (No Padding to Image) */}
                        <div className="relative w-48 shrink-0 flex flex-col justify-end p-4 bg-slate-900 self-stretch min-h-full">
                          <Image
                            src="/Images/home/yaha_filtration_plant.jpg"
                            alt="Water Solutions"
                            fill
                            className="object-cover object-center opacity-85 hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2244]/95 via-[#0D2244]/40 to-transparent z-10" />
                          <div className="relative z-20">
                            <h4 className="text-white text-base font-extrabold tracking-tight">Water Solutions</h4>
                            <p className="text-slate-200 text-[11px] leading-tight mt-1">
                              Engineered for high performance & verified recovery.
                            </p>
                          </div>
                        </div>

                        {/* Right Content: 3 Solutions Layout (2 in line 1, 1 in line 2) - Text Only */}
                        <div className="flex-1 flex flex-col justify-center gap-2.5 p-3.5">
                          {/* Row 1: 2 items in 1 line */}
                          <div className="grid grid-cols-2 gap-2.5">
                            {solutionLinks.slice(0, 2).map((sol) => (
                              <a
                                key={sol.name}
                                href={sol.href}
                                className="bg-white hover:bg-sky-50/80 border border-slate-200/80 hover:border-[#0D427D]/40 rounded-xl px-3 py-3 shadow-sm hover:shadow-md flex items-center justify-center text-center transition-all group/card h-full min-h-[44px]"
                              >
                                <div className="text-[12px] font-bold text-[#0D2244] group-hover/card:text-[#0D427D] transition-colors leading-snug">
                                  {sol.name}
                                </div>
                              </a>
                            ))}
                          </div>

                          {/* Row 2: 1 item in 1 line */}
                          {(() => {
                            const sol = solutionLinks[2];
                            return (
                              <a
                                key={sol.name}
                                href={sol.href}
                                className="bg-white hover:bg-sky-50/80 border border-slate-200/80 hover:border-[#0D427D]/40 rounded-xl px-3 py-3 shadow-sm hover:shadow-md flex items-center justify-center text-center transition-all group/card min-h-[44px]"
                              >
                                <div className="text-[12px] font-bold text-[#0D2244] group-hover/card:text-[#0D427D] transition-colors leading-snug">
                                  {sol.name}
                                </div>
                              </a>
                            );
                          })()}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

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
            className="group flex items-center gap-2 bg-[#177BC9] hover:bg-[#1368aa] text-white px-5 py-2.5 rounded-full font-bold text-[12px] tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
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
          isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-6 py-5 shadow-xl space-y-1">
          {navLinks.map((link) => {
            const active = isActiveFn(link.href);

            if (link.hasDropdown) {
              return (
                <div key={link.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex-1 py-3 px-3 rounded-xl text-[15px] font-semibold transition-colors ${
                        active ? "text-[#0D427D] bg-blue-50" : "text-[#2d3748] hover:text-[#0D427D]"
                      }`}
                    >
                      {link.name}
                    </a>
                    <button
                      onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                      className="p-3 text-slate-500 hover:text-[#0D427D]"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${isMobileSolutionsOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {isMobileSolutionsOpen && (
                    <div className="pl-4 space-y-1 border-l-2 border-blue-100 ml-3 py-1">
                      {solutionLinks.map((sol) => {
                        const SolIcon = sol.icon;
                        return (
                          <a
                            key={sol.name}
                            href={sol.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm text-slate-700 hover:text-[#0D427D] hover:bg-blue-50/60 font-medium"
                          >
                            <SolIcon className="w-4 h-4 text-[#0D427D]" />
                            <span>{sol.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

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
              className="block w-full text-center bg-[#177BC9] hover:bg-[#1368aa] text-white py-3 rounded-full font-bold text-[13px] uppercase tracking-wider shadow-md transition-all"
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
