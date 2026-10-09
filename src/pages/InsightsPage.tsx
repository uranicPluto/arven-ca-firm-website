import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { ConsultationCTA } from '../components/home/ConsultationCTA';
import { insightsData } from '../data/insightsData';

export const InsightsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Financial Insights & Practical Perspectives | Arvén & Co."
        description="Practical insights on Income Tax, GST compliance, accounting best practices, and business financial planning from practicing Chartered Accountants."
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#081A2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              KNOWLEDGE &amp; PERSPECTIVES
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Insights
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal pt-1">
              Practical perspectives on tax, accounting and business financial management.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-28 bg-[#F7F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsData.map((article) => (
              <Link
                key={article.id}
                to={`/insights/${article.slug}`}
                className="bg-white rounded-2xl p-8 border border-[#E2DDD0] hover:border-[#B79A61]/60 shadow-sm transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span className="text-[#B79A61] font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#081A2B] group-hover:text-[#B79A61] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-400">{article.publishDate}</span>
                  <span className="font-bold text-[#081A2B] group-hover:text-[#B79A61] flex items-center gap-1">
                    Read Article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <ConsultationCTA />
    </>
  );
};
