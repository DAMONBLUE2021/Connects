"use client";

import { createContext, useContext, useState } from "react";

const ArticleContext = createContext();

export function ArticleProvider({ children }) {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Optional: Sync with URL params for deep linking
    // This is a basic implementation. For full deep linking we might want to check the URL on mount.

    const openArticle = (article) => {
        setSelectedArticle(article);
        setIsOpen(true);
        // Lock body scroll
        document.body.style.overflow = "hidden";
    };

    const closeArticle = () => {
        setIsOpen(false);
        setTimeout(() => setSelectedArticle(null), 500); // Wait for animation
        // Unlock body scroll
        document.body.style.overflow = "unset";
    };

    return (
        <ArticleContext.Provider value={{ selectedArticle, isOpen, openArticle, closeArticle }}>
            {children}
        </ArticleContext.Provider>
    );
}

export function useArticle() {
    return useContext(ArticleContext);
}
