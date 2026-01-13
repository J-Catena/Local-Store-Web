import type { Metadata } from "next";
import Header from "@/components/Header";
import { getDictionary, normalizeLang, type Lang } from "@/lib/getDictionary";

export const dynamicParams = false;

export function generateStaticParams() {
    return [{ lang: "es" }, { lang: "en" }];
}

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://example.com";

function absoluteUrl(path: string) {
    if (!path.startsWith("/")) path = "/" + path;
    return `${SITE_URL}${path}`;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang: rawLang } = await params;
    const lang = normalizeLang(rawLang) as Lang;
    const dict = await Promise.resolve(getDictionary(lang));

    const canonical = absoluteUrl(`/${lang}`);
    const siteName = dict.company.name;

    const title = `${siteName} | ${dict.seo.homeTitle}`;
    const description = dict.seo.homeDescription;

    const ogImage = absoluteUrl("/og/og-default.jpg");

    return {
        metadataBase: new URL(SITE_URL),
        title: {
            default: title,
            template: `%s | ${siteName}`,
        },
        description,
        alternates: {
            canonical,
            languages: {
                es: absoluteUrl("/es"),
                en: absoluteUrl("/en"),
            },
        },
        openGraph: {
            type: "website",
            locale: lang === "es" ? "es_ES" : "en_US",
            url: canonical,
            siteName,
            title,
            description,
            images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
        robots: { index: true, follow: true },
    };
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = normalizeLang(rawLang) as Lang;
    const dict = await Promise.resolve(getDictionary(lang));

    return (
        <section lang={lang} data-lang={lang}>
            <Header lang={lang} dict={dict} />
            {children}
        </section>
    );
}
