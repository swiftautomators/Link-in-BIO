'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import QuickCollections from './QuickCollections';
import ProductGrid from './ProductGrid';
import { Product } from '@/types';
import { COLLECTIONS } from '@/constants';

interface CollectionsWrapperProps {
    initialProducts: Product[];
}

const CollectionsWrapper: React.FC<CollectionsWrapperProps> = ({ initialProducts }) => {
    const [activeCollection, setActiveCollection] = useState('all');

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => Promise.resolve(initialProducts),
        initialData: initialProducts,
    });

    const filteredProducts = activeCollection === 'all'
        ? products
        : products.filter(p => p.category === activeCollection);

    return (
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
    );
};

export default CollectionsWrapper;
