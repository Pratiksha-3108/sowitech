'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  MapPin,
  Settings,
  FileText,
  Calendar,
  Clock,
  ChevronRight,
  ShieldCheck,
  Droplets,
  Leaf,
  Sparkles,
  Shield,
  Award,
} from 'lucide-react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { ProjectDetail } from '../../data/projectsData';

interface ProjectDetailClientProps {
  project: ProjectDetail;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const performanceRows = [
    {
      parameter: 'Total Suspended Solids (TSS)',
      guaranteed: '<10 mg/L',
      achieved: '3.68 mg/L',
    },
    {
      parameter: 'Turbidity',
      guaranteed: '<5 NTU',
      achieved: '3.59 NTU',
    },
    {
      parameter: 'COD',
      guaranteed: '<50 mg/L',
      achieved: '23.6 mg/L',
    },
    {
      parameter: 'BOD',
      guaranteed: '<10 mg/L',
      achieved: '3.10 mg/L',
    },
  ];

  return (
    <div className="bg-white min-h-screen font-geist text-[#0A1A3B] antialiased selection:bg-[#0D427D] selection:text-white">
      <Navbar />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full min-h-[500px] md:min-h-[560px] flex flex-col justify-center text-white pt-28 sm:pt-32 pb-16 overflow-hidden">
        {/* Hero Background Plant Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/home/yaha_filtration_plant.jpg"
            alt={project.title}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle natural gradient overlay for clean contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07243B]/90 via-[#07243B]/75 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full space-y-4">
          
          {/* Top Label with horizontal rule */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-slate-200">
              OUR PROJECTS
            </span>
            <div className="w-8 h-[2px] bg-slate-300/80" />
          </div>

          {/* Tertiary Treatment Plant Pill Badge */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-white/20 backdrop-blur-md border border-white/25">
              Tertiary Treatment Plant
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black tracking-tight leading-[1.18] text-white max-w-2xl drop-shadow-sm pt-1">
            4 MLD Activated Filter<br />
            Media (AFM) Tertiary<br />
            Treatment Plant
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-sm sm:text-base font-normal max-w-xl pt-2 drop-shadow-sm">
            Delivering superior water quality for a sustainable tomorrow.
          </p>

        </div>
      </section>

      {/* ── 2. 4-COLUMN METADATA BAR (BELOW HERO) ── */}
      <section className="w-full bg-white border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Col 1: Client */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D427D] flex items-center justify-center shrink-0 border border-blue-100">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block mb-0.5">Client</span>
                <span className="text-sm font-bold text-[#0A1A3B]">NTPC Ltd.</span>
              </div>
            </div>

            {/* Col 2: Location */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D427D] flex items-center justify-center shrink-0 border border-blue-100">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block mb-0.5">Location</span>
                <span className="text-xs sm:text-sm font-semibold text-[#0A1A3B] leading-snug">
                  Jaripatka, Mahavir Nagar,<br />Nagpur – 440014
                </span>
              </div>
            </div>

            {/* Col 3: Executed By */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D427D] flex items-center justify-center shrink-0 border border-blue-100">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block mb-0.5">Executed By</span>
                <span className="text-xs sm:text-sm font-bold text-[#0A1A3B]">M/s Yaha Water Systems</span>
              </div>
            </div>

            {/* Col 4: Contract Ref */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D427D] flex items-center justify-center shrink-0 border border-blue-100">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block mb-0.5">Contract Ref</span>
                <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed font-normal">
                  NOA Ref No. CM-AFM-TT-NETRA-9-9900217942-FC-NOA, dated 22.02.2022;<br />
                  PO No. 4400000432-162-1001, dated 28.09.2022
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. SCOPE & TIMELINE SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Section Tag */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-[2px] bg-[#0D427D]" />
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#0D427D]">
                SCOPE & TIMELINE
              </span>
            </div>

            {/* Main Statement */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#0D2244] tracking-tight leading-snug">
              Supply, Installation & Commissioning of a 4 MLD Activated Filter Media (AFM) Tertiary Treatment Plant.
            </h2>

            {/* Timeline Row (3 cards with icons) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
              
              {/* Start Date */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-[#0D427D]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block">Start Date</span>
                  <span className="text-sm font-bold text-[#0D2244]">27.09.2023</span>
                </div>
              </div>

              {/* Completion Date */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-[#0D427D]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block">Completion Date</span>
                  <span className="text-sm font-bold text-[#0D2244]">30.09.2023</span>
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-[#0D427D]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block">Performance Test Duration</span>
                  <span className="text-sm font-black text-[#0D2244]">72 hours</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Image (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <Image
                src="/Images/home/yaha_filtration_plant.jpg"
                alt="4 MLD AFM Plant"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. PERFORMANCE GUARANTEE PARAMETERS & WATER QUALITY COMPARISON ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 border-t border-slate-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Performance Table (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-center gap-2">
              <div className="w-5 h-[2px] bg-[#0D427D]" />
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#0D427D]">
                PERFORMANCE GUARANTEE PARAMETERS
              </span>
            </div>

            {/* Table */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F4F8FC] border-b border-slate-200 text-xs font-extrabold text-[#0D2244]">
                    <th className="py-3.5 px-4">Parameter</th>
                    <th className="py-3.5 px-4 text-center">Guaranteed</th>
                    <th className="py-3.5 px-4 text-center">Achieved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {performanceRows.map((row) => (
                    <tr key={row.parameter} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-700">
                        {row.parameter}
                      </td>
                      <td className="py-3.5 px-4 text-center font-medium text-slate-600">
                        {row.guaranteed}
                      </td>
                      <td className="py-3.5 px-4 text-center font-black text-[#0D427D]">
                        {row.achieved}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

          {/* Right: Water Quality Comparison with 3 Beakers (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#0D2244]">
                Water Quality Comparison
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Visible clarity in treated output.
              </p>
            </div>

            {/* 3 Beakers Container */}
            <div className="bg-[#F0F5FA] rounded-2xl p-6 border border-slate-200/80">
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                
                {/* 1. Inlet Sample (Raw Water - Muddy Brown) */}
                <div className="flex-1 flex flex-col items-center text-center">
                  {/* Glass Beaker SVG */}
                  <div className="w-20 sm:w-24 h-28 sm:h-32 rounded-b-xl rounded-t-sm border-2 border-slate-400/60 relative overflow-hidden bg-white/40 shadow-inner flex flex-col justify-end p-1">
                    {/* Liquid fill */}
                    <div className="w-full h-20 sm:h-24 bg-gradient-to-t from-[#6E4B25] to-[#99734A] rounded-b-lg opacity-90 relative">
                      <div className="absolute top-0 inset-x-0 h-1 bg-[#B58B5C]/60 rounded-full" />
                    </div>
                    {/* Beaker Measurement lines */}
                    <div className="absolute right-1.5 top-4 bottom-4 flex flex-col justify-between w-2 border-r border-slate-400/40">
                      <div className="w-1 h-[1px] bg-slate-400/50" />
                      <div className="w-1.5 h-[1px] bg-slate-400/50" />
                      <div className="w-1 h-[1px] bg-slate-400/50" />
                    </div>
                  </div>

                  {/* Dark Pill */}
                  <span className="mt-3.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-[#3B526B] shadow-xs">
                    Inlet Sample
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1">
                    (Raw Water)
                  </span>
                </div>

                {/* Arrow */}
                <div className="text-slate-400 font-bold text-lg mb-8">&gt;</div>

                {/* 2. Backwash Sample (During Cleaning - Turbid Yellow/Green) */}
                <div className="flex-1 flex flex-col items-center text-center">
                  {/* Glass Beaker SVG */}
                  <div className="w-20 sm:w-24 h-28 sm:h-32 rounded-b-xl rounded-t-sm border-2 border-slate-400/60 relative overflow-hidden bg-white/40 shadow-inner flex flex-col justify-end p-1">
                    {/* Liquid fill */}
                    <div className="w-full h-20 sm:h-24 bg-gradient-to-t from-[#B8B08D] to-[#D6CFB2] rounded-b-lg opacity-85 relative">
                      <div className="absolute top-0 inset-x-0 h-1 bg-[#E8E2CB]/70 rounded-full" />
                    </div>
                    {/* Measurement lines */}
                    <div className="absolute right-1.5 top-4 bottom-4 flex flex-col justify-between w-2 border-r border-slate-400/40">
                      <div className="w-1 h-[1px] bg-slate-400/50" />
                      <div className="w-1.5 h-[1px] bg-slate-400/50" />
                      <div className="w-1 h-[1px] bg-slate-400/50" />
                    </div>
                  </div>

                  {/* Dark Pill */}
                  <span className="mt-3.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-[#3B526B] shadow-xs">
                    Backwash Sample
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1">
                    (During Cleaning)
                  </span>
                </div>

                {/* Arrow */}
                <div className="text-slate-400 font-bold text-lg mb-8">&gt;</div>

                {/* 3. Outlet Sample (Treated Water - Crystal Clear) */}
                <div className="flex-1 flex flex-col items-center text-center">
                  {/* Glass Beaker SVG */}
                  <div className="w-20 sm:w-24 h-28 sm:h-32 rounded-b-xl rounded-t-sm border-2 border-slate-400/70 relative overflow-hidden bg-white shadow-inner flex flex-col justify-end p-1">
                    {/* Liquid fill - Crystal Clear Water */}
                    <div className="w-full h-20 sm:h-24 bg-gradient-to-t from-[#E0F2FE]/80 via-[#F0F9FF]/90 to-[#FFFFFF]/90 rounded-b-lg relative border-t border-cyan-200/50">
                      {/* Light Reflection */}
                      <div className="absolute inset-y-1 left-2 w-1.5 bg-white/70 rounded-full blur-[0.5px]" />
                    </div>
                    {/* Measurement lines */}
                    <div className="absolute right-1.5 top-4 bottom-4 flex flex-col justify-between w-2 border-r border-slate-400/40">
                      <div className="w-1 h-[1px] bg-slate-400/50" />
                      <div className="w-1.5 h-[1px] bg-slate-400/50" />
                      <div className="w-1 h-[1px] bg-slate-400/50" />
                    </div>
                  </div>

                  {/* Dark Pill */}
                  <span className="mt-3.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-[#3B526B] shadow-xs">
                    Outlet Sample
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1">
                    (Treated Water)
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. CERTIFICATION SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 border-t border-slate-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-[2px] bg-[#0D427D]" />
              <span className="text-xs font-extrabold tracking-widest uppercase text-[#0D427D]">
                CERTIFICATION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#0D2244] tracking-tight">
              Functional Guarantee Certificate
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Issued by <strong className="text-[#0D2244]">NTPC Ltd.</strong>, dated <strong className="text-[#0D2244]">02.11.2023</strong>, signed by <strong className="text-[#0D2244]">Kiran Dinakar (Manager, NETRA)</strong> and <strong className="text-[#0D2244]">Suresh Kumar Sharma (AGM, T&C)</strong>.
            </p>
          </div>

          {/* Right Certificate Graphic (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAFBFD] p-3 sm:p-5 rounded-2xl border border-slate-300/80 shadow-md">
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 text-center relative overflow-hidden">
                
                {/* Corner geometric accents */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#0D427D] to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-[#0D427D] to-transparent opacity-80" />

                {/* NTPC Logo Badge */}
                <div className="inline-block px-4 py-1 rounded-md bg-blue-50 border border-blue-200 mb-3">
                  <span className="font-extrabold text-[#0D427D] text-xs sm:text-sm tracking-wider">
                    एनटीपीसी NTPC Limited
                  </span>
                </div>

                {/* Certificate Heading */}
                <h3 className="text-xs sm:text-sm font-black text-[#0D2244] uppercase tracking-wider mb-2">
                  FUNCTIONAL GUARANTEE CERTIFICATE
                </h3>

                <p className="text-[11px] text-slate-600 max-w-md mx-auto leading-relaxed mb-4">
                  This is to certify that the 4 MLD Activated Filter Media (AFM) Tertiary Treatment Plant has been commissioned and is performing as per the guaranteed parameters.
                </p>

                <div className="text-[10px] text-slate-500 font-semibold mb-5">
                  Date: 02.11.2023
                </div>

                {/* Signatures */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200 text-center">
                  <div>
                    <div className="font-serif italic text-slate-700 text-sm mb-1 font-bold">Kiran Dinakar</div>
                    <div className="text-[10px] font-bold text-slate-700">Kiran Dinakar</div>
                    <div className="text-[9px] text-slate-500">Manager (NETRA)</div>
                  </div>

                  <div>
                    <div className="font-serif italic text-slate-700 text-sm mb-1 font-bold">S. K. Sharma</div>
                    <div className="text-[10px] font-bold text-slate-700">Suresh Kumar Sharma</div>
                    <div className="text-[9px] text-slate-500">AGM (T&C)</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. BOTTOM RESULT BANNER (DEEP NAVY WATER THEME) ── */}
      <section className="relative w-full bg-[#07243B] text-white py-14 overflow-hidden">
        {/* Subtle wavy texture pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Result Headline (6 Cols) */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-[2px] bg-cyan-400" />
                <span className="text-xs font-extrabold tracking-widest uppercase text-cyan-300">
                  RESULT
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Reliable Performance. Clearer Water.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                A successful project delivering consistent and high-quality treated water for NTPC Ltd.
              </p>
            </div>

            {/* Right 4 Icons (6 Cols) */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center border border-white/15">
                  <Droplets className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-200 leading-tight">
                  Improved<br />Water Quality
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center border border-white/15">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-200 leading-tight">
                  Guaranteed<br />Performance
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center border border-white/15">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-200 leading-tight">
                  Sustainable<br />Operations
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center border border-white/15">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-slate-200 leading-tight">
                  Supports<br />Water Reuse
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
