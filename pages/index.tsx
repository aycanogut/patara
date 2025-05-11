import React from 'react';

import BackgroundAvatars from '@/components/background-avatars';
import ReferralCard from '@/components/referral-card';
import Layout from '@/layout';

export default function Home() {
  return (
    <Layout meta={{ title: 'Home' }}>
      <section className="relative z-10 flex h-full items-center justify-center">
        <BackgroundAvatars />
        <ReferralCard />
      </section>
    </Layout>
  );
}
