import { DynamicIcon } from 'lucide-react/dynamic';

import { Button } from '@/components/ui/button';

function ReferralTableButtons() {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="xs"
        className="size-10"
      >
        <DynamicIcon
          name="arrow-left"
          className="p-0.5"
        />
      </Button>

      <Button
        variant="outline"
        size="xs"
        className="size-10"
      >
        <DynamicIcon
          name="arrow-right"
          className="p-0.5"
        />
      </Button>
    </div>
  );
}

export default ReferralTableButtons;
