import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ 
  destination,
  className = ''
}) => {
  const { name, image, location, rating, price, description } = destination;

  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg ${className}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-md">
          <Star className="text-yellow-500 mr-1" size={16} fill="#FBBF24" />
          <span className="font-medium text-sm">{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="mr-1" size={16} />
          <span className="text-sm">{location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-blue-600">${price}</span>
            <span className="text-gray-500 text-sm"> / person</span>
          </div>
          
          <a 
            href={`#destination-${destination.id}`}
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};