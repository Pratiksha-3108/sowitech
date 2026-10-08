'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Factory,
  Car,
  Server,
  Hospital,
  Hotel,
  GraduationCap,
  Building,
  Landmark,
  Building2,
  Droplets,
  Filter,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Paintbrush,
  Thermometer,
  ShieldCheck,
  Leaf,
  Settings,
  Wind,
  Layers,
  Coins,
} from 'lucide-react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import CallToAction from '../component/Hero/CallToAction';

export interface SolutionLink {
  label: string;
  href: string;
  icon?: React.ElementType;
}

export interface ScopeItem {
  text: string;
  icon: React.ElementType;
}

export interface HighlightItem {
  label: string;
  icon: React.ElementType;
}

export interface IndustryServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  fallbackImage: string;
  icon: React.ElementType;
  relevantSolutions: SolutionLink[];
  scopeItems: ScopeItem[];
  middleHighlights: HighlightItem[];
  bottomQuote: string;
}

const INDUSTRIES_SERVICES: IndustryServiceItem[] = [
  {
    id: "01",
    title: "Manufacturing",
    desc: "Manufacturing facilities require reliable water management across production, utility, and process cooling operations. Our engineering approach ensures efficient water treatment and reuse systems aligned with operational goals.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    icon: Factory,
    relevantSolutions: [
      { label: "WTP", href: "/solutions/wtp", icon: Droplets },
      { label: "TTP", href: "/solutions/ttp", icon: Filter },
      { label: "Water Recycling", href: "/solutions/water-recycling", icon: RefreshCw },
    ],
    scopeItems: [
      { text: "High-volume process water intake", icon: Droplets },
      { text: "Cooling tower & boiler feed treatment", icon: Thermometer },
      { text: "Closed-loop effluent recovery", icon: RefreshCw },
      { text: "Zero Liquid Discharge (ZLD) ready", icon: ShieldCheck },
    ],
    middleHighlights: [
      { label: "Optimized Water Use", icon: Settings },
      { label: "Process Reliability", icon: ShieldCheck },
      { label: "Sustainable Operations", icon: Leaf },
    ],
    bottomQuote: "Engineered to optimize industrial process water quality, improve operational efficiency, and support sustainable manufacturing.",
  },
  {
    id: "02",
    title: "Automotive",
    desc: "Automotive facilities require reliable water management across manufacturing and utility operations. Our engineering approach ensures efficient water treatment and reuse systems aligned with the facility's operational requirements.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop",
    icon: Car,
    relevantSolutions: [
      { label: "WTP", href: "/solutions/wtp", icon: Droplets },
      { label: "TTP", href: "/solutions/ttp", icon: Filter },
      { label: "Water Recycling", href: "/solutions/water-recycling", icon: RefreshCw },
    ],
    scopeItems: [
      { text: "Paint-shop & Electro-coating rinsing", icon: Paintbrush },
      { text: "Heavy machining coolant recovery", icon: Thermometer },
      { text: "Industrial effluent recycling", icon: RefreshCw },
      { text: "Resource & sludge minimization", icon: Droplets },
    ],
    middleHighlights: [
      { label: "Optimized Water Use", icon: Settings },
      { label: "Process Reliability", icon: ShieldCheck },
      { label: "Sustainable Operations", icon: Leaf },
    ],
    bottomQuote: "Engineered to reduce water consumption, improve efficiency, and support sustainable manufacturing.",
  },
  {
    id: "03",
    title: "Data Centres",
    desc: "Reliable utility infrastructure is critical for data-centre operations. Water management is particularly vital for cooling-related applications to ensure continuous uptime and energy-water efficiency.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    icon: Server,
    relevantSolutions: [
      { label: "TTP", href: "/solutions/ttp", icon: Filter },
      { label: "Water Recycling", href: "/solutions/water-recycling", icon: RefreshCw },
      { label: "WTP", href: "/solutions/wtp", icon: Droplets },
    ],
    scopeItems: [
      { text: "HVAC & chilled water loop purging", icon: Wind },
      { text: "Evaporative cooling water conditioning", icon: Thermometer },
      { text: "Non-potable water reuse systems", icon: RefreshCw },
      { text: "Uninterrupted uptime reliability", icon: ShieldCheck },
    ],
    middleHighlights: [
      { label: "Uptime Assurance", icon: ShieldCheck },
      { label: "Cooling Efficiency", icon: Wind },
      { label: "Zero Downtime", icon: CheckCircle2 },
    ],
    bottomQuote: "Tailored for critical server cooling infrastructure to ensure continuous uptime and optimized resource management.",
  },
  {
    id: "04",
    title: "Hospitals",
    desc: "Hospitals require responsible water management across multiple facility operations and utility applications. Our solutions help healthcare facilities explore treatment and non-potable water-reuse opportunities safely.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    icon: Hospital,
    relevantSolutions: [
      { label: "WTP", href: "/solutions/wtp", icon: Droplets },
      { label: "TTP", href: "/solutions/ttp", icon: Filter },
      { label: "Water Recycling", href: "/solutions/water-recycling", icon: RefreshCw },
    ],
    scopeItems: [
      { text: "High-purity process water conditioning", icon: Sparkles },
      { text: "HVAC & central laundry water supply", icon: Droplets },
      { text: "Disinfected non-potable recycling", icon: ShieldCheck },
      { text: "Strict compliance & bio-safety", icon: CheckCircle2 },
    ],
    middleHighlights: [
      { label: "Bio-Safety Clean", icon: ShieldCheck },
      { label: "Purity Assurance", icon: Sparkles },
      { label: "Strict Compliance", icon: CheckCircle2 },
    ],
    bottomQuote: "Designed to meet rigorous healthcare sanitation and safety benchmarks while optimizing non-potable utility water.",
  },
  {
    id: "05",
    title: "Hotels",
    desc: "Hotels consume water across guest facilities, utilities, landscaping, and laundry operations. Water recycling helps hospitality brands lower reliance on freshwater for non-potable applications.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop",
    icon: Hotel,
    relevantSolutions: [
      { label: "Water Recycling", href: "/solutions/water-recycling", icon: RefreshCw },
      { label: "TTP", href: "/solutions/ttp", icon: Filter },
      { label: "WTP", href: "/solutions/wtp", icon: Droplets },
    ],
    scopeItems: [
      { text: "Dual-piping toilet flushing supply", icon: Layers },
      { text: "Landscape & golf turf irrigation", icon: Leaf },
      { text: "Cooling tower makeup water recovery", icon: RefreshCw },
      { text: "Commercial freshwater cost reduction", icon: Coins },
    ],
    middleHighlights: [
      { label: "Guest Comfort", icon: Sparkles },
      { label: "Freshwater Savings", icon: Droplets },
      { label: "Eco Hospitality", icon: Leaf },
    ],
    bottomQuote: "Enabling premium hospitality properties to lower operational utility costs and minimize environmental footprint.",
  },
  {
    id: "06",
    title: "Educational Institutions",
    desc: "Schools, colleges, and university campuses have diverse water requirements across dorms, labs, and sports grounds. Treatment and recycling systems can be engineered around campus infrastructure.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    icon: GraduationCap,
    relevantSolutions: [
      { label: "WTP", href: "/solutions/wtp", icon: Droplets },
      { label: "Water Recycling", href: "/solutions/water-recycling", icon: RefreshCw },
      { label: "TTP", href: "/solutions/ttp", icon: Filter },
    ],
    scopeItems: [
      { text: "Campus-wide STP effluent purification", icon: Building },
      { text: "Green belt & playground irrigation", icon: Leaf },
      { text: "High-efficiency media filtration", icon: Filter },
      { text: "Low operational maintenance", icon: Settings },
    ],
    middleHighlights: [
      { label: "Green Campus", icon: Leaf },
      { label: "Low Maintenance", icon: Settings },
      { label: "Water Security", icon: ShieldCheck },
    ],
    bottomQuote: "Fostering sustainable campus environments with robust, easy-to-maintain water infrastructure.",
  },
  {
    id: "07",
    title: "Residential Societies",
    desc: "Residential communities generate significant wastewater while requiring continuous supply for flushing and landscaping. Treated wastewater can be further recycled for non-potable requirements.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop",
    icon: Building,
    relevantSolutions: [
      { label: "TTP", href: "/solutions/ttp", icon: Filter },
      { label: "Water Recycling", href: "/solutions/water-recycling", icon: RefreshCw },
      { label: "WTP", href: "/solutions/wtp", icon: Droplets },
    ],
    scopeItems: [
      { text: "Odor-free high clarity water output", icon: Sparkles },
      { text: "Sub-surface flush water recycling", icon: RefreshCw },
      { text: "STP-to-TTP direct retrofitting", icon: Layers },
      { text: "Community water security assurance", icon: ShieldCheck },
    ],
    middleHighlights: [
      { label: "Odor-Free Output", icon: Sparkles },
      { label: "Tanker Cost Savings", icon: Coins },
      { label: "24/7 Security", icon: CheckCircle2 },
    ],
    bottomQuote: "Helping residential townships reduce water tanker dependence and maintain lush community spaces sustainably.",
  },
  {
    id: "08",
    title: "Municipal Corporations",
    desc: "Municipal water and wastewater infrastructure requires dependable treatment and resource-management solutions. Sowitech supports water treatment and reuse requirements at city scale.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    icon: Landmark,
    relevantSolutions: [
      { label: "WTP", href: "/solutions/wtp", icon: Droplets },
      { label: "TTP", href: "/solutions/ttp", icon: Filter },
      { label: "Water Recycling", href: "/solutions/water-recycling", icon: RefreshCw },
    ],
    scopeItems: [
      { text: "Large-scale raw water treatment", icon: Droplets },
      { text: "Civic wastewater resource management", icon: Building2 },
      { text: "Advanced filtration & disinfection", icon: Filter },
      { text: "Scalable project scope delivery", icon: Layers },
    ],
    middleHighlights: [
      { label: "High Capacity", icon: Droplets },
      { label: "Civic Security", icon: Landmark },
      { label: "Scalable Scope", icon: Layers },
    ],
    bottomQuote: "Empowering municipal authorities with high-capacity engineering to serve expanding urban populations efficiently.",
  },
  {
    id: "09",
    title: "MIDC & Industrial Parks",
    desc: "Industrial estates and MIDC clusters have substantial water requirements across multiple units. Water treatment, recycling, and reuse help industrial parks achieve zero liquid discharge targets.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    icon: Building2,
    relevantSolutions: [
      { label: "WTP", href: "/solutions/wtp", icon: Droplets },
      { label: "TTP", href: "/solutions/ttp", icon: Filter },
      { label: "Water Recycling", href: "/solutions/water-recycling", icon: RefreshCw },
    ],
    scopeItems: [
      { text: "Centralized cluster effluent processing", icon: Building2 },
      { text: "Multi-facility utility supply lines", icon: Layers },
      { text: "Sustainable industrial estate footprint", icon: Leaf },
      { text: "High BOD/COD removal efficiency", icon: ShieldCheck },
    ],
    middleHighlights: [
      { label: "Central Cluster", icon: Building2 },
      { label: "High Efficiency", icon: Settings },
      { label: "Eco Standard", icon: Leaf },
    ],
    bottomQuote: "Optimized for multi-tenant industrial zones to achieve regulatory compliance and collective water resilience.",
  },
];

export default function IndustriesClient() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 9 slides of 100vw each => total track width 900vw.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-88.888%"]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans text-zinc-900 antialiased">
      <Navbar />

      {/* ── 1. PAGE HERO HEADER ── */}
      <section className="relative w-full min-h-[65vh] sm:min-h-[72vh] lg:min-h-[80vh] flex items-center justify-center pt-36 pb-24 sm:pt-40 sm:pb-28 px-4 sm:px-6 overflow-hidden text-center text-white">
        {/* Background Image */}
        <Image
          src="/assets/architectural_hero.jpg"
          alt="Water Treatment Solutions for Industries"
          fill
          priority
          className="object-cover object-center"
        />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A3B]/80 via-[#0A1A3B]/60 to-[#0A1A3B]/90 backdrop-blur-[1px]" />

        {/* Hero Content: Single Sentence */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight drop-shadow-xl leading-tight text-white">
            Water Solutions Built for Every Sector
          </h1>
        </div>
      </section>

      {/* ── 2. STICKY PINNED HORIZONTAL STORYTELLING SECTION (900vh) ── */}
      <section ref={targetRef} className="relative h-[900vh] w-full bg-[#f8f9fa]">
        {/* Sticky Pinned Container starting safely below fixed Navbar height */}
        <div className="sticky top-[76px] sm:top-[80px] h-[calc(100vh-76px)] sm:h-[calc(100vh-80px)] w-screen overflow-hidden z-20 flex flex-col justify-center">
          <motion.div style={{ x }} className="flex w-[900vw] h-full">
            {INDUSTRIES_SERVICES.map((service) => {
              return (
                <div
                  key={service.id}
                  className="w-screen min-w-[100vw] h-full shrink-0 bg-[#f8f9fa] pt-2 sm:pt-3 pb-3 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden border-b border-zinc-200/60 flex flex-col justify-between"
                >
                  <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full py-1 gap-2">
                    
                    {/* Header: Title styled matching user image */}
                    <div className="text-center flex flex-col items-center shrink-0 pt-0.5">
                      <span className="text-[#0D3B7A] text-[11px] font-bold tracking-[0.18em] uppercase mb-0.5">
                        INDUSTRIES WE SERVE
                      </span>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B2545] tracking-tight">
                        Water Solutions for Every Industry
                      </h2>
                    </div>

                    {/* Main 3-Column Grid Stage */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center my-auto">
                      
                      {/* Left Column (4 cols): Number index, Title, Description, Divider, Relevant Solutions */}
                      <div className="lg:col-span-4 flex flex-col justify-between bg-transparent p-1">
                        <div>
                          {/* Number index line */}
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-2xl sm:text-3xl font-black text-[#0D3B7A]">{service.id}</span>
                            <div className="h-[2px] w-10 bg-[#0D3B7A]/30 rounded-full" />
                          </div>

                          {/* Industry Title */}
                          <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight mb-2">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-md">
                            {service.desc}
                          </p>

                          {/* Droplet divider */}
                          <div className="flex items-center gap-2 my-2.5">
                            <Droplets className="w-3 h-3 text-[#0D3B7A]/60" />
                            <div className="h-[1px] flex-1 bg-zinc-200" />
                          </div>
                        </div>

                        {/* Relevant Engineering Solutions */}
                        <div>
                          <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#0D3B7A] mb-2 block">
                            RELEVANT ENGINEERING SOLUTIONS
                          </span>
                          <div className="space-y-1.5">
                            {service.relevantSolutions.map((sol, idx) => {
                              const SolIcon = sol.icon || Droplets;
                              return (
                                <Link
                                  key={idx}
                                  href={sol.href}
                                  className="group flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border border-zinc-200/90 shadow-2xs hover:shadow-md hover:border-[#0D3B7A]/30 transition-all duration-300"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-full bg-[#EBF3FA] flex items-center justify-center text-[#0D3B7A] shrink-0 group-hover:bg-[#0D3B7A] group-hover:text-white transition-colors duration-300">
                                      <SolIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-xs font-bold text-zinc-800 group-hover:text-[#0D3B7A] transition-colors">
                                      {sol.label}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#0D3B7A] group-hover:translate-x-1 transition-all duration-300" />
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Middle Column (4 cols): Rounded Frame Photo */}
                      <div className="lg:col-span-4 relative w-full max-w-[340px] mx-auto h-[240px] sm:h-[280px] lg:h-[320px] rounded-[24px] overflow-hidden shadow-xl border border-zinc-200/80 group my-auto">
                        <Image
                          src={
                            imgErrors[service.id]
                              ? service.fallbackImage
                              : service.image
                          }
                          alt={service.title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                          onError={() =>
                            setImgErrors((prev) => ({ ...prev, [service.id]: true }))
                          }
                        />
                      </div>

                      {/* Right Column (4 cols): Key Operational Scope List */}
                      <div className="lg:col-span-4 flex flex-col justify-center bg-transparent p-1">
                        <div>
                          <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#0D3B7A] mb-2.5 block">
                            KEY OPERATIONAL SCOPE
                          </span>
                          <div className="space-y-2">
                            {service.scopeItems.map((scope, idx) => {
                              const ItemIcon = scope.icon;
                              return (
                                <div key={idx} className="flex items-center gap-3 pb-2 border-b border-zinc-200/70 last:border-0 last:pb-0">
                                  <div className="w-8 h-8 rounded-full bg-[#EBF3FA] flex items-center justify-center text-[#0D3B7A] shrink-0 shadow-2xs">
                                    <ItemIcon className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="text-xs font-bold text-zinc-800 leading-snug">
                                    {scope.text}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 3. CALL TO ACTION ── */}
      <CallToAction />

      {/* ── 4. FOOTER ── */}
      <Footer />
    </div>
  );
}

