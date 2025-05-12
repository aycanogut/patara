import Image from 'next/image';

import EarningCardField from './card-field';

interface Amount {
  amount: number;
  type: string;
}

interface EarningCardProps {
  id: number;
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
  if (!account) {
    return null;
  }

  return (
    <article className="bg-background-secondary flex justify-between rounded-xl p-4 pr-10">
      <div className="flex items-center gap-2">
        <div className="relative size-10">
          <Image
            src={account.image.src}
            alt={account.image.alt || 'User Avatar'}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <address className="text-text-primary font-geist-medium text-sm font-semibold not-italic">{account.walletAddress}</address>
      </div>

      {amountIn && (
        <EarningCardField
          srLabel="Amount In"
          value={amountIn.amount}
          type={amountIn.type}
        />
      )}

      {amountOut && (
        <EarningCardField
          srLabel="Amount Out"
          value={amountOut.amount}
          type={amountOut.type}
        />
      )}

      {price && (
        <EarningCardField
          srLabel="Price"
          value={price.amount}
          type={price.type}
        />
      )}

      {value && (
        <EarningCardField
          srLabel="Value"
          value={value.amount}
          type={value.type}
        />
      )}

      {earnedFee && (
        <EarningCardField
          srLabel="Earned Fee"
          value={earnedFee.amount}
          type={earnedFee.type}
        />
      )}

      {time && (
        <EarningCardField
          srLabel="Time"
          value={time}
        />
      )}
    </article>
  );
}

export default EarningCard;
