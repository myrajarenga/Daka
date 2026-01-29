import React from 'react';

const products = [
    {
        name: 'Daka Performance Band',
        description: '24/7 health tracking',
        price: '$299',
        image: '/assets/Images/products/daka_performance_band.png',
    },
    {
        name: 'Daka Speed X1 Watch',
        description: 'Advanced GPS tracking',
        price: '$449',
        image: '/assets/Images/products/daka_speed_watch.png',
    },
    {
        name: 'Daka Travel Case',
        description: 'Premium protection',
        price: '$89',
        image: '/assets/Images/products/daka_travel_case.png',
    },
    {
        name: 'Performance Armband',
        description: 'Secure fit for training',
        price: '$59',
        image: '/assets/Images/products/performance_armband.png',
    },
    {
        name: 'Sleep Band',
        description: 'Optimize recovery',
        price: '$199',
        image: '/assets/Images/products/sleep_band.png',
    },
    {
        name: 'Daka Starter Kit',
        description: 'Complete training setup',
        price: '$599',
        image: '/assets/Images/products/daka_starter_kit.png',
    },
    {
        name: 'Daka Water Bottle',
        description: 'Hydration tracking',
        price: '$49',
        image: '/assets/Images/products/daka_water_bottle.png',
    },
    {
        name: 'Form AI Speaker',
        description: 'Real-time coaching',
        price: '$179',
        image: '/assets/Images/products/form_ai_speaker.png',
    },
];

const packs = [
    {
        title: 'Recovery Pack',
        description: 'Everything you need for optimal post-training recovery and sleep optimization.',
        image: 'https://images.pexels.com/photos/4498220/pexels-photo-4498220.jpeg?auto=compress&cs=tinysrgb&w=800',
        cta: 'Learn More',
    },
    {
        title: 'Fuel & Fit Pack',
        description: 'Nutrition tracking tools and meal planning resources for peak performance.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        cta: 'Learn More',
    },
    {
        title: 'Travel Pack',
        description: 'Keep your training consistent on the road with portable tracking solutions.',
        image: 'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=800',
        cta: 'Learn More',
    },
    {
        title: 'Elite Pack',
        description: 'Professional-grade equipment for serious athletes ready to dominate.',
        image: 'https://images.pexels.com/photos/3621185/pexels-photo-3621185.jpeg?auto=compress&cs=tinysrgb&w=800',
        cta: 'Learn More',
    },
];

const partnerPerks = [
    {
        title: 'Sports Gym',
        subtitle: 'Elite Training Facilities',
        description: 'Access world-class training facilities with Daka partner gyms worldwide.',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        title: 'Gym Perks',
        subtitle: 'Exclusive Member Benefits',
        description: 'Unlock premium memberships and discounts at partner facilities.',
        image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        title: 'Wellness Centers',
        subtitle: 'Recovery & Therapy',
        description: 'Partner wellness centers for comprehensive recovery and rehabilitation.',
        image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        title: 'Hospitality',
        subtitle: 'Premium Experiences',
        description: 'Exclusive access to hospitality suites at major sporting events.',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
];

const Accessories = () => {
    return (
        <div className="bg-black">
            {/* Hero Section */}
            <div className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/assets/Images/Accessories-page-hero-image.png"
                        alt="Daka Accessories Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>
                <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-8 max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Daka Accessories
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light mb-10 leading-relaxed">
                        Elevate your athlete kit with the tech, gear, and recovery tools built for elite performance,
                        tracking, and athlete well-being on-and-off the field.
                    </p>
                    <a
                        href="#gear"
                        className="bg-daka-orange text-white px-10 py-4 rounded font-semibold tracking-wide hover:bg-orange-600 transition-colors"
                    >
                        Explore All Gear
                    </a>
                </div>
            </div>

            {/* THE GEAR Section */}
            <div id="gear" className="py-20 px-4 sm:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">The Gear</h2>
                        <a href="#all" className="text-daka-orange hover:text-orange-600 transition-colors font-semibold">
                            Browse All Daka Accessories →
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm mb-12">
                        Coming soon. Be the first to know when these products launch.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-daka-orange/50 transition-all"
                            >
                                <div className="aspect-square bg-zinc-800 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-white font-semibold text-lg mb-2">{product.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-daka-orange text-white px-4 py-2 rounded text-sm font-semibold hover:bg-orange-600 transition-colors">
                                            Notify Me
                                        </button>
                                        <button className="flex-1 border border-white text-white px-4 py-2 rounded text-sm font-semibold hover:bg-white hover:text-black transition-colors">
                                            Join Waitlist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PACKS Section */}
            <div className="py-20 px-4 sm:px-8 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Packs</h2>
                        <a href="#packs" className="text-daka-orange hover:text-orange-600 transition-colors font-semibold">
                            Browse All →
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {packs.map((pack, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
                            >
                                <img
                                    src={pack.image}
                                    alt={pack.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-bold text-white mb-3">{pack.title}</h3>
                                    <p className="text-gray-300 text-sm mb-6 max-w-md">{pack.description}</p>
                                    <button className="bg-daka-orange text-white px-6 py-3 rounded font-semibold text-sm hover:bg-orange-600 transition-colors">
                                        {pack.cta}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PARTNER PERKS Section */}
            <div className="py-20 px-4 sm:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-12">Partner Perks</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {partnerPerks.map((perk, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl"
                            >
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={perk.image}
                                        alt={perk.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-daka-orange text-xs uppercase tracking-wider mb-2 font-semibold">
                                        {perk.title}
                                    </p>
                                    <h3 className="text-white text-lg font-bold mb-2">{perk.subtitle}</h3>
                                    <p className="text-gray-300 text-xs mb-4 leading-relaxed">{perk.description}</p>
                                    <a href="#partner" className="text-white text-xs font-semibold hover:text-daka-orange transition-colors">
                                        Explore Partner →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* BUILD YOUR ATHLETE ECOSYSTEM CTA */}
            <div className="relative py-24 px-4 sm:px-8 bg-zinc-950">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Build Your Athlete Ecosystem
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Join thousands of elite athletes leveraging Daka's complete ecosystem for peak performance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/membership"
                            className="bg-daka-orange text-white px-10 py-4 rounded font-semibold tracking-wide hover:bg-orange-600 transition-colors"
                        >
                            Get Started
                        </a>
                        <a
                            href="/partnerships"
                            className="border border-white text-white px-10 py-4 rounded font-semibold tracking-wide hover:bg-white hover:text-black transition-colors"
                        >
                            Become A Partner
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessories;
