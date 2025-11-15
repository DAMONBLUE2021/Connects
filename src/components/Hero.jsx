"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* YouTube Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            className="w-full h-full absolute top-0 left-0 scale-125"
            src="https://www.youtube.com/embed/tEpz6Ci-deE?autoplay=1&mute=1&loop=1&playlist=tEpz6Ci-deE&controls=0&start=13&modestbranding=1&showinfo=0&rel=0"
            title="CONNECTS Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        {/* Magazine Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-serif text-[#f3e9dc] tracking-wide drop-shadow-lg"
        >
          CONNECTS
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 max-w-2xl text-lg md:text-2xl text-[#e5d3b3] italic"
        >
          “Where stories, people, and timeless moments intertwine.”
        </motion.p>

        {/* CTA */}
        <motion.a
          href="/magazine"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 px-8 py-3 bg-[#5c4639]/80 backdrop-blur-md text-[#f3e9dc] rounded-full shadow-lg hover:bg-[#3a2e2a]/90 transition-colors text-lg"
        >
          Explore the Magazine
        </motion.a>
      </div>
    </section>
  );
}
