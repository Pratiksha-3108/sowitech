'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useSpring, useScroll, useTransform } from 'framer-motion';
import {
  Droplets,
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
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
  Plus,
  RefreshCw,
} from 'lucide-react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const customEase = [0.16, 1, 0.3, 1] as const;

/* ── Section — Benefits of Tertiary Treatment Plants (5 Cut-out Numbers Section) ── */
const ttpBenefitsItems = [
  {
    id: '01',
    title: 'Usable Water Recovery',
    desc: 'Increase recovery of usable water from existing STP treated effluent streams.',
  },
  {
    id: '02',
    title: 'Reduced Freshwater Demand',
    desc: 'Lower freshwater requirements across facility utilities, cooling towers, and non-potable lines.',
  },
  {
    id: '03',
    title: 'External Source Independence',
    desc: 'Reduce dependence on expensive external tanker water and municipal water sources.',
  },
  {
    id: '04',
    title: 'Industrial Water-Reuse',
    desc: 'Support facility-wide industrial water-reuse programs with consistent high-quality polished water.',
  },
  {
    id: '05',
    title: 'ESG & Sustainability Support',
    desc: 'Support corporate sustainability goals, environmental compliance, and ESG objectives.',
  },
];

function TtpBenefitsInteractiveSection() {
  const [activeItem, setActiveItem] = useState(1);
  const sectionRef = React.useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 26,
    stiffness: 75,
  });

  const numberHeight = useTransform(smoothProgress, [0, 1], ['54px', '105px']);

  return (
    <section
      ref={sectionRef}
      className="w-full font-geist py-20 sm:py-28 bg-white border-t border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* Header Block */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#0D427D]/10 text-[#0D427D] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0D427D]/20">
            KEY ADVANTAGES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
            Benefits of <br className="hidden sm:inline" />
            <span className="text-[#0D427D]">Tertiary Treatment Plants</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl">
            A well-designed tertiary treatment system helps organizations move beyond conventional wastewater treatment toward an effective water-recovery strategy.
          </p>
        </div>

        {/* 5-Column Horizontal Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8 items-start">
          {ttpBenefitsItems.map((item, index) => {
            const isActive = activeItem === index;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: customEase }}
                onClick={() => setActiveItem(index)}
                onMouseEnter={() => setActiveItem(index)}
                className="cursor-pointer group flex flex-col justify-start transition-all duration-300"
              >
                <motion.div
                  style={{ height: numberHeight }}
                  className="relative overflow-hidden select-none transition-all duration-300"
                >
                  <div
                    className={`text-6xl sm:text-7xl lg:text-[96px] font-black tracking-tighter leading-none transition-colors duration-300 ${
                      isActive
                        ? 'text-[#2563EB] scale-105 origin-left'
                        : 'text-slate-300 group-hover:text-slate-400'
                    }`}
                  >
                    {item.id}
                  </div>
                </motion.div>

                <h3
                  className={`text-base sm:text-lg font-extrabold mt-4 mb-2 leading-snug transition-colors duration-300 ${
                    isActive ? 'text-[#0D2244]' : 'text-slate-900 group-hover:text-[#0D427D]'
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ── Section — STP to TTP Upgradation Timeline Stepper ── */
const stpToTtpSteps = [
  {
    id: '01',
    title: 'Existing STP Configuration',
    desc: 'Evaluating current STP civil, mechanical, hydraulic capacity, and biological treatment performance.',
  },
  {
    id: '02',
    title: 'Current Treated-Water Quality',
    desc: 'Analyzing current treated-water quality parameters against intended reuse specs and discharge guidelines.',
  },
  {
    id: '03',
    title: 'Intended Reuse Application',
    desc: 'Matching water purity requirements for cooling towers, HVAC systems, flushing, gardening, or industrial processes.',
  },
  {
    id: '04',
    title: 'Required Water Quality Standards',
    desc: 'Defining target TDS, turbidity, BOD/COD boundaries, suspended solids, and disinfection thresholds.',
  },
  {
    id: '05',
    title: 'Available Space & Infrastructure',
    desc: 'Designing compact retrofits and tertiary filtration skid modules around existing plant space.',
  },
  {
    id: '06',
    title: 'Operational Requirements',
    desc: 'Integrating automated backwash controls, SCADA telemetry, operator training, and ongoing technical support.',
  },
];

function SlashedOutlineNumber({ id }: { id: string }) {
  const strokeColor = '#E2E8F0';
  const strokeWidth = '1.5';

  return (
    <div className="absolute -top-10 left-28 sm:left-48 pointer-events-none select-none -z-10 opacity-70">
      <svg
        className="w-48 h-40 sm:w-60 sm:h-48 overflow-visible"
        viewBox="0 0 170 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="48" cy="70" rx="32" ry="48" />
          <line x1="28" y1="96" x2="68" y2="44" />

          {id === '01' && (
            <g>
              <path d="M 98,42 L 120,26 L 120,114" />
              <line x1="100" y1="114" x2="140" y2="114" />
            </g>
          )}

          {id === '02' && (
            <path d="M 98,44 C 98,24 138,24 138,46 C 138,68 98,94 98,114 L 142,114" />
          )}

          {id === '03' && (
            <path d="M 100,28 L 138,28 L 116,60 C 134,60 140,72 140,90 C 140,108 124,116 100,114" />
          )}

          {id === '04' && (
            <g>
              <path d="M 130,24 L 96,82 L 142,82" />
              <line x1="130" y1="24" x2="130" y2="114" />
            </g>
          )}

          {id === '05' && (
            <path d="M 136,26 L 102,26 L 98,58 C 106,54 120,54 132,60 C 142,68 142,92 130,108 C 120,116 104,114 98,108" />
          )}

          {id === '06' && (
            <path d="M 134,32 C 116,22 98,40 98,72 C 98,98 114,116 130,112 C 142,106 144,86 132,72 C 120,60 100,64 98,72" />
          )}
        </g>
      </svg>
    </div>
  );
}

function StpToTtpUpgradationSection() {
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

  const screwY = useTransform(smoothProgress, [0, 1], ['0%', '92%']);

  return (
    <section className="w-full py-20 sm:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-200/80 overflow-hidden font-geist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Top Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: customEase }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-16 sm:mb-20 pb-8 border-b border-slate-200/80"
        >
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-extrabold tracking-[0.18em] text-[#0D427D] uppercase mb-4 shadow-2xs">
              STP TO TTP UPGRADATION
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2244] tracking-tight leading-tight">
              Enhance Existing STP Infrastructure <br />
              <span className="text-[#0D427D]">Without Total Civil Rebuilding</span>
            </h2>
          </div>

          <div className="max-w-md md:pb-2">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Our STP to TTP upgradation approach enhances your existing treatment setup with additional filtration processes rather than requiring an entirely new wastewater infrastructure.
            </p>
          </div>
        </motion.div>

        {/* Vertical Timeline Stepper Container */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-[2px] bg-slate-200 hidden md:block" />

          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex flex-col items-center z-20 pointer-events-none"
            style={{ top: screwY }}
          >
            <div className="relative flex items-center justify-center filter drop-shadow-[0_4px_12px_rgba(13,66,125,0.4)] transition-transform duration-300">
              <svg className="w-8 h-10 overflow-visible" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="water_drop_grad_ttp" x1="16" y1="2" x2="16" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" />
                    <stop offset="0.45" stopColor="#0284C7" />
                    <stop offset="1" stopColor="#0D427D" />
                  </linearGradient>
                  <linearGradient id="drop_highlight_ttp" x1="10" y1="8" x2="18" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                <path
                  d="M16 2 C16 2 4 17 4 26 C4 32.6274 9.37258 38 16 38 C22.6274 38 28 32.6274 28 26 C28 17 16 2 16 2Z"
                  fill="url(#water_drop_grad_ttp)"
                  stroke="#38BDF8"
                  strokeWidth="0.75"
                />
                <ellipse cx="11.5" cy="22" rx="3.5" ry="7" transform="rotate(-25 11.5 22)" fill="url(#drop_highlight_ttp)" />
                <circle cx="21" cy="30" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
              </svg>
            </div>
          </motion.div>

          <div className="space-y-8 sm:space-y-12 relative z-10">
            {stpToTtpSteps.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: 0.05, ease: customEase }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  <div className="absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 bg-[#0D2244] rounded-sm hidden md:block z-10 shadow-xs" />

                  <div className={`relative ${isEven ? 'md:col-start-2 md:text-left' : 'md:col-start-1 md:text-left'} px-2 py-4`}>
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

/* ── Section — Tertiary Treatment for Water Reuse (Applications Grid) ── */
const ttpApplications = [
  {
    title: 'Cooling Towers',
    desc: 'High-grade make-up water for cooling tower heat exchangers and thermal rejection systems.',
    icon: Droplets,
  },
  {
    title: 'HVAC Systems',
    desc: 'Chilled water plant make-up and condenser water circuits for commercial buildings.',
    icon: RefreshCw,
  },
  {
    title: 'Utility Applications',
    desc: 'Facility washdown, floor cleaning, equipment flushing, and industrial plant utility lines.',
    icon: Cpu,
  },
  {
    title: 'Construction Activities',
    desc: 'On-site dust suppression, compaction water, concrete mixing, and vehicle washing.',
    icon: Layers,
  },
  {
    title: 'Industrial Processes',
    desc: 'Non-sensitive manufacturing processes, primary rinsing, and industrial process water.',
    icon: Sparkles,
  },
  {
    title: 'Flushing & Gardening',
    desc: 'Toilet flushing, landscape irrigation, green belt maintenance, and eco-parks.',
    icon: Leaf,
  },
];

/* ── Section 6 — Why Choose Sowitech Engineering (Interactive Layout Matching WTP) ── */
function WhyChooseTtpInteractiveSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const chooseCards = [
    {
      id: '01',
      category: 'TAILORED REUSE SYSTEMS',
      title: 'Application-Focused Engineering',
      desc: 'We design tertiary treatment systems around actual reuse requirements rather than treating water without a defined end use.',
      mainImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: '02',
      category: 'UPGRADATION & RETROFITTING',
      title: 'Existing STP Integration',
      desc: 'Where technically appropriate, we can evaluate existing STP infrastructure for tertiary-treatment upgradation without total civil rebuilding.',
      mainImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: '03',
      category: 'RECYCLING & ESG',
      title: 'Sustainable Water Recovery',
      desc: 'Our solutions are focused on helping organizations recover and reuse treated water for suitable non-potable applications.',
      mainImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: '04',
      category: 'END-TO-END SUPPORT',
      title: 'Complete Project Support',
      desc: 'From assessment and design through installation and commissioning, our team supports the implementation process.',
      mainImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 font-geist bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* 2-Column Grid: Left Images + Right Column containing (Headline + Paragraph + Tabs & Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-start">
          
          {/* Left Column: Overlapping Images Showcase (Sticky) */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28 self-start">
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-[360px] mx-auto lg:mx-0">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  className="relative"
                >
                  <div className="relative rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] aspect-[4/4.9] border border-slate-200/60 bg-[#E2E8F0]">
                    <Image
                      src={chooseCards[activeTab].mainImage}
                      alt={chooseCards[activeTab].title}
                      fill
                      unoptimized
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="absolute -bottom-6 -right-5 sm:-bottom-8 sm:-right-8 w-36 sm:w-44 aspect-[3/4.2] rounded-[22px] overflow-hidden border-[5px] border-white shadow-[0_25px_50px_rgba(0,0,0,0.22)] z-20 transition-transform duration-300 hover:scale-105 bg-slate-800">
                    <Image
                      src={chooseCards[activeTab].insetImage}
                      alt={`${chooseCards[activeTab].title} Detail`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Headline, Paragraph, and Interactive Tabs + Detail Box */}
          <div className="lg:col-span-7 space-y-6 pt-1 lg:pt-3 lg:-ml-4 xl:-ml-6">
            
            <div>
              <h2 className="font-geist text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.14]">
                Why Choose Sowitech Engineering. <br />
                <span className="text-[#64748B] font-bold">Application-Focused Water Recovery.</span>
              </h2>

              <p className="font-geist text-[#475569] text-sm sm:text-[15px] leading-relaxed font-normal mt-3.5 max-w-xl">
                Our solutions are focused on helping organizations recover and reuse treated water for suitable non-potable applications with complete technical support.
              </p>
            </div>

            <div className="pt-2 flex flex-col xl:flex-row gap-5 items-stretch">
              
              <div className="w-full xl:w-[48%] space-y-2 flex flex-col justify-center">
                {chooseCards.map((item, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full text-left px-4 py-3 sm:py-3.5 rounded-2xl transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                        isActive
                          ? 'bg-[#E8F2FD] border border-[#BBE0FF]/80 text-[#0F172A] shadow-xs'
                          : 'bg-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-200/50'
                      }`}
                    >
                      <span
                        className={`text-xs sm:text-sm font-bold transition-colors ${
                          isActive ? 'text-[#3B82F6]' : 'text-[#94A3B8]'
                        }`}
                      >
                        {item.id}
                      </span>
                      <span
                        className={`text-xs sm:text-[13px] font-bold leading-none whitespace-nowrap ${
                          isActive ? 'text-[#0F172A]' : 'text-[#64748B]'
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="w-full xl:w-[52%] min-h-[220px] flex">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="w-full bg-white rounded-[24px] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-center relative overflow-hidden"
                  >
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#3B82F6] mb-3 block font-geist">
                      {chooseCards[activeTab].category}
                    </span>

                    <h3 className="font-geist text-lg sm:text-xl font-extrabold text-[#0F172A] mb-3 leading-snug">
                      {chooseCards[activeTab].title}
                    </h3>

                    <p className="font-geist text-[#64748B] text-xs sm:text-sm leading-relaxed font-normal">
                      {chooseCards[activeTab].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function TertiaryTreatmentPlantsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-geist text-slate-900">
      <Navbar />

      {/* ── SECTION 1 — HERO SECTION ── */}
      <section className="relative w-full pt-32 sm:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-[#0D2244] via-[#0D427D] to-[#0A1A3B] text-white overflow-hidden font-geist">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/Images/home/yaha_filtration_plant.jpg"
            alt="Tertiary Treatment Plants for Advanced Water Reuse"
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-white">
              Tertiary Treatment Plants <span className="text-blue-300">for Advanced Water Reuse</span>
            </h1>

            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-6 font-normal">
              Sowitech Engineering provides Tertiary Treatment Plants designed to further treat water from existing sewage treatment systems so it can be considered for suitable non-potable reuse applications. Our solutions help organizations move beyond conventional wastewater treatment toward a more effective water-recovery strategy.
            </p>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Working with the requirements of each facility, we design tertiary treatment systems around the required water quality and intended reuse application.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F39A1E] hover:bg-[#e08b12] text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm tracking-wider uppercase"
              >
                Request a Water Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2 — WHAT IS A TERTIARY TREATMENT PLANT? ── */}
      <section id="solution-overview" className="py-14 md:py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 overflow-hidden scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.85, ease: customEase }}
            className="lg:col-span-6 relative flex"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-auto">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
                alt="Tertiary Treatment Plant Facility"
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3B]/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.85, ease: customEase }}
            className="lg:col-span-6 flex flex-col justify-center space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D427D]/10 text-[#0D427D] text-xs font-bold uppercase tracking-wider w-fit">
              <Filter className="w-3.5 h-3.5 text-[#0D427D]" />
              SOLUTIONS OVERVIEW
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2244] tracking-tight leading-tight">
              What Is a <span className="text-[#0D427D]">Tertiary Treatment Plant?</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A Tertiary Treatment Plant provides an additional level of treatment after primary and secondary wastewater treatment. The objective is to improve treated-water quality so that it can be used for appropriate non-potable applications.
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
              For facilities already operating an STP, tertiary treatment can create an opportunity to recover more value from treated wastewater.
            </div>

            <div className="space-y-3 pt-2">
              {[
                'Provides advanced polishing after primary and secondary STP treatment',
                'Improves treated water quality for utilities & industrial needs',
                'Enables closed-loop water recovery ZLD strategy',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── SECTION 3 — STP TO TTP UPGRADATION ── */}
      <StpToTtpUpgradationSection />

      {/* ── SECTION 4 — TERTIARY TREATMENT FOR WATER REUSE (APPLICATIONS GRID) ── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mb-14">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#0D427D]/10 text-[#0D427D] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0D427D]/20">
              REUSE APPLICATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2244] tracking-tight leading-tight mb-4">
              Tertiary Treatment for <span className="text-[#0D427D]">Water Reuse</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Treated water from a tertiary treatment system can be considered for suitable non-potable applications depending on required water quality and operating conditions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ttpApplications.map((app, idx) => {
              const IconComp = app.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0D427D]/30 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EBF3FA] text-[#0D427D] flex items-center justify-center mb-5 group-hover:bg-[#0D427D] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0D2244] mb-2.5 group-hover:text-[#0D427D] transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                      {app.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-8 text-center text-xs sm:text-sm text-slate-500 font-medium">
            * The appropriate reuse application depends on the required water quality and the specific operating conditions of the facility.
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — BENEFITS OF TERTIARY TREATMENT PLANTS ── */}
      <TtpBenefitsInteractiveSection />

      {/* ── SECTION 6 — ADVANCED FILTRATION TECHNOLOGY (OVERLAPPING TCS-STYLE UI) ── */}
      <section className="py-16 md:py-28 bg-white relative overflow-hidden font-geist">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="relative flex flex-col lg:flex-row items-center">
            
            {/* Left Big Image (Slides in from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="w-full lg:w-[78%] h-[380px] sm:h-[460px] lg:h-[540px] rounded-none overflow-hidden relative shadow-lg shrink-0"
            >
              <Image
                src="/Images/home/yaha_filtration_plant.jpg"
                alt="YAHA Water Systems Technology"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </motion.div>

            {/* Right Overlapping Card (Slides in from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
              className="w-full lg:w-[48%] bg-[#F5F6F8] rounded-none p-6 sm:p-8 lg:p-9 shadow-xl border border-slate-100/80 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 space-y-4 -mt-12 lg:mt-0"
            >
              
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 block font-geist">
                ADVANCED FILTRATION TECHNOLOGY
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-[30px] font-extrabold text-[#0B132B] leading-[1.22] tracking-tight font-geist">
                Technology Partnership with <span className="text-[#0D427D]">YAHA Water Systems</span>
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal font-geist">
                For selected applications, Sowitech Engineering integrates YAHA Water Systems&apos; Hybrid Zen Media Filtration technology into water treatment and tertiary treatment solutions. Designed around efficient filtration, reduced backwash requirements, lower water wastage, and simplified maintenance.
              </p>

              <div className="pt-1">
                <Link
                  href="/yaha-technology"
                  className="group inline-flex items-center gap-3 text-[#0B132B] hover:text-[#0D427D] font-bold text-xs sm:text-sm transition-colors"
                >
                  <span className="leading-snug font-geist">Learn More About YAHA Water Technology</span>
                  <span className="w-9 h-9 rounded-full bg-black group-hover:bg-[#0D427D] text-white flex items-center justify-center transition-colors shadow-md shrink-0">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION 7 — WHY SOWITECH ENGINEERING? (INTERACTIVE SECTION) ── */}
      <WhyChooseTtpInteractiveSection />

      {/* ── SECTION 8 — EXPLORE BETTER WATER REUSE / CTA ── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#0D427D]/10 text-[#0D427D] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0D427D]/20">
            GET STARTED TODAY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D2244] tracking-tight leading-tight mb-6">
            Explore Better Water Reuse
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            If your existing STP produces treated water that could be reused more effectively, Sowitech Engineering can evaluate your current system and identify potential opportunities for tertiary treatment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#F39A1E] hover:bg-[#e08b12] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm tracking-wider uppercase"
            >
              <span>Request a Water Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+919730014264"
              className="inline-flex items-center gap-2.5 bg-[#0D2244] hover:bg-[#0D427D] text-white font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm tracking-wider"
            >
              <Phone className="w-4 h-4 text-blue-300" />
              <span>+91 97300 14264</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
