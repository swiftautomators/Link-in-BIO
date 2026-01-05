
import React from 'react';

const StatsBar: React.FC = () => {
  const stats = [
    { label: 'Total Views', value: '45.2M', icon: '👀' },
    { label: 'Products Shared', value: '120+', icon: '📦' },
    { label: 'Happy Shoppers', value: '8.4K', icon: '⭐' },
  ];

  return (
    <div id="featured" className="grid grid-cols-3 gap-3">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center flex flex-col items-center">
          <span className="text-lg mb-1">{stat.icon}</span>
          <span className="text-xl font-black text-white">{stat.value}</span>
          <span className="text-[10px] text-white/40 uppercase tracking-wider font-bold">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
