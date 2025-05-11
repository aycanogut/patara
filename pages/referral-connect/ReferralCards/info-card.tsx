import { DynamicIcon, IconName } from 'lucide-react/dynamic';

import { Button, ButtonProps } from '@/components/ui/button';

export interface InfoCardProps {
  id: number;
  label: string;
  value: string;
  icon: IconName;
  buttonProps?: ButtonProps;
}

function InfoCard({ label, value, icon, buttonProps }: InfoCardProps) {
  return (
    <article className="bg-background-primary flex items-center gap-4 rounded-2xl p-4 py-3">
      <span className="bg-background-secondary flex size-12 items-center justify-center rounded-lg">
        <DynamicIcon
          name={icon}
          className="text-primary-blue size-6"
        />
      </span>

      <div className="flex flex-col gap-2">
        <p className="font-geist text-text-secondary text-sm">{label}</p>
        <p className="font-geist text-text-primary text-2xl font-medium">{value}</p>
      </div>

      {buttonProps && (
        <Button
          size="md"
          emphasis="strong"
          className="ml-auto"
          {...buttonProps}
        />
      )}
    </article>
  );
}

export default InfoCard;
