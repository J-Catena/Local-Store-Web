// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    manifest: "/favicon/site.webmanifest",

    icons: {
        icon: [
            { url: "/favicon/favicon.ico" },
            { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/favicon/favicon-128.png", sizes: "128x128", type: "image/png" },
            { url: "/favicon/favicon-196x196.png", sizes: "196x196", type: "image/png" },
        ],
        apple: [
            { url: "/favicon/apple-touch-icon-57x57.png", sizes: "57x57" },
            { url: "/favicon/apple-touch-icon-60x60.png", sizes: "60x60" },
            { url: "/favicon/apple-touch-icon-72x72.png", sizes: "72x72" },
            { url: "/favicon/apple-touch-icon-76x76.png", sizes: "76x76" },
            { url: "/favicon/apple-touch-icon-114x114.png", sizes: "114x114" },
            { url: "/favicon/apple-touch-icon-120x120.png", sizes: "120x120" },
            { url: "/favicon/apple-touch-icon-144x144.png", sizes: "144x144" },
            { url: "/favicon/apple-touch-icon-152x152.png", sizes: "152x152" },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
                {children}
            </body>
        </html>
    );
}