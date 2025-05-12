import cn from '@/lib/utils/cn';

interface EarningCardFieldProps {
  srLabel: string;
  value: string | number;
  type?: string;
  className?: string;
}

function EarningCardField({ srLabel, value, type, className }: EarningCardFieldProps) {
  if (!value) return null;

  return (
    <dl className="flex items-center">
      <dt className="sr-only">{srLabel}</dt>
      <dd>
        <data
          value={String(value)}
          className={cn(className, 'font-geist text-text-primary flex gap-1 text-sm font-medium')}
        >
          {type ? (
            <>
              {value} <span className="text-text-secondary">{type}</span>
            </>
          ) : (
            value
          )}
        </data>
      </dd>
    </dl>
  );
}

export default EarningCardField;
