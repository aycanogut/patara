import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import cn from '@/lib/utils/cn';

const buttonVariants = cva(
  cn(
    'inline-flex cursor-pointer items-center justify-center gap-2 text-xs md:text-sm whitespace-nowrap transition-colors max-w-min',
    'focus-visible:ring-text-secondary focus-visible:ring-2 focus-visible:outline-none',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0'
  ),
  {
    variants: {
      variant: {
        default: 'bg-text-brand text-text-primary hover:bg-text-brand/80',
        ghost: 'bg-transparent text-text-primary',
      },
      size: {
        default: 'rounded-xl p-2 lg:px-8 lg:py-2.5',
        md: 'rounded-2xl p-2 lg:px-4 lg:py-3.5',
        tight: 'p-0 md:p-0 lg:p-0',
        // icon: 'TODO'
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

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, emphasis, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, emphasis, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
