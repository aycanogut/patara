import { DynamicIcon } from 'lucide-react/dynamic';

import { Button } from '@/components/ui/button';

import BrandLogo from './brand-logo';
import InputCommandMenu from './input-command-menu';
import UserAuth from './user-auth';

function Header() {
  return (
    <header className="bg-background-default flex h-16 items-center justify-between gap-10 p-2 md:h-20 md:p-5">
      <div className="flex items-center gap-4 lg:min-w-[16.75rem]">
        <Button
          variant="ghost"
          size="tight"
          className="size-10"
        >
          <DynamicIcon
            name="menu"
            className="text-text-primary"
          />
        </Button>

        <BrandLogo
          width={134}
          height={36}
          asLink
        />
      </div>

      <InputCommandMenu />

      <div className="flex items-center gap-1.5 sm:gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="bg-background-secondary hover:bg-background-secondary/80 size-8 sm:size-10"
        >
          <DynamicIcon
            name="bell"
            className="text-text-primary size-4 sm:size-6"
          />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="bg-background-secondary hover:bg-background-secondary/80 size-8 sm:size-10"
        >
          <DynamicIcon
            name="settings"
            className="text-text-primary size-4 sm:size-6"
          />
        </Button>

        <UserAuth />
      </div>
    </header>
  );
}

export default Header;
