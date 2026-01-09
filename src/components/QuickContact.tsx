import Link from "next/link";
import type { Dictionary, Lang } from "@/lib/getDictionary";

type Props = {
    t: Dictionary["home"]["quickContact"];
    lang: Lang;

    phone: string;
    hours: string;

    // (opcional) para evitar ids duplicados si lo reutilizas en varias páginas
    id?: string;
};

function toTelHref(phone: string) {
    const cleaned = phone.replace(/[^\d+]/g, "");
    return `tel:${cleaned}`;
}

export default function QuickContact({
    t,
    lang,
    phone,
    hours,
    id = "quick-contact",
}: Props) {
    return (
        <section
            aria-labelledby={`${id}-title`}
            className="mx-auto w-full max-w-6xl px-4 py-12"
        >
            <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm md:p-10">
                <div className="grid gap-8 md:grid-cols-3 md:items-center">
                    <div className="md:col-span-2">
                        <h2
                            id={`${id}-title`}
                            className="text-2xl font-semibold tracking-tight md:text-3xl"
                        >
                            {t.title}
                        </h2>

                        {t.subtitle ? (
                            <p className="mt-2 text-zinc-600">{t.subtitle}</p>
                        ) : null}

                        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-zinc-200/70 p-4">
                                <dt className="text-sm font-medium text-zinc-700">
                                    {t.phoneLabel}
                                </dt>
                                <dd className="mt-1 text-lg font-semibold">
                                    <a
                                        className="underline-offset-4 hover:underline"
                                        href={toTelHref(phone)}
                                    >
                                        {phone}
                                    </a>
                                </dd>
                            </div>

                            <div className="rounded-2xl border border-zinc-200/70 p-4">
                                <dt className="text-sm font-medium text-zinc-700">
                                    {t.hoursLabel}
                                </dt>
                                <dd className="mt-1 text-lg font-semibold text-zinc-900">
                                    {hours}
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="flex flex-col gap-3 md:items-end">
                        <Link
                            href={`/${lang}/contacto`}
                            className="inline-flex w-full items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 md:w-auto"
                        >
                            {t.ctaPrimary}
                        </Link>

                        {t.ctaSecondary ? (
                            <a
                                href={toTelHref(phone)}
                                className="inline-flex w-full items-center justify-center rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 md:w-auto"
                            >
                                {t.ctaSecondary}
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}
