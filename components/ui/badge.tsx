import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import cn from '@/lib/utils/cn';

const badgeVariants = cva(
  cn(
    'inline-flex max-w-min cursor-pointer items-center justify-center gap-2 text-xs whitespace-nowrap transition-colors sm:text-sm',
    'focus-visible:ring-text-secondary focus-visible:ring-2 focus-visible:outline-none',
    'disabled:pointer-events-none disabled:opacity-50'
  ),
  {
    variants: {
      variant: {
        default: 'bg-text-brand text-text-primary hover:bg-text-brand/80',
      },
      size: {
        default: 'rounded-lg p-2 lg:rounded-xl lg:px-8 lg:py-2.5',
        md: 'rounded-xl p-2 lg:rounded-2xl lg:px-4 lg:py-3.5',
      },
      emphasis: {
        normal: 'font-geist font-medium',
        strong: 'font-inter font-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      emphasis: 'normal',
    },
  }
);

function Badge({ className, variant, asChild = false, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
