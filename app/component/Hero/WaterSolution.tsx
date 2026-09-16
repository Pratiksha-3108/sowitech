import Image from "next/image";
import React from "react";

const WaterSolution = () => {
  return (
    <section className="bg-[#F2F8FF] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <p className="text-sm font-semibold tracking-widest text-[#1B365D] uppercase">
            Sustainable Water Solutions
          </p>
          <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Sustainable Water Solutions for Every Industry
          </h2>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            Water is becoming one of the most valuable resources for industrial operations. Rising municipal water costs, increasing environmental regulations, and growing sustainability commitments require businesses to use water more efficiently.
          </p>
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            At Sowitech Engineering, we help organizations treat, recycle, and reuse water through reliable engineering solutions designed for long-term performance. Our systems support industries in reducing freshwater dependency while maintaining a consistent supply of high-quality water for non-potable applications.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <Image
              src="/Images/home/untraflitration-plant.png"
              alt="Water Treatment Plant"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterSolution;
