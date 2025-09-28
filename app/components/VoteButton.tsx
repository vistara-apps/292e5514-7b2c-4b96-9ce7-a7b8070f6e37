'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface VoteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'yes' | 'no';
  children: React.ReactNode;
}

export function VoteButton({ 
  variant, 
  children, 
  className, 
  ...props 
}: VoteButtonProps) {
  return (
    <button
      className={cn(
        'vote-button',
        variant === 'yes' ? 'vote-yes' : 'vote-no',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
