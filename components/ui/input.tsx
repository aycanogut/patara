import { ComponentProps, HTMLAttributes, Ref } from 'react';

import { DynamicIcon, IconName } from 'lucide-react/dynamic';

import cn from '@/lib/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  ref?: Ref<HTMLInputElement>;
  rootProps?: HTMLAttributes<HTMLDivElement>;
  prependIconProps?: {
    name: IconName;
    className?: string;
  };
  error?: string;
}

function Input({ id, className, 'aria-label': ariaLabel, ref, rootProps, prependIconProps, error, type, ...props }: InputProps) {
  return (
    <div className={cn('relative flex flex-col gap-2', rootProps?.className)}>
      {ariaLabel && (
        <label
          htmlFor={id}
          className="font-inter text-left text-base font-normal text-black"
        >
          {ariaLabel}
        </label>
      )}

      {prependIconProps && (
        <DynamicIcon
          name={prependIconProps.name}
          className={cn(prependIconProps.className, 'absolute top-2 left-2 size-6')}
        />
      )}

      <input
        type={type}
        data-slot="input"
        aria-label={ariaLabel}
        ref={ref}
        className={cn(
          'bg-background-secondary border-border-primary',
          'font-geist text-sm font-medium transition',
          'placeholder:text-text-secondary text-text-primary selection:bg-text-primary',
          'hover:border-text-secondary',
          'focus-visible:ring-text-secondary focus-visible:ring-2 focus-visible:outline-none',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60',
          className
        )}
        {...props}
      />

      {error && <span className="font-inter text-xs font-medium text-red-400">{error}</span>}
    </div>
  );
}

export { Input };
