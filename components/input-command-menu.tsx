import { useState, useEffect } from 'react';

import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';

import { Button } from './ui/button';
import { Input } from './ui/input';

function InputCommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };
    document.addEventListener('keydown', down);

    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div className="relative hidden md:block">
      <Input
        className="h-10 w-80 rounded-xl border p-2 pr-24 pl-10 lg:w-[29rem]"
        placeholder="Enter Accounts, Platforms, NFTs, Token"
        prependIconProps={{
          name: 'search',
          className: 'text-text-secondary',
        }}
      />

      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className="bg-background-primary hover:bg-background-secondary hover:border-border-primary absolute top-1/2 right-2 h-6 w-8 -translate-y-1/2 rounded-lg border border-transparent px-1 py-2"
      >
        <kbd className="font-geist text-text-secondary text-xs font-medium">⌘K</kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Bir komut arayın veya arama yapın..." />
        <CommandList>
          <CommandEmpty>Bir sonuç bulunamadı.</CommandEmpty>
          <CommandGroup heading="Öneriler">
            <CommandItem>Anasayfa</CommandItem>
            <CommandItem>Hakkımızda</CommandItem>
            <CommandItem>İletişim</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}

export default InputCommandMenu;
