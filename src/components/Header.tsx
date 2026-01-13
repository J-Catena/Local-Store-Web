"use client";

import Link from "next/link";
import Image from "next/image";
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

    
    const toEsPath = pathname.replace(/^\/(es|en)(?=\/|$)/, "/es");
    const toEnPath = pathname.replace(/^\/(es|en)(?=\/|$)/, "/en");

    return (
        <header className="border-b bg-white/80 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

                {/* Logo + navegación */}
                <div className="flex items-center gap-8 text-sm font-medium">
                    {/* Logo */}
                    <Link
                        href={`/${lang}`}
                        aria-label={dict.company.name}
                        className="flex items-center"
                    >
                        <Image
                            src="/logo.png"
                            alt={dict.company.name}
                            width={154}
                            height={40}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <Link
                            href={`/${lang}`}
                            className="transition hover:text-(--brand) hover:underline"
                        >
                            {dict.nav.home}
                        </Link>

                        <Link
                            href={`/${lang}/catalogo`}
                            className="transition hover:text-(--brand) hover:underline"
                        >
                            {dict.nav.catalogo}
                        </Link>

                        <Link
                            href={`/${lang}/contacto`}
                            className="transition hover:text-(--brand) hover:underline"
                        >
                            {dict.nav.contacto}
                        </Link>
                    </div>
                </div>

                {/* Selector idioma */}
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