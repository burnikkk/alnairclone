import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const PropertyHeading = () => {
  return (
    <div className="w-full pt-2 flex items-center justify-between">
      <p className="text-xl font-semibold">100 из 100 результатов</p>

      <Select>
        <SelectTrigger className="w-[180px] border-none">
          <SelectValue placeholder="По умолчанию" />
        </SelectTrigger>
        <SelectContent className="align-middle">
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="new">Сначала новые</SelectItem>
            <SelectItem value="old">Сначала старые</SelectItem>
            <SelectItem value="price-desc">Цена по убыванию</SelectItem>
            <SelectItem value="price-asc">Цена по возрастанию</SelectItem>
            <SelectItem value="sqm-desc">Цена за м² по убыванию</SelectItem>
            <SelectItem value="sqm-asc">Цена за м² по возрастанию</SelectItem>
            <SelectItem value="date-desc">
              Дата завершения по убыванию
            </SelectItem>
            <SelectItem value="date-asc">
              Дата завершения по возрастанию
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
