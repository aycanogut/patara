import OrbitAvatars from '@/components/orbit-avatars/orbit-avatars';
import { Button } from '@/components/ui/button';

function ReferralCard() {
  return (
    <article className="bg-background-primary border-border-default group mx-3 flex max-w-[29.125rem] flex-col items-center gap-5 overflow-hidden rounded-3xl border px-2 py-5 sm:mx-0 md:gap-20 md:px-4 md:py-10">
      <OrbitAvatars />

      <div className="flex flex-col items-center gap-5 md:gap-10">
        <header className="mt-2 flex flex-col gap-3 md:gap-5">
          <h1 className="text-text-primary text-center text-2xl font-medium md:leading-4">Refer friends and earn with Patara!</h1>
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
