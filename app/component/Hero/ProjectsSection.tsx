'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ProjectCardData {
  id: string;
  title: string;
  client: string;
  location: string;
  category: string;
  spec: string;
  specSub?: string;
  image: string;
  badge: string;
  link: string;
}

const FEATURED_PROJECTS: ProjectCardData[] = [
  {
    id: 'ntpc-dadri-tertiary',
    title: '4 MLD AFM Tertiary Treatment Plant',
    client: 'NTPC Limited',
    location: 'Dadri, Nagpur, India',
    category: 'Tertiary Treatment',
    spec: '4 MLD Capacity',
    specSub: 'Turbidity <3.59 NTU',
    image: '/Images/home/yaha_filtration_plant.jpg',
    badge: 'Tertiary',
    link: '/projects/ntpc-dadri-tertiary',
  },
  {
    id: 'sail-visl-drinking',
    title: '2 MGD Drinking Water Treatment System',
    client: 'SAIL – VISL Plant',
    location: 'Bhadravathi, Karnataka',
    category: 'Drinking Water WTP',
    spec: '2 MGD Discharge',
    specSub: 'Turbidity 0.98 NTU',
    image: '/assets/architectural_hero.jpg',
    badge: 'Drinking WTP',
    link: '/projects/visl-bhadravathi-drinking-water',
  },
  {
    id: 'bhalki-municipal-wtp',
    title: '20 MLD Self-Cleaning Water Treatment',
    client: 'Municipal WTP',
    location: 'Bhalki, Karnataka',
    category: 'Municipal WTP',
    spec: '20 MLD Capacity',
    specSub: '23 Villages Served',
    image: '/Images/home/untraflitration-plant.png',
    badge: 'Municipal',
    link: '/projects/bhalki-municipal-wtp',
  },
  {
    id: 'al-jazeera-export',
    title: 'Steel Plant Cooling Water Recirculation',
    client: 'Al Jazeera Steel',
    location: 'Sohar, Oman',
    category: 'Export Project',
    spec: 'High TSS Removal',
    specSub: 'Outlet TSS <10 ppm',
    image: '/Images/home/hybrid_zen_plant_plain.jpg',
    badge: 'Export',
    link: '/projects/al-jazeera-export',
  },
  {
    id: 'karnataka-drinking-wtp',
    title: 'Municipal Drinking Water Installation',
    client: 'State Municipal Board',
    location: 'Karnataka, India',
    category: 'Drinking Water WTP',
    spec: '20 MLD Discharge',
    specSub: 'Turbidity <1 NTU',
    image: '/Images/home/hybrid_zen_technology.jpg',
    badge: 'Drinking WTP',
    link: '/projects/karnataka-drinking-wtp',
  },
  {
    id: 'india-municipal-membrane',
    title: '20 MLD Microza Membrane WTP',
    client: 'Water Supply Board',
    location: 'India',
    category: 'Membrane WTP',
    spec: '20 MLD Design',
    specSub: 'Triton BR + Microza',
    image: '/Images/home/yaha_filtration_plant.jpg',
    badge: 'Membrane',
    link: '/projects/india-municipal-membrane',
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full bg-slate-50 pt-[90px] pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 font-sans border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="space-y-2 max-w-2xl">
            {/* Category Tagline / Eyebrow */}
            <div className="mb-1">
              <span className="text-xs font-bold tracking-[0.2em] text-[#0D427D] uppercase font-geist">
                TURNKEY SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-geist text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#0A1A3B] tracking-tight leading-tight">
              Top Featured <span className="text-[#0D427D]">Projects</span>
            </h2>

            {/* Subtitle Description */}
            <p className="font-geist text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
              Engineered water treatment, tertiary recycling, and municipal infrastructure projects executed across industrial and municipal sectors.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#0D427D] text-[#0D427D] bg-white font-semibold text-xs hover:bg-[#0D427D] hover:text-white transition-colors duration-300 shrink-0 self-start md:self-end"
          >
            <span>See All Projects</span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ================= 6 CARD GRID (3 COLUMNS x 2 ROWS) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group bg-white rounded-2xl border border-slate-200/90 p-3.5 sm:p-4 shadow-xs hover:shadow-xl hover:border-[#0D427D]/40 transition-all duration-300 flex flex-row items-stretch gap-4"
            >
              {/* Left Side Square Image Container */}
              <div className="relative w-5/12 sm:w-1/2 aspect-square rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 40vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Right Side Info Area */}
              <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
                <div>
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#0D427D] transition-colors">
                    {project.title}
                  </h3>

                  {/* Client & Location */}
                  <p className="text-xs text-slate-500 font-medium mt-1 truncate">
                    {project.client}
                  </p>
                  <p className="text-xs text-slate-400 font-normal truncate">
                    {project.location}
                  </p>

                  {/* Category Tag */}
                  <p className="text-xs text-slate-600 font-semibold mt-2">
                    {project.category}
                  </p>

                  {/* Spec / Capacity Highlight */}
                  <p className="text-xs sm:text-sm font-extrabold text-[#0D427D] mt-0.5">
                    {project.spec}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2 flex items-center gap-1 text-xs font-bold text-slate-600 group-hover:text-[#0D427D] transition-colors">
                  <span>Get Project Details</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
