import { Header } from '@/components/header';
import { Separator } from '@/components/ui/separator';
import { Body } from '@/components/propertyPage/Body';
import { notFound } from 'next/navigation';
import { IProperty } from '@/types/property';
import { PropertyContextProvider } from '@/hooks/usePropertyContext';

interface IPage {
  params: {
    id: string;
  };
}

const PropertyPage = async ({ params }: IPage) => {
  const res = await fetch(`http://localhost:3000/api/properties/${params.id}`);

  if (!res.ok) return notFound();

  const property: IProperty = await res.json();

  return (
    <div className="h-full">
      <Header />
      <Separator />
      <PropertyContextProvider property={property}>
        <Body />
      </PropertyContextProvider>
    </div>
  );
};

export default PropertyPage;
