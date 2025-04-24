import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import PopularPackages from './components/PopularPackages';
import SpecialOffers from './components/SpecialOffers';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <PopularPackages />
      <SpecialOffers />
      <Testimonials />
      <Newsletter />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;