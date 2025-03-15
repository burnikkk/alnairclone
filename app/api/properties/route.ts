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
        propertyType: 'Вилла',
        price: {
          amount: 2500000,
          currency: 'AED',
          formatted: 'от 2.5 млн AED',
        },
        discount: { percentage: 5, formatted: '5%' },
        units: [
          { type: '4K', size: '350 м²', price: 'от 3.8 млн AED' },
          { type: '5K', size: '420 м²', price: 'от 4.5 млн AED' },
          { type: '6K', size: '480 м²', price: 'от 5.5 млн AED' },
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
          { type: '1K', size: '75 м²', price: 'от 1.2 млн AED' },
          { type: '2K', size: '110 м²', price: 'от 1.6 млн AED' },
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
        propertyType: 'Апартаменты',
        price: { amount: 5000000, currency: 'AED', formatted: 'от 5 млн AED' },
        discount: { percentage: 7, formatted: '7%' },
        units: [
          { type: '3K', size: '195 м²', price: 'от 5 млн AED' },
          { type: '4K', size: '250 м²', price: 'от 6.5 млн AED' },
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
        propertyType: 'Вилла',
        price: {
          amount: 3200000,
          currency: 'AED',
          formatted: 'от 3.2 млн AED',
        },
        units: [
          { type: '5K', size: '400 м²', price: 'от 5 млн AED' },
          { type: '6K', size: '480 м²', price: 'от 6.5 млн AED' },
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
        propertyType: 'Пентхаус',
        price: { amount: 7000000, currency: 'AED', formatted: 'от 7 млн AED' },
        discount: { percentage: 10, formatted: '10%' },
        units: [
          { type: '4K', size: '275 м²', price: 'от 7.5 млн AED' },
          { type: '5K', size: '330 м²', price: 'от 8.9 млн AED' },
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
          { type: '6K', size: '500 м²', price: 'от 7 млн AED' },
          { type: '7K', size: '600 м²', price: 'от 8.5 млн AED' },
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
          { type: '2K', size: '120 м²', price: 'от 2.4 млн AED' },
          { type: '3K', size: '160 м²', price: 'от 3.2 млн AED' },
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
          { type: '4K', size: '320 м²', price: 'от 9 млн AED' },
          { type: '5K', size: '400 м²', price: 'от 10.5 млн AED' },
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
          { type: '2K', size: '130 м²', price: 'от 3.1 млн AED' },
          { type: '3K', size: '175 м²', price: 'от 3.9 млн AED' },
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
          { type: '5K', size: '450 м²', price: 'от 6.8 млн AED' },
          { type: '6K', size: '550 м²', price: 'от 7.9 млн AED' },
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
