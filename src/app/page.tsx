// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootPage() {
  return (
    <main className="p-6 font-sans">
      <meta httpEquiv="refresh" content="0; url=/es" />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/es" />
      </noscript>

      <p>Redirigiendo…</p>
      <p className="mt-2">
        Si no ocurre nada, entra aquí:{" "}
        <Link href="/es" className="underline">/es</Link>
      </p>
    </main>
  );
}