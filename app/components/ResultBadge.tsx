'use client';

import { cn } from '@/lib/utils';

interface ResultBadgeProps {
  variant: 'correct' | 'incorrect';
  children: React.ReactNode;
  className?: string;
}

export function ResultBadge({ variant, children, className }: ResultBadgeProps) {
  return (
    <div
      className={cn(
        'badge',
        variant === 'correct' ? 'badge-success' : 'badge-error',
        className
      )}
    >
      {variant === 'correct' ? '✓' : '✗'} {children}
    </div>
  );
}
