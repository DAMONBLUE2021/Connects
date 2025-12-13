"use client";

import { motion } from "framer-motion";
import { Mic, Pause, Play, Radio, Volume2 } from "lucide-react";
import { useState } from "react";

const episodes = [
    {
        id: 1,
        title: "Echoes of Engineering",
        guest: "Dr. S. Ramesh",
        date: "14 Oct 2025",
        duration: "42:15",
        description: "A deep dive into the evolution of engineering curriculum and what it means for the next generation of builders.",
        season: 2,
        ep: 4
    },
    {
        id: 2,
        title: "The Creative Circuit",
        guest: "Student Arts Council",
        date: "28 Sep 2025",
        duration: "35:40",
        description: "Breaking down the silos between technical education and artistic expression on campus.",
        season: 2,
        ep: 3
    },
    {
        id: 3,
        title: "Startup Stories: From Dorm to Market",
        guest: "Vikram & Team",
        date: "10 Sep 2025",
        duration: "51:00",
        description: "The founders of 'GreenCycle' share their journey from a hackathon project to a funded startup.",
        season: 2,
        ep: 2
    },
    {
        id: 4,
        title: "Mental Health Matters",
        guest: "Campus Wellness Center",
        date: "25 Aug 2025",
        duration: "29:30",
        description: "An honest conversation about stress, burnout, and finding balance in a high-performance environment.",
        season: 2,
        ep: 1
    }
];

export default function PodcastPage() {
    const [playing, setPlaying] = useState(null);

    const togglePlay = (id) => {
        if (playing === id) {
            setPlaying(null);
        } else {
            setPlaying(id);
        }
    };

    return (
        <div className="container mx-auto px-4 pb-20">

            {/* Header */}
            <div className="border-b-4 border-black pb-8 mb-12 pt-8 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <div className="flex items-center gap-2 mb-2 text-[var(--accent)] animate-pulse">
                        <Radio size={16} />
                        <span className="font-sans text-xs font-bold uppercase tracking-widest">Live: CIT Radio 90.4</span>
                    </div>
                    <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tighter">
                        Airwaves
                    </h1>
                </div>
                <p className="font-serif italic text-xl text-gray-600 max-w-xl text-right mt-4 md:mt-0">
                    Recorded conversations from the heart of the institute.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Sidebar / Schedule */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                    <div className="border-t-2 border-black pt-4 sticky top-32">
                        <h3 className="font-sans font-bold text-xs uppercase tracking-widest mb-6">Programming Schedule</h3>
                        <ul className="space-y-6 font-serif">
                            <li className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                                <span className="text-gray-500 text-sm">09:00 AM</span>
                                <span className="font-bold">Morning Jazz</span>
                            </li>
                            <li className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                                <span className="text-[var(--accent)] text-sm font-bold">11:00 AM</span>
                                <span className="font-bold">The Daily Brief</span>
                            </li>
                            <li className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                                <span className="text-gray-500 text-sm">02:00 PM</span>
                                <span className="font-bold">Tech Talk</span>
                            </li>
                            <li className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                                <span className="text-gray-500 text-sm">06:00 PM</span>
                                <span className="font-bold">Evening Lo-Fi</span>
                            </li>
                        </ul>

                        <div className="mt-12 p-4 bg-gray-100 border border-gray-300">
                            <h4 className="font-sans font-bold text-[10px] uppercase tracking-widest mb-2">Editor&apos;s Pick</h4>
                            <p className="font-serif italic text-sm mb-2">&quot;The episode with the Dean was surprisingly candid.&quot;</p>
                            <p className="text-xs text-gray-500">— Sarah, Chief Editor</p>
                        </div>
                    </div>
                </div>

                {/* Main Feed */}
                <div className="lg:col-span-9 order-1 lg:order-2 space-y-8">
                    {episodes.map((ep) => (
                        <motion.div
                            key={ep.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`border border-gray-300 p-6 md:p-8 hover:border-black hover:shadow-xl transition-all duration-300 group ${playing === ep.id ? 'bg-[var(--ink)] text-[var(--paper)]' : 'bg-white'}`}
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">

                                {/* Play Button */}
                                <button
                                    onClick={() => togglePlay(ep.id)}
                                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${playing === ep.id
                                        ? 'border-[var(--paper)] text-[var(--paper)] scale-110'
                                        : 'border-black text-black group-hover:bg-black group-hover:text-white'
                                        }`}
                                >
                                    {playing === ep.id ? <Pause size={32} strokeWidth={1} /> : <Play size={32} strokeWidth={1} className="ml-1" />}
                                </button>

                                {/* Info */}
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2 font-sans text-[10px] font-bold uppercase tracking-widest opacity-60">
                                        <span>Season {ep.season}, Ep {ep.ep}</span>
                                        <span>•</span>
                                        <span>{ep.date}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Volume2 size={10} /> {ep.duration}</span>
                                    </div>

                                    <h2 className="font-serif text-3xl md:text-4xl font-bold leading-none mb-3">
                                        {ep.title}
                                    </h2>

                                    <div className={`flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wide mb-4 ${playing === ep.id ? 'text-[var(--accent)]' : 'text-gray-500'}`}>
                                        <Mic size={12} />
                                        <span>Guest: {ep.guest}</span>
                                    </div>

                                    <p className={`font-serif text-lg leading-relaxed ${playing === ep.id ? 'opacity-90' : 'text-gray-600'}`}>
                                        {ep.description}
                                    </p>
                                </div>

                                {/* Waveform Visualization (Mock) */}
                                {playing === ep.id && (
                                    <div className="hidden md:flex gap-1 items-end h-12">
                                        {[...Array(10)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: ["20%", "100%", "20%"] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                                className="w-1 bg-[var(--paper)] opacity-50"
                                            />
                                        ))}
                                    </div>
                                )}

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

        </div>
    );
}
