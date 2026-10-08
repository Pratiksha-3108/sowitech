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
    iconSrc: '/assets/Expert Consultation (1).png',
    title: 'Expert Consultation',
    desc: 'Direct access to experienced water treatment specialists for site evaluations & system design.',
    tag: 'Technical Guidance',
  },
  {
    iconSrc: '/assets/Customized Water Treatment Solutions (1).png',
    title: 'Customized Water Treatment Solutions',
    desc: 'Bespoke plant configurations engineered for your specific industrial raw water & effluent profile.',
    tag: 'Custom Engineered',
  },
  {
    iconSrc: '/assets/WTP & TTP Design.png',
    title: 'WTP & TTP Design',
    desc: 'High-efficiency Water Treatment Plant and Tertiary Treatment Plant engineering.',
    tag: 'Plant Engineering',
  },
  {
    iconSrc: '/assets/Water Recycling Planning.png',
    title: 'Water Recycling Planning',
    desc: 'Strategic closed-loop zero liquid discharge (ZLD) and water recovery architecture.',
    tag: 'Circular Economy',
  },
  {
    iconSrc: '/assets/BOT Project Evaluation.png',
    title: 'BOT Project Evaluation',
    desc: 'Zero CapEx Build-Operate-Transfer model evaluation for minimal financial burden.',
    tag: 'Financing Model',
  },
  {
    iconSrc: '/assets/Project Support & Maintenance.png',
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
    service: 'Select service',
    industry: 'Select industry',
    capacity: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (field: string, value: string) => {
    let err = '';
    if (field === 'name') {
      if (!value.trim()) err = 'Full name is required';
      else if (!/^[a-zA-Z\s'.-]+$/.test(value.trim()) || value.trim().length < 2) {
        err = 'Please enter a valid full name (letters only)';
      }
    } else if (field === 'company') {
      if (!value.trim()) err = 'Company name is required';
      else if (value.trim().length < 2) err = 'Company name must be at least 2 characters';
    } else if (field === 'email') {
      if (!value.trim()) err = 'Email address is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        err = 'Please enter a valid email address';
      }
    } else if (field === 'phone') {
      const cleanDigits = value.replace(/\D/g, '');
      if (!value.trim()) err = 'Phone number is required';
      else if (!/^[6-9]\d{9}$/.test(cleanDigits)) {
        err = 'Please enter a valid 10-digit mobile number';
      }
    } else if (field === 'service') {
      if (!value || value === 'Select service') err = 'Please select what you are looking for';
    } else if (field === 'industry') {
      if (!value || value === 'Select industry') err = 'Please select an industry / application';
    } else if (field === 'message') {
      if (!value.trim()) err = 'Please tell us about your requirement';
      else if (value.trim().length < 10) {
        err = 'Please enter at least 10 characters detailing your requirement';
      }
    }
    return err;
  };

  const validateAll = () => {
    const newErrors: { [key: string]: string } = {};
    const newTouched: { [key: string]: boolean } = {};
    
    ['name', 'company', 'email', 'phone', 'service', 'industry', 'message'].forEach((field) => {
      newTouched[field] = true;
      const err = validateField(field, (formData as any)[field]);
      if (err) newErrors[field] = err;
    });

    setTouched(newTouched);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    const updatedForm = { ...formData, [field]: value };
    setFormData(updatedForm);
    if (touched[field] || errors[field]) {
      const fieldError = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldError = validateField(field, (formData as any)[field]);
    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll()) {
      setFormSubmitted(true);
    }
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center pt-32 sm:pt-36 pb-20 min-h-screen font-geist">
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
            {whyContactItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-3.5 flex items-center gap-4 border border-slate-100"
              >
                {/* Solid Blue Square Icon Box */}
                <div className="w-14 h-14 rounded-lg bg-[#1E56C8] flex items-center justify-center shrink-0 shadow-inner p-2.5">
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain brightness-0 invert"
                  />
                </div>
                {/* Title */}
                <h3 className="text-sm sm:text-base font-extrabold text-[#0A1A3B] leading-snug">
                  {item.title}
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
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-all ${
                            touched.name && errors.name
                              ? 'border-red-500 bg-red-50/20 text-red-900 focus:border-red-600 focus:ring-2 focus:ring-red-500/20'
                              : 'bg-slate-50/50 border-slate-200 focus:bg-white focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20'
                          }`}
                        />
                        {touched.name && errors.name && (
                          <p className="text-[11px] font-semibold text-red-500 mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Company / Organization"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          onBlur={() => handleBlur('company')}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-all ${
                            touched.company && errors.company
                              ? 'border-red-500 bg-red-50/20 text-red-900 focus:border-red-600 focus:ring-2 focus:ring-red-500/20'
                              : 'bg-slate-50/50 border-slate-200 focus:bg-white focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20'
                          }`}
                        />
                        {touched.company && errors.company && (
                          <p className="text-[11px] font-semibold text-red-500 mt-1">
                            {errors.company}
                          </p>
                        )}
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
                          placeholder="yourname@company.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-all ${
                            touched.email && errors.email
                              ? 'border-red-500 bg-red-50/20 text-red-900 focus:border-red-600 focus:ring-2 focus:ring-red-500/20'
                              : 'bg-slate-50/50 border-slate-200 focus:bg-white focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20'
                          }`}
                        />
                        {touched.email && errors.email && (
                          <p className="text-[11px] font-semibold text-red-500 mt-1">
                            {errors.email}
                          </p>
                        )}
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
                            placeholder="98765 43210"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            onBlur={() => handleBlur('phone')}
                            className={`flex-1 px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-all ${
                              touched.phone && errors.phone
                                ? 'border-red-500 bg-red-50/20 text-red-900 focus:border-red-600 focus:ring-2 focus:ring-red-500/20'
                                : 'bg-slate-50/50 border-slate-200 focus:bg-white focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20'
                            }`}
                          />
                        </div>
                        {touched.phone && errors.phone && (
                          <p className="text-[11px] font-semibold text-red-500 mt-1">
                            {errors.phone}
                          </p>
                        )}
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
                          onChange={(e) => handleChange('service', e.target.value)}
                          onBlur={() => handleBlur('service')}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-all ${
                            touched.service && errors.service
                              ? 'border-red-500 bg-red-50/20 text-red-900 focus:border-red-600 focus:ring-2 focus:ring-red-500/20'
                              : 'bg-slate-50/50 border-slate-200 focus:bg-white focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20'
                          }`}
                        >
                          <option value="Select service">Select service</option>
                          <option value="Water Audit">Request a Water Audit</option>
                          <option value="WTP Plant">New Water Treatment Plant (WTP)</option>
                          <option value="TTP Plant">Tertiary Treatment Plant (TTP)</option>
                          <option value="STP Upgrade">STP Upgrade / Recycling</option>
                          <option value="BOT Model">BOT Model Project</option>
                        </select>
                        {touched.service && errors.service && (
                          <p className="text-[11px] font-semibold text-red-500 mt-1">
                            {errors.service}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Industry / Application *
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => handleChange('industry', e.target.value)}
                          onBlur={() => handleBlur('industry')}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-all ${
                            touched.industry && errors.industry
                              ? 'border-red-500 bg-red-50/20 text-red-900 focus:border-red-600 focus:ring-2 focus:ring-red-500/20'
                              : 'bg-slate-50/50 border-slate-200 focus:bg-white focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20'
                          }`}
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
                        {touched.industry && errors.industry && (
                          <p className="text-[11px] font-semibold text-red-500 mt-1">
                            {errors.industry}
                          </p>
                        )}
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
                        value={formData.capacity}
                        onChange={(e) => handleChange('capacity', e.target.value)}
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
                        onChange={(e) => handleChange('message', e.target.value)}
                        onBlur={() => handleBlur('message')}
                        className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-all resize-none ${
                          touched.message && errors.message
                            ? 'border-red-500 bg-red-50/20 text-red-900 focus:border-red-600 focus:ring-2 focus:ring-red-500/20'
                            : 'bg-slate-50/50 border-slate-200 focus:bg-white focus:border-[#0D427D] focus:ring-2 focus:ring-[#0D427D]/20'
                        }`}
                      ></textarea>
                      {touched.message && errors.message && (
                        <p className="text-[11px] font-semibold text-red-500 mt-1">
                          {errors.message}
                        </p>
                      )}
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
