import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Plane className={`${isScrolled ? 'text-blue-600' : 'text-white'} mr-2`} size={28} />
            <span className={`font-bold text-xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              RafaTravels
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Destinations', 'Packages', 'About', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:opacity-75 transition-opacity ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-4 rounded-lg shadow-xl p-4 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-4">
              {['Home', 'Destinations', 'Packages', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;