import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Send } from 'lucide-react';
import { Button } from './ui/Button';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you would send this to your backend
    }
  };

  return (
    <section className="py-20 bg-blue-600 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get exclusive travel deals, insider tips, and travel inspiration delivered straight to your inbox
          </p>
          
          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block animate-fade-in">
              <p className="text-xl">Thanks for subscribing!</p>
              <p className="text-blue-100 mt-2">We've sent a confirmation to your email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                variant="white"
                className="whitespace-nowrap"
              >
                <Send className="mr-2" size={18} />
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-sm text-blue-200 mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;