import React from 'react';
import { Container } from './ui/Container';
import { SectionTitle } from './ui/SectionTitle';
import { Clock, Tag, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';
import { useDestinations } from '../hooks/useDestinations';

export const SpecialOffers: React.FC = () => {
  const { specialOffers, loading, error } = useDestinations();

  if (loading) {
    return (
      <section className="py-20 bg-white flex justify-center items-center">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </section>
    );
  }

  if (error) {
    /* Fail silently or show message - sticking to minimal change */
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Special Offers & Deals"
          subtitle="Limited-time promotions and exclusive deals for your next adventure"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialOffers.map((offer, index) => (
            <div
              key={offer.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row transform transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl ${index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in-delayed'
                }`}
            >
              <div className="md:w-2/5">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:w-3/5 flex flex-col">
                <div className="flex items-center mb-3">
                  <Tag className="text-red-500 mr-2" size={18} />
                  <span className="text-red-600 font-medium text-sm">{offer.discount}% OFF</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>

                <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="flex items-center mb-3 sm:mb-0">
                    <Clock className="text-gray-500 mr-2" size={16} />
                    <span className="text-gray-600 text-sm">Ends {offer.endDate}</span>
                  </div>

                  <Button variant="primary">View Deal</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SpecialOffers;