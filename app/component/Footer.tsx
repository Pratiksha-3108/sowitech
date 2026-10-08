'use client';
import React from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

const bgHeroImage = '/assets/architectural_hero.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-900 pt-8 pb-12 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-sans">
      {/* Outer Card Container inspired by the Pinterest minimalist architecture design */}
      <div className="max-w-[1440px] mx-auto bg-[#F4F4F0] rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 border border-black/5 shadow-2xl relative overflow-hidden">
        
        {/* TOP SECTION: Grid with Brand & Nav Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-black/10">
          
          {/* Brand Column (Left - 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start">
            <div>
              {/* Brand Dark Pill Icon Badge */}
              <div className="w-11 h-11 rounded-full bg-[#18181B] text-white flex items-center justify-center mb-6 shadow-md">
                <Sparkles className="w-5 h-5 text-[#FF5722]" />
              </div>

              {/* Logo / Title */}
              <a href="/" className="inline-block mb-3">
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-[#18181B] uppercase">
                  SOWITECH
                </h3>
              </a>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                Delivering advanced Water Treatment Plants (WTP), Tertiary Treatment Plants (TTP), and closed-loop Water Recycling Solutions for a sustainable future.
              </p>
            </div>

            {/* Primary Orange Contact Pill Button */}
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2.5 bg-[#FF5722] hover:bg-[#E64A19] text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              Contact us
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Navigation Columns (Right - 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4 lg:pt-0">
            
            {/* Column 1: Company */}
            <div>
              <h4 className="font-bold text-sm text-[#18181B] mb-5 tracking-wider uppercase text-xs">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Solutions', href: '/solutions' },
                  { name: 'Industries', href: '/industries' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Contact Us', href: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-gray-600 hover:text-[#FF5722] text-sm transition-colors duration-200 font-medium block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Solutions / Support */}
            <div>
              <h4 className="font-bold text-sm text-[#18181B] mb-5 tracking-wider uppercase text-xs">
                Solutions
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'WTP Systems', href: '/solutions/wtp' },
                  { name: 'TTP Treatment', href: '/solutions/ttp' },
                  { name: 'Water Recycling', href: '/solutions/water-recycling' },
                  { name: 'STP Upgradation', href: '/solutions/stp-upgradation' },
                  { name: 'YAHA Technology', href: '/yaha-technology' }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-gray-600 hover:text-[#FF5722] text-sm transition-colors duration-200 font-medium block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal & Info */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-sm text-[#18181B] mb-5 tracking-wider uppercase text-xs">
                Legal
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Cookies Policy', href: '#' },
                  { name: 'Privacy Policy', href: '#' },
                  { name: 'Terms of Service', href: '#' },
                  { name: 'Compliance', href: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-gray-600 hover:text-[#FF5722] text-sm transition-colors duration-200 font-medium block"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* MIDDLE SECTION: GIANT TYPOGRAPHY WITH IMAGE MASK */}
        <div className="relative pt-6 pb-2 sm:pt-10 sm:pb-4 select-none overflow-hidden text-center">
          <h2 
            className="text-[12.5vw] sm:text-[12vw] lg:text-[11.5vw] font-black uppercase tracking-tight leading-none text-center bg-clip-text text-transparent bg-cover bg-center transition-all duration-700 block w-full"
            style={{ 
              backgroundImage: `url('${bgHeroImage}')`,
              backgroundPosition: 'center 35%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 6px 14px rgba(13, 66, 125, 0.2))'
            }}
          >
            SOWITECH
          </h2>
        </div>

        {/* BOTTOM BAR: Copyright & Association Info */}
        <div className="mt-6 pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© {currentYear} Sowitech Engineering Pvt. Ltd. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-600">
              <ShieldCheck className="w-4 h-4 text-[#FF5722]" />
              In association with <strong className="text-gray-900">YAHA Water Systems</strong>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
