export const sortProperties = (properties: any[], sortOption: string) => {
  switch (sortOption) {
    case 'new':
      return [...properties].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    case 'old':
      return [...properties].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    case 'price-desc':
      return [...properties].sort((a, b) => b.price.amount - a.price.amount);
    case 'price-asc':
      return [...properties].sort((a, b) => a.price.amount - b.price.amount);
    case 'sqm-desc':
      return [...properties].sort((a, b) => b.price.amount - a.price.amount);
    case 'sqm-asc':
      return [...properties].sort((a, b) => a.price.amount - b.price.amount);
    case 'date-desc':
      return [...properties].sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime());
    case 'date-asc':
      return [...properties].sort((a, b) => new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime());
    case 'all':
      return properties;
  }
};
