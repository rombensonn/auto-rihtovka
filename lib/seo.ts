import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const businessName = "Авто_рихтовка";
export const yandexMapsUrl = "https://yandex.ru/maps/-/CPwLj2ir";
export const phoneDisplay = "+7 (915) 047-00-05";
export const phoneHref = "tel:+79150470005";
export const address = "Московская область, Подольск, ул. Машиностроителей, 38";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Кузовной ремонт и покраска авто в Подольске — Авто_рихтовка",
  description:
    "Авто_рихтовка в Подольске: кузовной ремонт, покраска авто, ремонт бамперов, замена порогов, восстановление пластика и устранение ржавчины. Рейтинг 4,8 на Яндекс.Картах. Ежедневно 09:00–21:00.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: businessName,
    title: "Кузовной ремонт и покраска авто в Подольске — Авто_рихтовка",
    description:
      "Кузовной ремонт, покраска авто, ремонт бамперов, замена порогов и восстановление пластика в Подольске.",
    images: [
      {
        url: `${siteUrl}/images/industrial-hero-bodyshop.jpg`,
        width: 1200,
        height: 800,
        alt: "Кузовной ремонт автомобиля в Подольске",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: businessName,
  image: `${siteUrl}/images/industrial-hero-bodyshop.jpg`,
  url: siteUrl,
  telephone: phoneDisplay,
  priceRange: "₽₽",
  hasMap: yandexMapsUrl,
  paymentAccepted: "Картой, онлайн, наличными",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Машиностроителей, 38",
    addressLocality: "Подольск",
    addressRegion: "Московская область",
    addressCountry: "RU",
  },
  openingHours: ["Mo-Su 09:00-21:00"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "20",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Подольск, Московская область",
  },
  makesOffer: [
    "Кузовной ремонт",
    "Покраска автомобилей",
    "Ремонт бамперов",
    "Замена порогов",
    "Восстановление пластика",
    "Устранение ржавчины",
    "Полировка кузова и фар",
  ],
};
