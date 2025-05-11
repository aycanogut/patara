import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';

import { Button } from './ui/button';
import { Input } from './ui/input';

function InputCommandMenu() {
  const [open, setOpen] = useState(false);

  const { push } = useRouter();

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
        size="xs"
        className="bg-background-primary hover:bg-background-secondary hover:border-border-primary absolute top-1/2 right-2 h-6 w-8 -translate-y-1/2 rounded-lg border border-transparent"
      >
        <kbd className="font-geist text-text-secondary text-xs font-medium">⌘K</kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Search for accounts, platforms, NFTs, tokens" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup
            heading="Suggestions"
            className="p-2"
          >
            <CommandItem
              onSelect={() => {
                push('/');
              }}
            >
              Home
            </CommandItem>
            <CommandItem
              onSelect={() => {
                push('/referral-connect');
              }}
            >
              Referral Connect
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}

export default InputCommandMenu;
