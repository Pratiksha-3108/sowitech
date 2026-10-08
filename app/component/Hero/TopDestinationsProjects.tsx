'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Building2, MapPin, X, Send, CheckCircle2, Home } from 'lucide-react';

export interface ProjectCardItem {
  id: string;
  title: string;
  developer: string;
  location: string;
  propertyType: string;
  price: string;
  priceSub?: string;
  image: string;
  tag?: string;
  badge?: string;
  ctaText?: string;
  link?: string;
  category: 'real-estate' | 'industrial-plants';
}

const DEFAULT_PROJECTS: ProjectCardItem[] = [
  {
    id: 'codename-joy-estate',
    title: 'Codename Joy Estate',
    developer: 'Rising Spaces',
    location: 'Dhamane, Pune',
    propertyType: 'Residential NA Plots',
    price: '19 Lacs*',
    priceSub: 'onwards',
    image: '/Images/home/yaha_filtration_plant.jpg',
    badge: 'NA Plots',
    category: 'real-estate',
    ctaText: 'Get Pricing Details',
  },
  {
    id: 'red-stone',
    title: 'Red Stone',
    developer: 'Rising Spaces',
    location: 'Takve, Kanhe Phata, Pune',
    propertyType: 'Residential NA Plots',
    price: '1,499/sq.ft.',
    priceSub: 'onwards',
    image: '/assets/architectural_hero.jpg',
    badge: 'NA Plots',
    category: 'real-estate',
    ctaText: 'Get Pricing Details',
  },
  {
    id: 'eco-town',
    title: 'Eco Town',
    developer: 'Rising Spaces',
    location: 'Ghotawade, Pune',
    propertyType: 'Residential NA Plots',
    price: '56.34 Lacs*',
    priceSub: 'onwards',
    image: '/Images/home/untraflitration-plant.png',
    badge: 'NA Plots',
    category: 'real-estate',
    ctaText: 'Get Pricing Details',
  },
  {
    id: 'codename-pratham',
    title: 'Codename Pratham',
    developer: 'Rising Spaces',
    location: 'Varale, Pune',
    propertyType: 'Residential Property',
    price: '42 Lacs*',
    priceSub: 'onwards',
    image: '/Images/home/hybrid_zen_plant_plain.jpg',
    badge: '2 BHK',
    category: 'real-estate',
    ctaText: 'Get Pricing Details',
  },
  {
    id: 'codename-prakriti',
    title: 'Codename Prakriti',
    developer: 'Rising Spaces',
    location: 'Kanhe Phata, Pune',
    propertyType: 'Residential NA Plots',
    price: '19.50 Lacs*',
    priceSub: 'onwards',
    image: '/Images/home/hybrid_zen_technology.jpg',
    badge: 'NA Plots',
    category: 'real-estate',
    ctaText: 'Get Pricing Details',
  },
  {
    id: 'codename-ownedge',
    title: 'Codename OWNEDGE',
    developer: 'Rising Spaces',
    location: 'Somatane, Pune',
    propertyType: 'Commercial NA',
    price: '₹60 Lacs*',
    priceSub: 'onwards',
    image: '/Images/home/yaha_filtration_plant.jpg',
    badge: 'Commercial',
    category: 'real-estate',
    ctaText: 'Get Pricing Details',
  },
];

const INDUSTRIAL_PROJECTS: ProjectCardItem[] = [
  {
    id: 'ntpc-dadri-tertiary',
    title: 'NTPC Dadri 4 MLD Plant',
    developer: 'Sowitech / Yaha Water',
    location: 'Nagpur / Dadri, UP',
    propertyType: 'Activated Filter Media (AFM)',
    price: '4 MLD',
    priceSub: 'Capacity',
    image: '/Images/home/yaha_filtration_plant.jpg',
    badge: 'Turnkey TTP',
    category: 'industrial-plants',
    ctaText: 'View Plant Specs',
    link: '/projects/ntpc-dadri-tertiary',
  },
  {
    id: 'sail-visl-drinking',
    title: 'SAIL VISL 2 MGD Water System',
    developer: 'Sowitech Engineering',
    location: 'Bhadravati, Karnataka',
    propertyType: 'Rapid Gravity Filtration WTP',
    price: '2 MGD',
    priceSub: 'Discharge',
    image: '/assets/architectural_hero.jpg',
    badge: 'Municipal WTP',
    category: 'industrial-plants',
    ctaText: 'View Plant Specs',
    link: '/projects/visl-bhadravathi-drinking-water',
  },
  {
    id: 'bhalki-municipal-wtp',
    title: 'Bhalki 20 MLD Self-Cleaning WTP',
    developer: 'Sowitech / KUWSDB',
    location: 'Bhalki, Karnataka',
    propertyType: 'Self-Cleaning WTP',
    price: '20 MLD',
    priceSub: 'Capacity',
    image: '/Images/home/untraflitration-plant.png',
    badge: 'Self-Cleaning',
    category: 'industrial-plants',
    ctaText: 'View Plant Specs',
    link: '/projects/bhalki-municipal-wtp',
  },
  {
    id: 'al-jazeera-export',
    title: 'Al Jazeera Steel Recirculation',
    developer: 'Sowitech Engineering',
    location: 'Sohar, Oman',
    propertyType: 'Zero Effluent Discharge',
    price: 'High Recovery',
    priceSub: 'System',
    image: '/Images/home/hybrid_zen_plant_plain.jpg',
    badge: 'Steel Recirculation',
    category: 'industrial-plants',
    ctaText: 'View Plant Specs',
    link: '/projects/al-jazeera-export',
  },
  {
    id: 'india-municipal-membrane',
    title: 'India 20 MLD Microza WTP',
    developer: 'Sowitech Engineering',
    location: 'Maharashtra, India',
    propertyType: 'Microza MF Membrane',
    price: '20 MLD',
    priceSub: 'Design',
    image: '/Images/home/hybrid_zen_technology.jpg',
    badge: 'Microza MF',
    category: 'industrial-plants',
    ctaText: 'View Plant Specs',
    link: '/projects/india-municipal-membrane',
  },
  {
    id: 'stp-upgradation-pune',
    title: 'STP Bio-Filter Upgrade',
    developer: 'Sowitech Engineering',
    location: 'Pune Industrial Belt',
    propertyType: 'STP Bio-Media Retrofit',
    price: '3 MLD',
    priceSub: 'Upgrade',
    image: '/Images/home/yaha_filtration_plant.jpg',
    badge: 'STP Retrofit',
    category: 'industrial-plants',
    ctaText: 'View Plant Specs',
    link: '/solutions/stp-upgradation',
  },
];

export default function TopDestinationsProjects() {
  const [activeTab, setActiveTab] = useState<'real-estate' | 'industrial-plants'>('real-estate');
  const [selectedProject, setSelectedProject] = useState<ProjectCardItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const activeProjects = activeTab === 'real-estate' ? DEFAULT_PROJECTS : INDUSTRIAL_PROJECTS;

  const handleOpenPricingModal = (project: ProjectCardItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setFormSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '' });
    }, 2500);
  };

  return (
    <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER BAR ================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Left Title + Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="relative inline-block pb-1">
                Top Investment Destinations
                <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-teal-500 rounded-full" />
              </span>
            </h2>

            {/* Red Pill Badge Tag like NA Plots in the image */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-500/80 text-rose-600 text-xs font-bold bg-rose-50/50 shadow-sm">
              <Home className="w-3.5 h-3.5 text-rose-500" />
              <span>{activeTab === 'real-estate' ? 'NA Plots' : 'Water Plants'}</span>
            </span>
          </div>

          {/* Right Action: Category Selector & See All Link */}
          <div className="flex items-center justify-between md:justify-end gap-4">
            {/* Filter Toggle Tabs */}
            <div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setActiveTab('real-estate')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'real-estate'
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                NA Plots / Real Estate
              </button>
              <button
                onClick={() => setActiveTab('industrial-plants')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'industrial-plants'
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Industrial Water Projects
              </button>
            </div>

            {/* See All Link */}
            <Link
              href={activeTab === 'real-estate' ? '/projects' : '/solutions'}
              className="inline-flex items-center gap-1 text-sm font-bold text-rose-600 hover:text-rose-700 transition-colors shrink-0 group"
            >
              <span>See all Projects</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ================= 6 CARD GRID (3 COLUMNS x 2 ROWS) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <AnimatePresence mode="wait">
            {activeProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative flex flex-row w-full bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300 min-h-[180px]"
              >
                {/* ---------- LEFT HALF: IMAGE (45% Width) ---------- */}
                <div className="relative w-[46%] shrink-0 overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 46vw, (max-width: 1200px) 25vw, 20vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* ---------- RIGHT HALF: DETAILS (54% Width) ---------- */}
                <div className="w-[54%] p-3.5 sm:p-4 flex flex-col justify-between text-slate-800">
                  <div className="space-y-1">
                    {/* Project Title */}
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-1 group-hover:text-rose-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Developer / Client */}
                    <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="line-clamp-1">{project.developer}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="line-clamp-1">{project.location}</span>
                    </div>

                    {/* Property / Spec Type */}
                    <p className="text-xs text-slate-600 pt-1 font-medium line-clamp-1">
                      {project.propertyType}
                    </p>

                    {/* Price / Highlight Capacity */}
                    <div className="pt-0.5">
                      <div className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight flex items-baseline gap-1">
                        <span>{project.price}</span>
                        {project.priceSub && (
                          <span className="text-[11px] font-normal text-slate-500">
                            {project.priceSub}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA Action Link */}
                  <div className="pt-3 border-t border-slate-100 mt-2">
                    {project.link ? (
                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-rose-600 transition-colors"
                      >
                        <span>{project.ctaText || 'View Project'}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600 transition-colors" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleOpenPricingModal(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-rose-600 transition-colors text-left"
                      >
                        <span>{project.ctaText || 'Get Pricing Details'}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600 transition-colors" />
                      </button>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* ================= PRICING / INQUIRY MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Inquiry Sent Successfully!</h3>
                  <p className="text-sm text-slate-500">
                    Our team will contact you shortly with complete pricing details for{' '}
                    <span className="font-semibold text-slate-800">{selectedProject.title}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                      Pricing Request
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">{selectedProject.title}</h3>
                    <p className="text-xs text-slate-500">{selectedProject.location} • {selectedProject.developer}</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-rose-500/20 transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Pricing & Floor Plans</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
