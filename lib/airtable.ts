import Airtable from 'airtable';
import { PRODUCTS, SOCIAL_LINKS, TESTIMONIALS } from '../constants';
import { Product, SocialLink, Testimonial } from '../types';

// Initialize Airtable
const baseId = process.env.AIRTABLE_BASE_ID;
const apiKey = process.env.AIRTABLE_API_KEY;

const base = apiKey && baseId
  ? new Airtable({ apiKey }).base(baseId)
  : null;

/**
 * Mock data fallbacks for development
 */
const MOCK_STATS = [
  { label: 'Orders Last 24h', value: '142' },
  { label: 'Active Viewers', value: '4.2k' },
  { label: 'Items Sold', value: '12k+' },
];

export async function getProducts(): Promise<Product[]> {
  if (!base) {
    console.warn('Airtable not configured, using mock products');
    return PRODUCTS;
  }

  try {
    const records = await base('Products').select({
      view: 'Grid view',
    }).all();

    return records.map((record) => ({
      id: record.id,
      title: record.get('Title') as string,
      price: record.get('Price') as number,
      originalPrice: record.get('OriginalPrice') as number,
      imageUrl: record.get('ImageUrl') as string,
      badge: record.get('Badge') as string,
      category: record.get('Category') as string,
      shopUrl: record.get('ShopUrl') as string,
    }));
  } catch (error) {
    console.error('Error fetching products from Airtable:', error);
    return PRODUCTS;
  }
}

export async function getLinks(): Promise<SocialLink[]> {
  if (!base) {
    console.warn('Airtable not configured, using mock links');
    return SOCIAL_LINKS;
  }

  try {
    const records = await base('Links').select({
      view: 'Grid view',
    }).all();

    return records.map((record) => ({
      id: record.id,
      category: record.get('Category') as any,
      title: record.get('Title') as string,
      description: record.get('Description') as string,
      icon: record.get('Icon') as string,
      url: record.get('Url') as string,
    }));
  } catch (error) {
    console.error('Error fetching links from Airtable:', error);
    return SOCIAL_LINKS;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!base) {
    console.warn('Airtable not configured, using mock testimonials');
    return TESTIMONIALS;
  }

  try {
    const records = await base('Testimonials').select({
      view: 'Grid view',
    }).all();

    return records.map((record) => ({
      id: record.id,
      name: record.get('Name') as string,
      text: record.get('Text') as string,
      rating: record.get('Rating') as number,
    }));
  } catch (error) {
    console.error('Error fetching testimonials from Airtable:', error);
    return TESTIMONIALS;
  }
}

export async function getStats() {
  if (!base) {
    return MOCK_STATS;
  }

  try {
    const records = await base('Stats').select({
      view: 'Grid view',
    }).all();

    return records.map((record) => ({
      label: record.get('Label') as string,
      value: record.get('Value') as string,
    }));
  } catch (error) {
    console.error('Error fetching stats from Airtable:', error);
    return MOCK_STATS;
  }
}
