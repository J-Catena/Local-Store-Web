import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QuickContact from "@/components/QuickContact";
import { getDictionary, normalizeLang } from "@/lib/getDictionary";

export default async function LangHome({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = normalizeLang(rawLang);
    const dict = getDictionary(lang);

    return (
        <main>
            <Hero lang={lang} dict={dict} />
            <Services dict={dict} />

            <QuickContact
                t={dict.home.quickContact}
                lang={lang}
                phone={dict.company.phone}
                hours={dict.company.hours}
            />
        </main>
    );
}
