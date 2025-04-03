import { FormInput } from '@/components/ui/form/formInput';
import { useSettings } from '@/hooks/useSettings';
import { useTranslations } from 'next-intl';

export const CurrencyForm = () => {
  const { selectedCurrency } = useSettings();
  const t = useTranslations('CurrencyForm');

  return (
    <div className="grid grid-cols-2 text-center bg-gray-100 text-gray-500 p-2 rounded-md text-sm">
      <div>
        <FormInput
          name="minPrice"
          placeholder={`${t('minPrice')} (${selectedCurrency})`}
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
          name="maxPrice"
          placeholder={`${t('maxPrice')} (${selectedCurrency})`}
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
