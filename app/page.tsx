import {
  CarFront,
  CheckCircle2,
  Clock3,
  FileSearch,
  HandCoins,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Contacts } from "@/components/Contacts";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reviews } from "@/components/Reviews";
import { ServiceCards } from "@/components/ServiceCards";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { localBusinessJsonLd } from "@/lib/seo";

const reasons = [
  {
    icon: FileSearch,
    title: "Оценка до начала работ",
    text: "Сначала осмотр повреждения и понятный расчёт. Итог зависит от сложности ремонта.",
  },
  {
    icon: Clock3,
    title: "Работа в срок",
    text: "В отзывах клиенты отдельно отмечают, что автомобиль сделали в согласованные сроки.",
  },
  {
    icon: HandCoins,
    title: "Без завышения после ремонта",
    text: "Клиенты пишут, что после ремонта цену не поднимали без причины.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия на работы",
    text: "В отзывах упоминают гарантию на выполненный кузовной ремонт.",
  },
  {
    icon: CheckCircle2,
    title: "Быстрая запись",
    text: "Сервис работает ежедневно до 21:00, можно подобрать удобное время для осмотра.",
  },
];

const restoreScenarios = [
  {
    title: "После ДТП",
    text: "Бампер, дверь, багажник, крыло, капот, пластиковые элементы.",
  },
  {
    title: "Ржавчина и коррозия",
    text: "Пороги, арки, крылья, проблемные места кузова.",
  },
  {
    title: "Старый или неудачный ремонт",
    text: "Переделка дефектов, восстановление внешнего вида, полировка.",
  },
  {
    title: "Пластик и бамперы",
    text: "Трещины, сколы, деформация, восстановление и покраска.",
  },
  {
    title: "Покраска и внешний вид",
    text: "Локальная или более объёмная покраска, полировка кузова и фар.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header />
      <main className="overflow-hidden pb-20 md:pb-0">
        <Hero />

        <section className="industrial-section bg-background py-16 text-white md:py-24">
          <div className="section-shell">
            <div className="mb-10 grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
              <div>
                <p className="rail-label">Почему обращаются</p>
                <h2 className="mt-3 text-3xl font-black tracking-normal md:text-5xl">
                  Спокойный старт кузовного ремонта
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
                Страхи перед кузовным ремонтом обычно одинаковые: цена вырастет,
                сроки сдвинутся, объём работ не объяснят. Здесь акцент на осмотре,
                понятной оценке и согласовании до начала ремонта.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {reasons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="steel-card rounded-lg p-5 transition-colors duration-200 hover:border-amber/55"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <Icon className="h-7 w-7 text-amber" aria-hidden="true" />
                      <span className="text-xs font-black text-steel">0{index + 1}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-black">{item.title}</h3>
                    <p className="text-sm leading-6 text-zinc-300">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <ServiceCards />
        <BeforeAfterSlider />
        <ProcessSteps />
        <Reviews />

        <section id="restore" className="bg-paper py-16 text-ink md:py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded-lg">
              <Image
                src="/images/industrial-paint-prep.jpg"
                alt="Визуальный образ подготовки кузова к ремонту"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="rail-label">Сценарии ремонта</p>
                <p className="mt-2 text-xl font-black">
                  Не всегда деталь нужно менять: сначала стоит понять состояние.
                </p>
              </div>
            </div>

            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase text-amber-dark">
                <CarFront className="h-4 w-4" aria-hidden="true" />
                Что можно восстановить
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal md:text-5xl">
                Что можно восстановить
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-700 md:text-lg">
                Если не понятно, ремонтировать деталь или менять, отправьте фото.
                Мастер подскажет, есть ли смысл восстановления и какой объём работ
                может потребоваться.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {restoreScenarios.map((item, index) => (
                  <article key={item.title} className="plate-card rounded-lg p-5">
                    <span className="text-xs font-black text-amber-dark">0{index + 1}</span>
                    <h3 className="mt-2 text-lg font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">{item.text}</p>
                  </article>
                ))}
              </div>
              <p className="mt-5 rounded-lg border border-amber/45 bg-amber/12 p-4 text-sm leading-6 text-zinc-800">
                Не уверены, что деталь можно восстановить? Отправьте фото — подскажем,
                есть ли смысл ремонтировать или лучше менять.
              </p>
            </div>
          </div>
        </section>

        <section id="lead" className="industrial-section bg-background py-16 text-white md:py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="flex flex-col gap-5">
              <p className="rail-label">Запись</p>
              <h2 className="text-3xl font-black tracking-normal md:text-5xl">
                Записаться на оценку
              </h2>
              <p className="text-base leading-7 text-zinc-300 md:text-lg">
                Опишите повреждение и удобный способ связи. Можно начать с фото,
                а точную стоимость мастер подтвердит после осмотра автомобиля.
              </p>
              <div className="steel-card rounded-lg p-5 text-sm leading-6 text-zinc-200">
                Точная стоимость зависит от повреждения. Можно отправить фото
                автомобиля или приехать на осмотр — мастер оценит объём работ и
                сроки.
              </div>
            </div>
            <LeadForm />
          </div>
        </section>

        <Contacts />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
