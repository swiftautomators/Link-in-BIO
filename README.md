# Maddie's Link in Bio PWA

High-converting product recommendations and exclusive links from Maddie, powered by Next.js 14 and Airtable.

## Features
- **TikTok-Native Design**: Optimized for mobile (393px-430px).
- **Airtable Integration**: Real-time content managed directly in Airtable.
- **PWA Ready**: Installable on iOS and Android.
- **Fast & Secure**: ISR caching (60s), React Query, and security-hardened links.

## Run Locally

**Prerequisites:** Node.js 18+

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment:**
   Create a `.env.local` file based on `.env.example` and add your Airtable credentials.

3. **Development Mode:**
   ```bash
   npm run dev
   ```

4. **Production Build:**
   ```bash
   npm run build
   ```

## Design Stack
- Next.js 14 (App Router)
- Tailwind CSS + Framer Motion
- React Query + Zustand
- Lucide Icons
