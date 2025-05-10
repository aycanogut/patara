import { DynamicIcon } from 'lucide-react/dynamic';

import BrandLogo from '@/components/brand-logo';
import InputCommandMenu from '@/components/input-command-menu';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <header className="flex h-16 items-center justify-between gap-10 bg-neutral-900 p-2 md:h-20 md:p-5">
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
      <Button emphasis="strong">Connect/Sign in</Button>
    </header>
  );
}

export default Header;
