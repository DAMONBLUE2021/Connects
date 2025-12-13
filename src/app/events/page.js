"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const events = [
    {
        month: "NOV",
        day: "25",
        year: "2025",
        time: "10:00 AM",
        title: "Campus Lit Fest: 'Ink & Aspiration'",
        description: "An open-air celebration of written word, featuring guest authors, poetry slams, and a book exchange marathon.",
        location: "Main Auditorium Foyer",
        type: "Festival"
    },
    {
        month: "DEC",
        day: "08",
        year: "2025",
        time: "02:00 PM",
        title: "Design Workshop: Zine Making 101",
        description: "Learn the punk-rock roots of self-publishing. Cut, paste, and xerox your own mini-magazine in this hands-on workshop led by the Design Club.",
        location: "Studio 4B, Creative Block",
        type: "Workshop"
    },
    {
        month: "JAN",
        day: "10",
        year: "2026",
        time: "05:30 PM",
        title: "Vol. 13 Magazine Launch: 'Retro-Future'",
        description: "Join us for the official release of our lucky 13th issue. Live reading, panel discussion, and refreshments served.",
        location: "CIT Library Atrium",
        type: "Launch"
    },
    {
        month: "JAN",
        day: "24",
        year: "2026",
        time: "09:00 AM",
        title: "Photography Walk: 'Shadows of Chennai'",
        description: "A guided photowalk through the historic districts of the city to capture high-contrast black and white street photography.",
        location: "Meet at Main Gate",
        type: "Field Trip"
    }
];

export default function EventsPage() {
    return (
        <div className="container mx-auto px-4 pb-20">

            <div className="border-b-4 border-black pb-8 mb-12 pt-8">
                <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tighter mb-4 text-center md:text-left">
                    Events
                </h1>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                    <p className="font-serif italic text-xl text-gray-600 max-w-2xl">
                        Upcoming cultural happenings, workshops, and gatherings.
                    </p>
                    <div className="mt-4 md:mt-0 font-sans text-xs font-bold uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors cursor-pointer">
                        Subscribe to Calendar
                    </div>
                </div>
            </div>

            <div className="relative border-l-2 border-black ml-4 md:ml-8 pl-8 md:pl-16 space-y-20 py-8">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[41px] md:-left-[73px] top-0 w-5 h-5 bg-black rounded-full border-4 border-[var(--paper)]" />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Date Column */}
                            <div className="lg:col-span-3 font-sans">
                                <div className="flex flex-row lg:flex-col gap-2 items-baseline lg:items-start text-[var(--accent)] font-bold">
                                    <span className="text-4xl md:text-6xl tracking-tighter">{event.day}</span>
                                    <span className="text-xl md:text-2xl uppercase tracking-widest">{event.month}</span>
                                    <span className="text-lg text-gray-400">{event.year}</span>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="lg:col-span-6">
                                <div className="inline-block bg-black text-white text-[10px] uppercase font-bold px-2 py-1 mb-3 tracking-widest">
                                    {event.type}
                                </div>
                                <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 hover:text-[var(--accent)] transition-colors cursor-pointer">
                                    {event.title}
                                </h2>
                                <p className="font-serif text-lg text-gray-600 leading-relaxed mb-6">
                                    {event.description}
                                </p>
                            </div>

                            {/* Metadata / Action Column */}
                            <div className="lg:col-span-3 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-300 pt-4 lg:pt-0 lg:pl-8">
                                <div className="space-y-4 font-sans text-sm font-bold uppercase tracking-wide text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        {event.location}
                                    </div>
                                </div>

                                <button className="group mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                                    RSVP Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
