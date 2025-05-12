import Layout from '@/layout';

import ReferralCards from './ReferralCards';
import ReferralTableWrapper from './ReferralTable/ReferralTableWrapper';
import ReferralHero from './referral-hero';

function ReferralConnect() {
  return (
    <Layout meta={{ title: 'Referral Connect' }}>
      <section className="bg-background-default container mx-auto flex max-w-[87.5rem] flex-col gap-4 overflow-x-hidden px-4 pt-5 pb-28 md:px-4 lg:gap-28 2xl:px-0">
        <div className="flex flex-col items-center gap-10 xl:flex-row xl:justify-between xl:gap-4">
          <ReferralHero />
          <ReferralCards />
        </div>

        <ReferralTableWrapper />
      </section>
    </Layout>
  );
}

export default ReferralConnect;
