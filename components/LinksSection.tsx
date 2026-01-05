
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const LinksSection: React.FC = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-extrabold mb-4 flex items-center gap-2">
        <span className="text-[#25F4EE]">🔗</span> More From Maddie
      </h2>
      <div className="space-y-3">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksSection;
