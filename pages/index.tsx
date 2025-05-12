import Layout from '@/layout';

import BackgroundAvatars from './(home)/background-avatars';
import ReferralCard from './(home)/referral-card';

export default function Home() {
  return (
    <Layout meta={{ title: 'Home' }}>
      <section className="relative z-10 flex h-[calc(100vh-4rem)] items-center justify-center lg:h-[calc(100vh-5rem)]">
        <BackgroundAvatars />
        <ReferralCard />
      </section>
    </Layout>
  );
}
