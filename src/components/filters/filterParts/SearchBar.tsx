import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';
import { useFilters } from '@/hooks/useFilters';

export const SearchBar = () => {
  const { setAll, filters } = useFilters();

  return (
    <div
      className={cn(
        'relative flex items-center',
        'w-full min-h-[60px] rounded-2xl border-none',
        'border-gray-300 bg-white px-4 py-3'
      )}
    >
      <SearchIcon className="h-5 w-5 text-gray-400" />
      <Input
        type="text"
        value={filters.searchQuery}
        onChange={(e) => setAll({ searchQuery: e.target.value })}
        placeholder='Поиск, например, "Emaar", "Business Bay"'
        className="flex-1 border-none bg-transparent px-2 text-gray-600 focus:ring-0"
      />
    </div>
  );
};
