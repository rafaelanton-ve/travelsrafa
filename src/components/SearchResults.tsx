import React from 'react';
import { SearchResult } from '../types/search';
import { Link } from './ui/Link';

interface SearchResultsProps {
  results: SearchResult[];
  onClose: () => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results, onClose }) => {
  if (results.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">No Results Found</h3>
          <p className="text-gray-600 mb-6">
            We couldn't find any trips matching your search criteria. Please try different search terms.
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Found {results.length} {results.length === 1 ? 'Result' : 'Results'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={result.image}
                alt={result.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{result.name}</h4>
                <p className="text-gray-600 mb-2">{result.location}</p>
                <p className="text-blue-600 font-semibold mb-4">${result.price}</p>
                <p className="text-gray-600 text-sm mb-4">{result.description}</p>
                <Link
                  href={`#book-${result.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 