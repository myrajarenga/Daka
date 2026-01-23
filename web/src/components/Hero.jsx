import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-black/30 z-10"></div> {/* Overlay for text readability */}
                {/* Placeholder video: Athlete on field as requested */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/videos/Video_Editing_Devices_Only.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto mt-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                    The All-In-One <br className="hidden md:block" />
                    Athlete Ecosystem
                </h1>

                <p className="text-lg md:text-xl text-gray-200 font-medium mb-10 max-w-2xl leading-relaxed tracking-wide">
                    {['Physical', 'Mental', 'Rest & Recovery', 'Nutrition', 'Career'].map((item, index, array) => (
                        <React.Fragment key={index}>
                            <span className="hover:text-daka-orange transition-colors duration-300 cursor-default">
                                {item}
                            </span>
                            {index < array.length - 1 && <span>, </span>}
                        </React.Fragment>
                    ))}
                </p>

                <a href="#join-waitlist" className="bg-daka-orange text-white px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors">
                    Join The Waitlist
                </a>
            </div>
        </div>
    );
};

export default Hero;
