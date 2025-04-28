import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: './assets/images/destinations/santorini.jpg',
    location: 'Greece',
    rating: 4.8,
    price: 899,
    description: 'Experience the stunning white-washed buildings and breathtaking sunsets of this iconic Greek island.',
    availableDates: ['2024-06-01', '2024-06-15', '2024-07-01', '2024-07-15'],
    maxTravelers: 8
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: './assets/images/destinations/bali.jpg',
    location: 'Indonesia',
    rating: 4.7,
    price: 799,
    description: 'Discover tropical paradise with beautiful beaches, lush rice terraces, and vibrant culture.',
    availableDates: ['2024-05-01', '2024-05-15', '2024-06-01', '2024-06-15'],
    maxTravelers: 10
  },
  {
    id: 3,
    name: 'Kyoto, Japan',
    image: './assets/images/destinations/kyoto.jpg',
    location: 'Japan',
    rating: 4.9,
    price: 1099,
    description: 'Immerse yourself in ancient Japanese culture with traditional temples, gardens, and geisha districts.',
    availableDates: ['2024-04-01', '2024-04-15', '2024-05-01', '2024-05-15'],
    maxTravelers: 6
  },
  {
    id: 4,
    name: 'Machu Picchu, Peru',
    image: './assets/images/destinations/machupichu.jpg',
    location: 'Peru',
    rating: 4.9,
    price: 1299,
    description: 'Explore the ancient Incan citadel set high in the Andes Mountains, offering breathtaking views and rich history.',
    availableDates: ['2024-07-01', '2024-07-15', '2024-08-01', '2024-08-15'],
    maxTravelers: 12
  },
  {
    id: 5,
    name: 'Amalfi Coast, Italy',
    image: './assets/images/destinations/amalficoast.jpg',
    location: 'Italy',
    rating: 4.8,
    price: 999,
    description: 'Enjoy the dramatic coastline with colorful villages perched on cliffs overlooking the Mediterranean Sea.',
    availableDates: ['2024-06-01', '2024-06-15', '2024-07-01', '2024-07-15'],
    maxTravelers: 8
  },
  {
    id: 6,
    name: 'Maldives',
    image: './assets/images/destinations/maldives.jpg',
    location: 'Maldives',
    rating: 4.9,
    price: 1499,
    description: 'Relax in overwater bungalows and swim in crystal-clear turquoise waters of this tropical paradise.'
  }
];