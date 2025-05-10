import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 text-sm whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-text-primary  focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-text-brand text-text-primary hover:bg-text-brand/80',
      },
      size: {
        default: 'rounded-xl px-8 py-2.5',
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

export default buttonVariants;
