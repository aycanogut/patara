import InfoCard, { InfoCardProps } from './info-card';

export const mockData: InfoCardProps[] = [
  {
    id: 1,
    label: 'Total Earned Fee',
    value: '$1,000.00',
    icon: 'hand-coins',
  },
  {
    id: 2,
    label: 'Unclaimed Fee',
    value: '$500.00',
    icon: 'asterisk',
    buttonProps: {
      children: 'Claim',
    },
  },
  {
    id: 3,
    label: 'Total Referral Points',
    value: '1289',
    icon: 'gift',
  },
  {
    id: 4,
    label: 'Referrals',
    value: '34',
    icon: 'user-circle',
  },
];

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
