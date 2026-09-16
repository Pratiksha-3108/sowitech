'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets,
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Factory,
  Car,
  Server,
  Hospital,
  Hotel,
  GraduationCap,
  Building,
  Landmark,
  Building2,
  ShieldCheck,
  Cpu,
  Layers,
  Sliders,
  Wrench,
  Filter,
  Search,
} from 'lucide-react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const customEase = [0.16, 1, 0.3, 1] as const;

/* ── Section 3 — 5-Step Approach Data ── */
const approachSteps = [
  {
    num: '01',
    name: 'Understand',
    desc: 'Assess source-water characteristics and existing conditions.',
    details: 'Thorough testing of raw water quality, turbidity, hardness, and chemical profile.',
    icon: Search,
  },
  {
    num: '02',
    name: 'Define',
    desc: 'Identify the treated-water quality required for your application.',
    details: 'Pinpointing target conductivity, TDS, and microbiological limits needed for your operations.',
    icon: Sliders,
  },
  {
    num: '03',
    name: 'Engineer',
    desc: 'Select appropriate treatment processes and design the system.',
    details: 'Hydraulic calculations, equipment selection, automated dosing, and footprint optimization.',
    icon: Cpu,
  },
  {
    num: '04',
    name: 'Commission',
    desc: 'Support installation and commissioning for reliable operation.',
    details: 'Precision piping, electrical hookups, system testing, and parameter verification.',
    icon: Wrench,
  },
  {
    num: '05',
    name: 'Support',
    desc: 'Provide ongoing technical and maintenance assistance.',
    details: 'Preventive maintenance, spare parts supply, operator training, and remote monitoring.',
    icon: ShieldCheck,
  },
];

/* ── Section 4 — Why Invest (5 Benefits) ── */
const wtpBenefits = [
  {
    title: 'Improve Water Quality',
    desc: 'Provide water suitable for demanding industrial applications and process lines.',
    icon: Droplets,
  },
  {
    title: 'Ensure Reliable Supply',
    desc: 'Maintain dependable availability of process and utility water round the clock.',
    icon: ShieldCheck,
  },
  {
    title: 'Reduce Source Dependence',
    desc: 'Reduce dependence on inconsistent municipal or tanker water sources.',
    icon: Layers,
  },
  {
    title: 'Improve Water Management',
    desc: 'Support more efficient management and tracking of water within your facility.',
    icon: Cpu,
  },
  {
    title: 'Prepare for Reuse',
    desc: 'Create opportunities for further treatment, recycling and non-potable water reuse.',
    icon: Sparkles,
  },
];

/* ── Section 5 — Industries List ── */
const industriesList = [
  { name: 'Manufacturing', icon: Factory, note: 'Process water for production lines & assembly.' },
  { name: 'Automotive', icon: Car, note: 'Paint shop rinsing & zero-particulate water.' },
  { name: 'Data Centres', icon: Server, note: 'Chilled loop & precision server cooling.' },
  { name: 'Hospitals', icon: Hospital, note: 'Sterile grade & medical equipment water.' },
  { name: 'Hotels', icon: Hotel, note: 'Laundry, HVAC chillers & soft guest water.' },
  { name: 'Educational Institutions', icon: GraduationCap, note: 'Campus-wide utility & lab water.' },
  { name: 'Residential Societies', icon: Building, note: 'Centralized soft water & iron removal.' },
  { name: 'Municipal Corporations', icon: Landmark, note: 'High-capacity urban distribution plants.' },
  { name: 'MIDC & Industrial Parks', icon: Building2, note: 'Common utility water treatment infrastructure.' },
];

export default function WaterTreatmentPlantsPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);

  return (
    <div className="pt-20 bg-[#F8FAFC] min-h-screen font-geist text-slate-900">
      <Navbar />

      {/* ── SECTION 1 — HERO (REMOVED BOTTOM FEATURE LINE + INCREASED HERO HEIGHT) ── */}
      <section className="relative w-full min-h-[95vh] flex flex-col justify-center py-28 md:py-36 lg:py-44 bg-gradient-to-br from-[#0D427D] via-[#0A3260] to-[#0A2540] text-white overflow-hidden font-geist">
        
        {/* Bright Vibrant Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/architectural_hero.jpg"
            alt="Water Treatment Plant Facility"
            fill
            className="object-cover object-center opacity-40 scale-105"
            priority
          />
          {/* Subtle Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D427D]/95 via-[#0D427D]/80 to-blue-900/50" />
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full my-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: customEase }}
            className="max-w-3xl"
          >
            {/* Glassmorphic Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: customEase }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-100 mb-5 shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#F39A1E] animate-pulse" />
              <Droplets className="w-3.5 h-3.5 text-blue-200" />
              <span>WATER TREATMENT PLANTS</span>
            </motion.div>

            {/* H1 Headline */}
            <h1 className="font-geist text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] mb-5 text-white drop-shadow-md">
              Engineered for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-100 to-white">
                Better Water
              </span>
            </h1>

            {/* Description */}
            <p className="font-geist text-blue-50 text-base sm:text-lg leading-relaxed mb-8 font-normal max-w-2xl drop-shadow-sm">
              Reliable water treatment solutions for industrial and commercial applications.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-[#F39A1E] hover:bg-[#e08b12] text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 text-xs sm:text-sm tracking-wider uppercase"
              >
                <span>Request a Water Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="#solution-overview"
                className="group inline-flex items-center gap-2.5 bg-white/15 hover:bg-white/25 text-white font-bold px-7 py-3.5 rounded-full border border-white/30 backdrop-blur-md hover:scale-[1.02] active:scale-95 transition-all duration-300 text-xs sm:text-sm tracking-wide shadow-md"
              >
                <span>Explore WTP</span>
                <ArrowRight className="w-4 h-4 text-blue-200 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ── SECTION 2 — WHAT IS A WATER TREATMENT PLANT? ── */}
      <section id="solution-overview" className="py-14 md:py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 overflow-hidden scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="lg:col-span-6 relative h-full min-h-[420px] flex flex-col"
          >
            <div className="relative w-full h-full min-h-[420px] rounded-none overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <Image
                src="/assets/architectural_hero.jpg"
                alt="WTP Plant Design"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: customEase }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow / Subtitle */}
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-5 h-[2px] bg-[#0D427D]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0D427D]">
                  WHAT IS A WATER TREATMENT PLANT?
                </span>
              </div>

              {/* Title */}
              <h2 className="font-geist text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0D2244] leading-[1.2] tracking-tight mb-4">
                Engineered Water Treatment for Your Requirements
              </h2>

              {/* Paragraph Content */}
              <div className="font-geist space-y-2.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed text-justify mb-5">
                <p>
                  A Water Treatment Plant is designed to treat incoming water according to the quality required for a specific industrial or commercial application.
                </p>
                <p>
                  At Sowitech Engineering, every system is planned around the <strong className="text-[#0D2244]">source-water characteristics, required treated-water quality, operational environment, and intended application</strong>.
                </p>
                <p>
                  From design and installation to commissioning and technical support, we focus on creating practical treatment solutions that provide dependable water availability for your operations.
                </p>
              </div>
            </div>

            {/* 2x2 Clean Divider Border Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-sm mt-2">
              
              {/* Item 1 - Top Left */}
              <div className="p-4 sm:p-5 border-b sm:border-r border-slate-200/80 flex flex-col items-start gap-3 group hover:bg-blue-50/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0D427D] flex items-center justify-center border border-blue-100 group-hover:bg-[#0D427D] group-hover:text-white transition-colors shrink-0">
                  <Droplets className="w-6 h-6" />
                </div>
                <h4 className="font-geist text-sm font-extrabold text-[#0D2244] leading-snug">
                  Source-Water Based
                </h4>
              </div>

              {/* Item 2 - Top Right */}
              <div className="p-4 sm:p-5 border-b border-slate-200/80 flex flex-col items-start gap-3 group hover:bg-blue-50/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0D427D] flex items-center justify-center border border-blue-100 group-hover:bg-[#0D427D] group-hover:text-white transition-colors shrink-0">
                  <Sliders className="w-6 h-6" />
                </div>
                <h4 className="font-geist text-sm font-extrabold text-[#0D2244] leading-snug">
                  Application-Specific
                </h4>
              </div>

              {/* Item 3 - Bottom Left */}
              <div className="p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-slate-200/80 flex flex-col items-start gap-3 group hover:bg-blue-50/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0D427D] flex items-center justify-center border border-blue-100 group-hover:bg-[#0D427D] group-hover:text-white transition-colors shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-geist text-sm font-extrabold text-[#0D2244] leading-snug">
                  Reliable Availability
                </h4>
              </div>

              {/* Item 4 - Bottom Right */}
              <div className="p-4 sm:p-5 flex flex-col items-start gap-3 group hover:bg-blue-50/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0D427D] flex items-center justify-center border border-blue-100 group-hover:bg-[#0D427D] group-hover:text-white transition-colors shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="font-geist text-sm font-extrabold text-[#0D2244] leading-snug">
                  Operationally Focused
                </h4>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ── SECTION 3 — HOW WE APPROACH YOUR WTP (WORK PROCESS STEPPER) ── */}
      <section className="py-20 md:py-28 bg-white border-t border-b border-slate-200/80 overflow-hidden font-geist">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0D427D] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-[#0D427D]" />
              <span>OUR METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0D2244] leading-tight mb-4">
              Our Work Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              From water requirement to a reliable treatment system — engineered around your specific operational needs.
            </p>
          </div>

          {/* Horizontal Work Process Stepper */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-4 relative">
            {approachSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col items-center text-center group">
                  {/* Curved Arrow Connector (Desktop only, except last item) */}
                  {idx < approachSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[58%] w-[84%] pointer-events-none z-0">
                      <svg width="100%" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M 10 18 Q 70 2 130 18"
                          stroke="#CBD5E1"
                          strokeWidth="2.5"
                          strokeDasharray="5 5"
                          fill="none"
                        />
                        <path
                          d="M 122 11 L 132 18 L 122 25"
                          stroke="#CBD5E1"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Icon Card Box with Corner Step Number Badge */}
                  <div className="relative mb-6 z-10">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[28px] bg-gradient-to-br from-[#0D427D] to-[#0A3260] text-white flex items-center justify-center shadow-lg shadow-blue-900/15 group-hover:scale-105 group-hover:shadow-blue-900/30 group-hover:from-[#0D427D] group-hover:to-[#08284d] transition-all duration-300 border border-blue-400/20">
                      <IconComp className="w-10 h-10 sm:w-12 sm:h-12 text-white stroke-[1.75]" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-1.5 -right-1.5 w-8 h-8 rounded-full bg-[#10B981] text-white text-xs font-black flex items-center justify-center shadow-md border-2 border-white">
                      {step.num}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-geist text-lg sm:text-xl font-extrabold text-[#0D2244] mb-2 leading-snug">
                    {step.name}
                  </h3>

                  {/* Step Description */}
                  <p className="font-geist text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[220px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — WHY INVEST IN A WATER TREATMENT PLANT? ── */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 font-geist">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D427D] mb-3 block">
            VALUE PROPOSITION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0D2244] leading-tight mb-4">
            Reliable Water. Better Water Management.
          </h2>
          <p className="text-slate-600 text-base">
            A well-planned WTP helps your facility secure quality, continuity, and cost control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wtpBenefits.map((b, i) => {
            const IconComp = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: customEase }}
                className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#0D427D]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D427D] flex items-center justify-center mb-5 shadow-sm border border-blue-100">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0D2244] mb-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── SECTION 5 — INDUSTRIES WE SERVE ── */}
      <section className="py-20 md:py-28 bg-[#0D2244] text-white relative overflow-hidden font-geist">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-blue-300 mb-3 block">
              SECTOR APPLICATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white mb-4">
              Water Treatment Across Diverse Industries
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Different industries have different water requirements. Sowitech Engineering develops treatment solutions around the specific needs of each facility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Animated Vertical Industry List */}
            <div className="lg:col-span-5 space-y-2.5">
              {industriesList.map((ind, idx) => {
                const IndIcon = ind.icon;
                const active = idx === activeIndustryIndex;
                return (
                  <div
                    key={ind.name}
                    onClick={() => setActiveIndustryIndex(idx)}
                    className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                      active
                        ? 'bg-white text-[#0D2244] border-white shadow-xl scale-[1.02]'
                        : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        active ? 'bg-[#0D427D] text-white' : 'bg-white/10 text-blue-200'
                      }`}>
                        <IndIcon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-extrabold">{ind.name}</span>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      active ? 'text-[#0D427D] translate-x-1' : 'text-white/40'
                    }`} />
                  </div>
                );
              })}
            </div>

            {/* Right Column: Large Industrial Image Showcase + Selected Detail Box */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[4/3] sm:aspect-[1.1] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900">
                <Image
                  src="/assets/architectural_hero.jpg"
                  alt="Industrial Water Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3B] via-transparent to-black/30" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={industriesList[activeIndustryIndex].name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl text-[#0D2244] shadow-2xl border border-white/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-[#0D427D] text-white flex items-center justify-center font-bold shrink-0">
                        {React.createElement(industriesList[activeIndustryIndex].icon, { className: 'w-5 h-5' })}
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold leading-tight">
                          {industriesList[activeIndustryIndex].name}
                        </h3>
                        <span className="text-[11px] font-bold text-[#0D427D] uppercase tracking-wider">
                          Tailored WTP Solution
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {industriesList[activeIndustryIndex].note}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 6 — WHY CHOOSE SOWITECH ENGINEERING ── */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 font-geist">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D427D] mb-3 block">
            COMPANY PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0D2244] leading-tight">
            Engineering Water Solutions Around Your Reality
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D427D] block mb-2">
              Pillar 01
            </span>
            <h3 className="text-xl font-extrabold text-[#0D2244] mb-3">
              Practical Engineering Expertise
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We develop solutions around actual water requirements rather than relying on one-size-fits-all systems.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D427D] block mb-2">
              Pillar 02
            </span>
            <h3 className="text-xl font-extrabold text-[#0D2244] mb-3">
              End-to-End Project Support
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              From planning and design to installation, commissioning and maintenance support, we stay involved throughout the project.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D427D] block mb-2">
              Pillar 03
            </span>
            <h3 className="text-xl font-extrabold text-[#0D2244] mb-3">
              Sustainable Water Management
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our approach considers not only water treatment, but also opportunities for recycling, reuse and responsible water consumption.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D427D] block mb-2">
              Pillar 04
            </span>
            <h3 className="text-xl font-extrabold text-[#0D2244] mb-3">
              Technology Partnership
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Where appropriate, selected treatment applications can integrate technology from <strong className="text-[#0D427D]">YAHA Water Systems</strong>.
            </p>
          </div>

        </div>

        {/* Small Technology Callout Badge */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#0D2244] via-[#0D427D] to-[#0A1A3B] p-5 rounded-2xl text-white flex items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <Droplets className="w-5 h-5 text-blue-300 shrink-0" />
            <span className="text-sm font-extrabold text-[#ffffff]">
              Integrated with YAHA Water Systems Technology
            </span>
          </div>
          <span className="text-xs text-slate-300 italic hidden sm:block">
            Applied where technology fits specific application parameters.
          </span>
        </div>
      </section>

      {/* ── SECTION 7 — RELATED SOLUTIONS + FINAL CTA ── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200 font-geist">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Related Pathways */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D427D] mb-3 block">
                WATER REUSE PATHWAYS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2244] mb-4">
                From Water Treatment to Water Reuse
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Water treatment can be the first step toward a broader water-management strategy. Where appropriate, treated wastewater can undergo further treatment through Tertiary Treatment Plants (TTP) and be recovered for suitable non-potable applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* TTP Card */}
              <Link
                href="/solutions/ttp"
                className="group bg-[#F8FAFC] p-7 rounded-3xl border border-slate-200 hover:border-[#0D427D] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#0D427D] uppercase tracking-wider block mb-2">
                    Advanced Polishing
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0D2244] group-hover:text-[#0D427D] transition-colors mb-3">
                    Tertiary Treatment Plants (TTP)
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Further treatment of STP water for suitable non-potable reuse across cooling towers and utilities.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0D427D] group-hover:text-[#F39A1E]">
                  <span>Explore TTP</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Water Recycling Card */}
              <Link
                href="/solutions/water-recycling"
                className="group bg-[#F8FAFC] p-7 rounded-3xl border border-slate-200 hover:border-[#0D427D] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#0D427D] uppercase tracking-wider block mb-2">
                    Closed-Loop Recovery
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0D2244] group-hover:text-[#0D427D] transition-colors mb-3">
                    Water Recycling Solutions
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Recover and reuse treated wastewater within your facility to lower freshwater procurement.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0D427D] group-hover:text-[#F39A1E]">
                  <span>Explore Water Recycling</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* STP to TTP Upgradation Card */}
              <Link
                href="/solutions/stp-upgradation"
                className="group bg-[#F8FAFC] p-7 rounded-3xl border border-slate-200 hover:border-[#0D427D] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#0D427D] uppercase tracking-wider block mb-2">
                    Plant Retrofit
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0D2244] group-hover:text-[#0D427D] transition-colors mb-3">
                    STP to TTP Upgradation
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    Enhance an existing STP with additional treatment where better-quality water is required for reuse.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0D427D] group-hover:text-[#F39A1E]">
                  <span>Explore STP Upgradation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

            </div>
          </div>

          {/* Final CTA Banner */}
          <div className="bg-gradient-to-br from-[#0D2244] via-[#0D427D] to-[#0A1A3B] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-200 mb-3 block">
                START YOUR AUDIT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
                Build a More Reliable Water System
              </h2>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8">
                Understand your current water requirements, evaluate your treatment needs, and identify opportunities for better water management.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#F39A1E] hover:bg-[#e08b12] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm tracking-wider uppercase"
                >
                  Request a Water Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919730014264"
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-full border border-white/20 transition-all text-sm tracking-wide"
                >
                  <Phone className="w-4 h-4 text-[#F39A1E]" />
                  <span>+91 97300 14264</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
