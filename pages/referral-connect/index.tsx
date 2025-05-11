import ReferralHero from '@/components/referral-hero';
import Layout from '@/layout';

function ReferralConnect() {
  return (
    <Layout meta={{ title: 'Referral Connect' }}>
      <section className="container mx-auto h-screen max-w-[87.5rem] overflow-x-hidden px-4 pt-5 pb-28 md:px-4 xl:px-0">
        <ReferralHero />
      </section>
    </Layout>
  );
}

export default ReferralConnect;
