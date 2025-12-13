"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ModeToggle = () => {
    const [isInkMode, setIsInkMode] = useState(false)

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
    }

    return (
        <div className="fixed bottom-8 left-8 z-50">
            <motion.button
                onClick={toggleMode}
                className="relative w-16 h-32 bg-transparent group focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={isInkMode ? "Switch to Paper Mode" : "Switch to Ink Mode"}
            >
                {/* The Toggle Switch Body (Press Lever Style) */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-24 rounded-full transition-colors duration-500 ${isInkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

                {/* The Knob */}
                <motion.div
                    className={`absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full shadow-xl border-4 flex items-center justify-center transition-all duration-500 z-10 
            ${isInkMode
                            ? 'bg-black border-gray-600 text-white top-16'
                            : 'bg-[#f4f1ea] border-gray-400 text-black top-0'
                        }`}
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <AnimatePresence mode='wait'>
                        {isInkMode ? (
                            <motion.div
                                key="ink"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                            >
                                <Moon size={20} fill="currentColor" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="paper"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                            >
                                <Sun size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Labels */}
                <div className="absolute top-0 right-16 flex flex-col justify-between h-24 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-right pr-2">
                    <span className={!isInkMode ? 'font-bold' : 'text-gray-400'}>Paper</span>
                    <span className={isInkMode ? 'font-bold' : 'text-gray-400'}>Ink</span>
                </div>
            </motion.button>
        </div>
    )
}

export default ModeToggle
