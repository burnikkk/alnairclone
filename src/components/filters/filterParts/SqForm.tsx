import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form/form';
import { FormInput } from '@/components/ui/form/formInput';
import { IPrice } from '@/types/property';
import { handleSubmit } from '@/utils/handleSumbit';
import { useSettings } from '@/hooks/useSettings';

export const SqForm = () => {
  const form = useForm<IPrice>({
    defaultValues: {
      pricePer: 'object',
      minPrice: '',
      maxPrice: '',
    },
  });

  const { selectedMeasure } = useSettings();

  return (
    <Form context={form} onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 text-center bg-gray-100 text-gray-500 p-2 rounded-md text-sm ">
        <div>
          <FormInput
            name="minPrice"
            placeholder={`Площадь от (${selectedMeasure})`}
            inputMode="numeric"
            className=" text-lg font-semibold text-black text-center border-none shadow-none"
            IMask={{
              mask: Number,
              thousandsSeparator: ' ',
            }}
          />
        </div>
        <div>
          <FormInput
            name="maxPrice"
            placeholder={`Площадь до (${selectedMeasure})`}
            inputMode="numeric"
            className="text-lg font-semibold text-black text-center border-none shadow-none"
            IMask={{
              mask: Number,
              thousandsSeparator: ' ',
            }}
          />
        </div>
      </div>
    </Form>
  );
};
