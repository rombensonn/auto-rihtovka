"use client";

import { motion } from "framer-motion";
import {
  BadgeRussianRuble,
  Car,
  CircleDot,
  Hammer,
  Paintbrush,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    code: "P-01",
    title: "Покраска автомобиля",
    price: "от 15 000 ₽",
    text: "Подходит, если нужно восстановить внешний вид после ДТП, сколов, коррозии или старого ремонта.",
  },
  {
    icon: Sparkles,
    code: "L-02",
    title: "Полировка фар",
    price: "от 1 500 ₽",
    text: "Помогает вернуть прозрачность фар и улучшить внешний вид автомобиля.",
  },
  {
    icon: Car,
    code: "L-03",
    title: "Полировка кузова",
    price: "от 14 000 ₽",
    text: "Подходит для восстановления блеска кузова и устранения мелких следов эксплуатации.",
  },
  {
    icon: Hammer,
    code: "B-04",
    title: "Замена порогов",
    price: "от 15 000 ₽",
    text: "Актуально при коррозии, повреждениях или сильном износе порогов.",
  },
  {
    icon: Wrench,
    code: "B-05",
    title: "Замена бампера",
    price: "от 3 500 ₽",
    text: "Быстрое решение при трещинах, деформации или повреждении после ДТП.",
  },
  {
    icon: BadgeRussianRuble,
    code: "R-06",
    title: "Восстановление деталей",
    price: "от 40 000 ₽",
    comment: "Стоимость зависит от характера повреждения.",
    text: "Подходит для сложных случаев после ДТП, когда деталь можно восстановить вместо полной замены.",
  },
  {
    icon: CircleDot,
    code: "P-07",
    title: "Восстановление пластика",
    price: "от 3 000 ₽",
    comment: "Стоимость зависит от сложности повреждения.",
    text: "Для ремонта пластиковых элементов автомобиля: бамперов, накладок и других деталей.",
  },
  {
    icon: Wrench,
    code: "B-08",
    title: "Ремонт бамперов",
    price: "по оценке",
    text: "Для трещин, сколов, деформаций и повреждений после небольших ДТП.",
  },
  {
    icon: Hammer,
    code: "W-09",
    title: "Сварочные работы",
    price: "по оценке",
    text: "Для ремонта коррозии, усиления кузова и восстановления повреждённых элементов.",
  },
];

export function ServiceCards() {
  return (
    <section id="services" className="industrial-section bg-background py-16 text-white md:py-24">
      <div className="section-shell">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="rail-label">Смета до старта</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal md:text-5xl">
              Услуги и цены
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
            Ориентиры помогают понять порядок бюджета до осмотра. По фото можно
            обсудить кузовной ремонт Подольск, покраску авто, ремонт бамперов,
            замену порогов, восстановление пластика, устранение ржавчины,
            рихтовку автомобиля, полировку кузова и фар.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.025, duration: 0.32 }}
                className="steel-card group flex min-h-[300px] flex-col overflow-hidden rounded-lg transition-colors duration-200 hover:border-amber/55"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <span className="rounded-md border border-electric/25 bg-electric/10 px-2.5 py-1 text-xs font-black text-electric">
                    {service.code}
                  </span>
                  <Icon className="h-6 w-6 text-amber" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-5">
                    <p className="mb-3 inline-flex rounded-md bg-paper px-3 py-1 text-sm font-black text-ink">
                      {service.price}
                    </p>
                    <h3 className="text-xl font-black">{service.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-zinc-300">{service.text}</p>
                  {service.comment ? (
                    <p className="mt-3 border-l-2 border-amber pl-3 text-sm leading-6 text-amber">
                      {service.comment}
                    </p>
                  ) : null}
                  <a
                    href="#lead"
                    className="focus-ring mt-auto inline-flex min-h-11 items-center justify-center rounded-lg border border-white/14 px-4 py-3 text-sm font-bold transition-colors duration-200 hover:border-amber hover:bg-amber hover:text-ink"
                  >
                    Уточнить по моему авто
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-[1fr_0.45fr]">
          <p className="steel-card rounded-lg p-5 text-sm leading-6 text-zinc-200">
            Цены указаны как ориентир. Точная стоимость зависит от повреждения,
            состояния детали, объёма подготовки и покраски.
          </p>
          <a
            href="#lead"
            className="focus-ring flex min-h-16 items-center justify-center rounded-lg bg-amber px-6 py-4 text-center font-black text-ink transition-colors duration-200 hover:bg-[#ffc247]"
          >
            Уточнить стоимость ремонта
          </a>
        </div>
      </div>
    </section>
  );
}
