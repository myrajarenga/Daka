import React, { useState, useEffect, useRef } from 'react';

// Partner category data
const partnerCategories = [
    {
        title: 'Sports Venues & Stadiums',
        description: 'Exceptional spaces for elite training, competition, and world-class events.',
        image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800',
        size: 'large',
    },
    {
        title: 'Hospitals & Wellness',
        description: 'Medical excellence for injury prevention and athlete rehabilitation.',
        image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=800',
        size: 'small',
    },
    {
        title: 'Sportwear & Wearables',
        description: 'Integrated apparel and high-performance technology solutions.',
        image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=800',
        size: 'medium',
    },
    {
        title: 'Gyms & Training',
        description: 'World-class facilities to master physical excellence.',
        image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
        size: 'medium',
    },
    {
        title: 'Logistics & HR Consultants',
        description: 'Streamlined operations and talent support.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        size: 'medium',
    },
    {
        title: 'Hotels & Hospitality',
        description: 'Premium accommodations for traveling athletes.',
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
        size: 'medium',
    },
    {
        title: 'Educational Institutions',
        description: 'Cultivating young athletes with skills for lifelong growth.',
        image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
        size: 'large',
    },
];

// Partner logos data
const partnerLogos = [
    { name: 'StadiumX', icon: '🏟️' },
    { name: 'PulseLab', icon: '💓' },
    { name: 'Aero', icon: '✦' },
    { name: 'Uni_Tech', icon: '🎓' },
];

// Hero videos - partnership page specific
const heroVideos = [
    '/assets/videos/partneships-page -video1.mp4',
    '/assets/videos/partneships-page -video3.mp4',
];

const Partnerships = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    // Handle video ended - switch to next video
    const handleVideoEnded = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    };

    // Update video source when index changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [currentVideoIndex]);

    return (
        <div className="relative">
            {/* Fixed Hero Background */}
            <div className="fixed inset-0 z-0">
                <div className="relative h-screen w-full overflow-hidden">
                    <div className="absolute inset-0">
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoEnded}
                            className="w-full h-full object-cover"
                        >
                            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight text-white">
                            It Takes A<br />
                            <span className="text-daka-orange">Community</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light">
                            A diverse network collaborating to support the complete athlete journey.
                            From recovery to performance, we are connected.
                        </p>
                        <a
                            href="#partner-categories"
                            className="bg-daka-orange text-white px-10 py-4 rounded font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors"
                        >
                            Partner With Daka →
                        </a>
                    </div>

                    {/* Video Progress Indicators */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {heroVideos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentVideoIndex(index)}
                                className={`w-12 h-1 rounded-full transition-all duration-300 ${index === currentVideoIndex ? 'bg-daka-orange' : 'bg-white/30'
                                    }`}
                                aria-label={`Video ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Spacer for fixed hero */}
            <div className="h-screen" />

            {/* Scrollable Content */}
            <div className="relative z-10 bg-black">
                {/* Partner Categories Section */}
                <div id="partner-categories" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                            Partner <span className="text-daka-orange">Categories</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            Our ecosystem covers every aspect of the modern athlete's lifecycle.
                        </p>
                    </div>

                    {/* Masonry-style Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {partnerCategories.map((category, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-lg cursor-pointer border border-white/5 hover:border-daka-orange/50 transition-all duration-500 ${category.size === 'large' ? 'md:row-span-2 h-80 md:h-auto' : 'h-64'
                                    }`}
                            >
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-daka-orange text-lg md:text-xl font-bold mb-2 tracking-wide">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partner Logos Ticker */}
                <div className="py-12 border-t border-b border-white/10 overflow-hidden">
                    <div className="flex items-center justify-center gap-16 flex-wrap">
                        {partnerLogos.map((partner, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer"
                            >
                                <span className="text-2xl">{partner.icon}</span>
                                <span className="text-sm uppercase tracking-widest font-semibold">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative py-32 px-4 sm:px-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
                            Building The World's Most<br />
                            <span className="text-daka-orange">Holistic</span> Athlete Ecosystem.
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            Join a select group of partners defining the future of sports performance.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block border-2 border-white text-white px-10 py-4 rounded font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                        >
                            Join Our Partner Network
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partnerships;
