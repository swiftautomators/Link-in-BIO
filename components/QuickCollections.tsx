
import React from 'react';
import { Collection } from '../types';

interface Props {
  activeId: string;
  onSelect: (id: string) => void;
  collections: Collection[];
}

const QuickCollections: React.FC<Props> = ({ activeId, onSelect, collections }) => {
  return (
    <div className="flex overflow-x-auto gap-2 pb-4 no-scrollbar">
      {collections.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          className={`px-5 py-2.5 rounded-full whitespace-nowrap text-sm font-bold transition-all border ${
            activeId === c.id 
              ? 'bg-white text-black border-white shadow-lg' 
              : 'bg-transparent text-white border-white/20 hover:border-white/40'
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
};

export default QuickCollections;
