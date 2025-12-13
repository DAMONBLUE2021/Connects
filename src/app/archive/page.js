"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Search, Clock } from "lucide-react";

const years = [2025, 2024, 2023, 2022];

const archives = {
    2025: [
        { month: "NOV", title: "The Innovation Issue", cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" },
        { month: "OCT", title: "Campus Noir", cover: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800" },
        { month: "SEP", title: "Freshman Guide", cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" },
    ],
    2024: [
        { month: "DEC", title: "Year in Review", cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800" },
        { month: "NOV", title: "Tech Fest Special", cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800" },
    ],
    2023: [
        { month: "MAY", title: "Graduation Edition", cover: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=800" },
    ],
    2022: [
        { month: "AUG", title: "The Beginning", cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800" },
    ]
};

export default function ArchivePage() {
    const [activeYear, setActiveYear] = useState(2025);

    return (
        <div className="container mx-auto px-4 pb-20">

            {/* Header */}
            <div className="border-b-4 border-black pb-8 mb-12 pt-8 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tighter mb-4">
                        The Vault
                    </h1>
                    <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
                        Digitized Records & Past Editions
                    </p>
                </div>

                <div className="w-full md:w-auto relative mt-8 md:mt-0">
                    <input
                        type="text"
                        placeholder="Search Archives..."
                        className="w-full md:w-64 border-b border-black py-2 pl-2 pr-8 font-serif bg-transparent focus:outline-none placeholder:italic placeholder:text-gray-400"
                    />
                    <Search size={16} className="absolute right-2 top-3 text-gray-400" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12">

                {/* Time Machine / Timeline Sidebar */}
                <div className="w-full md:w-32 flex-shrink-0 sticky top-32 h-fit">
                    <h3 className="font-sans font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Clock size={14} /> Time Machine
                    </h3>
                    <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
                        {years.map(year => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`text-2xl font-serif font-bold transition-all duration-300 text-left ${activeYear === year ? 'text-black scale-110 origin-left' : 'text-gray-300 hover:text-gray-500'}`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Archive Grid */}
                <div className="flex-grow">
                    <motion.div
                        key={activeYear}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {archives[activeYear]?.map((issue, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden aspect-[3/4] border border-gray-200 mb-4 bg-gray-100">
                                    <img
                                        src={issue.cover}
                                        alt={issue.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-black text-white font-sans text-xs font-bold px-2 py-1 uppercase tracking-widest">
                                        {issue.month} {activeYear}
                                    </div>
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white border border-white px-4 py-2 font-serif italic text-sm">Read Issue</span>
                                    </div>
                                </div>
                                <h4 className="font-serif text-2xl font-bold leading-tight group-hover:underline decoration-1 underline-offset-4">
                                    {issue.title}
                                </h4>
                                <span className="inline-flex items-center gap-1 font-sans text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-2">
                                    View Index <ArrowUpRight size={10} />
                                </span>
                            </div>
                        ))}

                        {/* Empty State / Placeholder for future years if any */}
                        {(!archives[activeYear] || archives[activeYear].length === 0) && (
                            <div className="col-span-full py-20 text-center text-gray-400 font-serif italic">
                                No records found for this year.
                            </div>
                        )}

                    </motion.div>
                </div>
            </div>

        </div>
    );
}
