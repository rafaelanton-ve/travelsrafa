import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import PopularPackages from '../components/PopularPackages';
import SpecialOffers from '../components/SpecialOffers';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <FeaturedDestinations />
            <PopularPackages />
            <SpecialOffers />
            <Testimonials />
            <Newsletter />
            <ContactForm />
        </>
    );
};

export default Home;
