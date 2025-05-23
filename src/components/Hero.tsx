import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { SearchResults } from './SearchResults';
import { searchService } from '../services/searchService';
import { SearchParams, SearchResult } from '../types/search';

const Hero: React.FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    destination: '',
    dates: '',
    travelers: ''
  });
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = searchService.search(searchParams);
    setSearchResults(results);
    setShowResults(true);
  };

  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 pt-16 md:pt-20 pb-[20px] md:pb-[40px]">
        <div className="text-center max-w-4xl mx-auto mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Explore The World With <span className="text-blue-400"><Logo /></span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 animate-fade-in-delayed">
            Discover amazing destinations and create unforgettable memories with our expertly crafted travel experiences
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-4 md:p-6 mt-8 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-2">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  name="destination"
                  value={searchParams.destination}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  placeholder="Where do you want to go?"
                />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-2">Dates</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="date"
                  name="dates"
                  value={searchParams.dates}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-2">Travelers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="number"
                  min="1"
                  max="20"
                  name="travelers"
                  value={searchParams.travelers}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  placeholder="How many people?"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full md:w-auto"
            >
              <Search className="mr-2" size={18} />
              Search Trips
            </Button>
          </div>
        </form>
      </div>

      {/* Search Results Modal */}
      {showResults && (
        <SearchResults
          results={searchResults}
          onClose={() => setShowResults(false)}
        />
      )}
    </div>
  );
};

export default Hero;