'use client';
import React from 'react';
import MultipleSelector, {
  Option,
} from '@/components/ui/multi-selector-search';
import { useFilters } from '@/hooks/useFilters';
import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fetchSearchResults } from './fetchSearchResults';

export const SearchBar = () => {
  const [isTriggered, setIsTriggered] = React.useState(false);
  const { setAll } = useFilters();

  const handleChange = (options: Option[]) => {
    const titles = options
      .filter((opt) => opt.value?.startsWith('title:'))
      .map((opt) => opt.value!.replace('title:', ''));

    const developers = options
      .filter((opt) => opt.value?.startsWith('developer:'))
      .map((opt) => opt.value!.replace('developer:', ''));

    setAll({
      title: titles.length > 0 ? titles.join(',') : '',
      developer: developers.length > 0 ? developers.join(',') : '',
    });
  };

  return (
    <div
      className={cn(
        'relative flex items-center',
        'w-full min-h-[60px] rounded-2xl border-none',
        'border-gray-300 bg-white px-4 py-3'
      )}
    >
      <SearchIcon className="h-5 w-5 text-gray-400" />
      <MultipleSelector
        onSearch={async (value) => {
          setIsTriggered(true);
          const results = await fetchSearchResults(value);
          setIsTriggered(false);
          return results;
        }}
        className="border-none"
        onChange={handleChange}
        defaultOptions={[]}
        creatable={false}
        groupBy="group"
        placeholder='Поиск, например, "Emaar", "Business Bay"...'
        loadingIndicator={
          <p className="py-2 text-center text-lg leading-10">Загрузка...</p>
        }
        emptyIndicator={
          <p className="w-full text-center text-lg leading-10">
            Нет совпадений.
          </p>
        }
      />
    </div>
  );
};
