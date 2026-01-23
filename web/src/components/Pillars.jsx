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
    <div className="bg-black py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
          Five Pillars.<br />
          <span className="text-daka-orange">One Platform.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Complete holistic tracking for the modern athlete. We connect the dots between your lifestyle and your performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-[500px] mb-12">
        {pillars.map((pillar, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer h-full">
            <img
              src={pillar.img}
              alt={pillar.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex flex-col items-center justify-end h-1/2 transition-all duration-300">
              <div className="mb-2 p-3 rounded-full bg-black/50 border border-white/20 group-hover:border-daka-orange group-hover:bg-daka-orange/10 transition-all duration-300 transform group-hover:-translate-y-1">
                <pillar.icon className="w-6 h-6 text-white group-hover:text-daka-orange transition-colors duration-300" />
              </div>
              <h3 className="text-white font-bold text-center text-sm md:text-base uppercase tracking-widest border-b-2 border-transparent group-hover:border-daka-orange group-hover:text-daka-orange inline-block pb-1 transition-all">
                {pillar.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pillars;
