import Image from 'next/image';

import EarningCardField from './EarninCardField';

interface Amount {
  amount: number;
  type: string;
}

interface EarningCardProps {
  account: {
    image: {
      src: string;
      alt: string;
    };
    walletAddress: string;
  };
  amountIn: Amount;
  amountOut: Amount;
  price: Amount;
  value: Amount;
  earnedFee: Amount;
  time: string;
}

function EarningCard({ account, amountIn, amountOut, price, value, earnedFee, time }: EarningCardProps) {
  return (
    <article className="bg-background-secondary flex justify-between rounded-xl p-4 pr-10">
      <div className="flex items-center gap-2">
        <Image
          src={account.image.src}
          alt={account.image.alt}
          width={40}
          height={40}
          className="rounded-full"
        />
        <address className="text-text-primary font-geist-medium text-sm font-semibold not-italic">{account.walletAddress}</address>
      </div>

      <EarningCardField
        srLabel="Amount In"
        value={amountIn.amount}
        type={amountIn.type}
      />

      <EarningCardField
        srLabel="Amount Out"
        value={amountOut.amount}
        type={amountOut.type}
      />

      <EarningCardField
        srLabel="Price"
        value={price.amount}
        type={price.type}
      />

      <EarningCardField
        srLabel="Value"
        value={value.amount}
        type={value.type}
      />

      <EarningCardField
        srLabel="Earned Fee"
        value={earnedFee.amount}
        type={earnedFee.type}
      />

      <EarningCardField
        srLabel="Time"
        value={time}
      />
    </article>
  );
}

export default EarningCard;
