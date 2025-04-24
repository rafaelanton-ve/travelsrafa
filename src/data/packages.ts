import { TravelPackage } from '../types';

export const travelPackages: TravelPackage[] = [
  {
    id: 1,
    name: 'European Adventure',
    image: '/src/assets/images/destinations/amalficoast.jpg',
    duration: 10,
    location: 'Multiple Countries',
    startDate: 'Jun 15, 2025',
    groupSize: 12,
    price: 2499,
    features: [
      'Visit 5 countries: France, Italy, Switzerland, Germany, Netherlands',
      'Premium accommodations in central locations',
      'Guided tours of iconic landmarks',
      'International and local transportation included',
      'Daily breakfast and selected dinners'
    ]
  },
  {
    id: 2,
    name: 'Thai Island Hopping',
    image: '/src/assets/images/destinations/bali.jpg',
    duration: 7,
    location: 'Thailand',
    startDate: 'Jul 10, 2025',
    groupSize: 10,
    price: 1299,
    features: [
      'Explore Phuket, Phi Phi Islands, and Krabi',
      'Beachfront resort accommodations',
      'Speedboat island tours and snorkeling trips',
      'Thai cooking class experience',
      'Airport transfers and ferry tickets'
    ]
  },
  {
    id: 3,
    name: 'Japan Discovery',
    image: '/src/assets/images/destinations/kyoto.jpg',
    duration: 12,
    location: 'Japan',
    startDate: 'Sep 5, 2025',
    groupSize: 8,
    price: 3299,
    features: [
      'Experience Tokyo, Kyoto, Osaka, and Hiroshima',
      'High-speed bullet train passes',
      'Traditional ryokan stay experience',
      'Guided cultural tours and temple visits',
      'Sushi making class and sake tasting'
    ]
  }
];