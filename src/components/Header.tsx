"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
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

    const [open, setOpen] = useState(false);
    const menuId = useId();

    // Cierra el menú al cambiar de ruta (mejora UX)
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header className="border-b bg-white/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
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

                {/* Desktop nav */}
                <div className="hidden items-center gap-8 md:flex">
                    <div className="flex items-center gap-6 text-sm font-semibold text-zinc-700">
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

                    {/* Idiomas desktop */}
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
                </div>

                {/* Mobile controls */}
                <div className="flex items-center gap-2 md:hidden">
                    {/* Idiomas móvil (compacto) */}
                    <Link
                        href={toEsPath}
                        className={lang === "es" ? "px-2 py-1 text-sm font-semibold underline" : "px-2 py-1 text-sm text-gray-500"}
                        aria-label="Español"
                    >
                        ES
                    </Link>
                    <Link
                        href={toEnPath}
                        className={lang === "en" ? "px-2 py-1 text-sm font-semibold underline" : "px-2 py-1 text-sm text-gray-500"}
                        aria-label="English"
                    >
                        EN
                    </Link>

                    {/* Botón hamburguesa */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-(--brand)/40"
                        aria-controls={menuId}
                        aria-expanded={open}
                        aria-label={open ? "Cerrar menú" : "Abrir menú"}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {/* Icono simple (sin librerías) */}
                        <span className="relative block h-4 w-5">
                            <span
                                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""
                                    }`}
                            />
                        </span>
                    </button>
                </div>
            </nav>

            {/* Mobile menu panel */}
            <div
                id={menuId}
                className={`md:hidden ${open ? "block" : "hidden"}`}
            >
                <div className="mx-auto max-w-6xl px-4 pb-4">
                    <div className="rounded-2xl border border-zinc-200/70 bg-white p-3 shadow-sm">
                        <Link
                            href={`/${lang}`}
                            className="block rounded-xl px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 hover:text-(--brand)"
                        >
                            {dict.nav.home}
                        </Link>
                        <Link
                            href={`/${lang}/catalogo`}
                            className="mt-1 block rounded-xl px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 hover:text-(--brand)"
                        >
                            {dict.nav.catalogo}
                        </Link>
                        <Link
                            href={`/${lang}/contacto`}
                            className="mt-1 block rounded-xl px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 hover:text-(--brand)"
                        >
                            {dict.nav.contacto}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}