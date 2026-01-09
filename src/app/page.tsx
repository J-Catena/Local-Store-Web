"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/es");
  }, [router]);

  return (
    <main className="p-6 font-sans">
      <p>Redirigiendo…</p>
      <p className="mt-2">
        Si no ocurre nada, entra aquí:{" "}
        <Link href="/es" className="underline">
          /es
        </Link>
      </p>
    </main>
  );
}
