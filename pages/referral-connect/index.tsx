import Layout from '@/layout';

import EarningCard from './EarningCard';
import ReferralCards from './ReferralCards';
import ReferralHero from './referral-hero';

const mockData = [
  {
    id: 1,
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
    time: '1 day ago',
  },
  {
    id: 2,
    account: {
      image: {
        src: '/logo.svg',
        alt: 'User Avatar',
      },
      walletAddress: '0x1f20e...e2026',
    },
    amountIn: { amount: 2500.0, type: 'SUI' },
    amountOut: { amount: 6250.0, type: 'USDC' },
    price: { amount: 2.5, type: 'USD' },
    value: { amount: 6250.0, type: 'USD' },
    earnedFee: { amount: 0.125, type: 'USD' },
    time: '2 days ago',
  },
  {
    id: 3,
    account: {
      image: {
        src: '/logo.svg',
        alt: 'User Avatar',
      },
      walletAddress: '0x1f20e...e2026',
    },
    amountIn: { amount: 500.0, type: 'SUI' },
    amountOut: { amount: 1250.0, type: 'USDC' },
    price: { amount: 2.5, type: 'USD' },
    value: { amount: 1250.0, type: 'USD' },
    earnedFee: { amount: 0.025, type: 'USD' },
    time: '3 days ago',
  },
  {
    id: 4,
    account: {
      image: {
        src: '/logo.svg',
        alt: 'User Avatar',
      },
      walletAddress: '0x1f20e...e2026',
    },
    amountIn: { amount: 3000.0, type: 'SUI' },
    amountOut: { amount: 7500.0, type: 'USDC' },
    price: { amount: 2.5, type: 'USD' },
    value: { amount: 7500.0, type: 'USD' },
    earnedFee: { amount: 0.15, type: 'USD' },
    time: '4 days ago',
  },
  {
    id: 5,
    account: {
      image: {
        src: '/logo.svg',
        alt: 'User Avatar',
      },
      walletAddress: '0x1f20e...e2026',
    },
    amountIn: { amount: 750.0, type: 'SUI' },
    amountOut: { amount: 1875.0, type: 'USDC' },
    price: { amount: 2.5, type: 'USD' },
    value: { amount: 1875.0, type: 'USD' },
    earnedFee: { amount: 0.0375, type: 'USD' },
    time: '5 days ago',
  },
  {
    id: 6,
    account: {
      image: {
        src: '/logo.svg',
        alt: 'User Avatar',
      },
      walletAddress: '0x1f20e...e2026',
    },
    amountIn: { amount: 1500.0, type: 'SUI' },
    amountOut: { amount: 3750.0, type: 'USDC' },
    price: { amount: 2.5, type: 'USD' },
    value: { amount: 3750.0, type: 'USD' },
    earnedFee: { amount: 0.075, type: 'USD' },
    time: '6 days ago',
  },
  {
    id: 7,
    account: {
      image: {
        src: '/logo.svg',
        alt: 'User Avatar',
      },
      walletAddress: '0x1f20e...e2026',
    },
    amountIn: { amount: 2000.0, type: 'SUI' },
    amountOut: { amount: 5000.0, type: 'USDC' },
    price: { amount: 2.5, type: 'USD' },
    value: { amount: 5000.0, type: 'USD' },
    earnedFee: { amount: 0.1, type: 'USD' },
    time: '7 days ago',
  },
  {
    id: 8,
    account: {
      image: {
        src: '/logo.svg',
        alt: 'User Avatar',
      },
      walletAddress: '0x1f20e...e2026',
    },
    amountIn: { amount: 400.0, type: 'SUI' },
    amountOut: { amount: 1000.0, type: 'USDC' },
    price: { amount: 2.5, type: 'USD' },
    value: { amount: 1000.0, type: 'USD' },
    earnedFee: { amount: 0.02, type: 'USD' },
    time: '8 days ago',
  },
  {
    id: 9,
    account: {
      image: {
        src: '/logo.svg',
        alt: 'User Avatar',
      },
      walletAddress: '0x1f20e...e2026',
    },
    amountIn: { amount: 1800.0, type: 'SUI' },
    amountOut: { amount: 4500.0, type: 'USDC' },
    price: { amount: 2.5, type: 'USD' },
    value: { amount: 4500.0, type: 'USD' },
    earnedFee: { amount: 0.09, type: 'USD' },
    time: '9 days ago',
  },
  {
    id: 10,
    account: {
      image: {
        src: '/logo.svg',
        alt: 'User Avatar',
      },
      walletAddress: '0x1f20e...e2026',
    },
    amountIn: { amount: 2200.0, type: 'SUI' },
    amountOut: { amount: 5500.0, type: 'USDC' },
    price: { amount: 2.5, type: 'USD' },
    value: { amount: 5500.0, type: 'USD' },
    earnedFee: { amount: 0.11, type: 'USD' },
    time: '10 days ago',
  },
];

function ReferralConnect() {
  return (
    <Layout meta={{ title: 'Referral Connect' }}>
      <section className="bg-background-default container mx-auto flex max-w-[87.5rem] flex-col items-center gap-10 overflow-x-hidden px-4 pt-5 pb-28 md:px-4 xl:flex-row xl:justify-between xl:gap-4 2xl:px-0">
        <ReferralHero />
        <ReferralCards />
      </section>

      <div className="container mx-auto flex max-w-[87.5rem] flex-col gap-2">
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
