import Link from "next/link";
import QuickContact from "@/components/QuickContact";
import TopicPill from "@/components/TopicPill";
import { getDictionary, normalizeLang } from "@/lib/getDictionary";

function toTelHref(phone: string) {
    const cleaned = phone.replace(/[^\d+]/g, "");
    return `tel:${cleaned}`;
}

function toMailHref(email: string) {
    return `mailto:${email}`;
}

function toMapsHref(address: string) {
    const q = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export default async function Contacto({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = normalizeLang(rawLang);
    const dict = getDictionary(lang);

    const c = dict.contacto;
    const company = dict.company;

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-12">
            <header className="max-w-3xl">
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {c.title}
                </h1>
                <p className="mt-3 text-zinc-600">{c.subtitle}</p>

                <TopicPill label={c.topicLabel ?? "Topic"} />
            </header>

            <QuickContact
                t={{
                    title: c.methodsTitle,
                    subtitle: undefined,
                    phoneLabel: c.phoneLabel,
                    hoursLabel: c.hoursLabel,
                    ctaPrimary: c.ctaPrimary,
                    ctaSecondary: c.ctaSecondary,
                }}
                lang={lang}
                phones={company.phones}
                hours={company.hours}
                id="contact-quick"
            />

            <section className="mt-6">
                <h2 className="text-xl font-semibold tracking-tight">{c.methodsTitle}</h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <a
                        className="rounded-3xl border border-zinc-200/70 bg-white p-5 shadow-sm transition hover:bg-zinc-50"
                        href={toTelHref(company.phones.mobile)}
                    >
                        <p className="text-sm font-medium text-zinc-700">{c.phoneLabel}</p>
                        <div className="mt-2 space-y-2">
                            <p className="text-lg font-semibold">Móvil: {company.phones.mobile}</p>
                            <p className="text-lg font-semibold">Fijo: {company.phones.landline}</p>
                        </div>
                    </a>

                    <a
                        className="rounded-3xl border border-zinc-200/70 bg-white p-5 shadow-sm transition hover:bg-zinc-50"
                        href={toMailHref(company.email)}
                    >
                        <p className="text-sm font-medium text-zinc-700">{c.emailLabel}</p>
                        <p className="mt-2 break-all text-lg font-semibold">{company.email}</p>
                    </a>

                    <a
                        className="rounded-3xl border border-zinc-200/70 bg-white p-5 shadow-sm transition hover:bg-zinc-50"
                        href={toMapsHref(company.address)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className="text-sm font-medium text-zinc-700">{c.addressLabel}</p>
                        <p className="mt-2 text-lg font-semibold">{company.address}</p>
                    </a>

                    <div className="rounded-3xl border border-zinc-200/70 bg-white p-5 shadow-sm">
                        <p className="text-sm font-medium text-zinc-700">{c.hoursLabel}</p>
                        <p className="mt-2 text-lg font-semibold">{company.hours}</p>
                    </div>
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