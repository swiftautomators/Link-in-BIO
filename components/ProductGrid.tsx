'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { Skeleton } from './ui/Skeleton';
import { sanitizeUrl, EXTERNAL_LINK_PROPS } from '@/lib/security';

interface Props {
  products: Product[];
  isLoading?: boolean;
}

const ProductCard = memo(({ product }: { product: Product }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="group relative flex flex-col bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all border border-transparent hover:border-white/20"
  >
    {/* Badge */}
    {product.badge && (
      <div className="absolute top-2 left-2 z-10 bg-[#FE2C55] text-[10px] font-black uppercase px-2 py-1 rounded-md shadow-lg">
        {product.badge}
      </div>
    )}

    {/* Image with next/image */}
    <div className="aspect-square w-full overflow-hidden bg-white/10 relative">
      <Image
        src={product.imageUrl}
        alt={product.title}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    {/* Details */}
    <div className="p-3 flex flex-col flex-grow">
      <h3 className="text-xs font-bold line-clamp-2 leading-relaxed mb-2 flex-grow">
        {product.title}
      </h3>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-[#FE2C55] font-black">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="text-white/30 text-[10px] line-through">${product.originalPrice.toFixed(2)}</span>
        )}
      </div>

      <a
        href={sanitizeUrl(product.shopUrl)}
        {...EXTERNAL_LINK_PROPS}
        className="w-full py-2 bg-white text-black text-[10px] font-black uppercase rounded-lg hover:bg-[#FE2C55] hover:text-white transition-colors text-center"
      >
        Shop Now
      </a>
    </div>
  </motion.div>
));

ProductCard.displayName = 'ProductCard';

const ProductGrid: React.FC<Props> = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white/5 rounded-2xl p-3 border border-transparent">
            <Skeleton className="aspect-square w-full rounded-xl mb-3" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-4" />
            <Skeleton className="h-8 w-full rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 text-center opacity-40"
      >
        <p>No products found in this collection.</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 min-h-[400px]">
      <AnimatePresence mode="popLayout">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProductGrid;
