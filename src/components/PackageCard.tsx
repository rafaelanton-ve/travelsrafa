import React from 'react';
import { Clock, MapPin, Calendar, Users, Check } from 'lucide-react';
import { TravelPackage } from '../types';
import { Button } from './ui/Button';

interface PackageCardProps {
  travelPackage: TravelPackage;
  className?: string;
}

export const PackageCard: React.FC<PackageCardProps> = ({ 
  travelPackage,
  className = ''
}) => {
  const { name, image, duration, location, startDate, groupSize, price, features } = travelPackage;

  return (
    <div className={`bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow ${className}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-medium">
          Popular
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Clock className="mr-2 text-blue-600" size={16} />
            <span className="text-sm">{duration} days</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="mr-2 text-blue-600" size={16} />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Calendar className="mr-2 text-blue-600" size={16} />
            <span className="text-sm">{startDate}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users className="mr-2 text-blue-600" size={16} />
            <span className="text-sm">Max {groupSize} people</span>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mb-4">
          <ul className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <Check className="mr-2 text-green-500" size={16} />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-blue-600">${price}</span>
            <span className="text-gray-500 text-sm"> / person</span>
          </div>
          
          <Button variant="primary">Book Now</Button>
        </div>
      </div>
    </div>
  );
};