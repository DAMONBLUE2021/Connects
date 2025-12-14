"use client";

import { motion } from "framer-motion";
import { Menu, Search, User } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Masthead() {
    const pathname = usePathname();
    const date = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const navItems = [
        { name: "Front Page", href: "/" },
        { name: "Magazine", href: "/magazine" },
        { name: "Events", href: "/events" },
        { name: "Podcasts", href: "/podcast" },
        { name: "Club & Community", href: "/club" },
        { name: "Archive", href: "/archive" }
    ];

    return (
        <>
            {/* Main Masthead Top Section */}
            <header className="w-full relative z-40 bg-[var(--paper)] transition-colors duration-700">
                <div className="container mx-auto px-4 pt-8 pb-4 flex flex-col items-center relative">
                    {/* Top Actions */}
                    <div className="absolute top-8 left-4 hidden md:flex gap-4 text-xs font-sans font-bold tracking-widest uppercase text-gray-500">
                        <span>Vol. II, Issue 06</span>
                        <span>Chennai, IN</span>
                    </div>
                    <div className="absolute top-8 right-4 flex gap-4">
                        <Search className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
                        <User className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
                        <Menu className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity md:hidden" />
                    </div>

                    {/* Logo */}
                    <Link href="/">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-serif text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-center leading-none my-4 hover:scale-[1.01] transition-transform duration-500 cursor-pointer"
                        >
                            CIT CONNECTS
                        </motion.h1>
                    </Link>

                    {/* Tagline */}
                    <p className="font-serif italic text-lg md:text-xl text-gray-500 mb-6">
                        "The Official Magazine of Chennai Institute of Technology"
                    </p>

                    {/* Date Bar */}
                    <div className="w-full border-t border-b border-black py-2 flex justify-between items-center font-sans text-xs md:text-sm font-bold uppercase tracking-widest">
                        <span className="hidden md:block">Est. 2023</span>
                        <span>{date}</span>
                        <span className="hidden md:block">Student Edition</span>
                    </div>
                </div>
            </header>

            {/* Sticky Navigation */}
            <div className="sticky top-0 z-50 bg-[var(--paper)] border-b border-black w-full shadow-sm">
                <div className="container mx-auto">
                    <nav className="hidden md:flex flex-wrap gap-8 py-4 font-sans text-xs font-bold tracking-widest uppercase w-full justify-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`hover:text-[var(--accent)] hover:underline decoration-2 underline-offset-4 transition-all duration-300 ${pathname === item.href ? 'text-[var(--accent)] underline' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Ticker (Now below nav) */}
            <div className="bg-[var(--ink)] text-[var(--paper)] py-1 overflow-hidden whitespace-nowrap relative z-10 transition-colors duration-700 mb-8 border-b-4 border-black">
                <div className="animate-marquee inline-block">
                    <span className="mx-4 uppercase text-xs font-sans font-bold tracking-widest">
                        Breaking: CIT Connects Launches New Digital Edition —
                        Campus Hackathon Registration Open —
                        Guest Lecture Series Starts Tomorrow —
                        Library Hours Extended for Finals Week —
                    </span>
                    <span className="mx-4 uppercase text-xs font-sans font-bold tracking-widest">
                        Breaking: CIT Connects Launches New Digital Edition —
                        Campus Hackathon Registration Open —
                        Guest Lecture Series Starts Tomorrow —
                        Library Hours Extended for Finals Week —
                    </span>
                </div>
            </div>
        </>
    );
}

