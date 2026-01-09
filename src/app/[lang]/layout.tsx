import Header from "@/components/Header";
import { getDictionary, normalizeLang } from "@/lib/getDictionary";

export const dynamicParams = false;

export function generateStaticParams() {
    return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = normalizeLang(rawLang);
    const dict = getDictionary(lang);

    return (
        <section lang={lang} data-lang={lang}>
            <Header lang={lang} dict={dict} />
            {children}
        </section>
    );
}
