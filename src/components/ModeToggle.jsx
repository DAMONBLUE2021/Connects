"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ModeToggle = ({ className = "" }) => {
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
        <button
            onClick={toggleMode}
            className={`relative flex items-center justify-center p-2 rounded-full transition-colors duration-300 hover:bg-black/5 dark:hover:bg-white/10 group ${className}`}
            title={isInkMode ? "Switch to Paper Mode" : "Switch to Ink Mode"}
        >
            <div className="relative w-6 h-6 overflow-hidden">
                <AnimatePresence mode='wait'>
                    {isInkMode ? (
                        <motion.div
                            key="ink"
                            initial={{ y: 20, opacity: 0, rotate: 90 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -20, opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            <Moon size={24} className="text-[var(--paper)] fill-current" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="paper"
                            initial={{ y: 20, opacity: 0, rotate: -90 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -20, opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            <Sun size={24} className="text-[var(--ink)]" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </button>
    )
}

export default ModeToggle
