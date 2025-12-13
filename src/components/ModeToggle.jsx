"use client"

import { motion, useSpring, useTransform } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ModeToggle = () => {
    const [isInkMode, setIsInkMode] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    // Spring physics for the string length
    const springConfig = { stiffness: 150, damping: 15, mass: 1 };
    const y = useSpring(0, springConfig);

    // Transform string stretch to opacity or color changes if needed
    const stringHeight = useTransform(y, (latest) => 100 + latest); // Base length 100px

    useEffect(() => {
        // Check initial preference
        const savedMode = localStorage.getItem('connects-theme')
        if (savedMode === 'ink' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsInkMode(true)
            document.documentElement.setAttribute('data-mode', 'ink')
        } else {
            document.documentElement.setAttribute('data-mode', 'paper')
        }
    }, [])

    const toggleMode = () => {
        const newMode = !isInkMode
        setIsInkMode(newMode)
        const modeString = newMode ? 'ink' : 'paper'

        // Apply mode
        document.documentElement.setAttribute('data-mode', modeString)
        localStorage.setItem('connects-theme', modeString)

        // Sound effect (optional, keeping silent for now or add playAudio() here)
    }

    const handleDragEnd = (_, info) => {
        if (info.offset.y > 50) { // Trigger point
            toggleMode();
        }
        // Snap back
        y.set(0);
    }

    return (
        <div className="fixed top-0 right-4 md:right-12 z-50 flex flex-col items-center pointer-events-none">
            {/* The String */}
            <motion.div
                className="w-0.5 bg-[var(--ink)] origin-top"
                style={{ height: stringHeight }}
            />

            {/* The Handle / Knob */}
            <motion.div
                className="pointer-events-auto cursor-grab active:cursor-grabbing relative group"
                drag="y"
                dragConstraints={{ top: 0, bottom: 100 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ y }}
                whileTap={{ scale: 1.1 }}
            >
                {/* Knob Body */}
                <div className="w-8 h-8 rounded-full bg-[var(--ink)] shadow-lg flex items-center justify-center border-2 border-[var(--paper)] transition-colors duration-300">
                    {/* Icon rotates based on theme */}
                    <motion.div
                        animate={{ rotate: isInkMode ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                        {isInkMode ? (
                            <Moon size={14} className="text-[var(--paper)] fill-current" />
                        ) : (
                            <Sun size={14} className="text-[var(--paper)]" />
                        )}
                    </motion.div>
                </div>

                {/* Tooltip hint */}
                <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-[10px] uppercase font-bold px-2 py-1 rounded opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
                    Pull to Switch
                </div>
            </motion.div>
        </div>
    )
}

export default ModeToggle
