
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[75vh] overflow-hidden rounded-b-[40px] shadow-2xl">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-with-her-phone-sitting-on-a-couch-34505-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-[#010101]/40 to-black/30" />
      </div>

      {/* Overlay Content */}
      <div className="absolute bottom-16 left-0 right-0 p-8 flex flex-col items-center text-center z-10">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-[#FE2C55] p-1 bg-white overflow-hidden shadow-xl shadow-[#FE2C55]/20">
            <img 
              src="https://picsum.photos/seed/maddie/200/200" 
              alt="Maddie's Profile" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-[#25F4EE] rounded-full p-1 border-2 border-[#010101]">
            <svg className="w-4 h-4 text-black fill-current" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-black mb-1 drop-shadow-md">Maddie</h1>
        <p className="text-white/80 text-sm font-medium mb-4 flex items-center gap-2">
          <span>1.2M Followers</span>
          <span className="opacity-40">•</span>
          <span>$25K Monthly GMV</span>
        </p>

        <button 
          className="bg-[#FE2C55] hover:bg-[#ff4d6d] transition-colors text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-2 group"
          onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Shop My Favorites
          <span className="group-hover:translate-y-1 transition-transform">↓</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-1 h-6 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Hero;
