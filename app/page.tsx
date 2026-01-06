import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import CollectionsWrapper from '@/components/CollectionsWrapper';
import LinksSection from '@/components/LinksSection';
import { Skeleton } from '@/components/ui/Skeleton';
import { getProducts, getLinks, getStats, getTestimonials } from '@/lib/airtable';

// Dynamic imports for bundle optimization
const TestimonialCarousel = dynamic(() => import('@/components/TestimonialCarousel'), {
    loading: () => <Skeleton className="h-[200px] w-full rounded-3xl" />,
    ssr: false
});

const Notification = dynamic(() => import('@/components/Notification'), {
    ssr: false
});

// Enable ISR with 60s revalidation
export const revalidate = 60;

export default async function Home() {
    // Fetch all data in parallel
    const [products, links, stats, testimonials] = await Promise.all([
        getProducts(),
        getLinks(),
        getStats(),
        getTestimonials(),
    ]);

    return (
        <div className="min-h-screen max-w-2xl mx-auto bg-[#010101] relative pb-20 shadow-2xl">
            {/* Background Accent */}
            <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FE2C55] blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#25F4EE] blur-[120px]" />
            </div>

            <Notification />

            <Hero />

            <main className="relative z-10 space-y-12 px-4 -mt-10">
                <StatsBar stats={stats} />

                <CollectionsWrapper initialProducts={products} />

                <section className="py-2">
                    <TestimonialCarousel testimonials={testimonials} />
                </section>

                <section className="py-2 pb-10">
                    <LinksSection links={links} />
                </section>
            </main>

            <footer className="text-center py-10 opacity-30 text-xs tracking-widest uppercase">
                © 2024 Maddie | Built for TikTok Shop
            </footer>

            {/* Sticky Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 max-w-2xl mx-auto z-50 bg-gradient-to-t from-[#010101] via-[#010101]/90 to-transparent">
                <button
                    className="w-full py-4 rounded-2xl bg-[#FE2C55] text-white font-bold shadow-lg shadow-[#FE2C55]/30 transform active:scale-95 transition-all text-sm uppercase tracking-wider"
                >
                    Explore My TikTok Favorites
                </button>
            </div>
        </div>
    );
}
