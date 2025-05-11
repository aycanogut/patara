import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DynamicIcon } from 'lucide-react/dynamic';

import { Avatar, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../../components/ui/dropdown-menu';

function UserAuth() {
  const pathname = usePathname();

  const isLoggedIn = pathname === '/referral-connect'; // checking for mock user login via pathname

  return isLoggedIn ? (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-background-secondary hover:bg-background-secondary/80 flex cursor-pointer items-center gap-2 rounded-lg p-1 pr-2">
        <Avatar className="rounded-none">
          <AvatarImage src="/user.svg" />
        </Avatar>

        <span className="text-text-primary font-geist hidden text-sm font-semibold xl:block">@patara.sui</span>

        <DynamicIcon
          name="chevron-down"
          className="text-text-secondary ml-2.5 size-5"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={12}
      >
        <DropdownMenuItem className="text-text-primary min-w-full cursor-pointer">Profile</DropdownMenuItem>
        <DropdownMenuItem className="text-text-primary min-w-full cursor-pointer">
          <Link href="/">Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Link href="/referral-connect">
      <Badge emphasis="strong">Connect/Sign in</Badge>
    </Link>
  );
}

export default UserAuth;
