
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[index];

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
        {TESTIMONIALS.map((_, i) => (
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
