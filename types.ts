
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  badge?: string;
  category: string;
  shopUrl: string;
}

export interface Collection {
  id: string;
  label: string;
}

export interface SocialLink {
  id: string;
  title: string;
  description?: string;
  icon: string;
  url: string;
  category: 'shop' | 'social' | 'portfolio' | 'contact';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}
