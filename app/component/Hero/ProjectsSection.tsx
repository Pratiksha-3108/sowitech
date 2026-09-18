'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const projectsData = [
  {
    id: 'ntpc-dadri-tertiary',
    tag: 'Tertiary Treatment',
    location: 'NTPC Dadri, Nagpur',
    title: '4 MLD AFM Tertiary Treatment Plant',
    capacity: '4 MLD Capacity',
    highlightLabel: 'Turbidity Achieved',
    highlightValue: '3.59 NTU',
    guarantee: 'Guaranteed < 5 NTU',
    image: '/Images/home/yaha_filtration_plant.jpg',
    detailsLink: '/solutions/ttp',
  },
  {
    id: 'sail-visl-drinking',
    tag: 'Drinking Water',
    location: 'SAIL – VISL Plant, Bhadravathi',
    title: '2 MGD Drinking Water System',
    capacity: '2 MGD Discharge',
    highlightLabel: 'Turbidity Achieved',
    highlightValue: '0.98 NTU',
    guarantee: 'High Clarity Standards',
    image: '/assets/architectural_hero.jpg',
    detailsLink: '/solutions/wtp',
  },
  {
    id: 'bhalki-municipal-wtp',
    tag: 'Municipal WTP',
    location: 'Bhalki, Karnataka',
    title: '20 MLD Self-Cleaning Water Plant',
    capacity: '20 MLD Self-Cleaning',
    highlightLabel: 'Turbidity Output',
    highlightValue: '< 0.5 NTU',
    guarantee: '23 Villages Served',
    image: '/Images/home/untraflitration-plant.png',
    detailsLink: '/solutions/wtp',
  },
  {
    id: 'al-jazeera-export',
    tag: 'Export Project',
    location: 'Al Jazeera Steel, Oman',
    title: 'Steel Plant Cooling Water Recirculation',
    capacity: 'Recirculation System',
    highlightLabel: 'Outlet TSS',
    highlightValue: '< 10 ppm',
    guarantee: 'Inlet TSS: 130 ppm',
    image: '/Images/home/hybrid_zen_plant_plain.jpg',
    detailsLink: '/solutions/water-recycling',
  },
  {
    id: 'karnataka-drinking-water',
    tag: 'Drinking Water',
    location: 'Karnataka State',
    title: 'Municipal Drinking Water Installation',
    capacity: '20 MLD Design Discharge',
    highlightLabel: 'Turbidity Output',
    highlightValue: '< 1 NTU',
    guarantee: 'State Municipal Supply',
    image: '/assets/mission.jpg',
    detailsLink: '/solutions/wtp',
  },
  {
    id: 'india-municipal-membrane',
    tag: 'Municipal WTP',
    location: 'India',
    title: '20 MLD Membrane-Based Treatment',
    capacity: 'Zen Media + Triton BR',
    highlightLabel: 'Filtration Tech',
    highlightValue: 'Microza MF',
    guarantee: 'Advanced Membrane WTP',
    image: '/Images/home/hybrid_zen_technology.jpg',
    detailsLink: '/solutions/wtp',
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full bg-[#F2F8FF] py-16 md:py-24 font-geist relative overflow-hidden border-t border-[#D0E2F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Top Header Row with Short Title & View All Link */}
        <div className="flex flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-[#D0E2F7]">
          <div className="flex items-center gap-3">
            <span className="h-1 w-8 bg-[#0D427D] rounded-full flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D427D] tracking-tight">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[#0D427D] hover:text-[#0A3463] font-bold text-sm sm:text-base group whitespace-nowrap transition-colors duration-200"
          >
            <span>See all Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* 3-Column Grid matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-row"
            >
              {/* Left Side Image (0 Padding, No Zoom) */}
              <div className="relative w-36 sm:w-40 md:w-44 flex-shrink-0 bg-slate-100 min-h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Right Side Content & Metrics */}
              <div className="flex flex-col justify-between flex-grow min-w-0 p-3.5 sm:p-4">
                <div>
                  {/* Category Tag & Location */}
                  <div className="flex items-center gap-1.5 text-xs font-bold mb-1.5 truncate">
                    <span className="text-[#0D427D] font-bold text-[11px]">{project.tag}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-medium truncate text-[11px]">{project.location}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-[#0D427D] font-bold text-sm sm:text-base leading-snug line-clamp-2 mb-2.5">
                    {project.title}
                  </h3>

                  {/* Highlights / Performance Metric */}
                  <div className="space-y-1 mb-2.5 text-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-medium text-slate-500">{project.highlightLabel}:</span>
                      <span className="font-bold text-[#0D427D]">{project.highlightValue}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D427D] flex-shrink-0" />
                      <span className="truncate">{project.guarantee}</span>
                    </div>
                  </div>
                </div>

                {/* Action Area: Initial text link morphs into slide-up & zoom button on hover */}
                <div className="pt-2 mt-auto border-t border-slate-100 relative overflow-hidden h-10 flex items-center">
                  <Link href={project.detailsLink} className="w-full relative h-full flex items-center">
                    {/* Initial State: Text Link */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D427D] transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>

                    {/* Hover State: Solid Button Sliding Up & Zooming */}
                    <span className="absolute inset-0 inline-flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-[#0D427D] hover:bg-[#0A3463] text-white text-xs font-bold shadow-md transition-all duration-300 ease-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
