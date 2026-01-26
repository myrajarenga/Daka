import React from 'react';
import { Activity, Brain, Moon, Apple, Briefcase, ChevronRight } from 'lucide-react';

const Membership = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            {/* Hero Section */}
            <div className="relative h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/assets/videos/DAKA_Membership.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black via-transparent to-black/30" />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight text-white">
                        A Membership Built <br />
                        For Your Journey
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 font-light">
                        From recovery to peak performance, get the 360° wellness support every athlete needs to succeed.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-daka-orange text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">
                            Join Now
                        </button>
                        <button className="border border-white text-white px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>

            {/* Choose Your Path Section */}
            <div className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-wide text-white">
                    Choose Your Path
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group relative bg-daka-dark-gray border border-white/10 overflow-hidden">
                        <div className="h-80 overflow-hidden relative">
                            <img
                                src="/assets/Images/athlete.png"
                                alt="Individual Athlete"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                        </div>
                        <div className="p-8 absolute bottom-0 w-full">
                            <h3 className="text-2xl font-bold mb-2 text-white">Individual Athlete (Pro & Elite)</h3>
                            <p className="text-daka-orange uppercase text-xs tracking-widest mb-4">Waitlist Only</p>
                            <p className="text-gray-400 text-sm mb-6">Complete holistic tracking for the modern athlete.</p>
                            <button className="w-full bg-daka-orange text-white py-3 font-bold uppercase text-sm hover:bg-orange-600 transition-colors">
                                Join The Waitlist
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative bg-daka-dark-gray border border-white/10 overflow-hidden">
                        <div className="h-80 overflow-hidden relative">
                            <img
                                src="/assets/Images/Teams.png"
                                alt="Teams"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                        </div>
                        <div className="p-8 absolute bottom-0 w-full">
                            <h3 className="text-2xl font-bold mb-2 text-white">Teams</h3>
                            <p className="text-daka-orange uppercase text-xs tracking-widest mb-4">Beta Access</p>
                            <p className="text-gray-400 text-sm mb-6">Optimize team performance with unified data.</p>
                            <button className="w-full bg-daka-orange text-white py-3 font-bold uppercase text-sm hover:bg-orange-600 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative bg-daka-dark-gray border border-white/10 overflow-hidden">
                        <div className="h-80 overflow-hidden relative">
                            <img
                                src="/assets/Images/organizations.png"
                                alt="Organizations"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                        </div>
                        <div className="p-8 absolute bottom-0 w-full">
                            <h3 className="text-2xl font-bold mb-2 text-white">Organizations</h3>
                            <p className="text-daka-orange uppercase text-xs tracking-widest mb-4">Full Access</p>
                            <p className="text-gray-400 text-sm mb-6">Scalable solutions for leagues and federations.</p>
                            <button className="w-full bg-daka-orange text-white py-3 font-bold uppercase text-sm hover:bg-orange-600 transition-colors">
                                Partner With Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ecosystem Section */}
            <div className="py-20 bg-black overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight text-white">
                        A 360° Ecosystem
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-[500px]">
                        {[
                            { title: 'PHYSICAL', img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600', icon: Activity },
                            { title: 'MENTAL', img: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=600', icon: Brain },
                            { title: 'REST & RECOVERY', img: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=600', icon: Moon },
                            { title: 'NUTRITION', img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', icon: Apple },
                            { title: 'CAREER', img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600', icon: Briefcase },
                        ].map((pillar, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer h-full border border-white/5 hover:border-daka-orange/50 transition-all duration-500">
                                <img
                                    src={pillar.img}
                                    alt={pillar.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex flex-col items-center justify-end h-1/2 transition-all duration-300">
                                    <div className="mb-2 p-3 rounded-full bg-black/50 border border-white/20 group-hover:border-daka-orange group-hover:bg-daka-orange transition-all duration-300 transform group-hover:-translate-y-1">
                                        <pillar.icon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-white font-bold text-center text-sm md:text-base uppercase tracking-widest border-b-2 border-transparent group-hover:border-daka-orange group-hover:text-daka-orange inline-block pb-1 transition-all">
                                        {pillar.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* CTA Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src="/assets/Images/evolve.png"
                    alt="Evolve Every Day"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white drop-shadow-2xl">
                        Evolve Every Day
                    </h2>
                    <button className="bg-daka-orange text-white px-12 py-4 rounded font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">
                        Make Your Move
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Membership;
