import { Button } from '@/components/ui/button';

function ReferralCard() {
  return (
    <article className="bg-background-primary border-border-primary flex max-h-[40.1875rem] max-w-[29.125rem] flex-col rounded-3xl border px-5 py-10">
      <div className="flex flex-col items-center gap-9">
        <header className="flex flex-col gap-5">
          <h1 className="text-text-primary text-center text-2xl leading-4 font-medium">Refer friends and earn with Patara!</h1>
          <p className="text-text-secondary px-2 text-center text-base leading-6">
            Invite your friends to Patara and earn a share of their on-chain rewards forever!
          </p>
        </header>

        <Button size="md">Connect/Sign in</Button>
      </div>
    </article>
  );
}

export default ReferralCard;
