"use client";

import { useArticle } from "@/context/ArticleContext";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Play } from "lucide-react";
import Link from 'next/link';

// Mock Data for Front Page
const heroStory = {
  title: "Fostering Campus Community Through Creative Media",
  excerpt: "The Connects editorial team sits down to discuss the future of student-led journalism, the impact of digital media on campus culture, and the vision for the upcoming academic year.",
  author: "Editorial Team",
  readTime: "8 min read",
  image: "/amri.jpg", // Using existing image path
  category: "Cover Story"
};

const sideStories = [
  { title: "Campus Lit Fest: A Roaring Success", category: "Events", href: "/events" },
  { title: "New Podcast Series: 'Voices of CIT'", category: "Podcast", href: "/podcast" },
  { title: "Student Club Registrations Open", category: "Community", href: "/club" },
  { title: "Alumni Spotlight: Class of 2020", category: "Alumni", href: "/articles" }
];

export default function Home() {
  const { openArticle } = useArticle();

  return (
    <div className="container mx-auto px-4 pb-16">

      {/* Front Page Layout */}
      <div className="grid grid-cols-12 gap-8 border-b-2 border-black pb-12 mb-12">

        {/* Left Column: Briefs & Weather/Info */}
        <div className="col-span-12 lg:col-span-3 border-r border-gray-300 pr-6 space-y-8 hidden lg:block">
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest border-b border-black pb-1 mb-3">In This Issue</h4>
            {sideStories.map((story, i) => (
              <div key={i} className="group cursor-pointer">
                <span className="text-[10px] text-[var(--accent)] font-bold uppercase">{story.category}</span>
                <h3 className="font-serif font-bold text-lg leading-tight group-hover:text-gray-600 transition-colors">
                  <Link href={story.href}>{story.title}</Link>
                </h3>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[var(--ink)] text-[var(--paper)]">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-2 border-b border-gray-600 pb-1">Campus Weather</h4>
            <div className="flex items-center justify-between">
              <span className="font-serif text-3xl">28°C</span>
              <span className="text-xs uppercase">Sunny<br />Kundrathur</span>
            </div>
          </div>
        </div>

        {/* Center Column: Hero Story */}
        <div className="col-span-12 lg:col-span-6 px-0 lg:px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center group cursor-pointer"
            onClick={() => openArticle(heroStory)}
          >
            <div className="mb-4 flex justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
              <span>{heroStory.category}</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-black leading-tight mb-4 group-hover:text-[var(--accent)] transition-colors text-balance">
              {heroStory.title}
            </h2>

            <div className="flex justify-center items-center space-x-4 text-xs font-sans text-gray-500 mb-6 font-bold tracking-widest uppercase">
              <span>By {heroStory.author}</span>
              <span>•</span>
              <span>{heroStory.readTime}</span>
            </div>

            <div className="aspect-[4/3] w-full relative mb-6 border border-black overflow-hidden">
              <motion.img
                src={heroStory.image}
                alt="Cover Story"
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 bg-black text-white text-[10px] px-2 py-1 uppercase font-bold tracking-widest">
                Fig. 1.1 — The Editorial Board
              </div>
            </div>

            <p className="font-serif text-lg md:text-xl leading-relaxed text-left first-letter:float-left first-letter:text-6xl first-letter:pr-3 first-letter:font-black first-letter:leading-none">
              {heroStory.excerpt}
              <button className="inline-flex items-center ml-2 text-sm font-sans font-bold uppercase tracking-wider hover:underline text-[var(--accent)]">
                Read Full Story <ChevronRight size={14} className="ml-1" />
              </button>
            </p>
          </motion.article>
        </div>

        {/* Right Column: Opinion / Podcast */}
        <div className="col-span-12 lg:col-span-3 border-l border-gray-300 pl-6 space-y-8">

          {/* Podcast Promo */}
          <div className="border border-black p-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <Play size={80} />
            </div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-2">Listen Now</h4>
            <h3 className="font-serif text-2xl font-bold mb-2 break-words">The CIT Connects Podcast</h3>
            <p className="text-sm font-serif mb-4 leading-snug">
              Conversations that matter. Tune in to our latest episode featuring the Student Council.
            </p>
            <Link href="/podcast" className="block w-full bg-black text-white text-center py-2 text-xs font-bold uppercase tracking-widest hover:bg-[var(--accent)] transition-colors">
              Listen
            </Link>
          </div>

          {/* Opinion / Editorial */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest border-b border-black pb-1">Opinion</h4>
            <article onClick={() => openArticle({ title: "Why Print Media Still Matters in 2025", author: "Ashwini Govindaraj", category: "Opinion", excerpt: "In a digital age, the tactile experience of paper offers a respite from the screen..." })}>
              <h5 className="font-serif font-bold text-lg mb-1 hover:underline cursor-pointer">Why Print Media Still Matters in 2025</h5>
              <p className="text-xs text-gray-500 font-sans uppercase font-bold">Ashwini Govindaraj</p>
            </article>
            <article onClick={() => openArticle({ title: "The Art of Slow Journalism", author: "Editorial Board", category: "Opinion", excerpt: "Taking the time to research, verify, and craft a story is a lost art that we are reviving..." })}>
              <h5 className="font-serif font-bold text-lg mb-1 hover:underline cursor-pointer">The Art of Slow Journalism</h5>
              <p className="text-xs text-gray-500 font-sans uppercase font-bold">Editorial Board</p>
            </article>
          </div>

        </div>
      </div>

      {/* Secondary Stories / Magazine Grid */}
      <section>
        <div className="flex items-center justify-between mb-8 border-b border-black pb-2">
          <h3 className="font-serif text-3xl font-bold">From The Magazine</h3>
          <Link href="/magazine" className="text-xs font-bold uppercase tracking-widest flex items-center hover:underline">
            View All Issues <ArrowUpRight size={14} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 1, title: "Exploring the Hidden History of Campus Architecture", category: "Culture", image: "https://picsum.photos/seed/1/800/600" },
            { id: 2, title: "The Science of Coffee: Chemistry in a Cup", category: "Science", image: "https://picsum.photos/seed/2/800/600" },
            { id: 3, title: "Midnight Coding: The Hackathon Experience", category: "Tech", image: "https://picsum.photos/seed/3/800/600" },
            { id: 4, title: "Sustainable Living in the Hostel Blocks", category: "Green", image: "https://picsum.photos/seed/4/800/600" }
          ].map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openArticle(item)}
            >
              <div className="aspect-[3/2] bg-gray-200 mb-3 border border-gray-300 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif italic opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  Read Article
                </div>
                <img src={item.image} className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">{item.category}</div>
              <h4 className="font-serif text-xl font-bold leading-tight group-hover:underline">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}