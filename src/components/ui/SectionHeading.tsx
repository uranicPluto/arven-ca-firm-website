import React from 'react';
import { clsx } from 'clsx';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className
}) => {
  const isDark = theme === 'dark';

  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto max-w-3xl",
    right: "text-right items-end ml-auto max-w-3xl"
  };

  return (
    <div className={clsx("flex flex-col mb-12 md:mb-16", alignStyles[align], className)}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className={clsx(
            "h-1.5 w-1.5 rounded-full",
            isDark ? "bg-[#B79A61]" : "bg-[#B79A61]"
          )} />
          <span className={clsx(
            "text-xs md:text-sm font-bold uppercase tracking-widest",
            isDark ? "text-[#B79A61]" : "text-[#B79A61]"
          )}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={clsx(
        "text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.18]",
        isDark ? "text-white" : "text-[#081A2B]"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          "mt-4 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl",
          isDark ? "text-gray-300" : "text-[#66717C]"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
