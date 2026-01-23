import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-daka-dark/90 backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/">
                            <img className="h-20 w-auto md:h-28" src="/assets/logo.svg" alt="Daka Sports" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-sm font-semibold text-white hover:text-daka-orange transition-colors uppercase tracking-wide">Membership</a>
                            <a href="#" className="text-sm font-semibold text-white hover:text-daka-orange transition-colors uppercase tracking-wide">How it Works</a>
                            <a href="#" className="text-sm font-semibold text-white hover:text-daka-orange transition-colors uppercase tracking-wide">Why Daka</a>
                            <a href="#" className="text-sm font-semibold text-white hover:text-daka-orange transition-colors uppercase tracking-wide">Partnerships</a>
                            <a href="#" className="text-sm font-semibold text-white hover:text-daka-orange transition-colors uppercase tracking-wide">Accessories</a>
                            <a href="#" className="text-sm font-semibold text-white hover:text-daka-orange transition-colors uppercase tracking-wide">Try Daka</a>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a href="#join-waitlist" className="bg-daka-orange text-white px-6 py-2 rounded font-bold text-sm uppercase tracking-wide hover:bg-orange-600 transition-colors">
                            Join Now
                        </a>
                    </div>

                    {/* Mobile menu button (Hamburger) - Implementation deferred for brevity but consistent with design */}
                    <div className="-mr-2 flex md:hidden">
                        <button className="text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
