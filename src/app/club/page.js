"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CULTURAL_CLUBS = [
    { name: "CIT Connects", slug: "cit-connects" },
    { name: "Campus TV", slug: "campus-tv" },
    { name: "Immerse", slug: "immerse" },
    { name: "Yuvenza", slug: "yuvenza" },
];

const TECHNICAL_CLUBS = [
    { name: "Assymetric", slug: "assymetric" },
    { name: "ExploitX", slug: "exploitx" },
    { name: "Celestials", slug: "celestials" },
];

const ClubCard = ({ name, slug }) => {
    return (
        <Link href={`/club/${slug}`} className="block group">
            <div className="relative overflow-hidden border-2 border-[var(--ink)] bg-[var(--paper)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_var(--ink)] h-full">

                {/* Card Header / Folder Tab Effect */}
                <div className="border-b-2 border-[var(--ink)] px-4 py-2 bg-[var(--ink)] text-[var(--paper)] flex justify-between items-center">
                    <span className="font-mono text-xs uppercase tracking-widest truncate max-w-[80%]">Club_Data.dir</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col items-center justify-center aspect-square text-center relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    {/* Logo */}
                    <div className="relative w-24 h-24 mb-6 transition-transform duration-500 group-hover:scale-110">
                        {/* Using explicit public path as requested */}
                        <img
                            src={`/${name}.png`}
                            alt={`${name} Logo`}
                            className="w-full h-full object-contain drop-shadow-lg"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        {/* Fallback if logo missing */}
                        <div className="hidden absolute inset-0 bg-[var(--ink)] text-[var(--paper)] rounded-full items-center justify-center font-serif text-3xl font-bold">
                            {name.charAt(0)}
                        </div>
                    </div>

                    {/* Club Name */}
                    <h3 className="font-serif text-2xl font-bold tracking-tight relative z-10 group-hover:underline decoration-2 underline-offset-4 decoration-[var(--accent)]">
                        {name}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default function ClubPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="container mx-auto px-4 pb-20 pt-8 min-h-screen">

            {/* Page Title */}
            <div className="border-b-4 border-[var(--ink)] pb-8 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">

                    {/* Left: Heading */}
                    <div>
                        <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4">
                            The<br />Network.
                        </h1>
                        <p className="font-sans text-sm font-bold uppercase tracking-widest text-gray-500">
                            Student Organizations & Communities
                        </p>
                    </div>

                    {/* Right: Editorial Columns */}
                    <div className="hidden md:grid grid-cols-2 gap-6 pb-2 border-l border-gray-300 pl-6 lg:border-none lg:pl-0">
                        <p className="font-serif text-xs md:text-sm leading-relaxed text-justify text-gray-800">
                            <span className="font-bold text-5xl float-left mr-3 mt-[-4px] leading-[0.8] mb-1">A</span>t the heart of the Institute lies a vibrant ecosystem of student-led organizations. These clubs are not merely extracurricular groups; they are incubators of innovation, creativity, and leadership. From the technical wizardry of our coding societies to the artistic expressions of our cultural wings, The Network represents the diverse tapestry of talent that defines our campus.
                        </p>
                        <p className="font-serif text-xs md:text-sm leading-relaxed text-justify text-gray-800">
                            Membership in these communities offers more than just a line on a resume. It provides a platform for collaboration, a space for experimentation, and a home for those who share your passions. Whether you are looking to debug complex algorithms, capture the perfect frame, or debate the issues of the day, there is a place for you here.
                        </p>
                    </div>

                </div>
            </div>

            {/* Cultural Clubs Section */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="font-serif text-4xl font-bold italic pr-6 bg-[var(--paper)] relative z-10">
                        Cultural Clubs
                    </h2>
                    <div className="h-px bg-[var(--ink)] flex-grow opacity-30"></div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {CULTURAL_CLUBS.map((club) => (
                        <motion.div key={club.name} variants={itemVariants}>
                            <ClubCard name={club.name} slug={club.slug} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Technical Clubs Section */}
            <section>
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="font-serif text-4xl font-bold italic pr-6 bg-[var(--paper)] relative z-10">
                        Technical Clubs
                    </h2>
                    <div className="h-px bg-[var(--ink)] flex-grow opacity-30"></div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {TECHNICAL_CLUBS.map((club) => (
                        <motion.div key={club.name} variants={itemVariants}>
                            <ClubCard name={club.name} slug={club.slug} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

        </div>
    );
}

