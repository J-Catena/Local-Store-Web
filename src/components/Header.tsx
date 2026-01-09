"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Lang } from "@/lib/getDictionary";

export default function Header({
    lang,
    dict,
}: {
    lang: Lang;
    dict: Dictionary;
}) {
    const pathname = usePathname() || `/${lang}`;

    // Mantener el resto de la ruta y cambiar solo el prefijo de idioma
    const toEsPath = pathname.replace(/^\/(es|en)(?=\/|$)/, "/es");
    const toEnPath = pathname.replace(/^\/(es|en)(?=\/|$)/, "/en");

    return (
        <header className="border-b bg-white/80 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-6 text-sm font-medium">
                    <Link href={`/${lang}`} className="hover:underline">
                        {dict.nav.home}
                    </Link>
                    <Link href={`/${lang}/catalogo`} className="hover:underline">
                        {dict.nav.catalogo}
                    </Link>
                    <Link href={`/${lang}/contacto`} className="hover:underline">
                        {dict.nav.contacto}
                    </Link>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                    <Link
                        href={toEsPath}
                        className={
                            lang === "es"
                                ? "rounded-md px-2 py-1 font-semibold underline"
                                : "rounded-md px-2 py-1 text-gray-500 hover:text-gray-900"
                        }
                    >
                        ES
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link
                        href={toEnPath}
                        className={
                            lang === "en"
                                ? "rounded-md px-2 py-1 font-semibold underline"
                                : "rounded-md px-2 py-1 text-gray-500 hover:text-gray-900"
                        }
                    >
                        EN
                    </Link>
                </div>
            </nav>
        </header>
    );
}
