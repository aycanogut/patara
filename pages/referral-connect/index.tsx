import ReferralHero from '@/components/referral-hero';
import Layout from '@/layout';

import ReferralCards from './ReferralCards';

function ReferralConnect() {
  return (
    <Layout meta={{ title: 'Referral Connect' }}>
      <section className="bg-background-default container mx-auto flex h-auto max-w-[87.5rem] flex-col items-center gap-10 overflow-x-hidden px-4 pt-5 pb-28 md:px-4 xl:flex-row xl:justify-between xl:gap-4 2xl:px-0">
        <ReferralHero />
        <ReferralCards />
      </section>
    </Layout>
  );
}

export default ReferralConnect;
