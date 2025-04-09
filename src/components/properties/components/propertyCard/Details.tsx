import { EDiscountType, IProperty as PropertyType } from '@/types/property';
import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { ChevronUp } from 'lucide-react';
import { useSettings } from '@/hooks/useSettings';
import { useTranslations } from 'next-intl';
import CompletionDate from '@/components/properties/components/propertyCard/CompletionDate';
import { formatCurrency } from '@/utils/currency';
import { convertPrice } from '@/utils/convertPrice';
import { useCurrencyRates } from '@/hooks/useCurrencyRates';
import { cn } from '@/lib/utils';
import usePropertyImage from '@/hooks/usePropertyImages';

interface DetailsProps {
  property: PropertyType;
  type: string;
}

export const Details = ({ property, type }: DetailsProps) => {
  const { selectedCurrency } = useSettings();
  const { rates: exchangeRates } = useCurrencyRates(selectedCurrency);
  const { imageUrl } = usePropertyImage(type);
  const t = useTranslations('details');
  const tPropertyTypes = useTranslations('propertyTypes');

  return (
    <CardContent
      className={cn(
        'absolute bottom-0 left-0 w-full px-3 py-2 max-h-[120px]',
        'bg-white rounded-xl overflow-hidden',
        'group-hover:max-h-[272px] transition-[max-height] duration-300 ease-in-out'
      )}
    >
      <div className="grid grid-cols-[40px_1fr] items-center gap-3 pb-2 h-[56px]">
        <Image
          src={imageUrl || '/icons/img.png'}
          width={40}
          height={40}
          alt="Логотип"
          className="rounded-md border object-cover w-[40px] h-[40px]"
        />
        <div className="w-full overflow-hidden">
          <h3 className="font-bold truncate">{property.title}</h3>
          <p className="text-xs text-gray-500">{property.developer}</p>
        </div>
      </div>
      <Separator />

      <div className="flex flex-row items-center justify-between pb-2 h-[60px]">
        <div>
          <p className="text-xs pt-2">
            {tPropertyTypes(property.propertyType)}
          </p>
          <p className="text-lg font-semibold">
            {t('from')}{' '}
            {formatCurrency(
              convertPrice(property.price, selectedCurrency, exchangeRates),
              {
                currency: selectedCurrency,
                short: true,
              }
            )}{' '}
            {selectedCurrency}
          </p>
        </div>
        <div className="flex flex-row justify-end items-center">
          {property.discount && (
            <Badge className="w-fit rounded-2xl bg-[#e9faf0] text-[#20cb6a] px-3 py-1 text-xs font-semibold mr-1">
              {property.discount.value}
              {property.discount.type === EDiscountType.PERCENTAGE ? '%' : ''}
            </Badge>
          )}
          <div className="bg-[#f3f3f5] rounded-full transition-transform p-2">
            <ChevronUp className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
          </div>
        </div>
      </div>
      <Separator />

      <div
        className={cn(
          'flex flex-col gap-2 opacity-0 max-h-[110px]',
          'group-hover:opacity-100 transition-opacity duration-300 ease-in-out'
        )}
      >
        <div className="flex flex-col gap-1">
          {property.units.map((unit, index) => (
            <div key={index} className="flex justify-between text-sm">
              <div>
                <span className="font-semibold mr-1">{unit.type}</span>
                <span className="font-normal text-gray-500">
                  {t('from')} {unit.size}
                </span>
              </div>
              <span>
                {t('from')}{' '}
                {formatCurrency(
                  convertPrice(unit.price, selectedCurrency, exchangeRates),
                  {
                    currency: selectedCurrency,
                    short: true,
                  }
                )}{' '}
                {selectedCurrency}
              </span>
            </div>
          ))}
        </div>

        <Separator />

        <div className="flex justify-between items-center text-sm">
          <span className="font-semibold">
            {property.availableUnits} {t('units_available')}
          </span>
          <span className="text-gray-500">
            <CompletionDate date={property.completionDate} />
          </span>
        </div>
      </div>
    </CardContent>
  );
};
