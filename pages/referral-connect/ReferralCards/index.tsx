import InfoCard from './info-card';
import mockData from './mockData';

function ReferralCards() {
  return (
    <section className="flex w-full max-w-[38.125rem] flex-col flex-wrap justify-between gap-5 lg:max-w-[59.625rem] xl:max-w-[20.9375rem]">
      {mockData.map(item => (
        <InfoCard
          key={item.id}
          {...item}
        />
      ))}
    </section>
  );
}

export default ReferralCards;
