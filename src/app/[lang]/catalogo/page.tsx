import Link from "next/link";
import { getDictionary, normalizeLang } from "@/lib/getDictionary";

function buildContactHref(lang: "es" | "en", topic: string) {
    // query string no rompe export estático
    return `/${lang}/contacto?topic=${encodeURIComponent(topic)}`;
}

export default async function Catalogo({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = normalizeLang(rawLang);
    const dict = getDictionary(lang);

    const c = dict.catalogo;

    const cards = [
        { title: c.categories.oneTitle, desc: c.categories.oneDesc, cta: c.categories.oneCta },
        { title: c.categories.twoTitle, desc: c.categories.twoDesc, cta: c.categories.twoCta },
        { title: c.categories.threeTitle, desc: c.categories.threeDesc, cta: c.categories.threeCta },
        { title: c.categories.fourTitle, desc: c.categories.fourDesc, cta: c.categories.fourCta },
    ];

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-12">
            <header className="max-w-3xl">
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {c.title}
                </h1>
                <p className="mt-3 text-zinc-600">{c.subtitle}</p>
            </header>

            <section className="mt-10">
                <h2 className="text-xl font-semibold tracking-tight">
                    {c.categoriesTitle}
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {cards.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="mt-2 text-zinc-600">{item.desc}</p>

                            <div className="mt-5">
                                <Link
                                    href={buildContactHref(lang, item.title)}
                                    className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                                >
                                    {item.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        href={`/${lang}`}
                        className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline"
                    >
                        ← {dict.nav.home}
                    </Link>
                </div>
            </section>
        </main>
    );
}
