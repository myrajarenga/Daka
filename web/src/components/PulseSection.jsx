import React from 'react';

const PulseSection = () => {
    return (
        <div className="bg-zinc-900 py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                {/* Visual / Watch Placeholder */}
                <div className="w-full md:w-1/2 mb-10 md:mb-0 relative flex justify-center">
                    <div className="relative">
                        <img
                            src="/assets/daka-fitbit-device.png"
                            alt="Daka Device"
                            className="w-80 h-auto object-contain relative z-10"
                        />
                        {/* Decorative Pulse Ring - Adjusted for image */}
                        <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-daka-orange/20 animate-ping -z-0"></div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 md:pl-12 text-left">
                    <h3 className="text-daka-orange font-bold uppercase tracking-widest mb-2 text-sm">
                        Product Vision
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        The Pulse of<br />
                        Your<br />
                        Potential
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
                        A constant, futuristic interface that merges biometric signals with career milestones. One view to master every dimension of your athletic journey.
                    </p>

                    <div className="flex space-x-4">
                        <button className="flex items-center text-xs font-bold uppercase tracking-widest text-white border border-zinc-700 px-4 py-2 rounded hover:border-daka-orange hover:text-daka-orange transition-colors">
                            <span className="w-2 h-2 bg-daka-orange rounded-full mr-2"></span>
                            Competition Analysis
                        </button>
                        <button className="flex items-center text-xs font-bold uppercase tracking-widest text-white border border-zinc-700 px-4 py-2 rounded hover:border-daka-orange hover:text-daka-orange transition-colors">
                            <span className="w-2 h-2 bg-daka-orange rounded-full mr-2"></span>
                            Wellbeing Framework
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PulseSection;
