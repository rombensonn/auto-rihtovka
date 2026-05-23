"use client";

import { motion } from "framer-motion";
import { MessageSquareText, Star } from "lucide-react";
import { yandexMapsUrl } from "@/lib/seo";

const reviews = [
  {
    name: "Максим",
    tag: "бампер",
    text: "Ремонт бампера: короткие сроки, адекватная цена, быстрая запись без очередей и хороший результат.",
  },
  {
    name: "Игорь Г.",
    tag: "после ДТП",
    text: "Работы обсудили заранее, дополнительно устранили очаги ржавчины, цену после ремонта не завысили.",
  },
  {
    name: "Олег",
    tag: "сроки",
    text: "Обращался дважды. Отмечает точную оценку работ, соблюдение сроков, качество и гарантию.",
  },
  {
    name: "Никита Рогаткин",
    tag: "кузов",
    text: "Капот на Polo поменяли быстро и аккуратно, по проблемным местам кузова дали рекомендации.",
  },
  {
    name: "Сергей М.",
    tag: "переделка",
    text: "Переделывали ошибки предыдущего ремонта. Клиент отметил, что результат превзошёл ожидания.",
  },
  {
    name: "Олег Г.",
    tag: "гарантия",
    text: "После ДТП отрихтовали дверь, покрасили, отполировали и дали гарантию.",
  },
  {
    name: "Евгений / отзыв клиента Дениса",
    tag: "отчёт",
    text: "Отмечены пунктуальность, помощь с заказом запчастей, удобство и фото-/видеоотчёт по работе.",
  },
  {
    name: "Амина М.",
    tag: "пороги",
    text: "Кузовной ремонт, замена арок и порогов, покраска и полировка — клиент пишет, что автомобиль блестит как новый.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-paper py-16 text-ink md:py-24">
      <div className="section-shell">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-amber-dark">
              Социальное доказательство
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal md:text-5xl">
              Что говорят клиенты
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-zinc-700 md:text-lg">
            Короткие смысловые выдержки из отзывов: про сроки, цену, аккуратность,
            гарантию и понятное общение по ремонту.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.025, duration: 0.32 }}
              className="plate-card flex min-h-[250px] flex-col rounded-lg p-5"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-md border border-amber/40 bg-amber/15 px-2 py-1 text-xs font-black uppercase text-amber-dark">
                  {review.tag}
                </span>
                <MessageSquareText className="h-5 w-5 text-electric" aria-hidden="true" />
              </div>
              <h3 className="font-black">{review.name}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{review.text}</p>
              <div className="mt-auto flex items-center gap-1 pt-5 text-sm font-black text-amber-dark">
                <Star className="h-4 w-4 fill-amber text-amber" aria-hidden="true" />
                4,8 на Яндекс.Картах
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-4 rounded-lg border border-zinc-300 bg-ink p-5 text-paper shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black">
            Рейтинг 4,8 на Яндекс.Картах · 20 оценок · 15 отзывов
          </p>
          <a
            href={yandexMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-lg bg-amber px-5 py-3 text-sm font-black text-ink transition-colors duration-200 hover:bg-[#ffc247]"
          >
            Посмотреть карточку на Яндекс.Картах
          </a>
        </div>
      </div>
    </section>
  );
}
