import React from 'react';
import { clsx } from 'clsx';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost' | 'darkOutline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B79A61] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold"
  };

  const variantStyles = {
    primary: "bg-[#081A2B] text-white hover:bg-[#0f273e] shadow-sm hover:shadow-md border border-[#081A2B]",
    secondary: "bg-[#121820] text-white hover:bg-[#1f2937] shadow-sm",
    gold: "bg-[#B79A61] text-[#081A2B] font-semibold hover:bg-[#c4a973] shadow-sm hover:shadow-md border border-[#B79A61]",
    outline: "border border-[#081A2B]/20 text-[#081A2B] hover:bg-[#081A2B]/5 hover:border-[#081A2B]/40 bg-transparent",
    darkOutline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40 bg-transparent",
    ghost: "text-[#081A2B] hover:bg-[#081A2B]/5 bg-transparent"
  };

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
        </>
      )}
    </button>
  );
};
