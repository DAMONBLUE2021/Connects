"use client";
import { motion } from "framer-motion";
import { BookOpen, Mic, Sparkles } from "lucide-react";

export default function Teasers() {
  const cards = [
    {
      icon: <BookOpen className="w-10 h-10 text-purple-400" />,
      title: "Latest Magazine",
      desc: "Flip through the freshest edition of CONNECTS.",
      hover: "hover:shadow-purple-500/30",
    },
    {
      icon: <Mic className="w-10 h-10 text-pink-400" />,
      title: "Latest Podcast",
      desc: "Listen to thought-provoking voices of CONNECTS.",
      hover: "hover:shadow-pink-500/30",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-blue-400" />,
      title: "Community Spotlight",
      desc: "Discover voices, stories, and creative sparks.",
      hover: "hover:shadow-blue-500/30",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className={`bg-gray-900 text-white rounded-2xl shadow-lg ${card.hover}`}
        >
          <div className="p-6 flex flex-col items-center text-center">
            {card.icon}
            <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-gray-400 text-sm">{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
