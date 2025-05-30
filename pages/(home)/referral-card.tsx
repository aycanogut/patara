import Link from 'next/link';

import OrbitAvatars from '@/components/orbit-avatars/orbit-avatars';
import { Badge } from '@/components/ui/badge';

function ReferralCard() {
  return (
    <article className="md:bg-background-primary md:border-border-default group z-10 mx-3 flex max-w-[29.125rem] flex-col items-center gap-5 overflow-hidden rounded-3xl border border-transparent px-2 py-10 sm:mx-0 md:mt-16 md:gap-20 md:px-4 lg:mt-18">
      <OrbitAvatars />

      <div className="flex flex-col items-center gap-5 md:gap-10">
        <header className="mt-10 flex flex-col gap-3 md:mt-2 md:gap-5">
          <h1 className="text-text-primary text-center text-2xl font-medium md:leading-4">Refer friends and earn with Patara!</h1>
          <p className="text-text-secondary px-2 text-center text-base leading-6">
            Invite your friends to Patara and earn a share of their on-chain rewards forever!
          </p>
        </header>

        <Link href="/referral-connect">
          <Badge size="md">Connect/Sign in</Badge>
        </Link>
      </div>
    </article>
  );
}

export default ReferralCard;
