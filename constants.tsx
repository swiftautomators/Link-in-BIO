
import { Product, Collection, SocialLink, Testimonial } from './types';

export const COLORS = {
  tiktokRed: '#FE2C55',
  tiktokCyan: '#25F4EE',
  tiktokBlack: '#010101',
};

export const COLLECTIONS: Collection[] = [
  { id: 'all', label: 'All Products' },
  { id: 'under-25', label: 'Under $25' },
  { id: 'this-week', label: "This Week's Wins" },
  { id: 'essentials', label: 'My Essentials' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Wireless RGB Mechanical Keyboard - Retro Aesthetic',
    price: 45.99,
    originalPrice: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80',
    badge: 'Maddie\'s Pick',
    category: 'essentials',
    shopUrl: '#'
  },
  {
    id: '2',
    title: 'Dimmable Ring Light with Tripod Stand',
    price: 19.50,
    originalPrice: 35.00,
    imageUrl: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=800&q=80',
    badge: 'Trending',
    category: 'under-25',
    shopUrl: '#'
  },
  {
    id: '3',
    title: 'Hydrating Lip Oil - High Gloss Finish',
    price: 12.00,
    imageUrl: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&w=800&q=80',
    category: 'under-25',
    shopUrl: '#'
  },
  {
    id: '4',
    title: 'Minimalist Desktop Organizer Set',
    price: 28.00,
    originalPrice: 32.00,
    imageUrl: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&w=800&q=80',
    badge: 'New',
    category: 'this-week',
    shopUrl: '#'
  },
  {
    id: '5',
    title: 'Portable Neck Fan - Bladeless 3-Speed',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1619114755106-93257692489e?auto=format&fit=crop&w=800&q=80',
    category: 'under-25',
    shopUrl: '#'
  },
  {
    id: '6',
    title: 'Wireless Headphones with Noise Cancellation',
    price: 129.00,
    originalPrice: 159.00,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    badge: 'Hot Seller',
    category: 'essentials',
    shopUrl: '#'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'l1', category: 'shop', title: 'TikTok Shop', description: 'Exclusive drops & discounts', icon: '🛍️', url: '#' },
  { id: 'l2', category: 'shop', title: 'Amazon Storefront', description: 'Everything I use in my videos', icon: '📦', url: '#' },
  { id: 'l3', category: 'social', title: 'TikTok Main', icon: '📱', url: '#' },
  { id: 'l4', category: 'social', title: 'Instagram', icon: '📸', url: '#' },
  { id: 'l5', category: 'portfolio', title: 'UGC Portfolio', description: 'Let\'s work together!', icon: '📁', url: '#' },
  { id: 'l6', category: 'contact', title: 'Collab Inquiries', icon: '✉️', url: '#' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: '@emily_style', text: "Ordered the ring light based on Maddie's rec and it changed my content game!", rating: 5 },
  { id: 't2', name: '@tech_guy_99', text: "The keyboard is actually high quality. Fast shipping too.", rating: 5 },
  { id: 't3', name: '@sarah_beauty', text: "Best affiliate recommendations on my FYP. Trust Maddie completely.", rating: 5 },
];
