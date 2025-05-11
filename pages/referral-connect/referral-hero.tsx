import { DynamicIcon } from 'lucide-react/dynamic';

import OrbitAvatars from '../../components/orbit-avatars/orbit-avatars';
import { Button } from '../../components/ui/button';

function ReferralHero() {
  return (
    <div className="bg-background-primary flex max-w-[38.125rem] flex-col items-center gap-10 rounded-4xl px-4 py-6 md:gap-16 md:p-10 lg:min-h-[25rem] lg:max-w-full lg:flex-row lg:pr-[4.375rem] xl:w-[65.25rem] 2xl:gap-[8.5rem]">
      <div className="flex flex-col gap-4 lg:h-full lg:min-w-[30rem] lg:gap-[4.5rem]">
        <header className="flex flex-col gap-4 lg:gap-6">
          <h1 className="font-inter text-text-primary text-3xl font-medium md:text-[2rem] md:leading-3">Refer and Earn</h1>
          <p className="font-geist text-text-secondary text-base leading-5">
            Invite your friends to Patara and earn a share of <br className="hidden lg:block" />
            their on-chain rewards forever!
          </p>
        </header>

        <div className="flex w-full flex-col gap-5">
          <article className="bg-background-secondary flex w-full flex-col gap-2 rounded-2xl px-4 py-5.5">
            <p className="font-geist text-text-secondary text-sm">Your Referral Link</p>
            <span className="font-geist text-text-primary text-xs font-medium break-all lg:text-base">0x0e0Fcb520F76f3eAC0Aa764De4B97C53Eb366158</span>
          </article>

          <div className="flex w-full gap-3 md:gap-5">
            <Button
              size="md"
              emphasis="strong"
              className="max-w-auto w-1/2"
            >
              Copy Link
            </Button>
            <Button
              size="md"
              className="bg-border-primary hover:bg-border-primary/80 text-text-secondary max-w-auto w-1/2"
            >
              <DynamicIcon
                name="forward"
                className="size-4"
              />
              Share
            </Button>
          </div>
        </div>
      </div>

      <OrbitAvatars />
    </div>
  );
}

export default ReferralHero;
