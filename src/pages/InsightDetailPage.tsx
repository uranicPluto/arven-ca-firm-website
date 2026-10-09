import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { ConsultationCTA } from '../components/home/ConsultationCTA';
import { insightsData } from '../data/insightsData';

export const InsightDetailPage: React.FC<{ onOpenConsultation?: () => void }> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <>
      <SEOHead
        title={`${article.title} | Arvén & Co.`}
        description={article.summary}
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#081A2B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-[#B79A61] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Insights</span>
          </Link>

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B79A61]">
              {article.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#B79A61]" />
                {article.author}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#B79A61]" />
                {article.publishDate}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#B79A61]" />
                {article.readTime}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 md:py-28 bg-[#F7F6F1]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2DDD0] shadow-sm space-y-6 text-sm sm:text-base text-[#3E4752] leading-relaxed font-normal">
            
            {/* Executive Summary */}
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-gray-200 text-xs sm:text-sm text-[#081A2B] font-medium leading-relaxed">
              <strong>Key takeaway:</strong> {article.summary}
            </div>

            {/* Paragraphs */}
            {article.content.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}

            {/* Author Attribution */}
            <div className="pt-8 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <div>
                <p className="font-bold text-[#081A2B] text-sm">{article.author}</p>
                <p className="text-gray-400">Arvén &amp; Co. Chartered Accountants, Pune</p>
              </div>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="text-xs font-bold text-[#B79A61] hover:underline cursor-pointer"
              >
                Discuss with Author &rarr;
              </button>
            </div>

          </div>

        </div>
      </section>

      <ConsultationCTA onOpenConsultation={onOpenConsultation} />
    </>
  );
};
