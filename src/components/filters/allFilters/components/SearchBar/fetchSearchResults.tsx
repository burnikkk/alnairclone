import { Option } from '@/components/ui/multi-selector-search';

export const fetchSearchResults = async (query: string): Promise<Option[]> => {
  const res = await fetch(`/api/properties?searchQuery=${query}`);
  const data = await res.json();
  const result: Option[] = [];
  const seenDevelopers = new Set<string>();
  const seenTitles = new Set<string>();

  data.data.forEach((item: any) => {
    if (item.title && !seenTitles.has(item.title)) {
      seenTitles.add(item.title);
      result.push({
        label: item.title,
        value: `title:${item.title}`,
        group: 'Объекты',
      });
    }

    if (item.developer && !seenDevelopers.has(item.developer)) {
      seenDevelopers.add(item.developer);
      result.push({
        label: item.developer,
        value: `developer:${item.developer}`,
        group: 'Застройщик',
      });
    }
  });

  return result;
};
