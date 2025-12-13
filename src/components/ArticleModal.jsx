"use client";

import { useArticle } from "@/context/ArticleContext";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Bookmark, X } from "lucide-react";
import { useEffect, useRef } from "react";

// Component for images inside the article that transition from B&W to Color
const ArticleImage = ({ src, alt, caption }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const grayscale = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

    return (
        <figure ref={ref} className="my-12 relative group">
            <div className="overflow-hidden bg-[var(--ink)]/5">
                <motion.img
                    src={src}
                    alt={alt}
                    style={{
                        filter: useTransform(grayscale, (v) => `grayscale(${v})`),
                        scale
                    }}
                    className="w-full h-auto object-cover transition-all duration-700"
                />
            </div>
            {caption && (
                <figcaption className="font-sans text-[10px] font-bold uppercase tracking-widest text-[var(--ink)]/50 mt-2 border-l-2 border-[var(--accent)] pl-3">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};

export default function ArticleModal() {
    const { selectedArticle, isOpen, closeArticle } = useArticle();

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") closeArticle();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [closeArticle]);

    if (!selectedArticle) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeArticle}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Modal Container - The "Newspaper" */}
                        <motion.div
                            initial={{ y: 100, opacity: 0, scale: 0.95, rotateX: 10 }}
                            animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
                            exit={{ y: 100, opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[var(--paper)] text-[var(--ink)] w-full max-w-4xl h-[90vh] md:h-[95vh] rounded-sm shadow-2xl overflow-hidden flex flex-col relative"
                            style={{
                                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
                            }}
                        >
                            {/* Header / Controls */}
                            <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-start p-6 pointer-events-none">
                                <button onClick={() => { }} className="pointer-events-auto p-2 hover:bg-black/5 rounded-full transition-colors group">
                                    <Bookmark size={20} className="text-[var(--ink)]/40 group-hover:text-[var(--accent)]" />
                                </button>

                                <button
                                    onClick={closeArticle}
                                    className="pointer-events-auto bg-black text-white rounded-full p-2 hover:bg-[var(--accent)] transition-transform hover:rotate-90 duration-300"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto h-full px-6 md:px-16 py-12 custom-scrollbar">

                                {/* Editorial Header */}
                                <header className="mb-12 border-b-2 border-[var(--ink)] pb-8 text-center max-w-2xl mx-auto">
                                    <div className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-4 flex items-center justify-center gap-2">
                                        <span>{selectedArticle.category || "Feature"}</span>
                                        <span className="w-1 h-1 bg-[var(--accent)] rounded-full" />
                                        <span>CIT Connects</span>
                                    </div>

                                    <h1 className="font-serif text-5xl md:text-7xl font-black leading-[0.9] text-balance mb-6">
                                        {selectedArticle.title}
                                    </h1>

                                    <div className="flex items-center justify-center gap-4 text-sm font-serif italic text-[var(--ink)]/60">
                                        <span>By {selectedArticle.author || "Editorial Staff"}</span>
                                        <span className="not-italic text-[var(--ink)]/30">|</span>
                                        <span>{selectedArticle.date || "Today"}</span>
                                    </div>
                                </header>

                                {/* Main Body */}
                                <article className="max-w-3xl mx-auto font-serif text-lg md:text-xl leading-relaxed text-[var(--ink)]/80">

                                    {/* Drop Cap Intro */}
                                    <p className="mb-6 first-letter:float-left first-letter:text-7xl first-letter:font-black first-letter:pr-4 first-letter:leading-[0.8] first-letter:mt-2">
                                        <span className="font-sans font-bold uppercase tracking-widest text-sm block mb-1 text-[var(--ink)]/40 -ml-1">Dateline: Chennai</span>
                                        {selectedArticle.description || selectedArticle.excerpt || "We find ourselves at a turning point in the semester, looking back at what has been achieved."}
                                        The atmosphere at CIT has shifted. You can feel it in the corridors, hear it in the cafeteria, and see it in the projects being built in the labs. It's not just about grades anymore; it's about impact.
                                    </p>

                                    <p className="mb-8">
                                        Every year, thousands of students walk through these gates, but only a few truly leave a mark. This week, we explore the stories of those who dared to ask "What if?" and the faculty who supported them. From late-night coding sessions to early morning rehearsals, the campus is alive 24/7.
                                    </p>

                                    <ArticleImage
                                        src={selectedArticle.image || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800"}
                                        alt={selectedArticle.title}
                                        caption="Fig 1. A glimpse into the daily life on campus."
                                    />

                                    <h3 className="font-sans text-xl font-bold uppercase tracking-tighter mb-4 mt-12 border-l-4 border-[var(--ink)] pl-4">
                                        The Shift in Perspective
                                    </h3>

                                    <p className="mb-6">
                                        Traditionally, engineering education was about theory. Today, it's about practice. The new labs are proof of that. Just yesterday, the robotics team unveiled their latest prototype, a machine capable of navigating complex terrains autonomously. It wasn't just a project; it was a statement.
                                    </p>

                                    <blockquote className="my-12 border-y border-[var(--ink)]/30 py-8 text-3xl md:text-4xl font-black text-center italic text-[var(--accent)]">
                                        "We are not just building machines; we are crafting the future, one circuit at a time."
                                    </blockquote>

                                    <p className="mb-6">
                                        This sentiment echoes across departments. The Arts Club is rehearsing a play that challenges social norms. The debate team is preparing for nationals. The sports contingent is training harder than ever. There is a synergy here, a collective drive towards excellence that is impossible to ignore.
                                    </p>

                                    <p className="mb-6">
                                        As we move forward, it is crucial to remember our roots. The archive section of this very platform serves as a reminder of where we came from. It documents the struggles, the victories, and the mundane moments that make up the fabric of our institution.
                                    </p>

                                    <ArticleImage
                                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800"
                                        alt="Students discussing"
                                        caption="Fig 2. Collaboration is the key to innovation."
                                    />

                                    <h3 className="font-sans text-xl font-bold uppercase tracking-tighter mb-4 mt-12 border-l-4 border-[var(--ink)] pl-4">
                                        Looking Ahead
                                    </h3>

                                    <p className="mb-12">
                                        So, what comes next? That is up to you. The pages of this magazine are open. The stages are set. The labs are unlocked. Go out there and create something worth writing about. Because in the end, we are all just stories waiting to be told.
                                    </p>

                                    {/* Footnotes / End of Article */}
                                    <div className="border-t border-[var(--ink)] pt-8 mt-16 text-sm text-[var(--ink)]/50 font-sans">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-[var(--ink)] rounded-full"></div>
                                            <span className="font-bold uppercase tracking-widest">End of Article</span>
                                        </div>
                                        <p>
                                            Published in CIT Connects Vol. 1. Content is subject to editorial review.
                                            Images courtesy of the Media Team.
                                        </p>
                                    </div>

                                </article>

                                {/* Spacer */}
                                <div className="h-24"></div>
                            </div>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
