import React from 'react';
import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import PulseSection from '../components/PulseSection';

const Home = () => {
    return (
        <div className="relative">
            {/* Fixed Hero Background */}
            <div className="fixed inset-0 z-0">
                <Hero />
            </div>

            {/* Spacer to account for fixed hero height */}
            <div className="h-screen" />

            {/* Scrollable Content - scrolls over the hero */}
            <div className="relative z-10">
                <Pillars />
                <PulseSection />
            </div>
        </div>
    );
};

export default Home;
