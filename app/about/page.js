// app/about/page.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="bg-white text-white overflow-hidden">
      {/* Hero Section */}
      {/* Logo & Menu */}
      <div className="fixed top-6 left-4 z-30">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl shadow-lg hover:scale-105 transition bg-black"
        >
          <img
            src="/assets/logo.jpg"
            alt="Logo"
            className="w-[50px] h-[50px] rounded-md"
          />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="absolute mt-3 bg-black rounded-xl p-4 shadow-xl space-y-2 w-[160px] "
            >
              <Link href="/" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Home
              </Link>
              <Link href="/services" className="block text-sm text-white hover:text-[#6b22a4] ">
                Our Services
              </Link>
              <Link href="/about" className="block text-sm text-[#6b22a4] hover:text-[#6b22a4] transition font-semibold">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-white hover:text-[#6b22a4] transition">
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">

        <video
          src="/assets/infinity aura.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            About Indocs Media
          </motion.h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto text-white">
            We blend design, strategy, and innovation to build powerful digital experiences.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-black">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Journey
        </motion.h2>
        <div className="space-y-12">
          <motion.div className="flex gap-6" whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-2 h-2 mt-2 bg-indigo-500 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold">Founded in 2022</h3>
              <p>Born out of passion for design, tech & media. We started with small clients and big dreams.</p>
            </div>
          </motion.div>
          <motion.div className="flex gap-6" whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="w-2 h-2 mt-2 bg-indigo-500 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold">2023-2024</h3>
              <p>Expanded to multiple verticals – social media, 3D, marketing, websites, and video editing.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">Meet Our Core Team</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Devansh Rajput", role: "Founder & Director" },
            { name: "Creative Designer", role: "UI/UX & Branding" },
            { name: "Tech Developer", role: "Fullstack & DevOps" },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-900 p-6 rounded-2xl text-center shadow-lg"
            >
              <div className="w-24 h-24 mx-auto bg-gray-700 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">What We Believe In</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            ["Creativity", "🚀"],
            ["Transparency", "🔍"],
            ["Execution Excellence", "🏆"],
          ].map(([title, icon], i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h4 className="text-xl font-semibold">{title}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
