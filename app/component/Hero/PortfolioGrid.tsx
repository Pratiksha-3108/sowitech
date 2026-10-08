'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, Sparkles } from 'lucide-react';

export interface PortfolioProjectItem {
  id: string;
  category: string; // e.g. "Tertiary Treatment"
  locationTag: string; // e.g. "Tertiary Treatment | NTPC Dadri, Nagpur"
  title: string; // e.g. "4 MLD AFM Tertiary Treatment Plant"
  spec: string; // e.g. "Turbidity achieved: 3.59 NTU (guaranteed <5 NTU)"
  image: string;
  link: string;
  categoryGroup: 'all' | 'tertiary' | 'drinking' | 'municipal' | 'export' | 'recycling';
}

const PROJECTS_DATA: PortfolioProjectItem[] = [
  {
    id: 'card-1',
    category: 'Tertiary Treatment',
    locationTag: 'Tertiary Treatment | NTPC Dadri, Nagpur',
    title: '4 MLD AFM Tertiary Treatment Plant',
    spec: 'Turbidity achieved: 3.59 NTU (guaranteed <5 NTU)',
    image: '/Images/home/yaha_filtration_plant.jpg',
    link: '/projects/ntpc-dadri-tertiary',
    categoryGroup: 'tertiary',
  },
  {
    id: 'card-2',
    category: 'Drinking Water',
    locationTag: 'Drinking Water | SAIL – VISL Plant, Bhadravathi',
    title: '2 MGD Drinking Water Treatment System',
    spec: 'Turbidity achieved: 0.98 NTU',
    image: '/assets/architectural_hero.jpg',
    link: '/solutions/wtp',
    categoryGroup: 'drinking',
  },
  {
    id: 'card-3',
    category: 'Municipal WTP',
    locationTag: 'Municipal WTP | Bhalki, Karnataka',
    title: '20 MLD Self-Cleaning Water Treatment Plant',
    spec: 'Turbidity: <0.5 NTU | 23 villages served',
    image: '/Images/home/untraflitration-plant.png',
    link: '/projects/bhalki-municipal-wtp',
    categoryGroup: 'municipal',
  },
  {
    id: 'card-4',
    category: 'Export Project',
    locationTag: 'Export Project | Al Jazeera Steel, Oman',
    title: 'Steel Plant Cooling Water Recirculation',
    spec: 'Outlet TSS: <10 ppm (from inlet TSS of 130)',
    image: '/Images/home/hybrid_zen_plant_plain.jpg',
    link: '/projects/al-jazeera-export',
    categoryGroup: 'export',
  },
  {
    id: 'card-5',
    category: 'Drinking Water',
    locationTag: 'Drinking Water | Karnataka',
    title: 'Municipal Drinking Water Installation',
    spec: 'Design discharge: 20 MLD | Turbidity <1 NTU',
    image: '/Images/home/hybrid_zen_technology.jpg',
    link: '/projects/karnataka-drinking-wtp',
    categoryGroup: 'drinking',
  },
  {
    id: 'card-6',
    category: 'Municipal WTP',
    locationTag: 'Municipal WTP | India',
    title: '20 MLD Membrane-Based Water Treatment',
    spec: 'Zen Media + Triton BR + Microza MF',
    image: '/Images/home/yaha_filtration_plant.jpg',
    link: '/projects/india-municipal-membrane',
    categoryGroup: 'municipal',
  },
  {
    id: 'card-7',
    category: 'Recycling Plant',
    locationTag: 'Recycling Plant | NTPC Dadri',
    title: '4 MLD Recycling Treatment Plant',
    spec: 'SCADA-monitored real-time water quality',
    image: '/Images/home/untraflitration-plant.png',
    link: '/projects/ntpc-dadri-tertiary',
    categoryGroup: 'recycling',
  },
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All' },
  { id: 'tertiary', label: 'Tertiary Treatment' },
  { id: 'drinking', label: 'Drinking Water' },
  { id: 'municipal', label: 'Municipal WTP' },
  { id: 'export', label: 'Export Projects' },
  { id: 'recycling', label: 'Recycling Plants' },
];

export default function PortfolioGrid() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProjects =
    activeTab === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((item) => item.categoryGroup === activeTab);

  return (
    <section className="w-full bg-white py-16 sm:py-20 px-6 sm:px-8 lg:px-12 font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* ================= FILTER TABS BAR ================= */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border ${isActive
                    ? 'bg-[#0D427D] text-white border-[#0D427D] shadow-lg shadow-[#0D427D]/25 scale-105'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ================= 3-COLUMN CARD GRID ================= */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
              >
                <Link
                  href={project.link}
                  className="group relative block w-full h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 cursor-pointer bg-slate-950"
                >
                  {/* Full Height Background Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={idx < 3}
                  />

                  {/* Subtle Light Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300" />

                  {/* Transparent Glassmorphism Bottom Box */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/15 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/30 transition-all duration-300 group-hover:bg-white/90 group-hover:border-white shadow-2xl">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-3 flex-1 pr-2">
                        {/* Pill Badge Tag */}
                        <div>
                          <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-white/40 bg-[#0D427D]/40 backdrop-blur-md text-white group-hover:bg-[#0D427D] text-xs sm:text-[13px] font-semibold tracking-wide shadow-sm transition-colors">
                            {project.category}
                          </span>
                        </div>

                        {/* Title (Turns #0D427D on hover) */}
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug line-clamp-2 drop-shadow-sm group-hover:text-[#0D427D] group-hover:drop-shadow-none transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Circle Arrow Button (Pops up on hover with #0D427D accent) */}
                      <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 text-white flex items-center justify-center shrink-0 shadow-lg opacity-0 scale-75 translate-y-3 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:bg-[#0D427D] group-hover:border-[#0D427D] transition-all duration-300 ease-out mt-1">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
