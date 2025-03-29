import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form/form';
import { FormInput } from '@/components/ui/form/formInput';
import { useSettings } from '@/hooks/useSettings';
import { useFilters } from '@/hooks/useFilters';
import { IAreaFilter } from '@/types/filters';

export const Area = () => {
  const { filters, setAll } = useFilters();
  const form = useForm<IAreaFilter>({
    values: {
      minArea: filters.minArea,
      maxArea: filters.maxArea,
    },
  });

  const { selectedMeasure } = useSettings();

  return (
    <Form context={form} onSubmit={setAll}>
      <div className="grid grid-cols-2 text-center bg-gray-100 text-gray-500 p-2 rounded-md text-sm ">
        <div>
          <FormInput
            name="minArea"
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
            name="maxArea"
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
