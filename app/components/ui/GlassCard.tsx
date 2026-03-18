import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'elevated';
  noPadding?: boolean;
}

export default function GlassCard({ 
  children, 
  className = '', 
  variant = 'default',
  noPadding = false 
}: GlassCardProps) {
  const baseStyles = 'glass rounded-xl';
  
  const variantStyles = {
    default: '',
    hover: 'glass-hover cursor-pointer',
    elevated: 'shadow-2xl',
  };
  
  const paddingStyles = noPadding ? '' : 'p-6';
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles} ${className}`}>
      {children}
    </div>
  );
}
