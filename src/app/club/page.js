"use client";

import { Check } from "lucide-react";

export default function ClubPage() {
    return (
        <div className="container mx-auto px-4 pb-20">

            {/* Manifesto Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 border-b-4 border-black pb-16 mb-16">
                <div>
                    <h1 className="font-serif text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
                        The<br />Club.
                    </h1>
                    <p className="font-sans text-xs font-bold uppercase tracking-widest border-t border-b border-black py-4 mb-8">
                        Est. 2025 • Chennai Institute of Technology
                    </p>
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="font-serif text-3xl font-bold italic mb-6">Our Manifesto</h2>
                    <p className="font-serif text-xl md:text-2xl leading-relaxed mb-6">
                        &quot;We believe in the power of the written word, the impact of a captured image, and the resonance of a spoken story. We are not just a student body; we are a dedicated newsroom, a creative studio, and a cultural archive.&quot;
                    </p>
                    <p className="font-serif text-lg text-gray-600">
                        — The Editorial Board
                    </p>
                </div>
            </div>

            {/* Leadership / Editors (Newspaper Staff Columns) */}
            <section className="mb-24">
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest mb-8 border-b border-gray-300 pb-2">The Masthead</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="text-center group cursor-pointer">
                            <div className="w-full aspect-[3/4] bg-gray-200 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
                                {/* Placeholder for staff image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif italic">
                                    Portrait
                                </div>
                            </div>
                            <h4 className="font-serif font-bold text-lg">Student Name</h4>
                            <p className="font-sans text-[10px] uppercase tracking-widest text-gray-500">Editor-in-Chief</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Membership Classifieds */}
            <section>
                <div className="border-t-4 border-black pt-4 mb-12 text-center">
                    <h2 className="font-serif text-5xl md:text-6xl font-black uppercase tracking-tighter">Membership Classifieds</h2>
                    <p className="font-serif italic mt-2 text-xl">Select your role.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black divide-y md:divide-y-0 md:divide-x divide-black bg-[var(--paper)]">

                    {/* Tier 1 */}
                    <div className="p-8 flex flex-col hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors duration-500 group relative">
                        <div className="absolute top-4 right-4 text-xs font-bold border border-current px-2 py-1 rounded-full uppercase">Free</div>
                        <h3 className="font-serif text-3xl font-bold mb-4 italic">The Reader</h3>
                        <p className="text-sm opacity-80 mb-8 leading-relaxed">For those who observe, read, and appreciate the culture from a distance.</p>
                        <ul className="space-y-3 mb-12 flex-grow">
                            <li className="flex gap-3 text-sm"><Check size={16} /> Access to digital magazine</li>
                            <li className="flex gap-3 text-sm"><Check size={16} /> Weekly newsletter</li>
                            <li className="flex gap-3 text-sm"><Check size={16} /> Event notifications</li>
                        </ul>
                        <button className="w-full py-3 border border-current text-xs font-bold uppercase tracking-widest group-hover:bg-[var(--paper)] group-hover:text-[var(--ink)] transition-colors">
                            Join Community
                        </button>
                    </div>

                    {/* Tier 2 */}
                    <div className="p-8 flex flex-col bg-black text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                        <div className="absolute top-4 right-4 text-xs font-bold bg-[var(--accent)] text-white px-2 py-1 uppercase tracking-widest">Applied Only</div>
                        <h3 className="font-serif text-3xl font-bold mb-4 italic">The Contributor</h3>
                        <p className="text-sm opacity-80 mb-8 leading-relaxed">For writers, photographers, and designers ready to shape the narrative.</p>
                        <ul className="space-y-3 mb-12 flex-grow">
                            <li className="flex gap-3 text-sm"><Check size={16} /> Submit articles & art</li>
                            <li className="flex gap-3 text-sm"><Check size={16} /> Press pass for events</li>
                            <li className="flex gap-3 text-sm"><Check size={16} /> Portfolio feature</li>
                            <li className="flex gap-3 text-sm"><Check size={16} /> Access to workshops</li>
                        </ul>
                        <button className="w-full py-3 bg-[var(--paper)] text-black text-xs font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-white transition-colors relative z-10">
                            Apply Now
                        </button>
                    </div>

                    {/* Tier 3 */}
                    <div className="p-8 flex flex-col hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors duration-500 group">
                        <h3 className="font-serif text-3xl font-bold mb-4 italic">The Editor</h3>
                        <p className="text-sm opacity-80 mb-8 leading-relaxed">Leadership roles for those who want to steer the direction of the publication.</p>
                        <ul className="space-y-3 mb-12 flex-grow">
                            <li className="flex gap-3 text-sm"><Check size={16} /> Editorial decision making</li>
                            <li className="flex gap-3 text-sm"><Check size={16} /> Manage juniors</li>
                            <li className="flex gap-3 text-sm"><Check size={16} /> Budget Allocation Access</li>
                        </ul>
                        <button className="w-full py-3 border border-current text-xs font-bold uppercase tracking-widest group-hover:bg-[var(--paper)] group-hover:text-[var(--ink)] transition-colors">
                            View Openings
                        </button>
                    </div>

                </div>
            </section>

        </div>
    );
}
