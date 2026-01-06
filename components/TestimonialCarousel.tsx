'use client';

import React, { useState, useEffect } from 'react';
import { Testimonial } from '@/types';
import { Skeleton } from './ui/Skeleton';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  isLoading?: boolean;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials, isLoading }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) {
      setIndex(0);
      return;
    }
    
    // Reset index when testimonials change to avoid out-of-bounds or stale content
    setIndex(0);

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials]); // Depend on the array reference to catch content changes

  if (isLoading) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
        <Skeleton className="h-3 w-20 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="flex items-center gap-3">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    );
  }

  if (testimonials.length === 0) return null;

  const t = testimonials[index];

  return (
    <div className="bg-gradient-to-br from-[#FE2C55]/10 to-transparent border border-[#FE2C55]/20 rounded-3xl p-6 relative overflow-hidden">
      {/* Quote Mark */}
      <div className="absolute top-[-20px] left-[-10px] text-8xl text-white/5 font-serif select-none">“</div>

      <div className="relative z-10">
        <div className="flex gap-1 mb-3">
          {[...Array(t.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xs">★</span>
          ))}
        </div>
        <p className="text-sm font-medium italic mb-4 text-white/90">"{t.text}"</p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden">
            <img src={`https://picsum.photos/seed/${t.name}/50/50`} alt={t.name} />
          </div>
          <span className="text-xs font-bold text-[#FE2C55]">{t.name}</span>
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all ${i === index ? 'w-6 bg-[#FE2C55]' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
