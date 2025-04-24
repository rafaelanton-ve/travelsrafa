import { ImageCollection } from '../types/images';
import { getImageAsset } from '../utils/images';

export const images: ImageCollection = {
  // Hero
  heroBackground: getImageAsset('hero/background.jpg', 'Hero background image', 1920, 1080),
  
  // Destinations
  bali: getImageAsset('destinations/bali.jpg', 'Bali destination', 1260, 750),
  paris: getImageAsset('destinations/paris.jpg', 'Paris destination', 1260, 750),
  tokyo: getImageAsset('destinations/tokyo.jpg', 'Tokyo destination', 1260, 750),
  newYork: getImageAsset('destinations/new-york.jpg', 'New York destination', 1260, 750),
  rome: getImageAsset('destinations/rome.jpg', 'Rome destination', 1260, 750),
  sydney: getImageAsset('destinations/sydney.jpg', 'Sydney destination', 1260, 750),
  
  // Packages
  baliPackage: getImageAsset('packages/bali-package.jpg', 'Bali package', 1260, 750),
  europePackage: getImageAsset('packages/europe-package.jpg', 'Europe package', 1260, 750),
  japanPackage: getImageAsset('packages/japan-package.jpg', 'Japan package', 1260, 750),
  
  // Testimonials
  sarahAvatar: getImageAsset('testimonials/sarah.jpg', 'Sarah Johnson avatar', 1260, 750),
  michaelAvatar: getImageAsset('testimonials/michael.jpg', 'Michael Rodriguez avatar', 1260, 750),
  emilyAvatar: getImageAsset('testimonials/emily.jpg', 'Emily Chen avatar', 1260, 750),
  
  // Special Offers
  summerOffer: getImageAsset('special-offers/summer.jpg', 'Summer special offer', 1260, 750),
  winterOffer: getImageAsset('special-offers/winter.jpg', 'Winter special offer', 1260, 750)
}; 