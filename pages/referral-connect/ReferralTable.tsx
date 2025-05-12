import Image from 'next/image';

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const mockData = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  account: {
    image: {
      src: '/logo.svg',
      alt: 'User Avatar',
    },
    walletAddress: '0x1f20e...e2026',
  },
  amountIn: { amount: 1000.0, type: 'SUI' },
  amountOut: { amount: 2500.0, type: 'USDC' },
  price: { amount: 2.5, type: 'USD' },
  value: { amount: 2500.0, type: 'USD' },
  earnedFee: { amount: 0.05, type: 'USD' },
  time: `${index + 1} day ago`,
}));

function ReferralTable() {
  return (
    <Table className="bg-background-primary border-separate border-spacing-y-2 rounded-2xl border border-transparent p-4">
      <TableHeader>
        <TableRow>
          <TableHead className="font-geist text-text-secondary pointer-events-none p-6 text-xs font-medium tracking-wider uppercase">Account</TableHead>
          <TableHead className="font-geist text-text-secondary pointer-events-none p-6 text-xs font-medium tracking-wider uppercase">Amount In</TableHead>
          <TableHead className="font-geist text-text-secondary pointer-events-none p-6 text-xs font-medium tracking-wider uppercase">Amount Out</TableHead>
          <TableHead className="font-geist text-text-secondary pointer-events-none p-6 text-xs font-medium tracking-wider uppercase">Price</TableHead>
          <TableHead className="font-geist text-text-secondary pointer-events-none p-6 text-xs font-medium tracking-wider uppercase">Value</TableHead>
          <TableHead className="font-geist text-text-secondary pointer-events-none p-6 text-xs font-medium tracking-wider uppercase">Earned Fee</TableHead>
          <TableHead className="font-geist text-text-secondary pointer-events-none p-6 text-xs font-medium tracking-wider uppercase">Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockData.map(item => (
          <TableRow
            key={item.id}
            className="hover:bg-background-primary transition-colors"
          >
            <TableCell className="font-geist bg-background-secondary rounded-l-xl border-l border-transparent px-6 py-4 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="relative size-10">
                  <Image
                    src={item.account.image.src}
                    alt={item.account.image.alt ?? 'User Avatar'}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <address className="text-text-primary font-geist text-sm font-semibold not-italic">{item.account.walletAddress}</address>
              </div>
            </TableCell>
            <TableCell className="font-geist bg-background-secondary px-6 py-4 text-sm font-medium">
              {item.amountIn.amount.toLocaleString()} <span className="text-text-secondary">{item.amountIn.type}</span>
            </TableCell>
            <TableCell className="font-geist bg-background-secondary px-6 py-4 text-sm font-medium">
              {item.amountOut.amount.toLocaleString()} <span className="text-text-secondary">{item.amountOut.type}</span>
            </TableCell>
            <TableCell className="font-geist bg-background-secondary px-6 py-4 text-sm font-medium">${item.price.amount.toFixed(2)}</TableCell>
            <TableCell className="font-geist bg-background-secondary px-6 py-4 text-sm font-medium">
              ${item.value.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </TableCell>
            <TableCell className="font-geist bg-background-secondary px-6 py-4 text-sm font-medium">${item.earnedFee.amount.toFixed(2)}</TableCell>
            <TableCell className="font-geist bg-background-secondary rounded-r-xl border-r border-transparent px-6 py-4 text-sm font-medium">
              {item.time}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ReferralTable;
