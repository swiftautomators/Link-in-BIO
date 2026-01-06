import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Maddie's Picks | Link in Bio",
    description: "High-converting product recommendations from Maddie.",
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "Maddie's Picks",
    },
};

export const viewport: Viewport = {
    themeColor: "#FE2C55",
    width: "device-width",
    initialScale: 1,
    // We allow pinch-to-zoom (omitting maximumScale: 1) to ensure the PWA 
    // meets accessibility standards for vision-impaired users.
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <QueryProvider>
                    {children}
                </QueryProvider>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful');
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
                    }}
                />
            </body>
        </html>
    );
}
