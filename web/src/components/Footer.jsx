import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <footer className="relative z-10 bg-black pt-20 pb-10 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Branding & CTA - Only show on Home page */}
                {isHomePage && (
                    <div className="text-center mb-16" id="join-waitlist">
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
                            Elevate<br />
                            Everything
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-daka-orange transition-colors"
                            />
                            <button className="w-full sm:w-auto bg-daka-orange text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-orange-600 whitespace-nowrap">
                                Join Waitlist
                            </button>
                        </div>
                        <p className="mt-4 text-xs text-zinc-600 uppercase tracking-widest">
                            Exclusive Access 2026 • Limited Spots
                        </p>
                    </div>
                )}

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-zinc-900 pt-10">
                    <div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Support</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li><a href="#" className="hover:text-white transition-colors">Member Support</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Return & Exchange</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Company</h4>
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

                <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-8">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img src="/assets/logo.svg" alt="Daka Logo" className="h-24 w-auto" />
                    </div>
                    <p className="text-zinc-700 text-xs">
                        © 2026 Daka Sports. All rights reserved. Built for Athletes.
                        Developed By Prospect Pilot           </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
