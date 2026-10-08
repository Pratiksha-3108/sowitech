'use client';

import React from 'react';
import Image from 'next/image';
import {
  User,
  MapPin,
  Settings,
  FileText,
  Target,
  Calendar,
  Droplets,
  ImageIcon,
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
    <div className="bg-[#f8f9fa] min-h-screen font-sans text-zinc-900 antialiased selection:bg-[#0D3B7A] selection:text-white">
      <Navbar />

      {/* ── 1. HERO SECTION (Clean Left-Overlay Hero) ── */}
      <section className="relative w-full h-[55vh] min-h-[420px] lg:min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.images.main || "/Images/home/yaha_filtration_plant.jpg"}
            alt={project.title}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Left-Side Dark Gradient Overlay (leaves right image side clear) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/90 via-[#070D18]/65 to-transparent w-full lg:w-[70%]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070D18]/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex flex-col items-start justify-center pt-12">
          <div className="max-w-3xl space-y-3">

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
              {project.shortTitle || project.title}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed pt-1">
              {project.title}
            </p>

          </div>
        </div>
      </section>


      {/* ── MAIN CONTENT CONTAINER (2-COLUMN GRID WITH STICKY PORTFOLIO INFO SIDEBAR) ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">

          {/* ================= LEFT COLUMN: SCROLLING CONTENT (7 Cols) ================= */}
          <div className="lg:col-span-7 space-y-10">

            {/* 1. Performance Guarantee Parameters Table */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>PERFORMANCE GUARANTEE PARAMETERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Verified Water Quality & Performance Standards
              </h2>

              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0D3B7A] text-white text-xs font-bold">
                      <th className="py-3.5 px-4">Parameter</th>
                      <th className="py-3.5 px-4 text-center">Guaranteed</th>
                      <th className="py-3.5 px-4 text-center">Achieved</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {performanceRows.map((row) => (
                      <tr key={row.parameter} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-800">
                          {row.parameter}
                        </td>
                        <td className="py-3.5 px-4 text-center font-medium text-slate-500">
                          {row.guaranteed}
                        </td>
                        <td className="py-3.5 px-4 text-center font-bold text-[#0D3B7A]">
                          {row.achieved}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. Certification Section */}
            <div className="bg-[#EBF3FA] rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white text-[#0D3B7A] flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545] tracking-tight">
                  Certification
                </h3>
              </div>

              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-medium">
                Functional Guarantee Certificate issued by NTPC Ltd., dated 02.11.2023, signed by Kiran Dinakar (Manager, NETRA) and Suresh Kumar Sharma (AGM, T&C).
              </p>

              <div className="flex items-center justify-around border-t border-zinc-300/70 pt-4">
                <div className="text-center">
                  <div className="font-serif italic font-extrabold text-lg text-[#0D3B7A]">Kiran Dinakar</div>
                  <div className="text-xs font-bold text-zinc-900">Manager, NETRA</div>
                </div>
                <div className="h-8 w-[1px] bg-zinc-300" />
                <div className="text-center">
                  <div className="font-serif italic font-extrabold text-lg text-[#0D3B7A]">S. K. Sharma</div>
                  <div className="text-xs font-bold text-zinc-900">AGM, T&C</div>
                </div>
              </div>
            </div>

            {/* 3. Visual Proof & Water Quality Comparison */}
            <div className="bg-[#EBF3FA] rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white text-[#0D3B7A] flex items-center justify-center shadow-sm">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                    Visual Proof & Quality Comparison
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

                  {/* Inlet */}
                  <div className="flex flex-col items-center">
                    <div className="w-full aspect-[3/4] max-h-[140px] rounded-xl border-2 border-slate-300/70 relative overflow-hidden bg-slate-100 flex flex-col justify-end p-1 shadow-inner">
                      <div className="absolute top-0 inset-x-0 h-2 bg-slate-200 border-b border-slate-300" />
                      <div className="w-full h-[75%] bg-gradient-to-t from-[#7A6B56] via-[#94846F] to-[#B0A18B] rounded-b-md relative opacity-90" />
                    </div>
                    <span className="mt-2.5 w-full py-1.5 rounded-full text-xs font-bold text-white bg-[#0D3B7A]">
                      Raw Inlet
                    </span>
                  </div>

                  {/* Backwash */}
                  <div className="flex flex-col items-center">
                    <div className="w-full aspect-[3/4] max-h-[140px] rounded-xl border-2 border-slate-300/70 relative overflow-hidden bg-slate-100 flex flex-col justify-end p-1 shadow-inner">
                      <div className="absolute top-0 inset-x-0 h-2 bg-slate-200 border-b border-slate-300" />
                      <div className="w-full h-[75%] bg-gradient-to-t from-[#B0A795] via-[#C9C2B3] to-[#DDD7CA] rounded-b-md relative opacity-85" />
                    </div>
                    <span className="mt-2.5 w-full py-1.5 rounded-full text-xs font-bold text-white bg-[#0D3B7A]">
                      Backwash Effluent
                    </span>
                  </div>

                  {/* Outlet */}
                  <div className="flex flex-col items-center">
                    <div className="w-full aspect-[3/4] max-h-[140px] rounded-xl border-2 border-slate-300/80 relative overflow-hidden bg-white flex flex-col justify-end p-1 shadow-inner">
                      <div className="absolute top-0 inset-x-0 h-2 bg-slate-200 border-b border-slate-300" />
                      <div className="w-full h-[75%] bg-gradient-to-t from-[#E0F2FE]/70 via-[#F0F9FF]/80 to-[#FFFFFF]/90 rounded-b-md relative border-t border-sky-200/50" />
                    </div>
                    <span className="mt-2.5 w-full py-1.5 rounded-full text-xs font-bold text-white bg-[#0D3B7A]">
                      Pure AFM Output
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: STICKY PORTFOLIO INFO SIDEBAR (5 Cols) ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="bg-[#F2F7F4] rounded-3xl p-6 sm:p-8 border border-emerald-100/80 shadow-md space-y-6">

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight border-b border-emerald-200/60 pb-3">
                Portfolio Info
              </h3>

              <div className="space-y-4 text-sm">

                {/* Client */}
                <div className="border-b border-emerald-200/60 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Client
                  </span>
                  <span className="text-base font-bold text-slate-900">
                    {project.client}
                  </span>
                </div>

                {/* Executed By */}
                <div className="border-b border-emerald-200/60 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Executed By
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {project.executedBy}
                  </span>
                </div>

                {/* Location */}
                <div className="border-b border-emerald-200/60 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Location
                  </span>
                  <span className="text-sm font-medium text-slate-800">
                    {project.location}
                  </span>
                </div>

                {/* Capacity & Technology */}
                <div className="border-b border-emerald-200/60 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Capacity & Technology
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {project.capacity} ({project.technology})
                  </span>
                </div>

                {/* Timeline */}
                <div className="border-b border-emerald-200/60 pb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Commissioned Timeline
                  </span>
                  <span className="text-sm font-medium text-slate-800">
                    {project.timeline.startDate} – {project.timeline.completionDate}
                  </span>
                </div>

                {/* Contract Ref */}
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Contract Ref
                  </span>
                  <p className="text-xs text-slate-700 font-mono leading-relaxed">
                    NOA Ref: {project.contractRef.noaRef}<br />
                    PO No: {project.contractRef.poNo}
                  </p>
                </div>

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

