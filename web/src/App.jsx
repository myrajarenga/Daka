import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import PulseSection from './components/PulseSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-daka-orange selection:text-white">
      <Navbar />
      <Hero />
      <Pillars />
      <PulseSection />
      <Footer />
    </div>
  );
}

export default App;
