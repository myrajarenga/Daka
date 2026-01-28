import React from 'react';

const pillars = [
    {
        title: 'Physical',
        highlight: 'Training',
        description: 'Build power, endurance, and resilience with training programs designed by world-class coaches.',
        stat: '+15%',
        statLabel: 'average performance gains',
        image: '/assets/Images/hiw_physical.png',
        imageLeft: true,
    },
    {
        title: 'Mental',
        highlight: 'Health',
        description: 'Cognitive training and mental strategies to sharpen focus, build confidence, and perform under pressure.',
        stat: '2X',
        statLabel: 'faster decision making',
        image: '/assets/Images/hiw_mental.png',
        imageLeft: false,
    },
    {
        title: 'Rest &',
        highlight: 'Recovery',
        description: 'Personalized sleep protocols and recovery routines to help your body rebuild and come back stronger.',
        stat: '+40%',
        statLabel: 'improved recovery time',
        image: '/assets/Images/hiw_rest.png',
        imageLeft: true,
    },
    {
        title: 'Nutrition',
        highlight: 'Planning',
        description: 'Eating strategies and meal plans to fuel your body for maximum energy and optimal performance.',
        stat: '100%',
        statLabel: 'personalized meal plans',
        image: '/assets/Images/hiw_nutrition.png',
        imageLeft: false,
    },
    {
        title: 'Career',
        highlight: 'Development',
        description: 'Build your personal brand, manage finances, and create opportunities beyond the field.',
        stat: 'MAX',
        statLabel: 'potential unlocked',
        image: '/assets/Images/hiw_career.png',
        imageLeft: true,
    },
];

const HowItWorks = () => {
    return (
        <div className="relative">
            {/* Fixed Hero Background */}
            <div className="fixed inset-0 z-0">
                <div className="relative h-screen w-full overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/assets/Images/hiw_hero.png"
                            alt="How It Works Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                        <p className="text-daka-orange tracking-widest text-sm mb-4">The DAKA Approach</p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                            Our Five<br />
                            <span className="text-daka-orange">Pillars</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl font-light">
                            A unique approach to athlete development, covering every aspect of your journey from training to life after sports.
                        </p>
                    </div>
                </div>
            </div>

            {/* Spacer for fixed hero */}
            <div className="h-screen" />

            {/* Scrollable Content */}
            <div className="relative z-10">
                {/* Pillar Sections */}
                {pillars.map((pillar, index) => (
                    <div
                        key={index}
                        className={`py-20 px-4 sm:px-8 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                        <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${pillar.imageLeft ? '' : 'md:flex-row-reverse'}`}>
                            {/* Image */}
                            <div className={`${pillar.imageLeft ? 'md:order-1' : 'md:order-2'}`}>
                                <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                                    <img
                                        src={pillar.image}
                                        alt={pillar.title}
                                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`${pillar.imageLeft ? 'md:order-2' : 'md:order-1'}`}>
                                <p className="text-gray-400 tracking-widest text-xs mb-2">Pillar {String(index + 1).padStart(2, '0')}</p>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">
                                    {pillar.title}<br />
                                    <span className="text-daka-orange">{pillar.highlight}</span>
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {pillar.description}
                                </p>
                                <div className="mb-8">
                                    <p className="text-5xl md:text-6xl font-bold text-daka-orange">{pillar.stat}</p>
                                    <p className="text-gray-500 text-sm tracking-wide">{pillar.statLabel}</p>
                                </div>
                                <a
                                    href="#cta"
                                    className="inline-block bg-daka-orange text-white px-8 py-3 rounded font-bold tracking-widest hover:bg-orange-600 transition-colors"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                {/* CTA Section */}
                <div id="cta" className="bg-black py-24 px-4 sm:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                            Everything<br />
                            <span className="text-daka-orange">Connected</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            Daka brings every pillar together in one seamless ecosystem. See how our platform works for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#join-waitlist"
                                className="bg-daka-orange text-white px-10 py-4 rounded font-bold tracking-widest hover:bg-orange-600 transition-colors"
                            >
                                Start Watching
                            </a>
                            <a
                                href="#contact"
                                className="border border-white text-white px-10 py-4 rounded font-bold tracking-widest hover:bg-white hover:text-black transition-colors"
                            >
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
