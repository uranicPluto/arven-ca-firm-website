import React from 'react';
import { firmConfig } from '../../data/firmConfig';

export const TrustMetrics: React.FC = () => {
  return (
    <section className="py-8 bg-white border-y border-[#E2DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          <div className="py-2 px-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#081A2B] tracking-tight font-display">
              18+ Years
            </p>
            <p className="text-xs sm:text-sm text-[#66717C] font-medium mt-1">
              Professional Experience
            </p>
          </div>

          <div className="py-2 px-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#081A2B] tracking-tight font-display">
              500+
            </p>
            <p className="text-xs sm:text-sm text-[#66717C] font-medium mt-1">
              Clients Served
            </p>
          </div>

          <div className="py-2 px-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#081A2B] tracking-tight font-display">
              Pune &amp; Maharashtra
            </p>
            <p className="text-xs sm:text-sm text-[#66717C] font-medium mt-1">
              Practice &amp; Advisory Presence
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
