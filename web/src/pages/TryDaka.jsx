import React from 'react';
import { Check, Smartphone, Brain, Activity, BarChart3 } from 'lucide-react';

const TryDaka = () => {
    return (
        <div className="relative">
            {/* Fixed Hero Background with Video */}
            <div className="fixed inset-0 z-0">
                <div className="relative h-screen w-full overflow-hidden">
                    <div className="absolute inset-0">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/assets/videos/pysical.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    </div>

                    <div className="relative z-10 flex items-center h-full px-4 sm:px-8 max-w-7xl mx-auto">
                        <div className="max-w-xl">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
                                Try Daka for<br />
                                <span className="text-daka-orange">1 month free</span>
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl max-w-md mb-8 font-light leading-relaxed">
                                Experience the full Daka athlete ecosystem for 30 days. Unlock your data, optimize your performance today.
                            </p>
                            <a
                                href="#get-started"
                                className="inline-block bg-daka-orange text-white px-8 py-4 rounded font-semibold tracking-wide hover:bg-orange-600 transition-colors"
                            >
                                Start Free Trial
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer for fixed hero */}
            <div className="h-screen" />

            {/* Scrollable Content */}
            <div className="relative z-10">

                {/* A Complete Picture Section */}
                <div className="bg-white py-20 px-4 sm:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
                                A Complete Picture of <span className="text-daka-orange">Athlete Performance</span>
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Daka consolidates all five pillars into a Unified Dashboard: Physical, Nutrition, Mental, Rest & Recovery, and Career Growth.
                            </p>
                        </div>

                        {/* Dashboard Preview */}
                        <div className="bg-zinc-900 rounded-2xl p-6 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Physical/Nutritional Chart */}
                                <div className="bg-black rounded-xl p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Activity className="w-5 h-5 text-daka-orange" />
                                        <span className="text-white font-semibold">Physical/Nutritional</span>
                                        <span className="text-gray-500 text-sm ml-auto">This Week</span>
                                    </div>
                                    <div className="flex items-end gap-2 h-32">
                                        {[40, 65, 80, 55, 90, 70, 85].map((height, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 bg-gradient-to-t from-daka-orange to-orange-400 rounded-t"
                                                style={{ height: `${height}%` }}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                                        <span>Mon</span>
                                        <span>Tue</span>
                                        <span>Wed</span>
                                        <span>Thu</span>
                                        <span>Fri</span>
                                        <span>Sat</span>
                                        <span>Sun</span>
                                    </div>
                                </div>

                                {/* Mental Wellness */}
                                <div className="bg-black rounded-xl p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Brain className="w-5 h-5 text-purple-400" />
                                        <span className="text-white font-semibold">Mental Wellness</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="relative w-24 h-24">
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle cx="48" cy="48" r="40" stroke="#333" strokeWidth="8" fill="none" />
                                                <circle cx="48" cy="48" r="40" stroke="#a855f7" strokeWidth="8" fill="none"
                                                    strokeDasharray="251" strokeDashoffset="50" strokeLinecap="round" />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-white text-xl font-bold">82%</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gray-400 text-sm">Weekly Progress</p>
                                            <p className="text-green-400 text-sm">↑ 12% from last week</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                <div className="bg-black/50 rounded-lg p-4 border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-daka-orange" />
                                        <span className="text-gray-400 text-sm">Rest Score</span>
                                    </div>
                                    <p className="text-white text-2xl font-bold">89%</p>
                                </div>
                                <div className="bg-black/50 rounded-lg p-4 border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <span className="text-gray-400 text-sm">Nutrition</span>
                                    </div>
                                    <p className="text-white text-2xl font-bold">2,450 cal</p>
                                </div>
                                <div className="bg-black/50 rounded-lg p-4 border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                                        <span className="text-gray-400 text-sm">Recovery</span>
                                    </div>
                                    <p className="text-white text-2xl font-bold">7.2 hrs</p>
                                </div>
                                <div className="bg-black/50 rounded-lg p-4 border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                                        <span className="text-gray-400 text-sm">Career Roadmap</span>
                                    </div>
                                    <p className="text-white text-2xl font-bold">On Track</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* In Action Section */}
                <div className="bg-black py-20 px-4 sm:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
                            <span className="text-daka-orange">In</span> Action
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Quantify Card */}
                            <div className="group relative overflow-hidden rounded-2xl h-80">
                                <img
                                    src="https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Quantify your insights"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">Quantify your insights</h3>
                                    <p className="text-gray-300 text-sm">Track every metric that matters to your performance.</p>
                                </div>
                            </div>

                            {/* Master Sleep Card */}
                            <div className="group relative overflow-hidden rounded-2xl h-80">
                                <img
                                    src="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Master your sleep"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">Master your sleep</h3>
                                    <p className="text-gray-300 text-sm">Optimize recovery with personalized sleep insights.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Everything You Need Section */}
                <div className="bg-zinc-950 py-20 px-4 sm:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                                    Everything You Need<br />Is Included
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    Unlock the full potential of the Daka ecosystem with a unified, data-first athlete growth experience.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { icon: Smartphone, title: 'Daka App Ecosystem Access', desc: 'Complete access to all five pillars in one app.' },
                                        { icon: Brain, title: 'Personalized AI Insights', desc: 'Intelligent recommendations based on your data.' },
                                        { icon: BarChart3, title: 'Data Ecosystem Integrator', desc: 'Seamlessly connect your existing wearables.' },
                                        { icon: Activity, title: '24/7 Wearable Tracking', desc: 'Continuous monitoring with our partner devices.' },
                                    ].map((feature, index) => (
                                        <div key={index} className="flex gap-4 items-start">
                                            <div className="p-3 rounded-lg bg-daka-orange/10 border border-daka-orange/20">
                                                <feature.icon className="w-5 h-5 text-daka-orange" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                                                <p className="text-gray-500 text-sm">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Phone Mockup */}
                            <div className="flex justify-center">
                                <div className="relative">
                                    <div className="w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-4 border-zinc-700 p-2 shadow-2xl">
                                        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                                            <div className="text-center p-6">
                                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-daka-orange/20 flex items-center justify-center">
                                                    <Activity className="w-10 h-10 text-daka-orange" />
                                                </div>
                                                <p className="text-white text-4xl font-bold mb-2">96</p>
                                                <p className="text-gray-400 text-sm">Performance Score</p>
                                                <div className="mt-6 space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-500">Recovery</span>
                                                        <span className="text-green-400">18.4 hrs</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-500">Strain</span>
                                                        <span className="text-daka-orange">12.3</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Values Section */}
                <div className="bg-black py-24 px-4 sm:px-8">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">Our Philosophy</p>
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Holistic</h2>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-600 tracking-tight">Always Evolving</h2>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-600 tracking-tight">Athlete-First</h2>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-600 tracking-tight">Data-Led</h2>
                        </div>
                    </div>
                </div>

                {/* Choose Your Path Section */}
                <div className="bg-zinc-950 py-20 px-4 sm:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
                            Choose Your Path
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Individual Athlete',
                                    desc: 'For pro and elite athletes ready to optimize every dimension.',
                                    image: 'https://images.pexels.com/photos/3621185/pexels-photo-3621185.jpeg?auto=compress&cs=tinysrgb&w=800'
                                },
                                {
                                    title: 'Academies & High Schools',
                                    desc: 'Develop the next generation with institutional access.',
                                    image: 'https://images.pexels.com/photos/8224718/pexels-photo-8224718.jpeg?auto=compress&cs=tinysrgb&w=800'
                                },
                                {
                                    title: 'Corporate & Enterprise',
                                    desc: 'Scale athlete wellness across your organization.',
                                    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
                                },
                            ].map((path, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-2xl h-72 cursor-pointer border border-white/5 hover:border-daka-orange/50 transition-all">
                                    <img
                                        src={path.image}
                                        alt={path.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                                        <h3 className="text-white text-xl font-bold mb-2">{path.title}</h3>
                                        <p className="text-gray-400 text-sm">{path.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Unlock Your Potential CTA */}
                <div className="relative py-24 px-4 sm:px-8 overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.pexels.com/photos/3621185/pexels-photo-3621185.jpeg?auto=compress&cs=tinysrgb&w=1260"
                            alt="Unlock Your Potential"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                            Unlock Your Potential.
                        </h2>
                        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                            Join the thousands of elite athletes trusting Daka.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#get-started"
                                className="bg-daka-orange text-white px-10 py-4 rounded font-semibold tracking-wide hover:bg-orange-600 transition-colors"
                            >
                                Start Free Trial
                            </a>
                            <a
                                href="/partnerships"
                                className="border border-white text-white px-10 py-4 rounded font-semibold tracking-wide hover:bg-white hover:text-black transition-colors"
                            >
                                Partner With Daka
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TryDaka;
