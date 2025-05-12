import Layout from '@/layout';

import EarningCard from './EarningCard';
import ReferralCards from './ReferralCards';
import ReferralHero from './referral-hero';

const mockData = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  account: {
    image: {
      src: '/logo.svg',
      alt: 'User Avatar',
    },
    walletAddress: '0x1f20e...e2026',
  },
  amountIn: { amount: 1000.0, type: 'SUI' },
  amountOut: { amount: 2500.0, type: 'USDC' },
  price: { amount: 2.5, type: 'USD' },
  value: { amount: 2500.0, type: 'USD' },
  earnedFee: { amount: 0.05, type: 'USD' },
  time: `${index + 1} day ago`,
}));

function ReferralConnect() {
  return (
    <Layout meta={{ title: 'Referral Connect' }}>
      <section className="bg-background-default container mx-auto flex max-w-[87.5rem] flex-col items-center gap-10 overflow-x-hidden px-4 pt-5 pb-28 md:px-4 xl:flex-row xl:justify-between xl:gap-4 2xl:px-0">
        <ReferralHero />
        <ReferralCards />
      </section>

      <div className="container mx-auto flex max-w-[87.5rem] flex-col gap-2 pb-20">
        {mockData.map(item => (
          <EarningCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </Layout>
  );
}

export default ReferralConnect;
