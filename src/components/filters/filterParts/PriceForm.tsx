import { UseFormReturn } from 'react-hook-form';
import { FormInput } from '@/components/ui/form/formInput';
import { useSettings } from '@/hooks/useSettings';
import { IPrice } from '@/types/property';

interface PriceFormProps {
  form: UseFormReturn<IPrice>;
}

export const PriceForm = ({ form }: PriceFormProps) => {
  if (!form) {
    console.error('PriceForm не получил form!');
    return null;
  }

  const { selectedCurrency } = useSettings();
  const { register } = form;

  return (
    <div className="grid grid-cols-2 text-center bg-gray-100 text-gray-500 p-2 rounded-md text-sm">
      <div>
        <FormInput
          {...register('minPrice')}
          placeholder={`Мин. цена (${selectedCurrency})`}
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
          {...register('maxPrice')}
          placeholder={`Макс. цена (${selectedCurrency})`}
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
