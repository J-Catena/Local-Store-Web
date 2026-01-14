import Link from "next/link";
import type { Dictionary } from "@/lib/getDictionary";

export default function Footer({
    lang,
    company,
    portfolioUrl,
}: {
    lang: "es" | "en";
    company: Dictionary["company"];
    portfolioUrl: string;
}) {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-zinc-200/70 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <div className="flex flex-col gap-3 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
                    <p>
                        © {year} {company.name}.{" "}
                        <span className="text-zinc-500">
                            {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
                        </span>
                    </p>

                    <p className="text-zinc-500">
                        {lang === "es" ? "Diseñado y desarrollado por " : "Designed and developed by "}
                        <Link
                            href={portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-zinc-900 hover:underline"
                        >
                            Juan Catena
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
