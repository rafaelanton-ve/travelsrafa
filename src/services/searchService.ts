import { SearchParams, SearchResult } from '../types/search';
import { supabase } from '../lib/supabase';

export const searchService = {
  search: async (params: SearchParams): Promise<SearchResult[]> => {
    let query;

    // Use calendar table for accurate date availability if a date is selected
    if (params.dates) {
      // !inner join ensures we only get destinations that have this date in calendar
      query = supabase.from('destinations')
        .select('*, calendar!inner(*)')
        .eq('active', true)
        .eq('calendar.date', params.dates)
        .eq('calendar.status', 'active');
    } else {
      // If no date selected, just get active destinations
      query = supabase.from('destinations')
        .select('*')
        .eq('active', true);
    }

    // Case-insensitive search on title or location
    if (params.destination) {
      const term = params.destination;
      query = query.or(`title.ilike.%${term}%,location.ilike.%${term}%`);
    }

    // Travelers filtering
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