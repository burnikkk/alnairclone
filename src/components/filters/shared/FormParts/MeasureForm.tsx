import { FormInput } from '@/components/ui/form/formInput';
import { useSettings } from '@/hooks/useSettings';
import { useTranslations } from 'next-intl';

export const MeasureForm = () => {
  const { selectedMeasure } = useSettings();
  const t = useTranslations('MeasureForm');

  return (
    <div className="grid grid-cols-2 text-center bg-gray-100 text-gray-500 p-2 rounded-md text-sm">
      <div>
        <FormInput
          name="minArea"
          placeholder={`${t('minArea')} (${selectedMeasure})`}
          inputMode="numeric"
          className="text-lg font-semibold text-black text-center border-none shadow-none"
          IMask={{
            mask: Number,
            thousandsSeparator: ' ',
          }}
        />
      </div>
      <div>
        <FormInput
          name="maxArea"
          placeholder={`${t('maxArea')} (${selectedMeasure})`}
          inputMode="numeric"
          className="text-lg font-semibold text-black text-center border-none shadow-none"
          IMask={{
            mask: Number,
            thousandsSeparator: ' ',
          }}
        />
      </div>
    </div>
  );
};
