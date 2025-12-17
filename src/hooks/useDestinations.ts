import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Destination, SpecialOffer, TravelPackage } from '../types';

interface UseDestinationsResult {
    destinations: Destination[];
    specialOffers: SpecialOffer[];
    travelPackages: TravelPackage[];
    loading: boolean;
    error: Error | null;
}

export const useDestinations = (): UseDestinationsResult => {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [specialOffers, setSpecialOffers] = useState<SpecialOffer[]>([]);
    const [travelPackages, setTravelPackages] = useState<TravelPackage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const { data, error: supabaseError } = await supabase
                    .from('destinations')
                    .select('*');

                if (supabaseError) {
                    throw new Error(supabaseError.message);
                }

                if (data) {
                    // Map to standard Destinations (not special offers, not packages)
                    const dests: Destination[] = data
                        .filter((item: any) => !item.is_special_offer && !item.is_popular_package)
                        .map((item: any) => ({
                            id: item.id,
                            name: item.title,
                            image: item.image_url,
                            location: item.location,
                            rating: Number(item.rating),
                            price: Number(item.price),
                            description: item.description,
                            availableDates: item.available_dates || [],
                            maxTravelers: item.max_travelers || 0
                        }));

                    // Map to SpecialOffers
                    const offers: SpecialOffer[] = data
                        .filter((item: any) => item.is_special_offer)
                        .map((item: any) => ({
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            discount: item.discount_percentage || 0,
                            image: item.image_url,
                            endDate: item.offer_end_date || ''
                        }));

                    // Map to TravelPackages
                    const packages: TravelPackage[] = data
                        .filter((item: any) => item.is_popular_package)
                        .map((item: any) => ({
                            id: item.id,
                            name: item.title,
                            image: item.image_url,
                            duration: item.duration_days || 0,
                            location: item.location,
                            startDate: item.start_date || '',
                            groupSize: item.group_size || 0,
                            price: Number(item.price),
                            features: item.features || []
                        }));

                    setDestinations(dests);
                    setSpecialOffers(offers);
                    setTravelPackages(packages);
                }
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An unknown error occurred'));
                console.error('Error fetching destinations:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { destinations, specialOffers, travelPackages, loading, error };
};
