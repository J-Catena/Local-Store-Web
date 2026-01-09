import "./globals.css";

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
