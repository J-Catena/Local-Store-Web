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
    categoriesTitle: string;

    categories: {
      oneTitle: string;
      oneDesc: string;
      oneCta: string;

      twoTitle: string;
      twoDesc: string;
      twoCta: string;

      threeTitle: string;
      threeDesc: string;
      threeCta: string;

      fourTitle: string;
      fourDesc: string;
      fourCta: string;
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
