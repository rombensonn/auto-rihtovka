"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  ChevronRight,
  GripVertical,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/paths";

const pairs = [
  {
    before: assetPath("/images/photo-bumper-before.jpg"),
    after: assetPath("/images/photo-bumper-after.jpg"),
    label: "Бампер",
    title: "Повреждение бампера",
    text: "Трещины, царапины и нарушенная геометрия после удара. Мастер подскажет, ремонтировать бампер или менять.",
  },
  {
    before: assetPath("/images/photo-rust-before.jpg"),
    after: assetPath("/images/photo-rust-after.jpg"),
    label: "Порог / арка",
    title: "Коррозия порога и арки",
    text: "Ржавчина может быть глубже видимого слоя. После осмотра станет понятно, нужен локальный ремонт или замена элемента.",
  },
];

const gallery = [
  "Бампер после удара",
  "Пороги и арки",
  "Подготовка под покраску",
];

type ImageLayerProps = {
  src: string;
  alt: string;
  fallback: string;
};

function ImageLayer({ src, alt, fallback }: ImageLayerProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-zinc-900 px-6 text-center text-white">
        <div>
          <ImageIcon className="mx-auto mb-3 h-8 w-8 text-amber" aria-hidden="true" />
          <p className="font-black">{fallback}</p>
          <p className="mt-2 text-xs text-zinc-400">Положите файл в /public/images</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      key={src}
      src={src}
      alt={alt}
      fill
      unoptimized
      sizes="(max-width: 768px) 100vw, 920px"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export function BeforeAfterSlider() {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const pair = pairs[active];

  const updatePosition = useCallback((clientX: number) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(88, Math.max(12, next)));
  }, []);

  return (
    <section
      id="before-after"
      className="industrial-section bg-[#0d1016] py-16 text-white md:py-24"
    >
      <div className="section-shell">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="rail-label">Контроль результата</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal md:text-5xl">
              До и после ремонта
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
            В блоке показаны реалистичные фотопримеры типовых задач: повреждение
            бампера и коррозия порога с аркой. Когда появятся реальные фотографии
            работ сервиса, их можно поставить в эти же пары.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_340px] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35 }}
            className="steel-card overflow-hidden rounded-lg"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="inline-flex items-center gap-2 text-sm font-black text-paper">
                <ArrowLeftRight className="h-4 w-4 text-electric" aria-hidden="true" />
                Слайдер сравнения
              </span>
              <span className="text-xs font-bold uppercase text-steel">
                touch / drag
              </span>
            </div>
            <div
              ref={sliderRef}
              className="relative aspect-[4/3] w-full cursor-col-resize touch-none select-none overflow-hidden md:aspect-[16/9]"
              onPointerDown={(event) => {
                setDragging(true);
                event.currentTarget.setPointerCapture(event.pointerId);
                updatePosition(event.clientX);
              }}
              onPointerMove={(event) => {
                if (dragging) updatePosition(event.clientX);
              }}
              onPointerUp={(event) => {
                setDragging(false);
                event.currentTarget.releasePointerCapture(event.pointerId);
              }}
              onPointerCancel={() => setDragging(false)}
            >
              <ImageLayer
                src={pair.before}
                alt="Фото автомобиля до ремонта"
                fallback="Добавьте фото до ремонта"
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 0 0 ${position}%)` }}
              >
                <ImageLayer
                  src={pair.after}
                  alt="Фото автомобиля после ремонта"
                  fallback="Добавьте фото после ремонта"
                />
              </div>

              <span className="absolute left-3 top-3 rounded-md bg-black/76 px-3 py-1 text-xs font-black text-white">
                До ремонта
              </span>
              <span className="absolute right-3 top-3 rounded-md bg-paper px-3 py-1 text-xs font-black text-ink">
                После ремонта
              </span>

              <button
                type="button"
                aria-label="Переместить ползунок до и после"
                className="focus-ring absolute inset-y-0 grid w-12 -translate-x-1/2 place-items-center"
                style={{ left: `${position}%` }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowLeft") {
                    setPosition((value) => Math.max(12, value - 4));
                  }
                  if (event.key === "ArrowRight") {
                    setPosition((value) => Math.min(88, value + 4));
                  }
                }}
              >
                <span className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-amber" />
                <span className="relative grid h-12 w-12 place-items-center rounded-lg border border-white bg-amber text-ink shadow-lg">
                  <GripVertical className="h-5 w-5" aria-hidden="true" />
                </span>
              </button>
            </div>
          </motion.div>

          <aside className="grid gap-4">
            <div className="plate-card rounded-lg p-5">
              <p className="mb-3 text-xs font-black uppercase text-amber-dark">
                Фотопримеры
              </p>
              <h3 className="text-2xl font-black">{pair.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                {pair.text}
              </p>
              <p className="mt-3 border-l-2 border-amber pl-3 text-sm leading-6 text-zinc-700">
                Можно отправить фото своего автомобиля — мастер оценит объём
                работ и сроки после осмотра повреждения.
              </p>
              <div className="mt-5 flex gap-2">
                {pairs.map((item, index) => (
                  <button
                    type="button"
                    key={item.label}
                    onClick={() => {
                      setActive(index);
                      setPosition(50);
                    }}
                    className={`focus-ring inline-flex min-h-10 flex-1 cursor-pointer items-center justify-center rounded-lg border px-3 text-sm font-black transition-colors duration-200 ${
                      active === index
                        ? "border-amber bg-amber text-ink"
                        : "border-zinc-300 bg-white text-zinc-700 hover:border-electric"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {gallery.map((item, index) => (
                <article
                  key={item}
                  className="steel-card flex items-center justify-between rounded-lg p-4"
                >
                  <div>
                    <span className="text-xs font-black text-steel">0{index + 1}</span>
                    <h3 className="mt-1 font-black">{item}</h3>
                  </div>
                  <ChevronRight className="h-4 w-4 text-electric" aria-hidden="true" />
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
