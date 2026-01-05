
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import QuickCollections from './components/QuickCollections';
import ProductGrid from './components/ProductGrid';
import TestimonialCarousel from './components/TestimonialCarousel';
import LinksSection from './components/LinksSection';
import Notification from './components/Notification';
import { PRODUCTS, COLLECTIONS } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [activeCollection, setActiveCollection] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);

  useEffect(() => {
    if (activeCollection === 'all') {
      setFilteredProducts(PRODUCTS);
    } else {
      setFilteredProducts(PRODUCTS.filter(p => p.category === activeCollection));
    }
  }, [activeCollection]);

  return (
    <div className="min-h-screen max-w-2xl mx-auto bg-[#010101] relative pb-20 shadow-2xl">
      {/* Background Accent */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FE2C55] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#25F4EE] blur-[120px]" />
      </div>

      <Notification />

      <Hero />
      
      <main className="relative z-10 space-y-8 px-4 -mt-10">
        <StatsBar />

        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/10">
          <h2 className="text-xl font-extrabold mb-4 flex items-center gap-2">
            <span className="text-[#FE2C55]">🔥</span> Featured Products
          </h2>
          
          <QuickCollections 
            activeId={activeCollection} 
            onSelect={setActiveCollection} 
            collections={COLLECTIONS} 
          />

          <ProductGrid products={filteredProducts} />
        </div>

        <section className="py-4">
          <TestimonialCarousel />
        </section>

        <section className="py-4">
          <LinksSection />
        </section>
      </main>

      <footer className="text-center py-10 opacity-40 text-xs tracking-widest uppercase">
        © 2024 Maddie | Built for TikTok Shop
      </footer>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 max-w-2xl mx-auto z-50 bg-gradient-to-t from-[#010101] via-[#010101]/90 to-transparent">
        <button 
          className="w-full py-4 rounded-2xl bg-[#FE2C55] text-white font-bold shadow-lg shadow-[#FE2C55]/30 transform active:scale-95 transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Explore All Favorites
        </button>
      </div>
    </div>
  );
};

export default App;
