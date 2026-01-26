import React from 'react';
import { Activity, Brain, Moon, Apple, Briefcase } from 'lucide-react';

const pillars = [
  { title: 'PHYSICAL', img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600', icon: Activity },
  { title: 'MENTAL', img: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=600', icon: Brain },
  { title: 'REST & RECOVERY', img: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=600', icon: Moon },
  { title: 'NUTRITION', img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', icon: Apple },
  { title: 'CAREER', img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600', icon: Briefcase },
];

const Pillars = () => {
  return (
    <div id="pillars" className="bg-black py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6">
          Five Pillars.<br />
          <span className="text-daka-orange">One Ecosystem.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed font-light">
          Complete holistic tracking for the modern athlete. We connect the dots between your lifestyle and your performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {pillars.map((pillar, index) => {
          const isTopRow = index < 2;
          return (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer border border-white/5 hover:border-daka-orange/50 transition-all duration-500 ${isTopRow ? 'md:col-span-3 h-[500px]' : 'md:col-span-2 h-[450px]'
                }`}
            >
              {/* Image with overlay */}
              <div className="absolute inset-0 bg-black">
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 z-10">
                <div className="mb-4 p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-daka-orange group-hover:border-daka-orange transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                  <pillar.icon className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-2 group-hover:text-daka-orange transition-colors duration-300">
                  {pillar.title}
                </h3>

                <div className="w-12 h-1 bg-daka-orange rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pillars;
