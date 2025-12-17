import { SearchParams, SearchResult } from '../types/search';
import { supabase } from '../lib/supabase';

export const searchService = {
  search: async (params: SearchParams): Promise<SearchResult[]> => {
    let query = supabase.from('destinations').select('*');

    // Case-insensitive search on title or location
    if (params.destination) {
      const term = params.destination;
      // Use .or() with filters for title and location
      query = query.or(`title.ilike.%${term}%,location.ilike.%${term}%`);
    }

    // Date filtering: check if the available_dates array contains the selected date
    if (params.dates) {
      query = query.contains('available_dates', [params.dates]);
    }

    // Travelers filtering: check if max_travelers is greater than or equal to requested
    if (params.travelers) {
      query = query.gte('max_travelers', Number(params.travelers));
    }

    try {
      const { data, error } = await query;

      if (error) {
        console.error('Search error:', error);
        return [];
      }

      if (!data) return [];

      return data.map((item: any) => ({
        id: item.id,
        name: item.title,
        location: item.location,
        price: Number(item.price),
        image: item.image_url,
        description: item.description || '',
        availableDates: item.available_dates || [],
        maxTravelers: item.max_travelers || 0
      }));
    } catch (e) {
      console.error('Search exception:', e);
      return [];
    }
  }
};