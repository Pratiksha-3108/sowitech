'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
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
  Settings,
  Leaf,
  Share2,
} from 'lucide-react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const whyInvestTabs = [
  {
    id: '01',
    tabTitle: 'Water Quality Improvement',
    eyebrow: 'HIGH-PURITY WATER PURIFICATION',
    cardTitle: 'Improve Industrial Water Quality',
    desc: 'Convert raw groundwater, surface water, or municipal intake into consistent, high-purity process water tailored for boilers, cooling towers, and industrial manufacturing.',
    mainImage: '/Images/benefits/freshwater.jpg',
    floatingImage: '/Images/home/untraflitration-plant.png',
    badge: 'Pure Water Output',
  },
  {
    id: '02',
    tabTitle: 'Reduced Source Dependence',
    eyebrow: 'RESOURCE INDEPENDENCE',
    cardTitle: 'Reduce Dependence on Inconsistent Sources',
    desc: 'Eliminate vulnerability to municipal supply shortages, seasonal water scarcity, and raw water quality fluctuations with self-reliant on-site treatment infrastructure.',
    mainImage: '/Images/home/untraflitration-plant.png',
    floatingImage: '/assets/architectural_hero.jpg',
    badge: 'Resource Independent',
  },
  {
    id: '03',
    tabTitle: 'Process-Water Availability',
    eyebrow: '24/7 CONTINUOUS SUPPLY',
    cardTitle: 'Maintain Reliable Process-Water Supply',
    desc: 'Ensure 100% continuous uptime for manufacturing operations with heavy-duty redundant filtration trains engineered for zero unplanned operational downtime.',
    mainImage: '/assets/architectural_hero.jpg',
    floatingImage: '/Images/home/yaha_filtration_plant.jpg',
    badge: '24/7 Continuous Supply',
  },
  {
    id: '04',
    tabTitle: 'Management Efficiency',
    eyebrow: 'OPERATIONAL EFFICIENCY',
    cardTitle: 'Improve Water-Management Efficiency',
    desc: 'Lower operational expenditure through SCADA telemetry monitoring, automated chemical dosing control, and optimized backwash recovery cycles.',
    mainImage: '/Images/home/yaha_filtration_plant.jpg',
    floatingImage: '/Images/home/hybrid_zen_technology.jpg',
    badge: 'SCADA Automated',
  },
  {
    id: '05',
    tabTitle: 'Facility Water Reuse',
    eyebrow: 'CLOSED-LOOP RECYCLING',
    cardTitle: 'Prepare Facilities for Water Reuse & ESG',
    desc: 'Position your facility for closed-loop wastewater recycling and Zero Liquid Discharge (ZLD) readiness, reducing total freshwater procurement costs and meeting ESG targets.',
    mainImage: '/Images/benefits/esg.png',
    floatingImage: '/assets/mission.jpg',
    badge: 'Closed-Loop ZLD',
  },
];

function WhyInvestInteractiveSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = whyInvestTabs[activeTab];

  return (
    <section className="w-full font-geist py-16 sm:py-24 bg-gradient-to-b from-[#F4F7FC] via-slate-50 to-[#EBF2FA] relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN (5 Cols): Dual Overlapping Image Cards with Dynamic Transition ── */}
          <div className="lg:col-span-5 relative pb-8 pr-4 sm:pr-6 lg:pr-8">
            {/* Large Main Background Image Card */}
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.mainImage}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: customEase }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.mainImage}
                    alt={current.cardTitle}
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2244]/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Smaller Overlapping Floating Image Card at Bottom-Right */}
            <div className="absolute bottom-0 right-0 sm:-right-4 w-52 sm:w-64 aspect-square rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(13,34,68,0.35)] border-4 border-white bg-slate-900 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.floatingImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: customEase }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.floatingImage}
                    alt="Floating preview"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── RIGHT COLUMN (7 Cols): Headline, Lead Paragraph & Tabbed Detail Card ── */}
          <div className="lg:col-span-7 space-y-6">

            {/* Main Headline */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0D2244] tracking-tight leading-[1.15] mb-3">
                Why Invest in a <br />
                <span className="text-[#0D427D]">Water Treatment Plant?</span>
              </h2>

              {/* Lead Subtitle Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                A properly designed treatment system helps manage water resources effectively, mitigates raw water risks, and maintains reliable process-water availability across industrial operations.
              </p>
            </div>

            {/* Interactive Tabs Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start pt-2">
              {/* Left List of Numbered Tabs (5 Cols) */}
              <div className="sm:col-span-5 flex flex-col space-y-2.5">
                {whyInvestTabs.map((item, index) => {
                  const isActive = activeTab === index;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left px-4 py-3.5 rounded-2xl transition-all duration-300 flex items-center gap-3 ${isActive
                        ? 'bg-sky-50/90 border border-sky-200/90 shadow-sm text-[#0D427D]'
                        : 'bg-white/70 hover:bg-white text-slate-500 hover:text-slate-900 border border-slate-200/50'
                        }`}
                    >
                      <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${isActive ? 'bg-[#0D427D] text-white shadow-xs' : 'bg-slate-100 text-slate-400'}`}>
                        {item.id}
                      </span>
                      <span className={`text-xs sm:text-sm font-bold tracking-tight line-clamp-1 ${isActive ? 'text-[#0D2244]' : 'text-slate-600'}`}>
                        {item.tabTitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Detail Card (7 Cols) */}
              <div className="sm:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100/90 flex flex-col justify-between min-h-[240px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0D427D] mb-2.5 block font-geist">
                      {current.eyebrow}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0D2244] leading-snug mb-3 font-geist">
                      {current.cardTitle}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {current.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0D427D]">
                  <span>Key Value Driver {current.id} of 05</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

const customEase = [0.16, 1, 0.3, 1] as const;

/* ── Section — Engineered Water Treatment Plants for Your Requirements (Our Approach Stepper) ── */
const approachTimelineSteps = [
  {
    id: '01',
    title: 'Understanding source-water characteristics',
    desc: 'Thorough testing and baseline analysis of raw water parameters, turbidity, hardness, and chemical composition.',
  },
  {
    id: '02',
    title: 'Assessing required treated-water quality',
    desc: 'Defining target purity levels, TDS boundaries, conductivity standards, and microbiological thresholds for your operations.',
  },
  {
    id: '03',
    title: 'Selecting appropriate treatment processes',
    desc: 'Selecting optimal clarification, multi-media filtration, ultrafiltration, reverse osmosis, or specialty treatment trains.',
  },
  {
    id: '04',
    title: 'Designing the system around operational requirements',
    desc: 'Custom engineering for footprint availability, hydraulic capacity, automated chemical dosing, and SCADA control.',
  },
  {
    id: '05',
    title: 'Installation and commissioning support',
    desc: 'On-site precision assembly, electrical hookups, hydraulic testing, and systematic operational parameter tuning.',
  },
  {
    id: '06',
    title: 'Ongoing technical and maintenance assistance',
    desc: 'Continuous technical support, scheduled preventive maintenance, spare parts supply, and operator training.',
  },
];

function SlashedOutlineNumber({ id }: { id: string }) {
  // stroke color & stroke width matching exact thin outline style from screenshot
  const strokeColor = "#E2E8F0";
  const strokeWidth = "1.5";

  return (
    <div className="absolute -top-10 left-28 sm:left-48 pointer-events-none select-none -z-10 opacity-70">
      <svg
        className="w-48 h-40 sm:w-60 sm:h-48 overflow-visible"
        viewBox="0 0 170 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          {/* Slashed Zero (0) - Oval with inner diagonal slash line */}
          <ellipse cx="48" cy="70" rx="32" ry="48" />
          <line x1="28" y1="96" x2="68" y2="44" />

          {/* Digit 1 */}
          {id === '01' && (
            <g>
              <path d="M 98,42 L 120,26 L 120,114" />
              <line x1="100" y1="114" x2="140" y2="114" />
            </g>
          )}

          {/* Digit 2 */}
          {id === '02' && (
            <path d="M 98,44 C 98,24 138,24 138,46 C 138,68 98,94 98,114 L 142,114" />
          )}

          {/* Digit 3 */}
          {id === '03' && (
            <path d="M 100,28 L 138,28 L 116,60 C 134,60 140,72 140,90 C 140,108 124,116 100,114" />
          )}

          {/* Digit 4 */}
          {id === '04' && (
            <g>
              <path d="M 130,24 L 96,82 L 142,82" />
              <line x1="130" y1="24" x2="130" y2="114" />
            </g>
          )}

          {/* Digit 5 */}
          {id === '05' && (
            <path d="M 136,26 L 102,26 L 98,58 C 106,54 120,54 132,60 C 142,68 142,92 130,108 C 120,116 104,114 98,108" />
          )}

          {/* Digit 6 */}
          {id === '06' && (
            <path d="M 134,32 C 116,22 98,40 98,72 C 98,98 114,116 130,112 C 142,106 144,86 132,72 C 120,60 100,64 98,72" />
          )}
        </g>
      </svg>
    </div>
  );
}

function EngineeredApproachSection() {
  const timelineRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 26,
    stiffness: 70,
    mass: 1,
    restDelta: 0.0001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const screwY = useTransform(smoothProgress, [0, 1], ['0%', '92%']);

  return (
    <section className="w-full py-20 sm:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-200/80 overflow-hidden font-geist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top 2-Column Header Block matching reference layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: customEase }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-16 sm:mb-20 pb-8 border-b border-slate-200/80"
        >
          {/* Left Column: Badge + Two-line Heading */}
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-extrabold tracking-[0.18em] text-[#0D427D] uppercase mb-4 shadow-2xs">
              OUR PROCESS
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2244] tracking-tight leading-tight">
              Engineered Water Treatment<br />
              Plants for Your Requirements
            </h2>
          </div>

          {/* Right Column: Description */}
          <div className="max-w-md md:pb-2">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Custom-planned around your specific water characteristics to deliver a dependable, high-quality water supply for your processes.
            </p>
          </div>
        </motion.div>

        {/* Vertical Timeline Stepper Container */}
        <div
          ref={timelineRef}
          className="relative max-w-4xl mx-auto"
        >
          
          {/* Central Vertical Line (Visible on Desktop) */}
          <div className="absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-[2px] bg-slate-200 hidden md:block" />

          {/* Water Droplet Graphic Smoothly Animated to Move with Scroll */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex flex-col items-center z-20 pointer-events-none"
            style={{ top: screwY }}
          >
            <div className="relative flex items-center justify-center filter drop-shadow-[0_4px_12px_rgba(13,66,125,0.4)] transition-transform duration-300">
              <svg className="w-8 h-10 overflow-visible" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="water_drop_grad" x1="16" y1="2" x2="16" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" />
                    <stop offset="0.45" stopColor="#0284C7" />
                    <stop offset="1" stopColor="#0D427D" />
                  </linearGradient>
                  <linearGradient id="drop_highlight" x1="10" y1="8" x2="18" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
                {/* Main Droplet Body */}
                <path
                  d="M16 2 C16 2 4 17 4 26 C4 32.6274 9.37258 38 16 38 C22.6274 38 28 32.6274 28 26 C28 17 16 2 16 2Z"
                  fill="url(#water_drop_grad)"
                  stroke="#38BDF8"
                  strokeWidth="0.75"
                />
                
                {/* Inner Light Reflection */}
                <ellipse cx="11.5" cy="22" rx="3.5" ry="7" transform="rotate(-25 11.5 22)" fill="url(#drop_highlight)" />
                <circle cx="21" cy="30" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
              </svg>
            </div>
          </motion.div>

          {/* Stepper Items */}
          <div className="space-y-8 sm:space-y-12 relative z-10">
            {approachTimelineSteps.map((step, idx) => {
              const isEven = idx % 2 === 1; // 01: Left, 02: Right...

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: 0.05, ease: customEase }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  {/* Central Square Node Marker on vertical line */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 bg-[#0D2244] rounded-sm hidden md:block z-10 shadow-xs" />

                  {/* Column content */}
                  <div className={`relative ${isEven ? 'md:col-start-2 md:text-left' : 'md:col-start-1 md:text-left'} px-2 py-4`}>
                    
                    {/* Exact Slashed Zero Background SVG Number */}
                    <SlashedOutlineNumber id={step.id} />

                    <div className="relative z-10 pt-2">
                      <h4 className="text-xl sm:text-2xl font-bold text-[#0D2244] mb-3 leading-snug">
                        {step.title}
                      </h4>
                      
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Empty column to force 2-column alternating grid structure */}
                  <div className={`hidden md:block ${isEven ? 'md:col-start-1' : 'md:col-start-2'}`} />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

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
            <div className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl overflow-hidden bg-white mt-2">

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

      {/* ── SECTION 3 — ENGINEERED WTP & OUR APPROACH TIMELINE ── */}
      <EngineeredApproachSection />

      {/* ── SECTION 4 — WHY INVEST IN A WATER TREATMENT PLANT? ── */}
      <WhyInvestInteractiveSection />

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
                    className={`cursor-pointer p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${active
                      ? 'bg-white text-[#0D2244] border-white shadow-xl scale-[1.02]'
                      : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10'
                      }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${active ? 'bg-[#0D427D] text-white' : 'bg-white/10 text-blue-200'
                        }`}>
                        <IndIcon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-extrabold">{ind.name}</span>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${active ? 'text-[#0D427D] translate-x-1' : 'text-white/40'
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

      {/* ── SECTION 6 — WHY CHOOSE SOWITECH ENGINEERING (EXACT UI REPLICA) ── */}
      <section className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden font-geist bg-slate-50 border-t border-slate-200/80">

        {/* Scenic Water & Mountain Landscape Background with Soft Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/architectural_hero.jpg"
            alt="Sowitech Water Landscape"
            fill
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-blue-50/75 to-slate-50/95 backdrop-blur-[1px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

          {/* Section Header with Circle Badge 6 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: customEase }}
            className="mb-14 sm:mb-20 max-w-4xl"
          >
            {/* Top Row: Badge + Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0D2244] text-white flex items-center justify-center font-black text-sm sm:text-base shadow-md shrink-0">
                6
              </div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#0D427D]">
                WHY CHOOSE SOWITECH ENGINEERING?
              </span>
            </div>

          </motion.div>

          {/* 4 Floating Glassmorphic Cards Grid */}
          <div className="relative mt-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 relative z-10">

              {/* Card Data Array Map for Clean & Dynamic Framer Motion Animations */}
              {[
                {
                  title: 'Practical Engineering Expertise',
                  subtitle: 'We develop solutions around actual water requirements rather than applying a one-size-fits-all approach.',
                  icon: Settings,
                  color: 'text-[#0D427D]',
                  delay: 0.1,
                },
                {
                  title: 'End-to-End Project Support',
                  subtitle: 'Our involvement can extend from system planning and design through installation, commissioning, and maintenance support.',
                  icon: ShieldCheck,
                  color: 'text-[#0D427D]',
                  delay: 0.2,
                },
                {
                  title: 'Sustainable Water Management',
                  subtitle: 'Our approach combines treatment with opportunities for recycling, reuse, and responsible water consumption.',
                  icon: Leaf,
                  color: 'text-teal-600',
                  delay: 0.3,
                },
                {
                  title: 'Technology Partnership with YAHA',
                  subtitle: (
                    <>
                      Selected treatment applications can integrate technology from{' '}
                      <Link
                        href="/yaha-technology"
                        className="text-[#0D427D] font-bold underline underline-offset-2 hover:text-[#F39A1E] transition-colors"
                      >
                        YAHA Water Systems
                      </Link>{' '}
                      as part of the overall solution.
                    </>
                  ),
                  icon: Share2,
                  color: 'text-[#0D427D]',
                  delay: 0.4,
                },
              ].map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 35, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.5,
                      delay: card.delay,
                      ease: [0.215, 0.61, 0.355, 1],
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="group relative bg-white/90 backdrop-blur-md border border-slate-200/60 shadow-lg rounded-2xl p-5 sm:p-6 text-center flex flex-col justify-between hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden"
                  >
                    {/* Glassmorphic Diagonal Hover Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-0" />

                    <div className="relative z-10">
                      {/* Top Circle Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 6 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md shadow-blue-500/10 flex items-center justify-center mx-auto mb-3 relative z-10 transition-all duration-300"
                      >
                        <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${card.color} stroke-[1.8] group-hover:scale-110 transition-transform duration-300`} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0D2244] mb-2 leading-snug group-hover:text-[#0D427D] transition-colors duration-300">
                        {card.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Sleek 2px Bottom-Only Accent Border Line on Hover */}
                    <div className="w-0 group-hover:w-full h-[2px] bg-[#0D427D] absolute bottom-0 left-0 transition-all duration-500 rounded-b-2xl" />
                  </motion.div>
                );
              })}

            </div>
          </div>

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
