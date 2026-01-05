
import React from 'react';
import { Product } from '../types';

interface Props {
  products: Product[];
}

const ProductGrid: React.FC<Props> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center opacity-40">
        <p>No products found in this collection.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="group relative flex flex-col bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all border border-transparent hover:border-white/20 hover:scale-[1.02]"
        >
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-2 left-2 z-10 bg-[#FE2C55] text-[10px] font-black uppercase px-2 py-1 rounded-md shadow-lg">
              {product.badge}
            </div>
          )}

          {/* Image */}
          <div className="aspect-square w-full overflow-hidden bg-white/10">
            <img 
              src={product.imageUrl} 
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

            <button 
              className="w-full py-2 bg-white text-black text-[10px] font-black uppercase rounded-lg hover:bg-[#FE2C55] hover:text-white transition-colors"
              onClick={() => window.open(product.shopUrl, '_blank')}
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
