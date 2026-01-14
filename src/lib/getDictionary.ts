import { es } from "@/i18n/es";
import { en } from "@/i18n/en";

export type Lang = "es" | "en";

export type Dictionary = {
  nav: {
    home: string;
    catalogo: string;
    contacto: string;
    langES: string;
    langEN: string;
  };

  // Fuente única de datos de negocio
  company: {
    name: string;
    email: string;
    address: string;
    hours: string;

    phones: {
      mobile: string;
      landline: string;
    };

    mapsEmbedUrl: string;
    mapsLinkUrl: string;
  };


  home: {
    title: string;
    subtitle: string;
    ctaCatalogo: string;
    ctaContacto: string;
    trust: string;

    bullets: {
      one: string;
      two: string;
      three: string;
    };

    imageBadge: string;
    imageCaption: string;

    servicesTitle: string;
    servicesSubtitle: string;
    services: {
      oneTitle: string;
      oneDesc: string;
      twoTitle: string;
      twoDesc: string;
      threeTitle: string;
      threeDesc: string;
    };

    quickContact: {
      title: string;
      subtitle?: string;
      phoneLabel: string;
      hoursLabel: string;
      ctaPrimary: string;
      ctaSecondary?: string;
    };
  };

  catalogo: {
    title: string;
    subtitle: string;

    notice: {
      title: string;
      body: string;
      ctaLabel: string;
      ctaTopic: string;
    };

    howItWorks: {
      title: string;
      steps: ReadonlyArray<{
        title: string;
        desc: string;
      }>;
    };

    categoriesTitle: string;
    categoriesIntro: string;

    areas: {
      oneTitle: string;
      oneDesc: string;
      oneCta: string;
      oneTopic: string;

      twoTitle: string;
      twoDesc: string;
      twoCta: string;
      twoTopic: string;

      threeTitle: string;
      threeDesc: string;
      threeCta: string;
      threeTopic: string;

      fourTitle: string;
      fourDesc: string;
      fourCta: string;
      fourTopic: string;
    };

    transparency: {
      title: string;
      bullets: ReadonlyArray<string>;
    };
  };


  contacto: {
    title: string;
    subtitle: string;

    methodsTitle: string;

    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;

    ctaPrimary: string;
    ctaSecondary?: string;


    topicLabel?: string;
  };
  seo: {
    homeTitle: string;
    homeDescription: string;
  };
};

export function normalizeLang(value: string): Lang {
  return value === "en" ? "en" : "es";
}

export function getDictionary(lang: Lang): Dictionary {
  return lang === "en" ? en : es;
}
