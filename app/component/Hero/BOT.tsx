import React from 'react';

const BOTSection = () => {
  return (
    <div id="projects" className="w-full py-16 md:py-24 bg-gradient-to-br from-[#f0f4f8] via-[#f8fafc] to-[#e2e8f0] font-sans overflow-hidden relative scroll-mt-20">
      {/* Optional subtle light effect similar to the image's top left highlight */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-white/40 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] tracking-tight mb-6">
          BOT (Build – Operate – Transfer) Model
        </h2>

        {/* Top Description */}
        <p className="max-w-3xl text-gray-600 text-sm md:text-base mb-24 leading-relaxed font-medium">
          Need a water treatment solution without significant capital investment? <br className="hidden md:block" />
          Our BOT model allows businesses to implement advanced water treatment infrastructure with minimal financial burden.
        </p>

        {/* Process Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-8 lg:gap-12 mb-24">
          <div className="text-base md:text-lg font-medium text-[#111827] whitespace-nowrap">
            Zero CapEx
          </div>

          {/* Arrow */}
          <div className="hidden md:flex text-gray-400 items-center">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="md:hidden text-gray-400 my-2">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V38M12 38L2 28M12 38L22 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="text-base md:text-lg font-medium text-[#111827] whitespace-nowrap">
            Design & Build
          </div>

          {/* Arrow */}
          <div className="hidden md:flex text-gray-400 items-center">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="md:hidden text-gray-400 my-2">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V38M12 38L2 28M12 38L22 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="text-base md:text-lg font-medium text-[#111827] whitespace-nowrap">
            Operate & Maintain
          </div>

          {/* Arrow */}
          <div className="hidden md:flex text-gray-400 items-center">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="md:hidden text-gray-400 my-2">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0V38M12 38L2 28M12 38L22 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="text-base md:text-lg font-medium text-[#111827] whitespace-nowrap">
            Asset Transfer
          </div>
        </div>

        {/* Benefits Section */}
        <div className="w-full max-w-5xl mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
          {[
            "Zero upfront capital investment",
            "Assured long-term treated water supply",
            "Improved cash flow and metrics",
            "Asset transfer at agreement end"
          ].map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Hover wrapper */}
              <div className="mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                {/* The actual drop shape */}
                <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center text-white bg-gradient-to-br from-blue-400 to-blue-600 shadow-md"
                  style={{ borderRadius: "0 50% 50% 50%", transform: "rotate(45deg)" }}>
                  {/* Un-rotate the icon inside so it stands upright */}
                  <div style={{ transform: "rotate(-45deg)" }}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-sm md:text-base font-medium text-gray-700 leading-snug">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BOTSection;
