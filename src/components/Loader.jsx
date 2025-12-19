"use client";

import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--paper)] text-[var(--ink)]">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply"></div>

            <div className="relative flex gap-2 h-16 items-end">
                {/* Column 1 */}
                <motion.div
                    initial={{ height: "20%" }}
                    animate={{ height: ["20%", "100%", "20%"] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                    className="w-4 bg-[var(--ink)] opacity-80"
                />
                {/* Column 2 */}
                <motion.div
                    initial={{ height: "40%" }}
                    animate={{ height: ["40%", "80%", "40%"] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="w-4 bg-[var(--ink)] opacity-60"
                />
                {/* Column 3 */}
                <motion.div
                    initial={{ height: "60%" }}
                    animate={{ height: ["60%", "90%", "60%"] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    className="w-4 bg-[var(--ink)] opacity-40"
                />
            </div>

            <motion.p
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-mono text-xs uppercase tracking-widest mt-8"
            >
                Printing Edition...
            </motion.p>
        </div>
    );
}
