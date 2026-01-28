import React from 'react';

const principles = [
    {
        title: 'Holistic',
        description: 'We address the complete athlete—body, mind, recovery, nutrition, and career.',
        image: '/assets/Images/whydaka_holistic.png',
    },
    {
        title: 'Athletic-Tech',
        description: 'Powered by cutting-edge wearables and AI-driven insights.',
        image: '/assets/Images/whydaka_tech.png',
    },
    {
        title: 'Simplified',
        description: 'One platform. Everything connected. No complexity.',
        image: '/assets/Images/whydaka_simplified.png',
    },
    {
        title: 'Future-Ready',
        description: 'Built for the next generation of athletes and how they train.',
        image: '/assets/Images/whydaka_tech.png',
    },
];

const statements = [
    {
        text: 'Burnout is increasing.',
        description: 'Athletes face more pressure than ever. Mental health struggles are at an all-time high.',
    },
    {
        text: 'Performance is data-driven.',
        description: 'The best athletes leverage technology to gain every possible edge.',
    },
    {
        text: 'Ecosystems are fragmented.',
        description: 'Training, recovery, nutrition, and mental health exist in silos. DAKA brings them together.',
    },
];

const WhyDaka = () => {
    return (
        <div className="relative">
            {/* Fixed Hero Background */}
            <div className="fixed inset-0 z-0">
                <div className="relative h-screen w-full overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/assets/Images/whydaka_hero.png"
                            alt="Why DAKA Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                    </div>
                    <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-8 max-w-7xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                            Why <span className="text-daka-orange">Daka</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-xl font-light mb-10">
                            The all-in-one athlete ecosystem designed to help you perform, recover, and thrive.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/membership"
                                className="bg-daka-orange text-white px-10 py-4 rounded font-bold tracking-widest hover:bg-orange-600 transition-colors text-center"
                            >
                                Get Started
                            </a>
                            <a
                                href="/how-it-works"
                                className="border border-white text-white px-10 py-4 rounded font-bold tracking-widest hover:bg-white hover:text-black transition-colors text-center"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer for fixed hero */}
            <div className="h-screen" />

            {/* Scrollable Content */}
            <div className="relative z-10">
                {/* Core Principles Section */}
                <div className="py-20 px-4 sm:px-8 bg-black">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12">
                            Core Principles
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {principles.map((principle, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-lg h-80">
                                    <img
                                        src={principle.image}
                                        alt={principle.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-daka-orange text-xl font-bold mb-2 uppercase tracking-wide">
                                            {principle.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* The DAKA Ecosystem Section */}
                <div className="py-20 px-4 sm:px-8 bg-zinc-950">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            The Daka Ecosystem
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                            One platform that connects every aspect of athlete performance.
                        </p>
                        <div className="relative flex justify-center">
                            <img
                                src="/assets/Images/daka_ecosystem_hub.png"
                                alt="DAKA Central Hub - 5 Pillars"
                                className="max-w-full h-auto md:max-w-3xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Statement Sections */}
                <div className="py-20 px-4 sm:px-8 bg-white text-black">
                    <div className="max-w-4xl mx-auto space-y-16">
                        {statements.map((statement, index) => (
                            <div key={index} className="border-l-4 border-daka-orange pl-8">
                                <h3 className="text-3xl md:text-5xl font-bold italic mb-4">
                                    {statement.text}
                                </h3>
                                <p className="text-gray-600 text-lg">
                                    {statement.description}
                                </p>
                            </div>
                        ))}
                        <div className="pt-8">
                            <p className="text-daka-orange text-sm uppercase tracking-widest mb-2">Explore the Ecosystem</p>
                            <a href="/how-it-works" className="text-black font-bold hover:text-daka-orange transition-colors inline-flex items-center gap-2">
                                Learn How DAKA Works
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative py-24 px-4 sm:px-8 overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/assets/Images/whydaka_hero.png"
                            alt="CTA Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                            Built for Athletes.<br />
                            <span className="text-daka-orange">Ready for the Future.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            Join the movement that's redefining what it means to be an athlete.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/membership"
                                className="bg-daka-orange text-white px-10 py-4 rounded font-bold tracking-widest hover:bg-orange-600 transition-colors"
                            >
                                Become a Member
                            </a>
                            <a
                                href="#contact"
                                className="border border-white text-white px-10 py-4 rounded font-bold tracking-widest hover:bg-white hover:text-black transition-colors"
                            >
                                Partner With DAKA
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyDaka;
