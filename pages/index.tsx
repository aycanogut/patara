import Layout from '@/layout';

import BackgroundAvatars from './(home)/background-avatars';
import ReferralCard from './(home)/referral-card';

export default function Home() {
  return (
    <Layout meta={{ title: 'Home' }}>
      <section className="relative z-10 flex items-center justify-center">
        <BackgroundAvatars />
        <ReferralCard />
      </section>
    </Layout>
  );
}
