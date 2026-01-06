'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SocialLink } from '@/types';
import { Skeleton } from './ui/Skeleton';
import { sanitizeUrl, EXTERNAL_LINK_PROPS } from '@/lib/security';

interface LinksSectionProps {
  links: SocialLink[];
  isLoading?: boolean;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const LinksSection: React.FC<LinksSectionProps> = ({ links, isLoading }) => {
  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-6 w-48 mb-6" />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
            <Skeleton className="w-12 h-12 rounded-xl" />
            <div className="flex-grow">
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-3 w-48" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-xl font-extrabold mb-4 flex items-center gap-2"
      >
        <span className="text-[#25F4EE]">🔗</span> More From Maddie
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {links.map((link) => (
          <motion.a
            key={link.id}
            variants={item}
            href={sanitizeUrl(link.url)}
            {...EXTERNAL_LINK_PROPS}
            className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all group"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl text-2xl group-hover:scale-110 transition-transform">
              {link.icon}
            </div>
            <div className="flex-grow">
              <h4 className="font-bold text-sm">{link.title}</h4>
              {link.description && (
                <p className="text-[10px] text-white/40 font-medium">{link.description}</p>
              )}
            </div>
            <div className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default LinksSection;
