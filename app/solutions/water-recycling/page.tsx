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
  Building2,
  Car,
  Server,
  Stethoscope,
  Hotel,
  GraduationCap,
  Home,
  Landmark,
  Factory,
  Recycle,
} from 'lucide-react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const customEase = [0.16, 1, 0.3, 1] as const;

/* ── Section — Benefits of Water Recycling (5 Cut-out Numbers Section) ── */
const recyclingBenefitsItems = [
  {
    id: '01',
    title: 'Reduce Freshwater Demand',
    desc: 'Dramatically reduce freshwater consumption across utility and process circuits.',
  },
  {
    id: '02',
    title: 'Reduce Source Dependence',
    desc: 'Reduce dependence on external municipal supply and expensive tanker water.',
  },
  {
    id: '03',
    title: 'Lower Procurement Costs',
    desc: 'Lower water procurement requirements and optimize wastewater discharge fees.',
  },
  {
    id: '04',
    title: 'Improve Water Efficiency',
    desc: 'Improve water-use efficiency while strengthening long-term operational resilience.',
  },
  {
    id: '05',
    title: 'Circular Water Practices',
    desc: 'Support corporate sustainability initiatives and contribute to circular water management.',
  },
];

function RecyclingBenefitsInteractiveSection() {
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
            <span className="text-[#0D427D]">Water Recycling</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl">
            A structured water-recycling program helps organizations move from linear consumption to sustainable circular water recovery.
          </p>
        </div>

        {/* 5-Column Horizontal Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8 items-start">
          {recyclingBenefitsItems.map((item, index) => {
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

        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 font-medium">
          * The actual level of water recovery and savings depends on the facility, existing infrastructure, wastewater characteristics, and selected reuse applications.
        </div>

      </div>
    </section>
  );
}

/* ── Section — Where Can Recycled Water Be Used? (Timeline Stepper) ── */
const recyclingApplicationsSteps = [
  {
    id: '01',
    title: 'Cooling Towers',
    desc: 'Recovered water can be considered for suitable cooling-tower applications after the required treatment.',
  },
  {
    id: '02',
    title: 'HVAC and Utilities',
    desc: 'Recycled water can support selected utility requirements within commercial and industrial facilities.',
  },
  {
    id: '03',
    title: 'Flushing',
    desc: 'Treated recycled water can be used for appropriate toilet-flushing applications.',
  },
  {
    id: '04',
    title: 'Gardening and Landscaping',
    desc: 'Recovered water can reduce the need to use fresh water for landscaping and gardening.',
  },
  {
    id: '05',
    title: 'Industrial Processes',
    desc: 'Where water-quality requirements allow, recycled water can be integrated into selected industrial applications.',
  },
];

function SlashedOutlineNumber({ id }: { id: string }) {
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
        </g>
      </svg>
    </div>
  );
}

function RecyclingApplicationsTimelineSection() {
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

        {/* Top 2-Column Header Block matching WTP OUR PROCESS layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: customEase }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-16 sm:mb-20 pb-8 border-b border-slate-200/80"
        >
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-extrabold tracking-[0.18em] text-[#0D427D] uppercase mb-4 shadow-2xs">
              RECIRCULATION & REUSE
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D2244] tracking-tight leading-tight">
              Where Can Recycled<br />
              Water Be Used?
            </h2>
          </div>

          <div className="max-w-md md:pb-2">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Depending on the required quality, recycled water can support applications across industrial, commercial, and utility infrastructure.
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
                  <linearGradient id="water_drop_grad_recycling" x1="16" y1="2" x2="16" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38BDF8" />
                    <stop offset="0.45" stopColor="#0284C7" />
                    <stop offset="1" stopColor="#0D427D" />
                  </linearGradient>
                  <linearGradient id="drop_highlight_recycling" x1="10" y1="8" x2="18" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" stopOpacity="0.85" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                <path
                  d="M16 2 C16 2 4 17 4 26 C4 32.6274 9.37258 38 16 38 C22.6274 38 28 32.6274 28 26 C28 17 16 2 16 2Z"
                  fill="url(#water_drop_grad_recycling)"
                  stroke="#38BDF8"
                  strokeWidth="0.75"
                />

                <ellipse cx="11.5" cy="22" rx="3.5" ry="7" transform="rotate(-25 11.5 22)" fill="url(#drop_highlight_recycling)" />
                <circle cx="21" cy="30" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />
              </svg>
            </div>
          </motion.div>

          {/* Stepper Items */}
          <div className="space-y-8 sm:space-y-12 relative z-10">
            {recyclingApplicationsSteps.map((step, idx) => {
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

/* ── Section — Water Recycling for Industries (Sectors Grid) ── */
const sectorsServed = [
  { title: 'Manufacturing', icon: Factory },
  { title: 'Automotive', icon: Car },
  { title: 'Data Centres', icon: Server },
  { title: 'Hospitals', icon: Stethoscope },
  { title: 'Hotels', icon: Hotel },
  { title: 'Educational Institutions', icon: GraduationCap },
  { title: 'Residential Societies', icon: Home },
  { title: 'Municipal Corporations', icon: Landmark },
  { title: 'MIDC & Industrial Parks', icon: Building2 },
];

/* ── Section 6 — Why Choose Sowitech Engineering (Interactive Layout) ── */
function WhyChooseRecyclingInteractiveSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const chooseCards = [
    {
      id: '01',
      category: 'FACILITY WATER AUDIT',
      title: 'Comprehensive Water-Audit',
      desc: 'Our approach starts with understanding how water enters, moves through, and leaves your facility before identifying suitable recovery opportunities.',
      mainImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: '02',
      category: 'CUSTOM RECOVERY DESIGN',
      title: 'Custom Process Selection',
      desc: 'We select specific treatment and filtration trains tailored around actual wastewater parameters and target non-potable reuse standards.',
      mainImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: '03',
      category: 'STP & TTP RETROFITTING',
      title: 'STP & TTP Integration',
      desc: 'Where technically appropriate, we evaluate existing STP setups for tertiary-treatment upgradation without requiring full civil rebuilding.',
      mainImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: '04',
      category: 'END-TO-END ASSISTANCE',
      title: 'Long-Term Support & Maintenance',
      desc: 'From initial audit and design through installation, commissioning, and preventive maintenance, our team supports full lifecycle operations.',
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
                <span className="text-[#64748B] font-bold">Build a Custom Water-Reuse Strategy.</span>
              </h2>

              <p className="font-geist text-[#475569] text-sm sm:text-[15px] leading-relaxed font-normal mt-3.5 max-w-xl">
                Every facility has different water requirements. Our approach starts with understanding how water enters, moves through, and leaves your facility before identifying suitable opportunities for treatment and reuse.
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

/* ── Section — How Water Recycling Works (From Waste to Worth 5-Circle Process Flow) ── */
const processFlowSteps = [
  {
    id: '01',
    title: 'Collection & Pre-Treatment',
    desc: 'Remove large solids, oils, and raw wastewater contaminants.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Primary & Secondary Treatment',
    desc: 'Biological and physical purification process.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Advanced Filtration',
    desc: 'Polishing filtration for higher water quality.',
    image: '/Images/home/yaha_filtration_plant.jpg',
  },
  {
    id: '04',
    title: 'Disinfection & Recovery',
    desc: 'Ensure safe and stable recovered water specifications.',
    image: '/Images/home/untraflitration-plant.png',
  },
  {
    id: '05',
    title: 'Clean Water for Reuse',
    desc: 'Returned for cooling, flushing, utilities, and industrial reuse.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=600&auto=format&fit=crop',
  },
];

function HowWaterRecyclingWorksProcessSection() {
  return (
    <section id="solution-overview" className="w-full py-20 sm:py-28 bg-[#F4F8FC] border-t border-b border-slate-200/80 font-geist overflow-hidden scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#E0EEFD] border border-[#BFDBFE] text-[#1E5FA8] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            OUR PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0C2340] tracking-tight leading-[1.15] mb-4">
            From Waste to Worth: <br className="hidden sm:inline" />
            <span className="text-[#0D427D]">How Water Recycling Works</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl">
            Water recycling involves treating wastewater to the quality required for a specific reuse application and returning recovered water to facility operations.
          </p>
        </div>

        {/* 5-Column Horizontal Flow Layout with Connecting Arrows */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 items-start">
            {processFlowSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: customEase }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Connecting Right Arrow (Visible between items on Desktop) */}
                {idx < processFlowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-16 -translate-y-1/2 z-20 pointer-events-none items-center">
                    <ArrowRight className="w-6 h-6 text-[#3B82F6]/70 stroke-[2.5]" />
                  </div>
                )}

                {/* Circular Image Card Container with Overlay Number Badge */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-white shadow-[0_15px_35px_rgba(13,35,64,0.12)] overflow-hidden relative transition-transform duration-300 group-hover:scale-105 bg-slate-200">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>

                  {/* Overlapping Bottom-Left Circular Number Badge */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0D2244] text-white text-xs sm:text-sm font-black flex items-center justify-center border-2 border-white shadow-md z-10">
                    {step.id}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-extrabold text-[#0C2340] mb-2 leading-snug max-w-[220px]">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Strategy Flow Banner Bar at bottom */}
          <div className="mt-14 p-5 rounded-2xl bg-white border border-blue-100/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0D2244] flex-wrap">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0D427D] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Strategy Flow
              </span>
              <span>Wastewater → Treatment → Further Treatment/Filtration → Recovered Water → Non-Potable Reuse</span>
            </div>
            <div className="text-xs text-slate-500 font-medium whitespace-nowrap">
              * The exact configuration depends on wastewater characteristics and intended application.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function WaterRecyclingSolutionsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-geist text-slate-900">
      <Navbar />

      {/* ── SECTION 1 — HERO SECTION ── */}
      <section className="relative w-full pt-32 sm:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-[#0D2244] via-[#0D427D] to-[#0A1A3B] text-white overflow-hidden font-geist">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/Images/home/untraflitration-plant.png"
            alt="Water Recycling Solutions for Sustainable Water Management"
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
              Water Recycling Solutions <span className="text-blue-300">for Sustainable Water Management</span>
            </h1>

            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-6 font-normal">
              Sowitech Engineering develops Water Recycling Solutions that help industries and large facilities recover treated wastewater and use it again for suitable non-potable applications. Instead of treating wastewater as an end-of-use resource, our approach focuses on identifying opportunities to recover and reuse water within the facility.
            </p>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-sm sm:text-base font-extrabold uppercase tracking-widest mb-8 w-fit">
              The objective is simple: <span className="text-blue-300">Treat. Recycle. Reuse.</span>
            </div>

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

      {/* ── SECTION 2 — HOW WATER RECYCLING WORKS ── */}
      <HowWaterRecyclingWorksProcessSection />

      {/* ── SECTION 3 — WHERE CAN RECYCLED WATER BE USED? (VERTICAL TIMELINE STEPPER) ── */}
      <RecyclingApplicationsTimelineSection />

      {/* ── SECTION 4 — WATER RECYCLING FOR INDUSTRIES (SECTORS GRID) ── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mb-14">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#0D427D]/10 text-[#0D427D] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0D427D]/20">
              SECTORS SERVED
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2244] tracking-tight leading-tight mb-4">
              Water Recycling for <span className="text-[#0D427D]">Industries</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Our Water Recycling Solutions are suitable for organizations where water consumption is a significant operational consideration across key sectors:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {sectorsServed.map((sector, idx) => {
              const IconComponent = sector.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-[#0D427D]/40 hover:bg-[#EBF3FA]/50 transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0D427D] shadow-2xs flex items-center justify-center group-hover:bg-[#0D427D] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#0D2244] group-hover:text-[#0D427D] transition-colors">
                    {sector.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — BENEFITS OF WATER RECYCLING ── */}
      <RecyclingBenefitsInteractiveSection />

      {/* ── SECTION 6 — FROM STP TO WATER REUSE (INTEGRATION LINKS) ── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mb-14">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#0D427D]/10 text-[#0D427D] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0D427D]/20">
              UPGRADATION & RECOVERY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2244] tracking-tight leading-tight mb-4">
              From STP to <span className="text-[#0D427D]">Water Reuse</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              For organizations with an existing STP, further treatment may create an opportunity to recover more water for reuse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF3FA] text-[#0D427D] flex items-center justify-center mb-5">
                  <Filter className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0D2244] mb-3">
                  Tertiary Treatment Plants (TTP)
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-normal mb-4">
                  Our Tertiary Treatment Plants can be considered where additional treatment is required before the water can be used for appropriate non-potable applications.
                </p>
              </div>

              <Link
                href="/solutions/ttp"
                className="inline-flex items-center gap-2 text-[#0D427D] font-bold text-sm hover:gap-3 transition-all"
              >
                <span>Explore Tertiary Treatment Plants</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF3FA] text-[#0D427D] flex items-center justify-center mb-5">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0D2244] mb-3">
                  STP to TTP Upgradation
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-normal mb-4">
                  We provide STP to TTP Upgradation as part of a broader water-recovery strategy, retrofitting tertiary filtration without rebuilding civil structures.
                </p>
              </div>

              <Link
                href="/solutions/stp-upgradation"
                className="inline-flex items-center gap-2 text-[#0D427D] font-bold text-sm hover:gap-3 transition-all"
              >
                <span>Explore STP to TTP Upgradation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — TECHNOLOGY-DRIVEN WATER RECYCLING (YAHA PARTNERSHIP) ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0D2244] via-[#0D427D] to-[#0A1A3B] text-white relative overflow-hidden font-geist">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-blue-200 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                ADVANCED FILTRATION TECHNOLOGY
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Technology-Driven Water Recycling with <span className="text-blue-300">YAHA Water Systems</span>
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                For selected applications, Sowitech Engineering works with YAHA Water Systems and integrates its Hybrid Zen Media Filtration technology into suitable treatment and recycling systems. This technology focuses on efficient filtration, lower backwash requirements, reduced water wastage, and simplified maintenance.
              </p>

              <div className="pt-2">
                <Link
                  href="/yaha-technology"
                  className="inline-flex items-center gap-2.5 bg-[#F39A1E] hover:bg-[#e08b12] text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm tracking-wider uppercase"
                >
                  <span>Learn More About YAHA Water Technology</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src="/Images/home/yaha_filtration_plant.jpg"
                  alt="YAHA Water Systems Technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 8 — WHY SOWITECH ENGINEERING? (INTERACTIVE SECTION) ── */}
      <WhyChooseRecyclingInteractiveSection />

      {/* ── SECTION 9 — BUILD A WATER-REUSE STRATEGY / CTA ── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#0D427D]/10 text-[#0D427D] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0D427D]/20">
            GET STARTED TODAY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D2244] tracking-tight leading-tight mb-6">
            Build a Water-Reuse Strategy
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Every facility has different water requirements. Our approach starts with understanding how water enters, moves through, and leaves your facility before identifying suitable opportunities for treatment and reuse.
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
