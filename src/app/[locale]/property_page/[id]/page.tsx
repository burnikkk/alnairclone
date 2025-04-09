import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { IProperty } from '@/types/property';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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
    <div className="h-full overflow-auto">
      <Header />
      <Separator />
      <div className="grid grid-cols-[2fr_1fr] gap-6 p-10">
        <div className="space-y-4 overflow-auto">
          <Image
            src={'/icons/img.png'}
            alt={property.title}
            width={400}
            height={300}
            objectFit="contain"
            className="rounded-xl w-auto h-[300px]"
          />
          <div className="bg-white border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{property.title}</h2>
            <p className="text-gray-500">{property.city}</p>
            <p className="text-gray-600">{property.developer}</p>
            <div className="text-sm pt-2">
              <p>Завершение: {property.completionDate}</p>
            </div>
            <p className="pt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              asperiores atque dolorum eaque fuga laudantium mollitia nihil quis
              quo. Ad, adipisci commodi et ipsa libero magnam. Cumque delectus
              ea minus?
            </p>
          </div>
        </div>
        <div className="h-[250px] p-6 rounded-lg border space-y-4 sticky">
          <div>
            <h3 className="text-lg font-bold">{property.title}</h3>
            <p>{property.city}</p>
            <p>{property.developer}</p>
          </div>
          <Button
            variant="outline"
            className="w-full h-12 bg-violet text-white"
          >
            Наличие
          </Button>
          <Button variant="default" className="w-full h-12">
            Презентация
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
