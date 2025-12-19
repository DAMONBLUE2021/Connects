"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "./Loader";

// --- Editorial Components ---

const LoremText = ({ length = "short" }) => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
        <p className="font-serif text-[8px] md:text-[10px] leading-tight text-justify text-gray-800 mb-2 opacity-80">
            {length === "short" ? text.slice(0, 80) + "..." : length === "medium" ? text.slice(0, 150) + "..." : text}
        </p>
    );
};

const Article = ({ title, showConnects = false, type = "standard", highlightInfo = {} }) => {
    return (
        <div className={`flex flex-col ${type === "sidebar" ? "border-b border-black pb-2 mb-2" : "mb-4"}`}>
            <h3 className={`font-serif font-bold leading-none mb-1 text-black ${type === "lead" ? "text-3xl md:text-5xl" :
                    type === "sub" ? "text-xl md:text-2xl" :
                        "text-sm md:text-base"
                }`}>
                {title.split(" ").map((word, i) => {
                    const isConnects = word.toLowerCase().includes("connects");
                    if (isConnects && showConnects) {
                        return (
                            <ConnectsHighlight key={i} word={word} {...highlightInfo} />
                        );
                    }
                    return <span key={i}>{word} </span>;
                })}
            </h3>
            <div className="flex gap-2">
                {type === "lead" && <div className="w-1/3 h-24 bg-gray-200 mt-1 mb-2 grayscale opacity-50"></div>}
                <div className="flex-1">
                    <div className="font-sans text-[6px] font-bold uppercase tracking-widest text-gray-500 mb-1">By Editorial Staff</div>
                    <LoremText length={type === "lead" ? "long" : "short"} />
                    {type === "lead" && <LoremText length="medium" />}
                </div>
            </div>
        </div>
    );
};

// Component for the "Connects" word with specific animation logic
const ConnectsHighlight = ({ word, step, delay, style = "underline", isFinal = false }) => {
    // Step 2 is first reveal, Step 3 is multiple reveals
    const shouldShow = step >= 2 && (step >= 3 || style === "bold"); // 'bold' is the first reveal type usually

    // Animation for the highlight itself
    const highlightVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
    };

    return (
        <span className="relative inline-block mx-1 z-10">
            {word}

            {/* SVG Overlays for drawn loops/lines */}
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: -1 }}>
                <AnimatePresence>
                    {shouldShow && (
                        <>
                            {style === "underline" && (
                                <motion.path
                                    d="M0,18 Q15,22 35,18" // Simple curve under
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="2"
                                    initial="hidden"
                                    animate="visible"
                                    variants={highlightVariants}
                                    className="opacity-80"
                                />
                            )}
                            {style === "circle" && (
                                <motion.path
                                    d="M-5,10 a15,10 0 1,0 30,0 a15,10 0 1,0 -30,0" // Rough ellipse
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="2"
                                    initial="hidden"
                                    animate="visible"
                                    variants={highlightVariants}
                                    className="opacity-70 scale-125"
                                />
                            )}
                            {style === "box" && (
                                <motion.rect
                                    x="-2" y="-2" width="100%" height="100%"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="2"
                                    initial="hidden"
                                    animate="visible"
                                    variants={highlightVariants}
                                    className="opacity-60"
                                />
                            )}
                        </>
                    )}
                </AnimatePresence>
            </svg>

            {/* Background highlight (Highlighter style) */}
            {style === "bold" && shouldShow && (
                <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute bottom-1 left-0 w-full h-[30%] bg-black opacity-20 -z-10 origin-left"
                />
            )}
        </span>
    );
};


export default function IntroAnimation({ children }) {
    const [showIntro, setShowIntro] = useState(true);
    const [loading, setLoading] = useState(true);
    const [step, setStep] = useState(0);

    // TIMELINE CONFIG
    // 0.0s: Base Frame (Drift)
    // 1.0s: Phase 2 (First Reveal) -> Set step 2
    // 2.0s: Phase 3 (Multiple) -> Set step 3
    // 4.0s: Phase 4 (Focus Shift) -> Set step 4
    // 5.5s: Phase 5 (Resolution) -> Set step 5
    // 6.5s: Phase 6 (Exit) -> Set step 6

    useEffect(() => {
        const hasSeenIntro = sessionStorage.getItem("cit_connects_intro_seen_v3");
        // DEV override: remove condition to see it every time if needed
        if (hasSeenIntro) {
            setShowIntro(false);
            setLoading(false);
            return;
        }

        const runSequence = async () => {
            document.body.style.overflow = 'hidden';

            // Phase 1 (0-1s): Paper Settle (Automatic via CSS/Framer motion on container)
            setStep(1);
            await new Promise(r => setTimeout(r, 1000));

            // Phase 2 (1-2s): First Reveal
            setStep(2);
            await new Promise(r => setTimeout(r, 1000));

            // Phase 3 (2-4s): Multiple Reveals
            setStep(3);
            await new Promise(r => setTimeout(r, 2000));

            // Phase 4 (4-5.5s): Focus Shift
            setStep(4);
            await new Promise(r => setTimeout(r, 1500));

            // Phase 5 (5.5-6.5s): Resolution
            setStep(5);
            await new Promise(r => setTimeout(r, 1000));

            // Phase 6 (6.5s+): Exit
            setStep(6);
            await new Promise(r => setTimeout(r, 800));

            sessionStorage.setItem("cit_connects_intro_seen_v3", "true");
            setShowIntro(false);
            setLoading(false);
            document.body.style.overflow = '';
        };

        runSequence();
        return () => { document.body.style.overflow = ''; };
    }, []);

    const handleSkip = () => {
        setStep(6);
        setTimeout(() => {
            setShowIntro(false);
            setLoading(false);
            document.body.style.overflow = '';
            sessionStorage.setItem("cit_connects_intro_seen_v3", "true");
        }, 500);
    };

    if (!showIntro) return <>{children}</>;

    return (
        <>
            <AnimatePresence>
                {step < 6 && (
                    <motion.div
                        key="newspaper-intro"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="fixed inset-0 z-[100] bg-[#F4F1EA] text-black overflow-hidden flex items-center justify-center"
                    >
                        {/* Noise Overlay */}
                        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-50 mix-blend-multiply"></div>

                        {/* Skip Button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 1 }}
                            onClick={handleSkip}
                            className="absolute bottom-8 right-8 z-[60] font-sans text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer bg-white/80 px-2 py-1"
                        >
                            Skip Intro <X size={10} />
                        </motion.button>

                        {/* SCALE / CAMERA CONTAINER */}
                        <motion.div
                            animate={{
                                scale: step >= 4 ? 1.4 : 1, // Zoom in
                                x: step >= 4 ? "0%" : "0%", // Center logic handled by flex alignment, zoom focuses center by default? 
                                // To focus on a specific part, we might need translation. 
                                // Let's assume the "Hero" Connects is in the center column.
                                y: step >= 4 ? "5%" : "0%",
                            }}
                            transition={{ duration: 4, ease: [0.25, 0.1, 0.25, 1.0] }}
                            className="w-full max-w-[1600px] h-full p-4 md:p-12 flex flex-col origin-center"
                        >
                            {/* MASTHEAD */}
                            <div className="border-b-4 border-black mb-6 pb-2 text-center opacity-90">
                                <h1 className="font-serif text-6xl md:text-9xl font-black tracking-tight uppercase leading-none scale-y-90">The Daily Chronicle</h1>
                                <div className="flex justify-between font-sans text-[10px] font-bold uppercase tracking-widest py-2 border-t border-black mt-2">
                                    <span>Vol. 1024</span>
                                    <span>Chennai Institute of Technology</span>
                                    <span>Est. 2025</span>
                                </div>
                            </div>

                            {/* CONTENT GRID */}
                            <div className="grid grid-cols-12 gap-8 h-full">

                                {/* LEFT COL (3) */}
                                <div className="hidden md:flex col-span-3 flex-col gap-6 border-r border-gray-300 pr-6">
                                    <div className="border-b-2 border-black pb-2">
                                        <h4 className="font-sans font-bold text-xs uppercase mb-1">Weather</h4>
                                        <div className="font-serif text-2xl">28°C <span className="text-sm italic text-gray-500">Sunny</span></div>
                                    </div>
                                    <Article
                                        title="Local Talent Connects Global Stage via Cultural Exchange"
                                        type="sub"
                                        showConnects={true}
                                        highlightInfo={{ step, style: "underline" }}
                                    />
                                    <Article title="New Campus Initiatives" type="sidebar" />
                                    <div className="bg-gray-100 p-2 border border-gray-300">
                                        <div className="font-sans text-[8px] font-bold uppercase mb-1">Ad Space</div>
                                        <LoremText />
                                    </div>
                                    <Article
                                        title="Music Connects Souls"
                                        type="standard"
                                        showConnects={true}
                                        highlightInfo={{ step, style: "box" }}
                                    />
                                </div>

                                {/* CENTER COL (5) - MAIN */}
                                <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
                                    {/* HERO ARTICLE */}
                                    <div className="w-full">
                                        <h2 className="font-serif text-5xl md:text-7xl font-black leading-[0.9] mb-4 text-justify md:text-left tracking-tight">
                                            TECHNOLOGY <br />
                                            <span className="relative inline-block">
                                                CONNECTS
                                                {/* THE FINAL HERO REVEAL */}
                                                <motion.span
                                                    initial={{ width: 0 }}
                                                    animate={{ width: step >= 5 ? "100%" : (step >= 2 ? "100%" : "0%") }}
                                                    transition={{ duration: 0.8 }}
                                                    className={`absolute bottom-1 left-0 h-2 bg-black -z-10 ${step >= 5 ? "opacity-100" : (step >= 2 ? "opacity-20" : "opacity-0")}`}
                                                />
                                            </span> <br />
                                            INNOVATION
                                        </h2>
                                        <div className="flex gap-4 mb-6">
                                            <div className="w-1/2 font-serif font-bold text-sm leading-tight border-t-2 border-black pt-2">
                                                "A landmark study reveals how digital bridges are built."
                                            </div>
                                            <div className="w-1/2">
                                                <LoremText length="medium" />
                                            </div>
                                        </div>
                                        <div className="w-full h-48 bg-neutral-200 mb-2 relative overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply" alt="news" />
                                        </div>
                                        <span className="font-sans text-[8px] text-gray-500 uppercase">Fig 1. The main quadrangle</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 border-t border-gray-300 pt-4">
                                        <Article
                                            title="Art Connects Life"
                                            type="standard"
                                            showConnects={true}
                                            highlightInfo={{ step, style: "circle" }}
                                        />
                                        <Article title="Student Council Elections" type="standard" />
                                    </div>
                                </div>

                                {/* RIGHT COL (4) */}
                                <div className="hidden md:flex col-span-4 flex-col gap-6 pl-6 border-l border-gray-300">
                                    <h4 className="font-sans font-bold text-xs uppercase tracking-widest border-y border-black py-1 text-center">Classifieds & Index</h4>

                                    <div className="grid grid-cols-2 gap-4">
                                        <LoremText />
                                        <LoremText />
                                        <LoremText />
                                        <LoremText />
                                    </div>

                                    <Article
                                        title="Sports: How Teamwork Connects Us All on the Field"
                                        type="sub"
                                        showConnects={true}
                                        highlightInfo={{ step, style: "bold" }}
                                    />

                                    <div className="border-4 border-black p-4 mt-auto">
                                        <h3 className="font-serif font-bold text-xl mb-2 text-center uppercase">Subscribe</h3>
                                        <p className="font-serif text-xs text-center mb-2">Get the daily edition delivered to your dorm.</p>
                                    </div>
                                </div>

                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {loading && showIntro ? <Loader /> : children}
        </>
    );
}
