import { ComponentProps } from 'react';

import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
import cn from '@/lib/utils/cn';

function Pagination({ className, ...props }: ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-2', className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: ComponentProps<'li'>) {
  return (
    <li
      data-slot="pagination-item"
      {...props}
    />
  );
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ComponentProps<typeof Button>, 'size'> &
  ComponentProps<'a'>;

function PaginationLink({ className, isActive, ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        'font-geist flex size-10 items-center justify-center rounded-xl border text-sm font-normal transition-colors',
        'bg-background-primary border-border-primary text-text-primary',
        'hover:bg-background-secondary hover:text-text-primary',
        isActive && 'bg-background-secondary border-border-primary text-text-primary',
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-2 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-2 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        'font-geist flex size-10 items-center justify-center rounded-xl border text-sm transition-colors',
        'bg-background-primary border-border-primary text-text-primary',
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon className="size-6" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis };
