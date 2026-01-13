import type { Dictionary, Lang } from "@/lib/getDictionary";
import ButtonLink from "@/components/ButtonLink";

export default function Hero({ lang, dict }: { lang: Lang; dict: Dictionary }) {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <div className="grid items-center gap-12 md:grid-cols-2">
                {/* Texto */}
                <div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm transition hover:border-(--brand)/40">
                        <span className="h-2 w-2 rounded-full bg-green-600" />
                        {dict.home.trust}
                    </p>

                    <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-gray-900">
                        {dict.home.title}
                    </h1>

                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
                        {dict.home.subtitle}
                    </p>

                    <ul className="mt-7 space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gray-900/50" />
                            <span>{dict.home.bullets.one}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gray-900/50" />
                            <span>{dict.home.bullets.two}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gray-900/50" />
                            <span>{dict.home.bullets.three}</span>
                        </li>
                    </ul>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <ButtonLink href={`/${lang}/catalogo`} variant="primary">
                            {dict.home.ctaCatalogo}
                        </ButtonLink>

                        <ButtonLink href={`/${lang}/contacto`} variant="secondary">
                            {dict.home.ctaContacto}
                        </ButtonLink>
                    </div>
                </div>

                {/* Visual */}
                <div className="relative">
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-sm transition hover:shadow-md">
                        <div
                            className="relative h-80 w-full bg-cover bg-center md:h-105"
                            style={{ backgroundImage: "url(/hero.jpeg)" }}
                        >
                            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/25 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                                    <span className="h-2 w-2 rounded-full bg-green-500" />
                                    {dict.home.imageBadge}
                                </div>

                                <div className="mt-3 text-sm text-white/85">
                                    {dict.home.imageCaption}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}