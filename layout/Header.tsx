import { DynamicIcon } from 'lucide-react/dynamic';

import BrandLogo from '@/components/brand-logo';
import InputCommandMenu from '@/components/input-command-menu';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <header className="bg-background-default flex h-16 items-center justify-between gap-10 p-2 md:h-20 md:p-5">
      <div className="flex items-center gap-4">
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

        <Button emphasis="strong">Connect/Sign in</Button>
      </div>
    </header>
  );
}

export default Header;
