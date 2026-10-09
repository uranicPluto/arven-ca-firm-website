import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { insightsData } from '../../data/insightsData';

export const InsightsPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              PRACTICAL PERSPECTIVES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081A2B] tracking-tight mt-1">
              Insights
            </h2>
            <p className="text-sm sm:text-base text-[#66717C] mt-1">
              Practical perspectives on tax, accounting and business.
            </p>
          </div>

          <Link
            to="/insights"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#081A2B] hover:text-[#B79A61] transition-colors"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              to={`/insights/${article.slug}`}
              className="bg-white rounded-2xl p-7 border border-[#E2DDD0] hover:border-[#B79A61]/60 shadow-sm transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
                  <span className="text-[#B79A61] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#081A2B] group-hover:text-[#B79A61] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#66717C] leading-relaxed line-clamp-2">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-400">{article.publishDate}</span>
                <span className="font-bold text-[#081A2B] group-hover:text-[#B79A61] flex items-center gap-1">
                  Read &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
