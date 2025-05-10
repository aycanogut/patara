import React from 'react';

import ReferralCard from '@/components/referral-card';
import Layout from '@/layout';

export default function Home() {
  return (
    <Layout meta={{ title: 'Anasayfa' }}>
      <div className="flex h-full items-center justify-center">
        <ReferralCard />
      </div>
    </Layout>
  );
}
