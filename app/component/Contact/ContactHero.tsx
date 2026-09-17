'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PhoneCall,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Droplets,
  CheckCircle2,
  User,
  Building,
  Wrench,
  BarChart3,
  Recycle,
  Layers,
  Send,
  Phone,
  Leaf,
  UploadCloud
} from 'lucide-react';

const customEase = [0.16, 1, 0.3, 1] as const;

const whyContactItems = [
  {
    icon: User,
    title: 'Expert Consultation',
    desc: 'Direct access to experienced water treatment specialists for site evaluations & system design.',
    tag: 'Technical Guidance',
  },
  {
    icon: Droplets,
    title: 'Customized Water Treatment Solutions',
    desc: 'Bespoke plant configurations engineered for your specific industrial raw water & effluent profile.',
    tag: 'Custom Engineered',
  },
  {
    icon: Layers,
    title: 'WTP & TTP Design',
    desc: 'High-efficiency Water Treatment Plant and Tertiary Treatment Plant engineering.',
    tag: 'Plant Engineering',
  },
  {
    icon: Recycle,
    title: 'Water Recycling Planning',
    desc: 'Strategic closed-loop zero liquid discharge (ZLD) and water recovery architecture.',
    tag: 'Circular Economy',
  },
  {
    icon: BarChart3,
    title: 'BOT Project Evaluation',
    desc: 'Zero CapEx Build-Operate-Transfer model evaluation for minimal financial burden.',
    tag: 'Financing Model',
  },
  {
    icon: Wrench,
    title: 'Project Support & Maintenance',
    desc: 'Reliable long-term operational assistance, spare parts, and preventive maintenance support.',
    tag: '24/7 Assistance',
  },
];

const auditOpportunities = [
  'Reduce freshwater consumption',
  'Lower water procurement costs',
  'Improve water reuse efficiency',
  'Support ESG and sustainability goals',
  'Enhance operational resilience',
];

export default function ContactHero() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Water Audit',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('audit-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white text-[#0A1A3B] font-sans overflow-hidden">

      {/* ---------------- 1. HERO HEADER (MATCHED TO HOME HERO HEIGHT & OVERLAYS) ---------------- */}
      <section className="font-geist relative w-full min-h-screen flex items-stretch overflow-hidden bg-[#07132B]">
        {/* Full-bleed Background Image with Home Hero Overlays */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.12, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.8, ease: customEase }}
            className="absolute inset-0"
          >
            <Image
              src="/assets/home_hero.png"
              alt="Sowitech Water Treatment Plant"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>

          {/* Subtle low-opacity overall overlay */}
          <div className="absolute inset-0 bg-[#07132B]/25 pointer-events-none" />

          {/* Left dark gradient so text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071320]/60 via-[#071320]/35 to-[#071320]/10" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#071320] to-transparent" />
        </div>

        {/* Content Container matching HeroSection height layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center pt-28 pb-20 min-h-screen font-geist">
          <div className="max-w-4xl">
            {/* Accessible SEO Heading */}
            <h1 className="sr-only">Contact Water Treatment Plant Company | Sowitech Engineering</h1>

            {/* Main Heading strictly in 2 Lines */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
              className="font-geist text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] font-bold text-white leading-tight"
            >
              Let’s Discuss Your <br />
              <span className="inline-block">Water Treatment Requirements</span>
            </motion.h2>
          </div>
        </div>
      </section>

      {/* ---------------- 2. WHY CONTACT SOWITECH? (UI MATCHING CARD GRID) ---------------- */}
      <section className="py-16 md:py-24 bg-[#E8F1FA] border-t border-b border-slate-200/60 relative font-geist">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#0D427D] uppercase font-geist mb-3 block">
              WHY CONTACT SOWITECH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1A3B] tracking-tight">
              Why Contact Sowitech?
            </h2>
          </div>

          {/* 3x2 Grid Matching Uploaded UI Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Expert Consultation',
              'Customized Water Treatment Solutions',
              'WTP & TTP Design',
              'Water Recycling Planning',
              'BOT Project Evaluation',
              'Project Support & Maintenance',
            ].map((title, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-3.5 flex items-center gap-4 border border-slate-100"
              >
                {/* Solid Blue Square Icon Box */}
                <div className="w-14 h-14 rounded-lg bg-[#1E56C8] text-white flex items-center justify-center shrink-0 shadow-inner">
                  <Leaf className="w-7 h-7 text-white stroke-[2.2]" />
                </div>
                {/* Title */}
                <h3 className="text-sm sm:text-base font-extrabold text-[#0A1A3B] leading-snug">
                  {title}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 3. LET'S TALK ABOUT YOUR WATER REQUIREMENT SECTION ---------------- */}
      <section className="py-16 md:py-24 bg-[#F2F8FF] relative overflow-hidden font-geist">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* LEFT COLUMN: GET IN TOUCH DETAILS */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pt-2">
              <div>
                {/* Label */}
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D427D] mb-5 block">
                  GET IN TOUCH
                </span>

                {/* Main Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-[38px] font-extrabold text-[#0A1A3B] leading-tight mb-4">
                  Let’s Talk About Your <br />
                  <span className="text-[#0D427D] inline-block">Water Requirement</span>
                </h2>

                {/* Subtitle */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-md">
                  Tell us what you need to treat, recycle or reuse. Our team can help identify the right water-treatment approach for your application.
                </p>

                {/* Contact List */}
                <div className="space-y-6">

                  {/* Managing Director */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-sky-100 text-[#0D427D] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Managing Director</p>
                      <p className="text-base sm:text-lg font-extrabold text-[#0A1A3B] mt-0.5">
                        Kaushik Harlikar
                      </p>
                    </div>
                  </div>

                  {/* Call Us */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-sky-100 text-[#0D427D] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Call us</p>
                      <a href="tel:+919730014264" className="text-base sm:text-lg font-extrabold text-[#0D427D] hover:underline mt-0.5 block">
                        +91 97300 14264
                      </a>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-sky-100 text-[#0D427D] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Email us</p>
                      <a href="mailto:info@sowitech.in" className="text-base sm:text-lg font-extrabold text-[#0D427D] hover:underline mt-0.5 block">
                        info@sowitech.in
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: DISCUSS YOUR WATER REQUIREMENT FORM CARD */}
            <div className="lg:col-span-7">
              <motion.div
                id="audit-form"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 sm:p-10 md:p-12 rounded-[2rem] bg-white border border-slate-200/80 shadow-xl relative"
              >
                {/* Form Header */}
                <div className="mb-8 border-b border-slate-100 pb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#0D427D]">
                      DISCUSS YOUR WATER REQUIREMENT
                    </h3>
                    <div className="w-12 h-[2px] bg-[#0D427D]" />
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-extrabold text-emerald-900">
                      Thank You! Request Received.
                    </h4>
                    <p className="text-sm text-emerald-700 leading-relaxed font-medium">
                      Our engineering team will review your requirements and get back to you at <strong>{formData.phone || formData.email}</strong> shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Company / Organization"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="yourname@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <div className="flex gap-2">
                          <select className="px-3 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-700 text-sm focus:outline-none">
                            <option value="+91">+91</option>
                          </select>
                          <input
                            type="tel"
                            required
                            placeholder="98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="flex-1 px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Service & Industry */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          What are you looking for? *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20 transition-all"
                        >
                          <option value="Select service">Select service</option>
                          <option value="Water Audit">Request a Water Audit</option>
                          <option value="WTP Plant">New Water Treatment Plant (WTP)</option>
                          <option value="TTP Plant">Tertiary Treatment Plant (TTP)</option>
                          <option value="STP Upgrade">STP Upgrade / Recycling</option>
                          <option value="BOT Model">BOT Model Project</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Industry / Application
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20 transition-all"
                        >
                          <option value="Select industry">Select industry</option>
                          <option value="Textile">Textile & Apparel</option>
                          <option value="Chemical">Chemical & Process</option>
                          <option value="Pharma">Pharmaceuticals</option>
                          <option value="F&B">Food & Beverage</option>
                          <option value="Manufacturing">General Manufacturing</option>
                          <option value="Commercial">Real Estate & Commercial</option>
                          <option value="Municipal">Municipal / Urban</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Required Capacity */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Required Capacity <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 100 KLD / 500 KLD / 1 MLD"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20 transition-all"
                      />
                    </div>

                    {/* Requirement Description */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Tell us about your requirement *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your water treatment, recycling or reuse requirement..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20 transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-start pt-3">
                      <button
                        type="submit"
                        className="px-8 py-3.5 rounded-full bg-[#0D427D] hover:bg-[#0A3463] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
                      >
                        <span>Request a Water Consultation</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
