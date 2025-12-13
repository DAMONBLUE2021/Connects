"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export default function ArticleCard({ title, excerpt, image, category, author, priority = false, className = "" }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Transform grayscale based on scroll position (0 to 1)
    // We want it to be fully colored (grayscale 0%) when it's in the center of the viewport
    // So we map scroll progress to grayscale values.
    // 0 (start) -> 100% grayscale
    // 0.5 (center) -> 0% grayscale
    // 1 (end) -> 100% grayscale

    // Smooth grayscale transition logic for the preview card
    const grayscale = useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "0%", "100%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <div ref={ref} className={`flex flex-col gap-4 group cursor-pointer ${className}`} onClick={() => openArticle({ title, category, image, excerpt, author })}>
            <div className="relative overflow-hidden border border-gray-200 aspect-[4/3]">
                <motion.div style={{ filter: useTransform(grayscale, (v) => `grayscale(${v})`), scale }} className="w-full h-full">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>

                {/* Category Badge */}
                <span className="absolute top-0 left-0 bg-black text-white px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-widest z-10">
                    {category || "News"}
                </span>

                {/* Read Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="bg-white text-black px-6 py-2 font-serif italic text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Read Story
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4 transition-all">
                    {title}
                </h3>
                {excerpt && (
                    <p className="font-serif text-gray-600 line-clamp-3 text-sm md:text-base leading-relaxed">
                        {excerpt}
                    </p>
                )}
                <div className="flex items-center gap-1 font-sans text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] pt-2">
                    Read Article <ArrowUpRight size={10} />
                </div>
            </div>
        </div>
    );
}
