'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[60vh] overflow-hidden rounded-b-[40px] shadow-2xl"
    >
      {/* Background with next/image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80"
          alt="Lifestyle Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-[#010101]/60 to-black/40" />
      </div>

      {/* Overlay Content with Framer Motion */}
      <div className="absolute bottom-12 left-0 right-0 p-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mb-4"
        >
          <div className="w-24 h-24 rounded-full border-4 border-[#FE2C55] p-1 bg-white overflow-hidden shadow-xl shadow-[#FE2C55]/20 relative">
            <Image
              src="https://picsum.photos/seed/maddie/200/200"
              alt="Maddie's Profile"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-[#25F4EE] rounded-full p-1 border-2 border-[#010101] z-10">
            <svg className="w-4 h-4 text-black fill-current" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl font-black mb-1 drop-shadow-md tracking-tight"
        >
          Maddie
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/80 text-sm font-medium mb-6 flex items-center gap-2"
        >
          <span>1.2M Followers</span>
          <span className="opacity-40">•</span>
          <span>$25K Monthly GMV</span>
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FE2C55] hover:bg-[#ff4d6d] transition-colors text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-2 group transition-all"
          onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Shop My Favorites
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.span>
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-40"
      >
        <div className="w-1 h-6 bg-white rounded-full animate-pulse" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
