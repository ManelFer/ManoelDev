import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md transition-colors';
  const variantClasses = {
    primary: 'text-[#191F25] bg-[#f0e9e6] hover:bg-[#B1b2b9]',
    secondary: 'bg-[#191F25] text-[#f0e9e6] hover:bg-[#272E36]',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
}
