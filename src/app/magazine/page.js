"use client";

import ArticleCard from "@/components/ArticleCard";
import { motion } from "framer-motion";
import { ChevronDown, Filter } from "lucide-react";
import { useState } from "react";

const articles = [
    {
        id: 1,
        title: "The Architecture of Sound: Inside the new Music Hall",
        excerpt: "How acoustics and aesthetics merge in the latest campus addition.",
        author: "Sarah Jenkings",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1719753458800-c09cfb167ac5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        priority: true
    },
    {
        id: 2,
        title: "Digital Minimalism in a Hyper-Connected Campus",
        excerpt: "Why students are trading smartphones for flip phones during finals week.",
        author: "David Chen",
        category: "Lifestyle",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800"
    },
    {
        id: 3,
        title: "The Coffee Shop Chronicles: Vol 4",
        excerpt: "Overheard conversations and and the best brews from around the university.",
        author: "Editorial Team",
        category: "Culture",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
    },
    {
        id: 4,
        title: "Future of AI in Engineering Education",
        excerpt: "Professors weigh in on the integration of Large Language Models in the curriculum.",
        author: "Dr. A. Kumar",
        category: "Tech",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    },
    {
        id: 5,
        title: "Vintage Fashion Returns to Campus",
        excerpt: "Thrifting is not just a trend; it's a sustainability statement.",
        author: "Maya Patel",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
    },
    {
        id: 6,
        title: "The Lost Art of Letter Writing",
        excerpt: "A student club dedicated to preserving analog communication.",
        author: "James Wilson",
        category: "Club Life",
        image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=800"
    }
];

export default function MagazinePage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "Culture", "Tech", "Lifestyle", "Fashion", "Architecture"];

    return (
        <div className="container mx-auto px-4 pb-20">

            {/* Header / Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-end border-b-4 border-black pb-4 mb-12 pt-4 transition-colors duration-700">
                <div>
                    <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tighter mb-2">
                        The Feed
                    </h1>
                    <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
                        Curated Stories from CIT Connects
                    </p>
                </div>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar items-center">
                        <span className="font-bold text-xs uppercase mr-2 flex items-center"><Filter size={12} className="mr-1" /> Filter:</span>
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`text-xs font-bold uppercase px-3 py-1 border transition-all ${activeFilter === filter
                                    ? 'bg-black text-white border-black'
                                    : 'border-gray-300 hover:border-black text-gray-500 hover:text-black'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Magazine Grid / Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {articles.map((article, index) => {
                    // Simple logic to make the first item span 2 columns if on large screen
                    const isFeatured = index === 0;

                    return (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`${isFeatured ? 'md:col-span-2' : ''}`}
                        >
                            <ArticleCard
                                {...article}
                                className="h-full"
                            />

                            {/* Editorial separator for visual rhythm */}
                            <div className="w-full h-px bg-gray-200 mt-8 mb-4 lg:hidden" />
                        </motion.div>
                    );
                })}
            </div>

            {/* Load More / Infinite Scroll Trigger */}
            <div className="mt-20 flex justify-center">
                <button className="group flex flex-col items-center gap-2">
                    <span className="font-serif italic text-gray-500 group-hover:text-black transition-colors">Load More Issues</span>
                    <ChevronDown className="animate-bounce" />
                </button>
            </div>

        </div>
    );
}
