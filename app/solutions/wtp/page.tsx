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
} from 'lucide-react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const whyInvestItems = [
  {
    id: '01',
    title: 'Water Quality Improvement',
    desc: 'Convert raw groundwater, surface water, or municipal intake into consistent, high-purity process water tailored for industrial operations.',
  },
  {
    id: '02',
    title: 'Reduced Source Dependence',
    desc: 'Eliminate vulnerability to municipal supply shortages, seasonal water scarcity, and raw water quality fluctuations with on-site treatment.',
  },
  {
    id: '03',
    title: 'Process-Water Availability',
    desc: 'Ensure continuous uptime for manufacturing operations with heavy-duty redundant filtration trains engineered for zero unplanned downtime.',
  },
  {
    id: '04',
    title: 'Management Efficiency',
    desc: 'Lower operational expenditure through SCADA telemetry monitoring, automated chemical dosing control, and optimized backwash recovery.',
  },
  {
    id: '05',
    title: 'Facility Water Reuse',
    desc: 'Position your facility for closed-loop wastewater recycling and Zero Liquid Discharge (ZLD) readiness, reducing freshwater costs.',
  },
];

function WhyInvestInteractiveSection() {
  const [activeItem, setActiveItem] = useState(1); // Default active item '02' matching reference layout
  const sectionRef = React.useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 26,
    stiffness: 75,
  });

  // Height animates from 54px (half-cut initial view) to 105px (full height reveal) on scroll
  const numberHeight = useTransform(smoothProgress, [0, 1], ['54px', '105px']);

  return (
    <section
      ref={sectionRef}
      className="w-full font-geist py-20 sm:py-28 bg-white border-t border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* Header Block */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
            Why Invest in a <br className="hidden sm:inline" />
            <span className="text-[#0D427D]">Water Treatment Plant?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl">
            A properly designed treatment system helps manage water resources effectively, mitigates raw water risks, and maintains reliable process-water availability across industrial operations.
          </p>
        </div>

        {/* 5-Column Horizontal Stepper Grid with Half-Cut Initial State to Full Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8 items-start">
          {whyInvestItems.map((item, index) => {
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
                {/* Large Cut-out Stylized Digit Container — Initially Half-Cut (54px), Expands to Full Height (105px) on Scroll */}
                <motion.div
                  style={{ height: numberHeight }}
                  className="relative overflow-hidden select-none transition-all duration-300"
                >
                  <div
                    className={`text-6xl sm:text-7xl lg:text-[96px] font-black tracking-tighter leading-none transition-colors duration-300 ${isActive
                      ? 'text-[#2563EB] scale-105 origin-left'
                      : 'text-slate-300 group-hover:text-slate-400'
                      }`}
                  >
                    {item.id}
                  </div>
                </motion.div>

                {/* Title */}
                <h3
                  className={`text-base sm:text-lg font-extrabold mt-4 mb-2 leading-snug transition-colors duration-300 ${isActive ? 'text-[#0D2244]' : 'text-slate-900 group-hover:text-[#0D427D]'
                    }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
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


/* ── Section 6 — Why Choose Sowitech Engineering (Reference Layout Matching Device Screenshot) ── */
function WhyChooseInteractiveSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const chooseCards = [
    {
      id: '01',
      category: 'PRACTICAL ENGINEERING EXPERTISE',
      title: 'Practical Engineering Expertise',
      desc: 'We develop solutions around actual water requirements rather than applying a one-size-fits-all approach. Our engineering team designs custom systems tailored to your facility parameters.',
      mainImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: '02',
      category: 'FULL LIFECYCLE MANAGEMENT',
      title: 'End-to-End Project Support',
      desc: 'Our involvement extends from initial system planning and design through turn-key installation, commissioning, operations, and long-term maintenance support.',
      mainImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: '03',
      category: 'RECYCLING & REUSE',
      title: 'Sustainable Water Management',
      desc: 'Our holistic approach combines advanced water treatment with opportunities for recycling, non-potable reuse, and responsible long-term water consumption.',
      mainImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: '04',
      category: 'ADVANCED FILTRATION TECHNOLOGY',
      title: 'Technology Partnership with YAHA',
      desc: 'Selected treatment applications can integrate advanced filtration technology from YAHA Water Systems as part of the overall high-efficiency solution.',
      mainImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
      insetImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 font-geist bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* 2-Column Grid: Left Images + Right Column containing (Headline + Paragraph + Tabs & Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-start">
          
          {/* Left Column: Overlapping Images Showcase (Sticky, Increased Height) */}
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
                  {/* Main Background Image Card (Increased Height) */}
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

                  {/* Overlapping Floating Inset Image Card */}
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

          {/* Right Column: Headline, Paragraph, and Interactive Tabs + Detail Box (Shifted Left) */}
          <div className="lg:col-span-7 space-y-6 pt-1 lg:pt-3 lg:-ml-4 xl:-ml-6">
            
            {/* Dual-Tone Headline */}
            <div>
              <h2 className="font-geist text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.14]">
                Why Choose Sowitech Engineering. <br />
                <span className="text-[#64748B] font-bold">Guaranteed Water Reliability.</span>
              </h2>

              <p className="font-geist text-[#475569] text-sm sm:text-[15px] leading-relaxed font-normal mt-3.5 max-w-xl">
                Empowering your facility with tailored water treatment solutions designed to drive operational efficiency, lower freshwater dependency, and ensure long-term reliability.
              </p>
            </div>

            {/* Interactive Tabs + Detail Box Row */}
            <div className="pt-2 flex flex-col xl:flex-row gap-5 items-stretch">
              
              {/* Left Side Tab Items List (Width expanded so all 4 titles fit on 1 single line) */}
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

              {/* Right Side Floating White Detail Card */}
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

export default function WaterTreatmentPlantsPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-geist text-slate-900">
      <Navbar />

      {/* ── SECTION 1 — HERO (MATCHING OTHER SOLUTION PAGES DESIGN SYSTEM) ── */}
      <section className="relative w-full pt-32 sm:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-[#0D2244] via-[#0D427D] to-[#0A1A3B] text-white overflow-hidden font-geist">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/Images/home/yaha_filtration_plant.jpg"
            alt="Water Treatment Plants"
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
              Water Treatment Plants <span className="text-blue-300">(WTP)</span>
            </h1>

            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-8 font-normal">
              Engineered water treatment solutions designed to provide reliable, process-ready water tailored to your specific industrial, commercial, and utility requirements.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#F39A1E] hover:bg-[#e08b12] text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm tracking-wider uppercase"
              >
                Request WTP Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
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

      {/* ── SECTION 6 — WHY CHOOSE SOWITECH ENGINEERING (INTERACTIVE 2X2 PLUS CARDS) ── */}
      <WhyChooseInteractiveSection />

      <Footer />
    </div>
  );
}
