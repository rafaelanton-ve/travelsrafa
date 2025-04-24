import React from 'react';
import { Container } from './ui/Container';
import { SectionTitle } from './ui/SectionTitle';
import { PackageCard } from './PackageCard';
import { travelPackages } from '../data/packages';

export const PopularPackages: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="packages">
      <Container>
        <SectionTitle 
          title="Popular Travel Packages" 
          subtitle="All-inclusive packages designed to give you the ultimate travel experience"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPackages.map((pkg, index) => (
            <PackageCard 
              key={pkg.id}
              travelPackage={pkg}
              className={`transform transition duration-500 ease-in-out hover:-translate-y-2 ${
                index % 3 === 0 ? 'animate-fade-in' : 
                index % 3 === 1 ? 'animate-fade-in-delayed' : 
                'animate-fade-in-more-delayed'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularPackages;