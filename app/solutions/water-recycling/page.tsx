'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RefreshCw, CheckCircle2, ArrowRight, ShieldCheck, Recycle, Droplets } from 'lucide-react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import CallToAction from '../../component/Hero/CallToAction';

const customEase = [0.16, 1, 0.3, 1] as const;

export default function WaterRecyclingSolutionsPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#0D2244] via-[#0D427D] to-[#0A1A3B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/Images/home/untraflitration-plant.png"
            alt="Water Recycling Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-extrabold uppercase tracking-widest text-blue-200 border border-white/15 mb-6">
              <RefreshCw className="w-3.5 h-3.5 text-blue-300" />
              Solution 03
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Water Recycling Solutions
            </h1>

            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-8">
              Reduce municipal freshwater dependency by up to 70% with closed-loop water recovery systems designed for continuous industrial and commercial recycling.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F39A1E] hover:bg-[#e08b12] text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm tracking-wider uppercase"
              >
                Explore Recycling Options
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW & KEY BENEFITS ── */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/Images/home/untraflitration-plant.png"
                alt="Recycling Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D427D] mb-2 block">
              Closed-Loop Sustainability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2244] leading-tight mb-6">
              Maximize Every Drop with Closed-Loop Water Recovery
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Industrial facilities generate significant wastewater volumes daily. Our turnkey recycling solutions capture, purify, and reintroduce process water back into production cycles — protecting against water scarcity and lowering discharge fees.
            </p>

            <div className="space-y-4">
              {[
                'Closed-loop water reuse for zero liquid discharge (ZLD) support',
                'Measurable ROI within the first operating year',
                'Advanced real-time water quality monitoring sensors',
                'Meets strict ESG and environmental compliance targets',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="py-16 bg-white border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#0D2244] mb-3">
              Recycling Lifecycle
            </h2>
            <p className="text-slate-500 text-sm">
              From wastewater collection to clean process re-entry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Effluent Collection', desc: 'Centralized gathering of industrial process wastewater.' },
              { step: '02', title: 'Primary Clarification', desc: 'Heavy particle settlement and oil/grease separation.' },
              { step: '03', title: 'Advanced Treatment', desc: 'Membrane filtration and oxidation processes.' },
              { step: '04', title: 'Process Re-entry', desc: 'Return of high-purity water to facility pipelines.' },
            ].map((st, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 relative">
                <div className="text-3xl font-black text-[#0D427D]/20 mb-3">{st.step}</div>
                <h3 className="text-lg font-bold text-[#0D2244] mb-2">{st.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}
