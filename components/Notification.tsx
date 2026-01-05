
import React, { useState, useEffect } from 'react';

const names = ['Sarah J.', 'Alex K.', 'Emma W.', 'Jordan R.', 'Mia T.'];
const products = ['Ring Light', 'Retro Keyboard', 'Neck Fan', 'Lip Oil'];

const Notification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', product: '' });

  useEffect(() => {
    const trigger = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const product = products[Math.floor(Math.random() * products.length)];
      setData({ name, product });
      setVisible(true);

      setTimeout(() => setVisible(false), 5000);
    };

    const initialDelay = setTimeout(trigger, 10000);
    const interval = setInterval(trigger, 45000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
      <div className="bg-[#010101]/90 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl animate-in slide-in-from-top duration-500 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#FE2C55] flex items-center justify-center text-xl shrink-0">
          🔥
        </div>
        <div className="flex-grow">
          <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">Just Purchased</p>
          <p className="text-xs font-medium">
            <span className="font-bold text-[#25F4EE]">{data.name}</span> just bought the <span className="text-white font-bold">{data.product}</span>
          </p>
        </div>
        <button onClick={() => setVisible(false)} className="opacity-40 hover:opacity-100 p-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Notification;
