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
          className="size-4 p-px"
        />
      </Button>

      <Button
        variant="outline"
        size="xs"
        className="size-10"
      >
        <DynamicIcon
          name="arrow-right"
          className="size-4 p-px"
        />
      </Button>
    </div>
  );
}

export default ReferralTableButtons;
