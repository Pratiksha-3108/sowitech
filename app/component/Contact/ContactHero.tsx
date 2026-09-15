'use client';

import React, { useState } from 'react';
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
  Phone
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

      {/* ---------------- 1. HERO HEADER WITH ANIMATED WTP BACKGROUND IMAGE ---------------- */}
      <section className="relative w-full min-h-[55vh] flex items-center justify-center overflow-hidden text-white">
        {/* Animated WTP Background Image with Zoom & Gradient Overlay */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: customEase }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2000&auto=format&fit=crop')`,
          }}
        >
          {/* Gradient Overlay for Optimum Contrast & Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A3B]/90 via-[#0A1A3B]/75 to-[#0A1A3B]/40" />
        </motion.div>

        {/* Content Container matching HeroSection layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full h-full flex flex-col md:justify-start justify-center py-16 md:py-24">
          <div className="max-w-2xl mt-4 md:mt-6">
            {/* Accessible SEO Heading */}
            <h1 className="sr-only">Contact Water Treatment Plant Company | Sowitech Engineering</h1>

            {/* Main Heading with FadeInUp Animation & exact fonts */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6"
            >
              Let’s Discuss Your <br />
              Water Treatment <br />
              Requirements
            </motion.h2>

            {/* Subheading / Description with FadeInUp & exact fonts (Shortened) */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
              className="text-slate-200 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl font-medium"
            >
              Planning a new WTP, upgrading an existing STP, or exploring water recycling solutions? Our expert team is ready to assist you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ---------------- 2. GET IN TOUCH & WATER AUDIT SECTION ---------------- */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

            {/* Left Column: Get in Touch Details & Water Audit Checklist */}
            <div className="lg:col-span-6 space-y-8">

              {/* Get in Touch Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white via-sky-50/40 to-slate-50 border border-slate-200/80 shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-sky-200/30 rounded-full blur-2xl pointer-events-none" />

                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#124075] mb-2">
                  DIRECT CONTACT
                </span>
                <h3 className="text-2xl font-black text-[#0A1A3B] mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#124075] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Company</p>
                      <p className="text-base font-extrabold text-[#0A1A3B]">
                        Sowitech Engineering Pvt. Ltd.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Managing Director</p>
                      <p className="text-base font-extrabold text-[#0A1A3B]">
                        Kaushik Harlikar
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Phone / WhatsApp</p>
                      <a
                        href="tel:+919730014264"
                        className="text-lg font-black text-[#124075] hover:text-[#1B56A6] transition-colors inline-flex items-center gap-2"
                      >
                        +91 97300 14264
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Request a Preliminary Water Audit Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#124075] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0A1A3B]">
                    Request a Preliminary Water Audit
                  </h3>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  Our experts can evaluate your current water usage and identify opportunities to:
                </p>

                <div className="space-y-3">
                  {auditOpportunities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-sky-50/50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-[#0A1A3B]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Right Column: Interactive Audit & Inquiry Form */}
            <motion.div
              id="audit-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 p-8 md:p-10 rounded-3xl bg-gradient-to-b from-white via-slate-50/60 to-sky-50/30 border border-slate-200/90 shadow-xl"
            >
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-1 block">
                  ONLINE INQUIRY
                </span>
                <h3 className="text-2xl font-black text-[#0A1A3B]">
                  Send Us a Message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the details below to request a water audit or project proposal.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-extrabold text-emerald-900">
                    Thank You! Request Received.
                  </h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Our technical team will review your requirements and reach out to you at <strong>{formData.phone || formData.email}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#124075] focus:ring-2 focus:ring-[#124075]/20 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Industrial Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#124075] focus:ring-2 focus:ring-[#124075]/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#124075] focus:ring-2 focus:ring-[#124075]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#124075] focus:ring-2 focus:ring-[#124075]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Requirement Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#124075] focus:ring-2 focus:ring-[#124075]/20 transition-all"
                    >
                      <option value="Water Audit">Request a Water Audit</option>
                      <option value="WTP Plant">New Water Treatment Plant (WTP)</option>
                      <option value="TTP Plant">Tertiary Treatment Plant (TTP)</option>
                      <option value="STP Upgrade">STP Upgrade / Recycling</option>
                      <option value="BOT Model">BOT Model Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Message / Requirement Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your plant capacity, water source, or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#124075] focus:ring-2 focus:ring-[#124075]/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#124075] hover:bg-[#0B2C52] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Submit Request
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ---------------- 3. WHY CONTACT SOWITECH? ---------------- */}
      <section className="py-16 md:py-24 bg-slate-50/80 border-t border-b border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#124075] mb-2 block">
              OUR PROMISE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1A3B] tracking-tight mb-4">
              Why Contact Sowitech?
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Partner with experienced industrial water engineering specialists committed to performance, compliance, and savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyContactItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#124075]/10 text-[#124075] flex items-center justify-center group-hover:bg-[#124075] group-hover:text-white transition-colors duration-300 shadow-inner">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#0A1A3B] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#124075]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Sowitech Expertise</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- 4. READY TO REUSE WATER? CTA BANNER ---------------- */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] bg-gradient-to-r from-[#0A1A3B] via-[#124075] to-[#1B56A6] p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Lighting Accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-70 h-70 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-300 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                SUSTAINABLE WATER FUTURE
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Ready to Reuse Water?
              </h2>

              <p className="text-slate-200 text-base md:text-lg leading-relaxed font-medium">
                Let's build a sustainable water management solution tailored to your organization.
              </p>

              {/* Dual Action CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-white hover:bg-sky-50 text-[#0A1A3B] px-8 py-4 rounded-full font-extrabold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                >
                  <span>Request a Water Audit</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <a
                  href="tel:+919730014264"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-extrabold text-xs md:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-sky-300" />
                  <span>Call +91 97300 14264</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
