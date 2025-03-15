// import React, { useCallback, useState } from 'react';
// import useSWR from 'swr';
// import { PropertyHeading } from '@/app/components/property/PropertyHeading';
//
// const fetcher = (url: string) => fetch(url).then((res) => res.json());
//
// export const PropertyList = () => {
//   const { data: properties, error } = useSWR('/api/properties', fetcher);
//   const [sortOption, setSortOption] = useState<string>('default');
//
//   if (error) return <div>Ошибка загрузки данных.</div>;
//   if (!properties) return <div>Загрузка...</div>;
//
//   const sortProperties = useCallback((data: any[], option: string) => {
//     switch (option) {
//       case 'price-desc':
//         return data.sort((a, b) => b.price.amount - a.price.amount);
//       case 'price-asc':
//         return data.sort((a, b) => a.price.amount - b.price.amount);
//       case 'sqm-desc':
//         return data.sort(
//           (a, b) => parseInt(b.units[0].size) - parseInt(a.units[0].size)
//         );
//       case 'sqm-asc':
//         return data.sort(
//           (a, b) => parseInt(a.units[0].size) - parseInt(b.units[0].size)
//         );
//       case 'date-desc':
//         return data.sort(
//           (a, b) =>
//             new Date(b.completionDate).getTime() -
//             new Date(a.completionDate).getTime()
//         );
//       case 'date-asc':
//         return data.sort(
//           (a, b) =>
//             new Date(a.completionDate).getTime() -
//             new Date(b.completionDate).getTime()
//         );
//       case 'new':
//         return data.sort((a, b) => parseInt(b.id) - parseInt(a.id));
//       case 'old':
//         return data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
//       default:
//         return data;
//     }
//   }, []);
//   const sortedProperties = sortProperties(properties, sortOption);
//
//   return (
//     <div>
//       <PropertyHeading onSortChange={setSortOption} />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {sortedProperties.map((property) => (
//           <div key={property.id} className="p-4 border rounded">
//             <h3 className="text-lg font-semibold">{property.title}</h3>
//             <p className="text-sm">{property.propertyType}</p>
//             <p className="text-lg font-bold">{property.price.formatted}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
