import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-10 bg-black p-20">
      <Input
        className="h-10 w-[29rem] rounded-xl border p-2 pl-10"
        placeholder="Enter Accounts, Platforms, NFTs, Token"
        prependIconProps={{
          name: 'search',
          className: 'text-text-secondary',
        }}
      />

      <Button emphasis="strong">Connect/Sign in</Button>
    </div>
  );
}
