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
        {
            title: c.areas.oneTitle,
            desc: c.areas.oneDesc,
            cta: c.areas.oneCta,
            topic: c.areas.oneTopic,
        },
        {
            title: c.areas.twoTitle,
            desc: c.areas.twoDesc,
            cta: c.areas.twoCta,
            topic: c.areas.twoTopic,
        },
        {
            title: c.areas.threeTitle,
            desc: c.areas.threeDesc,
            cta: c.areas.threeCta,
            topic: c.areas.threeTopic,
        },
        {
            title: c.areas.fourTitle,
            desc: c.areas.fourDesc,
            cta: c.areas.fourCta,
            topic: c.areas.fourTopic,
        },
    ];

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-12">
            {/* HERO */}
            <header className="max-w-3xl">
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {c.title}
                </h1>
                <p className="mt-3 text-zinc-600">{c.subtitle}</p>

                <div className="mt-6 rounded-3xl border border-zinc-200/70 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-zinc-900">{c.notice.title}</p>
                    <p className="mt-2 text-sm text-zinc-600">{c.notice.body}</p>

                    <div className="mt-4">
                        <Link
                            href={buildContactHref(lang, c.notice.ctaTopic)}
                            className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                        >
                            {c.notice.ctaLabel}
                        </Link>
                    </div>
                </div>
            </header>

            {/* CÓMO TRABAJAMOS */}
            <section className="mt-10">
                <h2 className="text-xl font-semibold tracking-tight">{c.howItWorks.title}</h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {c.howItWorks.steps.map((step) => (
                        <div
                            key={step.title}
                            className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-base font-semibold text-zinc-900">{step.title}</h3>
                            <p className="mt-2 text-sm text-zinc-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ÁREAS DE PRODUCTO Y SERVICIO */}
            <section className="mt-10">
                <h2 className="text-xl font-semibold tracking-tight">{c.categoriesTitle}</h2>
                <p className="mt-2 max-w-3xl text-sm text-zinc-600">{c.categoriesIntro}</p>

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
                                    href={buildContactHref(lang, item.topic)}
                                    className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                                >
                                    {item.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm">
                    <h3 className="text-base font-semibold text-zinc-900">{c.transparency.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                        {c.transparency.bullets.map((b) => (
                            <li key={b}>• {b}</li>
                        ))}
                    </ul>
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
