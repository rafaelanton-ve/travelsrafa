import React, { useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { DestinationCard } from '../components/DestinationCard';
import { useDestinations } from '../hooks/useDestinations';
import { Loader2 } from 'lucide-react';

const AllDestinations: React.FC = () => {
    const { destinations, loading, error } = useDestinations();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen py-32 flex justify-center items-center">
                <Loader2 className="animate-spin text-blue-600" size={48} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen py-32 flex justify-center items-center text-red-500">
                <p>Error loading destinations: {error.message}</p>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <Container>
                <SectionTitle
                    title="All Destinations"
                    subtitle="Explore our complete collection of stunning locations around the world"
                    center
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {destinations.map((destination, index) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                            className={`transform transition duration-500 ease-in-out hover:-translate-y-2 animate-fade-in`}
                        />
                    ))}
                </div>

                {destinations.length === 0 && (
                    <div className="text-center text-gray-500 mt-12">
                        No destinations found.
                    </div>
                )}
            </Container>
        </div>
    );
};

export default AllDestinations;
