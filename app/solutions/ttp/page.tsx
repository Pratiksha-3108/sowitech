'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Filter, CheckCircle2, ArrowRight, ShieldCheck, RefreshCcw, Droplets } from 'lucide-react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import CallToAction from '../../component/Hero/CallToAction';

const customEase = [0.16, 1, 0.3, 1] as const;

export default function TertiaryTreatmentPlantsPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#0D2244] via-[#0D427D] to-[#0A1A3B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/Images/home/yaha_filtration_plant.jpg"
            alt="Tertiary Treatment Plant"
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
              <Filter className="w-3.5 h-3.5 text-blue-300" />
              Solution 02
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Tertiary Treatment Plants <span className="text-blue-300">(TTP)</span>
            </h1>

            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-8">
              Advanced tertiary treatment systems that refine treated STP effluent into high-quality reusable water suitable for cooling towers, HVAC systems, flushing, and industrial utilities.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F39A1E] hover:bg-[#e08b12] text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm tracking-wider uppercase"
              >
                Request TTP Proposal
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
                src="/Images/home/yaha_filtration_plant.jpg"
                alt="TTP Plant Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D427D] mb-2 block">
              Powered by YAHA Water Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2244] leading-tight mb-6">
              Transform STP Wastewater into High-Value Reusable Water
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Using state-of-the-art Hybrid Zen Media Filtration and Ultrafiltration technology, our TTP systems eliminate residual BOD, COD, suspended solids, and odor — enabling up to 90% water recovery.
            </p>

            <div className="space-y-4">
              {[
                'Integrated Hybrid Zen Media Filtration technology',
                'Eliminates odor, turbidity, and microbiological contaminants',
                'Ideal for cooling towers, HVAC make-up, and landscape irrigation',
                'Significantly reduces freshwater procurement costs',
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
              TTP Process Architecture
            </h2>
            <p className="text-slate-500 text-sm">
              Comprehensive multi-stage polishing for maximum water recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'STP Effluent Feed', desc: 'Pre-treated secondary sewage water inlet.' },
              { step: '02', title: 'Hybrid Zen Filtration', desc: 'High-speed media filtration for fine solids.' },
              { step: '03', title: 'Ultrafiltration / RO', desc: 'Membrane polishing for crystal clear quality.' },
              { step: '04', title: 'Utility Distribution', desc: 'Pumping to cooling towers & flushing lines.' },
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
