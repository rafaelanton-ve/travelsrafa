import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Plane } from 'lucide-react';
import { Container } from './ui/Container';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Plane className="text-blue-400 mr-2" size={24} />
              <span className="font-bold text-xl">RafaTravels</span>
            </div>
            <p className="text-gray-400 mb-6">
              Discover the world with our expertly curated travel experiences. 
              From exotic getaways to adventure-packed journeys.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Destinations', 'Packages', 'Special Offers', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {['FAQs', 'Terms & Conditions', 'Privacy Policy', 'Contact Us', 'Help Center'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(/[&\s]/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">123 Travel Street, Adventure City, AC 10101</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-blue-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-blue-400 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@rafatravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} RafaTravels. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;