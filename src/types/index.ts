export interface Destination {
  id: number;
  name: string;
  image: string;
  location: string;
  rating: number;
  price: number;
  description: string;
}

export interface TravelPackage {
  id: number;
  name: string;
  image: string;
  duration: number;
  location: string;
  startDate: string;
  groupSize: number;
  price: number;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  destination: string;
  text: string;
}

export interface SpecialOffer {
  id: number;
  title: string;
  description: string;
  discount: number;
  image: string;
  endDate: string;
}