import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    return NextResponse.json([
      {
        id: '1',
        isRecommended: true,
        imageUrl: 'https://source.unsplash.com/random/800x600?house',
        title: 'Palm Jumeirah Villa',
        developer: 'Emaar Properties',
        salesStatusType:'reg',
        propertyType: 'Вилла',
        price: {
          amount: 2500000,
          currency: 'AED',
          formatted: 'от 2.5 млн AED',
        },
        discount: { percentage: 5, formatted: '5%' },
        units: [
          { type: '4K', size: '350 м²', price: 3800000 },
          { type: '5K', size: '420 м²', price: 4500000 },
          { type: '6K', size: '480 м²', price: 5000000 },
        ],
        availableUnits: 12,
        completionDate: '4-й кв. 2025',
      },
      {
        id: '2',
        isRecommended: false,
        imageUrl: 'https://source.unsplash.com/random/800x600?apartment',
        title: 'Downtown Dubai Apartment',
        developer: 'Damac Properties',
        propertyType: 'Апартаменты',
        price: {
          amount: 1800000,
          currency: 'AED',
          formatted: 'от 1.8 млн AED',
        },
        units: [
          { type: '1K', size: '75 м²', price: 3000000 },
          { type: '2K', size: '110 м²', price: 4000000 },
        ],
        availableUnits: 8,
        completionDate: '3-й кв. 2026',
      },
      {
        id: '3',
        isRecommended: true,
        imageUrl: 'https://source.unsplash.com/random/800x600?penthouse',
        title: 'Burj Khalifa Residences',
        developer: 'Emaar Properties',
        salesStatusType:'anons',
        propertyType: 'Апартаменты',
        price: { amount: 5000000, currency: 'AED', formatted: 'от 5 млн AED' },
        discount: { percentage: 7, formatted: '7%' },
        units: [
          { type: '3K', size: '195 м²', price: 3400000 },
          { type: '4K', size: '250 м²', price: 4500000 },
        ],
        availableUnits: 5,
        completionDate: '2-й кв. 2025',
      },
      {
        id: '4',
        isRecommended: false,
        imageUrl: 'https://source.unsplash.com/random/800x600?villa',
        title: 'Bluewaters Island Villa',
        developer: 'Meraas',
        salesStatusType:'startsales',
        propertyType: 'Вилла',
        price: {
          amount: 3200000,
          currency: 'AED',
          formatted: 'от 3.2 млн AED',
        },
        units: [
          { type: '5K', size: '400 м²', price: 6700000 },
          { type: '6K', size: '480 м²', price: 7800000 },
        ],
        availableUnits: 10,
        completionDate: '1-й кв. 2027',
      },
      {
        id: '5',
        isRecommended: true,
        imageUrl: 'https://source.unsplash.com/random/800x600?penthouse',
        title: 'Dubai Marina Penthouse',
        developer: 'Select Group',
        salesStatusType:'startsales',
        propertyType: 'Пентхаус',
        price: { amount: 7000000, currency: 'AED', formatted: 'от 7 млн AED' },
        discount: { percentage: 10, formatted: '10%' },
        units: [
          { type: '4K', size: '275 м²', price: 2300000 },
          { type: '5K', size: '330 м²', price: 3500000 },
        ],
        availableUnits: 3,
        completionDate: '4-й кв. 2024',
      },
      {
        id: '6',
        isRecommended: true,
        imageUrl: 'https://source.unsplash.com/random/800x600?luxury',
        title: 'Jumeirah Beach Mansion',
        developer: 'Nakheel',
        propertyType: 'Вилла',
        price: {
          amount: 4500000,
          currency: 'AED',
          formatted: 'от 4.5 млн AED',
        },
        units: [
          { type: '6K', size: '500 м²', price: 8900000 },
          { type: '7K', size: '600 м²', price: 6700000 },
        ],
        availableUnits: 6,
        completionDate: '2-й кв. 2026',
      },
      {
        id: '7',
        isRecommended: false,
        imageUrl: 'https://source.unsplash.com/random/800x600?modern',
        title: 'Dubai Hills Apartment',
        developer: 'Emaar Properties',
        propertyType: 'Апартаменты',
        price: {
          amount: 2200000,
          currency: 'AED',
          formatted: 'от 2.2 млн AED',
        },
        units: [
          { type: '2K', size: '120 м²', price: 1100000 },
          { type: '3K', size: '160 м²', price: 1700000 },
        ],
        availableUnits: 9,
        completionDate: '3-й кв. 2025',
      },
      {
        id: '8',
        isRecommended: true,
        imageUrl: 'https://source.unsplash.com/random/800x600?skyscraper',
        title: 'One Za’abeel Sky Villa',
        developer: 'Ithra Dubai',
        propertyType: 'Пентхаус',
        price: {
          amount: 8500000,
          currency: 'AED',
          formatted: 'от 8.5 млн AED',
        },
        discount: { percentage: 6, formatted: '6%' },
        units: [
          { type: '4K', size: '320 м²', price: 3000000 },
          { type: '5K', size: '400 м²', price: 4000000 },
        ],
        availableUnits: 4,
        completionDate: '1-й кв. 2025',
      },
      {
        id: '9',
        isRecommended: false,
        imageUrl: 'https://source.unsplash.com/random/800x600?highrise',
        title: 'Business Bay Executive Suite',
        developer: 'Damac Properties',
        propertyType: 'Апартаменты',
        price: { amount: 3000000, currency: 'AED', formatted: 'от 3 млн AED' },
        units: [
          { type: '2K', size: '130 м²', price: 1800000 },
          { type: '3K', size: '175 м²', price: 2200000 },
        ],
        availableUnits: 7,
        completionDate: '4-й кв. 2026',
      },
      {
        id: '10',
        isRecommended: true,
        imageUrl: 'https://source.unsplash.com/random/800x600?resort',
        title: 'Palm West Beach Residence',
        developer: 'Meraas',
        propertyType: 'Вилла',
        price: {
          amount: 6200000,
          currency: 'AED',
          formatted: 'от 6.2 млн AED',
        },
        discount: { percentage: 8, formatted: '8%' },
        units: [
          { type: '5K', size: '450 м²', price: 4800000 },
          { type: '6K', size: '550 м²', price: 5500000 },
        ],
        availableUnits: 5,
        completionDate: '2-й кв. 2027',
      },
    ]);
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
