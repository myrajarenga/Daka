import React from 'react';

const PulseSection = () => {
    return (
        <div className="bg-zinc-900 py-16 sm:py-20 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">

                {/* Visual / Watch Placeholder */}
                <div className="w-full md:w-1/2 relative flex justify-center order-2 md:order-1">
                    <div className="relative">
                        <img
                            src="/assets/daka-fitbit-device.png"
                            alt="Daka Device"
                            className="w-64 sm:w-80 h-auto object-contain relative z-10"
                        />
                        {/* Decorative Pulse Ring - Adjusted for image */}
                        <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-daka-orange/20 animate-ping -z-0"></div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left md:pl-12 order-1 md:order-2">
                    <h3 className="text-daka-orange font-bold uppercase tracking-widest mb-2 text-xs sm:text-sm">
                        Product Vision
                    </h3>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 sm:mb-6">
                        The Pulse of<br />
                        Your<br />
                        Potential
                    </h2>
                    <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto md:mx-0 text-sm sm:text-base">
                        A constant, futuristic interface that merges biometric signals with career milestones. One view to master every dimension of your athletic journey.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                        <button className="flex items-center justify-center text-xs font-bold uppercase tracking-widest text-white border border-zinc-700 px-4 py-3 rounded hover:border-daka-orange hover:text-daka-orange active:border-daka-orange active:text-daka-orange transition-colors min-h-[44px]">
                            <span className="w-2 h-2 bg-daka-orange rounded-full mr-2"></span>
                            Competition Analysis
                        </button>
                        <button className="flex items-center justify-center text-xs font-bold uppercase tracking-widest text-white border border-zinc-700 px-4 py-3 rounded hover:border-daka-orange hover:text-daka-orange active:border-daka-orange active:text-daka-orange transition-colors min-h-[44px]">
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
