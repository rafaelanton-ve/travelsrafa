import { SearchParams, SearchResult } from '../types/search';
import { destinations } from '../data/destinations';
import { travelPackages } from '../data/packages';

export const searchService = {
  search: (params: SearchParams): SearchResult[] => {
    // Convertir los parámetros a minúsculas para búsqueda case-insensitive
    const searchDestination = params.destination.toLowerCase();
    const searchDates = params.dates.toLowerCase();
    const searchTravelers = params.travelers.toLowerCase();

    // Combinar destinos y paquetes para la búsqueda
    const allResults = [
      ...destinations.map(dest => ({
        id: dest.id,
        name: dest.name,
        location: dest.location,
        price: dest.price,
        image: dest.image,
        description: dest.description
      })),
      ...travelPackages.map(pkg => ({
        id: pkg.id,
        name: pkg.name,
        location: pkg.location,
        price: pkg.price,
        image: pkg.image,
        description: pkg.features.join(' ')
      }))
    ];

    // Filtrar resultados basados en los parámetros de búsqueda
    return allResults.filter(result => {
      const matchesDestination = searchDestination === '' || 
        result.name.toLowerCase().includes(searchDestination) ||
        result.location.toLowerCase().includes(searchDestination);

      const matchesDates = searchDates === '' || 
        result.description.toLowerCase().includes(searchDates);

      const matchesTravelers = searchTravelers === '' || 
        result.description.toLowerCase().includes(searchTravelers);

      return matchesDestination && matchesDates && matchesTravelers;
    });
  }
}; 