import React from 'react';

import InputCommandMenu from '@/components/input-command-menu';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-10 bg-black p-20">
      <InputCommandMenu />
      <Button emphasis="strong">Connect/Sign in</Button>
    </div>
  );
}
