import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

import ReferralTable from './index';

const timeRanges = [
  { value: '1d', label: '1D' },
  { value: '1w', label: '1W' },
  { value: '1m', label: '1M' },
  { value: '1y', label: '1Y' },
  { value: 'all', label: 'ALL' },
];

function ReferralTabs() {
  return (
    <Tabs
      defaultValue="1w"
      className="w-full"
    >
      <div className="mb-3 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-0">
        <header>
          <h2 className="font-geist text-text-primary text-2xl font-bold">Earnings</h2>
        </header>

        <TabsList className="ml-auto">
          {timeRanges.map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {timeRanges.map(({ value }) => (
        <TabsContent
          key={value}
          value={value}
        >
          <ReferralTable />
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default ReferralTabs;
