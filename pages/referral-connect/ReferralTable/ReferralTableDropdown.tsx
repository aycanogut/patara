import Link from 'next/link';

import { DynamicIcon } from 'lucide-react/dynamic';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

function ReferralTableDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-background-secondary hover:bg-background-secondary/80 border-border-primary flex h-10 cursor-pointer items-center gap-1 rounded-lg border p-2">
        <span className="text-text-primary font-geist text-sm font-semibold">10 Transaction</span>

        <DynamicIcon
          name="chevron-down"
          className="text-text-secondary size-5"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={12}
      >
        <DropdownMenuItem className="text-text-primary min-w-full cursor-pointer">20 Transaction</DropdownMenuItem>
        <DropdownMenuItem className="text-text-primary min-w-full cursor-pointer">30 Transaction</DropdownMenuItem>
        <DropdownMenuItem className="text-text-primary min-w-full cursor-pointer">40 Transaction</DropdownMenuItem>
        <DropdownMenuItem className="text-text-primary min-w-full cursor-pointer">50 Transaction</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ReferralTableDropdown;
