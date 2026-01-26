import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const videos = [
        "/assets/videos/Video_Editing_Devices_Only.mp4",
        "/assets/videos/pysical.mp4",
        "/assets/videos/mental.mp4",
        "/assets/videos/rest and recovery.mp4",
        "/assets/videos/nutrion.mp4",
        "/assets/videos/career growth.mp4"
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

    React.useEffect(() => {
        // First video plays for 8 seconds, others for 5 seconds
        const duration = currentVideoIndex === 0 ? 8000 : 5000;

        const timer = setTimeout(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, duration);

        return () => clearTimeout(timer);
    }, [currentVideoIndex]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-black/30 z-10"></div> {/* Overlay for text readability */}
                <video
                    key={videos[currentVideoIndex]} // Key prop forces re-render/reload on source change
                    autoPlay
                    muted
                    playsInline
                    className={`w-full h-full object-cover transition-transform duration-700 ${currentVideoIndex === 2 ? 'scale-110 object-top' : 'scale-100'}`}
                >
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto mt-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                    The All-In-One <br className="hidden md:block" />
                    Athlete Ecosystem
                </h1>

                <p className="text-lg md:text-xl text-gray-200 font-medium mb-10 max-w-2xl leading-relaxed tracking-wide min-h-[3rem] flex items-center justify-center">
                    {currentVideoIndex !== 0 && (
                        <span className="text-daka-orange text-2xl md:text-4xl font-bold uppercase tracking-wide animate-fade-in">
                            {['Physical', 'Mental', 'Rest & Recovery', 'Nutrition', 'Career'][currentVideoIndex - 1]}
                        </span>
                    )}
                </p>

                <a href="#join-waitlist" className="bg-daka-orange text-white px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors mb-12 inline-block">
                    Join The Waitlist
                </a>

                {/* Scroll Down Arrow */}
                <a href="#pillars" className="animate-bounce cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                    <ChevronDown className="w-10 h-10 text-white" />
                </a>
            </div>
        </div>
    );
};

export default Hero;
