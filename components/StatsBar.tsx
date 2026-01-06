import React from 'react';
import { Skeleton } from './ui/Skeleton';

interface Stat {
  label: string;
  value: string;
  icon?: string;
}

interface StatsBarProps {
  stats: Stat[];
  isLoading?: boolean;
}

const StatsBar: React.FC<StatsBarProps> = ({ stats, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center flex flex-col items-center">
            <Skeleton className="w-6 h-6 mb-2 rounded-full" />
            <Skeleton className="h-6 w-12 mb-2" />
            <Skeleton className="h-3 w-16" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="featured" className="grid grid-cols-3 gap-3">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center flex flex-col items-center">
          <span className="text-lg mb-1">{stat.icon || '📈'}</span>
          <span className="text-xl font-black text-white">{stat.value}</span>
          <span className="text-[10px] text-white/40 uppercase tracking-wider font-bold">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
