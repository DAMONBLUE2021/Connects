"use client";

import { BookOpen, Calendar, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "./ModeToggle";

export default function MobileNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Reads", href: "/magazine", icon: BookOpen },
        { name: "Events", href: "/events", icon: Calendar },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* The Nav Bar */}
            <nav className="bg-[var(--paper)]/90 backdrop-blur-lg border-t-2 border-[var(--ink)] pb-safe pt-2 px-6">
                <div className="flex justify-between items-center h-16">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex flex-col items-center gap-1 transition-colors duration-300 ${isActive ? "text-[var(--accent)]" : "text-[var(--ink)]/60 hover:text-[var(--ink)]"
                                    }`}
                            >
                                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                <span className="text-[10px] font-sans font-bold uppercase tracking-wide">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}

                    {/* Mode Toggle as a Nav Item */}
                    <div className="flex flex-col items-center gap-1">
                        <ModeToggle className="!p-0 !bg-transparent hover:!bg-transparent" />
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wide text-[var(--ink)]/60">
                            Theme
                        </span>
                    </div>

                </div>
            </nav>
        </div>
    );
}
