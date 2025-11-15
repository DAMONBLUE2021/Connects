"use client"

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, Search, Mail, Phone, ChevronRight, Calendar, Clock, User } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Magazines', href: '#magazines' },
    { name: 'Articles', href: '#articles' },
    { name: 'Events', href: '#events' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 origin-left z-50"
      />
      
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="hidden sm:block">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="hidden md:block">|</span>
                <a href="mailto:connects@citchennai.net" className="hidden md:flex items-center hover:text-black transition-colors">
                  <Mail size={12} className="mr-1" />
                  connects@citchennai.net
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <button className="hover:text-black transition-colors">
                  <Search size={16} />
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-4 py-1 text-xs uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter">
                CIT CONNECTS
              </h1>
              <div className="ml-4 pl-4 border-l border-gray-300 hidden lg:block">
                <p className="text-[10px] uppercase tracking-widest text-gray-500">
                  The Magazine Club
                </p>
                <p className="text-[10px] text-gray-400">Chennai Institute of Technology</p>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium uppercase tracking-wide hover:text-gray-600 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      </nav>
    </>
  )
}

const HeroSection = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: y2, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 pb-8 border-b-4 border-double border-gray-800"
        >
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-2xl md:text-4xl italic text-gray-700 mb-4"
          >
            "Connecting CIT through Magazines, Podcasts and Events"
          </motion.blockquote>
          <div className="flex justify-center items-center space-x-4 text-xs text-gray-500 uppercase tracking-widest">
            <span>Volume II</span>
            <span>•</span>
            <span>Issue 6</span>
            <span>•</span>
            <span>Official Magazine of CIT</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border-b border-gray-300 pb-6"
            >
              <h3 className="font-serif text-xl font-bold mb-3 hover:text-gray-600 transition-colors cursor-pointer">
                Our Mission & Vision
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 mb-3">
                To foster a vibrant and informed campus community by connecting students, faculty, and staff through engaging media content.
              </p>
              <a href="#about" className="text-xs uppercase tracking-wide font-semibold hover:underline flex items-center">
                Read More <ChevronRight size={14} className="ml-1" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-300 pb-6"
            >
              <div className="aspect-video relative overflow-hidden group cursor-pointer border-2 border-gray-800">
                <motion.img
                  src="/amri.jpg"
                  alt="Campus Events"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h4 className="font-serif text-lg font-bold mb-2 mt-3 hover:text-gray-600 transition-colors cursor-pointer">
                Campus Events Calendar
              </h4>
              <p className="text-sm text-gray-700">Experience unforgettable moments at our vibrant events.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-4 border-l-4 border-black"
            >
              <h5 className="font-serif text-xs uppercase mb-2 font-bold">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#magazines" className="hover:underline">Latest Issue</a></li>
                <li><a href="#events" className="hover:underline">Upcoming Events</a></li>
                <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            style={{ y: y1 }}
            className="col-span-12 lg:col-span-6"
          >
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-red-600 text-white px-3 py-1 inline-block text-xs uppercase tracking-wider font-bold mb-4">
                Featured Story
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden border-4 border-gray-900 shadow-2xl mb-6 cursor-pointer"
              >
                <div className="aspect-[16/10] relative">
                  <motion.img
                    src="/amri.jpg"
                    alt="Campus Community"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs uppercase tracking-wider">Photo Essay</span>
                  </div>
                </div>
              </motion.div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4 group-hover:text-gray-700 transition-colors cursor-pointer">
                Fostering Campus Community Through Creative Media
              </h2>

              <p className="text-lg leading-relaxed text-gray-800 mb-4 first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Welcome to Connects, the official Magazine of Chennai Institute of Technology. Founded by passionate students of the Class of 2027 under the guidance of Ashwini Govindaraj, we bring the campus together through engaging events, insightful podcasts, and our monthly magazine.
              </p>

              <p className="text-base leading-relaxed text-gray-700 mb-6">
                At Connects, we are dedicated to enhancing the campus experience by providing platforms for student voices, promoting collaboration, and celebrating the unique spirit of CIT. Our mission extends beyond traditional boundaries, creating spaces for dialogue, creativity, and innovation.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>By Editorial Team</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#about"
                  className="text-sm uppercase tracking-wide font-semibold hover:underline flex items-center"
                >
                  Continue Reading <ChevronRight size={16} className="ml-1" />
                </motion.a>
              </div>
            </motion.article>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { 
                  title: 'Monthly Magazines', 
                  desc: 'Dive into diverse topics covering all aspects of campus life',
                  img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600'
                },
                { 
                  title: 'Podcast Series', 
                  desc: 'Thought-provoking discussions with guests and experts',
                  img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-4/3 mb-3 relative overflow-hidden border-2 border-gray-800">
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-gray-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="col-span-12 lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border-2 border-gray-800 bg-white p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-gray-800">
                <h3 className="font-serif text-xl font-bold uppercase">Latest Issues</h3>
                <span className="text-xs text-gray-500">2025</span>
              </div>
              
              <div className="space-y-4">
                {[
                  { num: '1', title: 'October 2025', time: 'Latest' },
                  { num: '2', title: 'September 2025', time: 'Available' },
                  { num: '3', title: 'August 2025', time: 'Available' },
                  { num: '4', title: 'July 2025', time: 'Available' },
                  { num: '5', title: 'June 2025', time: 'Available' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 5, backgroundColor: 'rgba(0,0,0,0.02)' }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 pb-3 border-b border-gray-200 cursor-pointer group"
                  >
                    <span className="text-2xl font-serif font-bold text-gray-300 group-hover:text-black transition-colors">
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-sm font-serif font-bold mb-1 group-hover:underline">
                        {item.title}
                      </h4>
                      <span className="text-xs text-gray-500">{item.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 shadow-lg"
            >
              <h3 className="font-serif text-xl font-bold mb-4">Upcoming Events</h3>
              <ul className="space-y-4">
                {[
                  { date: 'Nov 25', title: 'Campus Lit Fest', desc: 'Workshops & Open Mic' },
                  { date: 'Dec 08', title: 'Design Workshop', desc: 'Hands-on Zine Making' },
                  { date: 'Jan 10', title: 'Vol. 13 Launch', desc: 'Live Readings & Panel' }
                ].map((event, i) => (
                  <li key={i} className="flex items-start space-x-3 pb-3 border-b border-gray-600 last:border-0">
                    <div className="text-sm font-mono font-bold w-12">{event.date}</div>
                    <div>
                      <h4 className="font-serif font-bold mb-1">{event.title}</h4>
                      <p className="text-xs text-gray-300">{event.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const MagazineShowcase = () => {
  const issues = [
    { month: 'October', year: '2025' },
    { month: 'September', year: '2025' },
    { month: 'August', year: '2025' },
    { month: 'July', year: '2025' },
    { month: 'June', year: '2025' }
  ]

  return (
    <section id="magazines" className="py-20 bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4">Latest Magazines</h2>
          <div className="w-32 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our newest editions. Stay connected with all the exciting programs and happenings at Chennai Institute of Technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {issues.map((issue, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ y: -12, rotateY: 5, scale: 1.05 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative">
                <div className="aspect-3/4 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 border-4 border-gray-900 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <div className="text-4xl font-serif font-bold mb-2 opacity-90">{issue.month}</div>
                    <div className="text-2xl font-serif opacity-80">{issue.year}</div>
                    <div className="absolute top-3 right-3 bg-white text-black px-2 py-1 text-[10px] uppercase tracking-wider font-bold">
                      Vol. {idx + 1}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-300 border-4 border-gray-900 -z-10" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif font-bold text-sm">Issue {idx + 1}</h3>
                <p className="text-xs text-gray-600">{issue.month} {issue.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FeaturedArticles = () => {
  const articles = [
    {
      title: 'Innovation in Education: The Future of Learning at CIT',
      excerpt: 'Exploring how cutting-edge technology and pedagogical approaches are reshaping the educational landscape at our institution.',
      author: 'Dr. Rajesh Kumar',
      date: 'Nov 10, 2025',
      category: 'Education',
      readTime: '6 min',
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800'
    },
    {
      title: 'Student Startups: Entrepreneurship Culture on Campus',
      excerpt: 'Meet the innovative minds building tomorrow\'s solutions today. Stories of student entrepreneurs making waves in the startup ecosystem.',
      author: 'Priya Sharma',
      date: 'Nov 8, 2025',
      category: 'Innovation',
      readTime: '5 min',
      img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800'
    },
    {
      title: 'Behind the Scenes: Our Award-Winning Research Lab',
      excerpt: 'A deep dive into the groundbreaking research happening in CIT\'s state-of-the-art laboratories and the brilliant minds behind it.',
      author: 'Prof. Anand Menon',
      date: 'Nov 5, 2025',
      category: 'Research',
      readTime: '8 min',
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800'
    },
    {
      title: 'Cultural Fest 2025: A Celebration of Diversity',
      excerpt: 'Relive the magic of our biggest cultural event yet, featuring performances, exhibitions, and celebrations from around the world.',
      author: 'Aisha Patel',
      date: 'Nov 3, 2025',
      category: 'Events',
      readTime: '4 min',
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800'
    },
    {
      title: 'Sustainability Initiative: Going Green at CIT',
      excerpt: 'How our campus is leading the charge in environmental consciousness with innovative sustainability programs and green infrastructure.',
      author: 'Vikram Reddy',
      date: 'Nov 1, 2025',
      category: 'Sustainability',
      readTime: '7 min',
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800'
    },
    {
      title: 'Alumni Spotlight: Success Stories from the Class of 2020',
      excerpt: 'Catching up with our distinguished alumni who are making remarkable contributions in their respective fields across the globe.',
      author: 'Sarah Thomas',
      date: 'Oct 28, 2025',
      category: 'Alumni',
      readTime: '6 min',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800'
    }
  ]

  return (
    <section id="articles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4">Featured Articles</h2>
          <div className="w-32 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            In-depth stories, interviews, and insights from around the campus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 150
              }}
              viewport={{ once: true }}
              className="group bg-white border-2 border-gray-800 shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs uppercase tracking-wider font-bold">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3 leading-tight group-hover:text-gray-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black"
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Be part of something bigger. Write, design, organize, create. Shape the narrative of CIT.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-white text-black px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-gray-100 transition-colors shadow-2xl inline-flex items-center justify-center"
            >
              Get Involved <ChevronRight className="ml-2" size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#magazines"
              className="border-2 border-white text-white px-10 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all inline-flex items-center justify-center"
            >
              View Magazines
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-16 border-t-4 border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-4xl font-bold text-white mb-4">CIT CONNECTS</h3>
            <p className="text-sm leading-relaxed mb-6">
              Official Magazine of Chennai Institute of Technology. Connecting students, faculty, and staff through engaging media, vibrant events, and creative community building.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors font-serif font-bold text-lg">f</a>
              <a href="#" className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors font-serif font-bold">in</a>
              <a href="https://instagram.com/cit_connects" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors font-serif font-bold">ig</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white hover:underline transition-colors">Home</a></li>
              <li><a href="#magazines" className="hover:text-white hover:underline transition-colors">Magazines</a></li>
              <li><a href="#articles" className="hover:text-white hover:underline transition-colors">Articles</a></li>
              <li><a href="#events" className="hover:text-white hover:underline transition-colors">Events</a></li>
              <li><a href="#about" className="hover:text-white hover:underline transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:connects@citchennai.net" className="flex items-center hover:text-white transition-colors">
                <Mail size={16} className="mr-2" />
                connects@citchennai.net
              </a>
              <a href="tel:+911234567890" className="flex items-center hover:text-white transition-colors">
                <Phone size={16} className="mr-2" />
                +91 123 456 7890
              </a>
              <p className="pt-2 border-t border-gray-700">
                Chennai Institute of Technology<br />
                Chennai, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 CIT Connects. All rights reserved. | Chennai Institute of Technology
            </p>
            <div className="flex space-x-6 text-xs uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Archive</a>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-6 italic">
            A digital homage to print newspapers — interactive, responsive, alive. Designed with ♥ by CIT Connects.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-gray-900 antialiased overflow-x-hidden" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');
        
        body {
          font-family: 'Lora', Georgia, 'Times New Roman', serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', Georgia, serif;
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #000;
        }
      `}</style>
      
      <Navigation />
      <HeroSection />
      <MagazineShowcase />
      <FeaturedArticles />
      <CTASection />
      <Footer />
    </div>
  )
}