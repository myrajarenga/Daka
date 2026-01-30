import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <footer className="relative z-10 bg-black pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Branding & CTA - Only show on Home page */}
                {isHomePage && (
                    <div className="text-center mb-12 sm:mb-16" id="join-waitlist">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8 px-4">
                            Elevate<br />
                            Everything
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3 sm:gap-4 max-w-lg mx-auto px-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-daka-orange transition-colors min-h-[44px]"
                            />
                            <button className="w-full sm:w-auto bg-daka-orange text-white px-6 sm:px-8 py-3 rounded font-bold text-sm uppercase tracking-widest hover:bg-orange-600 active:bg-orange-700 transition-colors whitespace-nowrap min-h-[44px]">
                                Join Waitlist
                            </button>
                        </div>
                        <p className="mt-4 text-xs text-zinc-600 uppercase tracking-widest">
                            Exclusive Access 2026 • Limited Spots
                        </p>
                    </div>
                )}

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 border-t border-zinc-900 pt-8 sm:pt-10">
                    <div>
                        <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">Support</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">Member Support</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Return & Exchange</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">Company</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Legal</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Partners</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">Teams</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Associations</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Corporate</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Social</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 sm:mt-12 flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-6 sm:pt-8 gap-4">
                    <div className="flex items-center">
                        <img src="/assets/logo.svg" alt="Daka Logo" className="h-20 sm:h-24 md:h-28 w-auto" />
                    </div>
                    <p className="text-zinc-700 text-xs text-center md:text-right">
                        © 2026 Daka Sports. All rights reserved. Built for Athletes.
                        Developed By Prospect Pilot
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
