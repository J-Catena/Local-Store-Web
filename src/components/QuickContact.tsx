import type { Dictionary, Lang } from "@/lib/getDictionary";
import ButtonLink from "@/components/ButtonLink";

type Props = {
    t: Dictionary["home"]["quickContact"];
    lang: Lang;

    phones: {
        mobile: string;
        landline: string;
    };

    hours: string;

    id?: string;
};

function toTelHref(phone: string) {
    const cleaned = phone.replace(/[^\d+]/g, "");
    return `tel:${cleaned}`;
}

export default function QuickContact({
    t,
    lang,
    phones,
    hours,
    id = "quick-contact",
}: Props) {
    const primaryPhone = phones.mobile || phones.landline;

    return (
        <section
            aria-labelledby={`${id}-title`}
            className="mx-auto w-full max-w-6xl px-4 py-12"
        >
            <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm transition hover:shadow-md md:p-10">
                <div className="grid gap-8 md:grid-cols-3 md:items-center">
                    <div className="md:col-span-2">
                        <h2
                            id={`${id}-title`}
                            className="text-2xl font-semibold tracking-tight md:text-3xl"
                        >
                            {t.title}
                        </h2>

                        {t.subtitle ? <p className="mt-2 text-zinc-600">{t.subtitle}</p> : null}

                        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                            {/* TARJETA TELÉFONOS */}
                            <div className="rounded-2xl border border-zinc-200/70 p-4 transition hover:border-[color:var(--brand)]/40 hover:bg-zinc-50">
                                <dt className="text-sm font-medium text-zinc-700">{t.phoneLabel}</dt>

                                <dd className="mt-2 space-y-2">
                                    <div className="flex items-baseline justify-between gap-4">
                                        <span className="text-sm text-zinc-600">Móvil</span>
                                        <a
                                            className="text-lg font-semibold underline-offset-4 hover:underline hover:text-[color:var(--brand)]"
                                            href={toTelHref(phones.mobile)}
                                        >
                                            {phones.mobile}
                                        </a>
                                    </div>

                                    <div className="flex items-baseline justify-between gap-4">
                                        <span className="text-sm text-zinc-600">Fijo</span>
                                        <a
                                            className="text-lg font-semibold underline-offset-4 hover:underline hover:text-[color:var(--brand)]"
                                            href={toTelHref(phones.landline)}
                                        >
                                            {phones.landline}
                                        </a>
                                    </div>
                                </dd>
                            </div>

                            {/* TARJETA HORARIO */}
                            <div className="rounded-2xl border border-zinc-200/70 p-4 transition hover:border-[color:var(--brand)]/40 hover:bg-zinc-50">
                                <dt className="text-sm font-medium text-zinc-700">{t.hoursLabel}</dt>
                                <dd className="mt-1 text-lg font-semibold text-zinc-900">{hours}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="flex flex-col gap-3 md:items-end">
                        <ButtonLink href={`/${lang}/contacto`} variant="primary" className="w-full md:w-auto">
                            {t.ctaPrimary}
                        </ButtonLink>

                        {t.ctaSecondary && primaryPhone ? (
                            <a
                                href={toTelHref(primaryPhone)}
                                className="inline-flex w-full items-center justify-center rounded-2xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition duration-200 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] hover:bg-zinc-50 md:w-auto"
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