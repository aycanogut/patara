import cn from '@/lib/utils/cn';

interface EarningCardFieldProps {
  srLabel: string;
  value: string | number;
  type?: string;
  className?: string;
}

const EarningCardField = ({ srLabel, value, type, className }: EarningCardFieldProps) => (
  <dl className="flex items-center">
    <dt className="sr-only">{srLabel}</dt>
    <dd>
      <data
        value={value.toString()}
        className={cn(className, 'font-geist text-text-primary flex gap-1 text-sm font-medium')}
      >
        {type ? (
          <>
            <span className="text-text-secondary">{type}</span> {value}
          </>
        ) : (
          value
        )}
      </data>
    </dd>
  </dl>
);

export default EarningCardField;
