import React from 'react';
import { clsx } from 'clsx';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'slate' | 'green' | 'red' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  className
}) => {
  const base = "inline-flex items-center font-medium rounded-full tracking-wide uppercase transition-colors";
  
  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5 font-semibold",
    md: "text-xs px-3 py-1 font-semibold"
  };

  const variantStyles = {
    gold: "bg-[#B79A61]/15 text-[#8A6F36] border border-[#B79A61]/30",
    navy: "bg-[#081A2B]/10 text-[#081A2B] border border-[#081A2B]/15",
    slate: "bg-[#66717C]/15 text-[#3E4752] border border-[#66717C]/25",
    green: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    red: "bg-rose-50 text-rose-800 border border-rose-200",
    outline: "border border-[#081A2B]/20 text-[#081A2B] bg-transparent"
  };

  return (
    <span className={clsx(base, sizeStyles[size], variantStyles[variant], className)}>
      {children}
    </span>
  );
};
