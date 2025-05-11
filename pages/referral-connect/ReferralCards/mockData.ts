import { InfoCardProps } from '@/pages/referral-connect/ReferralCards/info-card';

const mockData: InfoCardProps[] = [
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

export default mockData;
