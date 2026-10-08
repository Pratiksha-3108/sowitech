import React from 'react';
import Image from 'next/image';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import PortfolioGrid from '../component/Hero/PortfolioGrid';
import CallToAction from '../component/Hero/CallToAction';

export default function ProjectsPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Page Header with Background Image & Single Sentence Description */}
      <section className="relative w-full text-white pt-36 pb-20 px-6 sm:px-12 text-center overflow-hidden bg-[#070D18]">
        {/* Background Image with Low-Opacity Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/architectural_hero.jpg"
            alt="Water Treatment Projects & Installations"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark overlay with moderate opacity */}
          <div className="absolute inset-0 bg-[#070D18]/50 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-300 bg-[#0D427D]/60 border border-sky-400/30 px-3.5 py-1.5 rounded-full inline-block shadow-sm">
            Our Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase drop-shadow-md">
            Turnkey Projects & Installations
          </h1>
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-normal drop-shadow">
            Explore our featured industrial and municipal water treatment plants engineered for high recovery, zero discharge, and certified performance.
          </p>
        </div>
      </section>

      {/* 7 Portfolio Projects Grid with Filter Tabs */}
      <PortfolioGrid />

      {/* CTA */}
      <CallToAction />

      <Footer />
    </div>
  );
}

