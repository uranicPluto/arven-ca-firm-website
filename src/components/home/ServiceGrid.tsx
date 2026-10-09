import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  BarChart3, 
  ShieldCheck, 
  Compass, 
  Building, 
  LayoutDashboard, 
  ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const ServiceGrid: React.FC = () => {
  const services = [
    {
      title: 'Tax & GST',
      slug: 'tax-gst',
      desc: 'Income tax, GST compliance, tax planning and advisory.',
      icon: Receipt
    },
    {
      title: 'Accounting & Bookkeeping',
      slug: 'accounting',
      desc: 'Accurate accounting, financial statements and management reporting.',
      icon: BarChart3
    },
    {
      title: 'Audit & Assurance',
      slug: 'audit',
      desc: 'Statutory, tax and internal audit support.',
      icon: ShieldCheck
    },
    {
      title: 'Business Advisory',
      slug: 'business-advisory',
      desc: 'Practical financial and strategic guidance for growing businesses.',
      icon: Compass
    },
    {
      title: 'Company Formation & Compliance',
      slug: 'company-formation',
      desc: 'Business setup, ROC compliance and ongoing corporate requirements.',
      icon: Building
    },
    {
      title: 'Virtual CFO',
      slug: 'virtual-cfo',
      desc: 'Financial reporting, cash-flow planning and decision support for growing businesses.',
      icon: LayoutDashboard
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-[#E2DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="PRACTICE AREAS"
          title="Our Services"
          subtitle="Professional accounting, taxation and advisory services built around your needs."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.slug}
                className="bg-[#FAF9F5] rounded-2xl p-8 border border-[#E2DDD0] hover:border-[#B79A61]/60 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#081A2B] text-[#B79A61] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#081A2B] tracking-tight group-hover:text-[#B79A61] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-[#66717C] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200/80">
                  <Link
                    to={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#081A2B] group-hover:text-[#B79A61] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
