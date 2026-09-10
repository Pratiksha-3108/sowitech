import React from 'react';
import Image from 'next/image';
import { Mail, MapPin, Phone, ArrowRight, MessageSquare, Share2, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1A3B] text-white pt-20 pb-10 border-t border-[#1A56A6]/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#38BDF8] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#1A56A6] rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Company Info */}
          <div className="lg:col-span-3 flex flex-col">
            <a href="/" className="inline-block mb-6 w-fit">
              <div className="bg-white p-2.5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/assets/homelogo.png"
                  alt="SOWITECH Engineering Pvt. Ltd."
                  width={180}
                  height={180}
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
            </a>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Delivering advanced Water Treatment Plants (WTP), Tertiary Treatment Plants (TTP), and closed-loop Water Recycling Solutions for a sustainable future.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 uppercase tracking-wider">In association with</span>
              <div className="flex flex-col">
                <span className="text-sm font-black text-white leading-none tracking-wide">
                  YAHA
                </span>
                <span className="text-[8px] font-bold text-[#FAAD1B] uppercase tracking-widest mt-0.5">
                  Water Systems
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'WTP', href: '/#wtp' },
                { name: 'TTP', href: '/#ttp' },
                { name: 'Water Recycling', href: '/#water-recycling' },
                { name: 'YAHA Technology', href: '/about#yaha-technology' },
                { name: 'Industries', href: '/#industries' },
                { name: 'Projects', href: '/#projects' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-[#38BDF8] text-sm flex items-center transition-colors group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Our Solutions</h3>
            <ul className="space-y-3">
              {['Water Treatment Plants', 'Tertiary Treatment Plants', 'Zero Liquid Discharge', 'Sewage Treatment Plants', 'Desalination Systems', 'BOT Model Options'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-[#38BDF8] text-sm flex items-center transition-colors group">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  123 Innovation Drive, Tech Park<br />
                  Industrial Estate, Pune 411057
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#38BDF8] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white text-sm transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#38BDF8] flex-shrink-0" />
                <a href="mailto:info@sowitech.com" className="text-gray-300 hover:text-white text-sm transition-colors">
                  info@sowitech.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Sowitech Engineering Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#38BDF8] hover:text-white transition-all">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#38BDF8] hover:text-white transition-all">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#38BDF8] hover:text-white transition-all">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
