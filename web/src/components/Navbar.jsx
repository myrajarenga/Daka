import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { to: '/membership', label: 'Memberships' },
        { to: '/how-it-works', label: 'How it Works' },
        { to: '/why-daka', label: 'Why Daka' },
        { to: '/partnerships', label: 'Partnerships' },
        { to: '/accessories', label: 'Accessories' },
        { to: '/try-daka', label: 'Try Daka' },
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" onClick={closeMobileMenu}>
                                <img className="h-16 w-auto md:h-24 lg:h-32" src="/assets/logo.svg" alt="Daka Sports" />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        className="relative text-sm font-semibold text-white uppercase tracking-wide group hover:text-daka-orange transition-colors"
                                    >
                                        {link.label}
                                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden md:block">
                            <a href="#join-waitlist" className="bg-daka-orange text-white px-6 py-2 rounded font-bold text-sm uppercase tracking-wide hover:bg-orange-600 transition-colors">
                                Join Now
                            </a>
                        </div>

                        {/* Mobile menu button (Hamburger) */}
                        <div className="flex md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-white hover:text-daka-orange inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors min-w-[44px] min-h-[44px]"
                                aria-label="Toggle mobile menu"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/95 backdrop-blur-sm"
                    onClick={closeMobileMenu}
                ></div>

                {/* Menu Content */}
                <div
                    className={`relative h-full flex flex-col bg-black transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {/* Header with Logo and Close Button */}
                    <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-800">
                        <Link to="/" onClick={closeMobileMenu}>
                            <img className="h-16 w-auto" src="/assets/logo.svg" alt="Daka Sports" />
                        </Link>
                        <button
                            onClick={closeMobileMenu}
                            className="text-white hover:text-daka-orange p-2 rounded-md transition-colors min-w-[44px] min-h-[44px]"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto py-8 px-4">
                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={closeMobileMenu}
                                    className="block text-white text-lg font-semibold uppercase tracking-wide py-4 px-4 rounded-lg hover:bg-zinc-900 hover:text-daka-orange transition-all active:bg-zinc-800 min-h-[44px]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile CTA */}
                        <div className="mt-8 px-4">
                            <a
                                href="#join-waitlist"
                                onClick={closeMobileMenu}
                                className="block w-full bg-daka-orange text-white text-center px-6 py-4 rounded font-bold text-sm uppercase tracking-wide hover:bg-orange-600 transition-colors active:bg-orange-700 min-h-[44px]"
                            >
                                Join Now
                            </a>
                        </div>
                    </nav>

                    {/* Footer */}
                    <div className="border-t border-zinc-800 px-4 py-6">
                        <p className="text-zinc-500 text-xs text-center">
                            © 2026 Daka Sports. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
