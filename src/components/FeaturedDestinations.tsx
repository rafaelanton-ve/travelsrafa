import React from 'react';
import { Container } from './ui/Container';
import { SectionTitle } from './ui/SectionTitle';
import { ArrowRight } from 'lucide-react';
import { DestinationCard } from './DestinationCard';
import { destinations } from '../data/destinations';

export const FeaturedDestinations: React.FC = () => {
  // Take just the first 6 destinations
  const featuredDestinations = destinations.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50" id="destinations">
      <Container>
        <SectionTitle 
          title="Popular Destinations" 
          subtitle="Explore our handpicked selection of stunning locations around the world"
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination, index) => (
            <DestinationCard 
              key={destination.id}
              destination={destination}
              className={`transform transition duration-500 ease-in-out hover:-translate-y-2 ${
                index % 3 === 0 ? 'animate-fade-in' : 
                index % 3 === 1 ? 'animate-fade-in-delayed' : 
                'animate-fade-in-more-delayed'
              }`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#view-all" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            View All Destinations
            <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedDestinations;