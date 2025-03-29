import { NextRequest, NextResponse } from 'next/server';
import { EBedroom, EDiscountType, IProperty } from '@/types/property';

const mocks: IProperty[] = [
  {
    id: '1',
    isRecommended: true,
    imageUrl: 'https://source.unsplash.com/random/800x600?house',
    title: 'Palm Jumeirah Villa',
    developer: 'Emaar Properties',
    salesStatus: 'reg',
    propertyType: 'villa',
    price: 2500000,
    discount: { value: 5, type: EDiscountType.PERCENTAGE },
    units: [
      { type: EBedroom.FOUR, size: 350, price: 3800000 },
      { type: EBedroom.FIVE, size: 420, price: 4500000 },
      { type: EBedroom.SIX, size: 480, price: 5000000 },
    ],
    availableUnits: 12,
    completionDate: new Date('11/01/2026').toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
    }),
    longitude: 55.1386,
    latitude: 25.1122,
    city: 'Dubai',
  },
  {
    id: '2',
    isRecommended: false,
    imageUrl: 'https://source.unsplash.com/random/800x600?apartment',
    title: 'Downtown Dubai Apartment',
    developer: 'Damac Properties',
    propertyType: 'apparts',
    salesStatus: 'reg',
    price: 1800000,
    units: [
      { type: EBedroom.ONE, size: 75, price: 3000000 },
      { type: EBedroom.TWO, size: 110, price: 4000000 },
    ],
    availableUnits: 8,
    completionDate: new Date('09/01/2028').toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
    }),
    longitude: 55.271,
    latitude: 25.2048,
    city: 'Dubai',
  },
  {
    id: '3',
    isRecommended: true,
    imageUrl: 'https://source.unsplash.com/random/800x600?penthouse',
    title: 'Burj Khalifa Residences',
    developer: 'Emaar Properties',
    salesStatus: 'anons',
    propertyType: 'apparts',
    price: 5000000,
    discount: { value: 7, type: EDiscountType.PERCENTAGE },
    units: [
      { type: EBedroom.THREE, size: 195, price: 3400000 },
      { type: EBedroom.FOUR, size: 250, price: 4500000 },
    ],
    availableUnits: 5,
    completionDate: new Date('6/01/2025').toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
    }),
    longitude: 55.2744,
    latitude: 25.1972,
    city: 'Dubai',
  },
  {
    id: '4',
    isRecommended: false,
    imageUrl: 'https://source.unsplash.com/random/800x600?villa',
    title: 'Bluewaters Island Villa',
    developer: 'Meraas',
    salesStatus: 'startsales',
    propertyType: 'villa',
    price: 3200000,
    units: [
      { type: EBedroom.FIVE, size: 400, price: 6700000 },
      { type: EBedroom.SIX, size: 480, price: 7800000 },
    ],
    availableUnits: 10,
    completionDate: new Date('8/01/2027').toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
    }),
    longitude: 55.1323,
    latitude: 25.0906,
    city: 'Dubai',
  },
  {
    id: '5',
    isRecommended: true,
    imageUrl: 'https://source.unsplash.com/random/800x600?penthouse',
    title: 'Dubai Marina Penthouse',
    developer: 'Select Group',
    salesStatus: 'startsales',
    propertyType: 'penthouse',
    price: 7000000,
    discount: { value: 10, type: EDiscountType.PERCENTAGE },
    units: [
      { type: EBedroom.FOUR, size: 275, price: 2300000 },
      { type: EBedroom.FIVE, size: 330, price: 3500000 },
    ],
    availableUnits: 3,
    completionDate: new Date('10/01/2027').toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
    }),
    longitude: 55.1844,
    latitude: 25.2672,
    city: 'Dubai',
  },
  {
    id: '6',
    isRecommended: true,
    imageUrl: 'https://source.unsplash.com/random/800x600?luxury',
    title: 'Jumeirah Beach Mansion',
    developer: 'Nakheel',
    propertyType: 'villa',
    price: 4500000,
    units: [
      { type: EBedroom.SIX, size: 500, price: 8900000 },
      { type: EBedroom.SEVEN, size: 600, price: 6700000 },
    ],
    availableUnits: 6,
    completionDate: new Date('10/01/2028').toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
    }),
    longitude: 55.1386,
    latitude: 25.1972,
    city: 'Dubai',
  },
  {
    id: '7',
    isRecommended: false,
    imageUrl: 'https://source.unsplash.com/random/800x600?modern',
    title: 'Dubai Hills Apartment',
    developer: 'Emaar Properties',
    propertyType: 'apparts',
    price: 2200000,
    units: [
      { type: EBedroom.TWO, size: 120, price: 1100000 },
      { type: EBedroom.THREE, size: 160, price: 1700000 },
    ],
    availableUnits: 9,
    completionDate: new Date('01/01/2026').toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
    }),
    longitude: 55.1644,
    latitude: 25.2772,
    city: 'Dubai',
  },
  {
    id: '8',
    isRecommended: true,
    imageUrl: 'https://source.unsplash.com/random/800x600?skyscraper',
    title: 'One Za’abeel Sky Villa',
    developer: 'Ithra Dubai',
    propertyType: 'townhouse',
    price: 8500000,
    discount: { value: 6, type: EDiscountType.PERCENTAGE },
    units: [
      { type: EBedroom.FOUR, size: 320, price: 3000000 },
      { type: EBedroom.FIVE, size: 400, price: 4000000 },
    ],
    availableUnits: 4,
    completionDate: new Date('10/01/2026').toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
    }),
    longitude: 55.2744,
    latitude: 25.2972,
    city: 'Dubai',
  },
  {
    id: '9',
    isRecommended: false,
    imageUrl: 'https://source.unsplash.com/random/800x600?highrise',
    title: 'Business Bay Executive Suite',
    developer: 'Damac Properties',
    propertyType: 'house',
    price: 3000000,
    units: [
      { type: EBedroom.TWO, size: 130, price: 1800000 },
      { type: EBedroom.THREE, size: 175, price: 2200000 },
    ],
    availableUnits: 7,
    completionDate: new Date('12/01/2026').toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
    }),
    longitude: 55.2244,
    latitude: 25.1272,
    city: 'Dubai',
  },
  {
    id: '10',
    isRecommended: true,
    imageUrl: 'https://source.unsplash.com/random/800x600?resort',
    title: 'Palm West Beach Residence',
    developer: 'Meraas',
    propertyType: 'studio',
    price: 6200000,
    discount: { value: 8, type: EDiscountType.PERCENTAGE },
    units: [
      { type: EBedroom.FIVE, size: 450, price: 4800000 },
      { type: EBedroom.SIX, size: 550, price: 5500000 },
    ],
    availableUnits: 5,
    completionDate: new Date('10/01/2026').toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
    }),
    longitude: 55.2244,
    latitude: 25.1472,
    city: 'Dubai',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const propertyType = searchParams.get('propertyType');
  const bedrooms = searchParams.get('bedrooms');
  const saleStatus = searchParams.get('saleStatus');
  const minPrice = parseInt(searchParams.get('minPrice') || '0', 10);
  const maxPrice = parseInt(
    searchParams.get('maxPrice') || '1000000000000',
    10
  );

  console.log('minPrice', minPrice);
  console.log('maxPrice', maxPrice);
  console.log('propertyType', propertyType);
  console.log('bedrooms', bedrooms);
  console.log('saleStatus', saleStatus);

  try {
    const filtered = mocks
      .filter((item) =>
        propertyType ? item.propertyType === propertyType : true
      )
      .filter((item) =>
        bedrooms ? item.units.some((unit) => unit.type === bedrooms) : true
      )
      .filter((item) => (saleStatus ? saleStatus === item.salesStatus : true))
      .filter((item) => item.availableUnits > 0)
      .filter((item) => item.price >= minPrice && item.price <= maxPrice);

    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Error handling GET request:', error);

    return NextResponse.json(
      {
        message: 'Error processing request',
      },
      { status: 400 }
    );
  }
}
