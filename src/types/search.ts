export interface SearchParams {
  destination: string;
  dates: string;
  travelers: string;
}

export interface SearchResult {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  description: string;
} 