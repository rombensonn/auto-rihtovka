"use client";

import { motion } from "framer-motion";
import { Camera, Clock3, MapPin, Phone, Star, Wrench } from "lucide-react";
import Image from "next/image";
import { phoneDisplay, phoneHref, yandexMapsUrl } from "@/lib/seo";

const specs = [
  {
    icon: Star,
    label: "Рейтинг",
    value: "4,8 · 20 оценок",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Машиностроителей, 38",
  },
  {
    icon: Clock3,
    label: "График",
    value: "09:00–21:00 ежедневно",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="industrial-section relative isolate min-h-[100svh] overflow-hidden bg-background pt-24 text-white md:pt-28"
    >
      <Image
        src="/images/industrial-hero-bodyshop.jpg"
        alt="Визуальный образ индустриального кузовного цеха"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-72"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,11,15,0.98)_0%,rgba(9,11,15,0.88)_38%,rgba(9,11,15,0.42)_70%,rgba(9,11,15,0.70)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="section-shell grid min-h-[calc(100svh-6rem)] content-center gap-8 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="rail-label mb-5 inline-flex items-center gap-3 rounded-md border border-amber/35 bg-black/42 px-4 py-2 backdrop-blur">
            <Wrench className="h-4 w-4" aria-hidden="true" />
            Авто_рихтовка · кузовной ремонт в Подольске
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal md:text-6xl lg:text-7xl">
            Кузовной ремонт и покраска авто в Подольске
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-200 md:text-xl md:leading-8">
            Восстанавливаем бамперы, пороги, кузовные детали и ЛКП после ДТП,
            коррозии и повреждений. Оценим объём работ по фото или при осмотре.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {specs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="steel-card rounded-lg p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-steel">
                      {item.label}
                    </span>
                    <Icon className="h-4 w-4 text-electric" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-bold text-paper">{item.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#lead"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 font-extrabold text-ink transition-colors duration-200 hover:bg-[#ffc247]"
            >
              Записаться на оценку
            </a>
            <a
              href={phoneHref}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/16 bg-white/8 px-6 py-3 font-bold text-white transition-colors duration-200 hover:border-amber hover:bg-white/12"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Позвонить {phoneDisplay}
            </a>
            <a
              href={yandexMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-lg border border-electric/40 bg-electric/10 px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-electric/16"
            >
              Открыть в Яндекс.Картах
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="steel-card corner-cut max-w-xl p-5"
        >
          <div className="metal-rule mb-4" />
          <div className="flex gap-4">
            <Camera className="mt-1 h-6 w-6 shrink-0 text-amber" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-black">Оценка начинается с повреждения</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Можно отправить фото повреждения — мастер подскажет ориентир по
                цене и срокам. Точная стоимость подтверждается после осмотра.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
