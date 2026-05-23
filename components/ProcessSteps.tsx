"use client";

import { motion } from "framer-motion";
import { Camera, CheckCircle2, ClipboardCheck, Wrench } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/paths";

const steps = [
  {
    icon: Camera,
    title: "Вы отправляете фото или приезжаете на осмотр",
    text: "Мастер смотрит повреждение и понимает примерный объём работ.",
  },
  {
    icon: ClipboardCheck,
    title: "Согласовываем цену и сроки",
    text: "До начала ремонта обсуждаем, что нужно сделать и сколько это будет стоить.",
  },
  {
    icon: Wrench,
    title: "Выполняем кузовные работы",
    text: "Рихтовка, сварка, восстановление пластика, подготовка, покраска или полировка — в зависимости от задачи.",
  },
  {
    icon: CheckCircle2,
    title: "Проверяем результат и отдаём автомобиль",
    text: "Клиент получает автомобиль после ремонта, с понятным итогом по выполненным работам.",
  },
];

export function ProcessSteps() {
  return (
    <section id="process" className="industrial-section bg-background py-16 text-white md:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="rail-label">Маршрут ремонта</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal md:text-5xl">
            Как проходит ремонт
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">
            Порядок простой: сначала оценка повреждения, затем согласование
            работ, сроков и стоимости.
          </p>

          <div className="mt-7 grid gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.04, duration: 0.32 }}
                  className="steel-card rounded-lg p-4"
                >
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-amber text-ink">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="mb-1 text-xs font-black text-steel">0{index + 1}</p>
                      <h3 className="font-black">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{step.text}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <a
            href="#lead"
            className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 font-black text-ink transition-colors duration-200 hover:bg-[#ffc247]"
          >
            Получить оценку по фото
          </a>
        </div>

        <div className="steel-card corner-cut relative min-h-[420px] overflow-hidden">
          <Image
            src={assetPath("/images/industrial-inspection-panel.jpg")}
            alt="Визуальный образ проверки кузовной панели"
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/16 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="rail-label">Дефектовка</p>
            <p className="mt-2 text-xl font-black">
              Сначала понять объём работ, затем согласовать ремонт.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
