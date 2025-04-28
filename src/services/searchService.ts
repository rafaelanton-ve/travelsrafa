import { SearchParams, SearchResult } from '../types/search';
import { destinations } from '../data/destinations';
import { travelPackages } from '../data/packages';

export const searchService = {
  search: (params: SearchParams): SearchResult[] => {
    // Convertir el destino a minúsculas para búsqueda case-insensitive
    const searchDestination = params.destination.toLowerCase();

    // Combinar destinos y paquetes para la búsqueda
    const allResults = [
      ...destinations.map(dest => ({
        id: dest.id,
        name: dest.name,
        location: dest.location,
        price: dest.price,
        image: dest.image,
        description: dest.description,
        availableDates: dest.availableDates || [],
        maxTravelers: dest.maxTravelers || 10
      })),
      ...travelPackages.map(pkg => ({
        id: pkg.id,
        name: pkg.name,
        location: pkg.location,
        price: pkg.price,
        image: pkg.image,
        description: pkg.features.join(' '),
        availableDates: pkg.availableDates || [],
        maxTravelers: pkg.maxTravelers || 10
      }))
    ];

    // Filtrar resultados basados en los parámetros de búsqueda
    return allResults.filter(result => {
      const matchesDestination = searchDestination === '' || 
        result.name.toLowerCase().includes(searchDestination) ||
        result.location.toLowerCase().includes(searchDestination);

      const matchesDates = params.dates === '' || 
        result.availableDates.includes(params.dates);

      const matchesTravelers = params.travelers === '' || 
        Number(params.travelers) <= result.maxTravelers;

      return matchesDestination && matchesDates && matchesTravelers;
    });
  }
}; 