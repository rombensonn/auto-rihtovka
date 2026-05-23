import { CreditCard, MapPinned, Navigation, Phone } from "lucide-react";
import { address, phoneDisplay, phoneHref, yandexMapsUrl } from "@/lib/seo";

const mapSrc =
  "https://yandex.ru/map-widget/v1/?text=%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C%20%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%2C%2038&z=16";

export function Contacts() {
  return (
    <section id="contacts" className="industrial-section bg-background py-16 text-white md:py-24">
      <div className="section-shell">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="rail-label">Точка осмотра</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal md:text-5xl">
              Контакты
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
            Сервис находится в Подольске и работает ежедневно с 09:00 до 21:00.
            На осмотр лучше записаться заранее.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-4">
            <article className="steel-card rounded-lg p-5">
              <MapPinned className="mb-4 h-7 w-7 text-amber" aria-hidden="true" />
              <h3 className="font-black">Адрес</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{address}</p>
            </article>
            <article className="steel-card rounded-lg p-5">
              <Phone className="mb-4 h-7 w-7 text-amber" aria-hidden="true" />
              <h3 className="font-black">Телефон</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{phoneDisplay}</p>
            </article>
            <article className="steel-card rounded-lg p-5">
              <CreditCard className="mb-4 h-7 w-7 text-amber" aria-hidden="true" />
              <h3 className="font-black">График и оплата</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Ежедневно 09:00–21:00. Оплата картой, онлайн, наличными.
              </p>
            </article>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <a
                href={phoneHref}
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-5 py-3 font-black text-ink transition-colors duration-200 hover:bg-[#ffc247]"
              >
                Позвонить
              </a>
              <a
                href={yandexMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-lg border border-white/14 px-5 py-3 font-black transition-colors duration-200 hover:border-amber hover:bg-white/8"
              >
                Открыть в Яндекс.Картах
              </a>
              <a
                href={yandexMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-electric/35 bg-electric/10 px-5 py-3 font-black transition-colors duration-200 hover:bg-electric/16"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Построить маршрут
              </a>
            </div>
          </div>

          <div className="steel-card min-h-[360px] overflow-hidden rounded-lg p-2">
            <iframe
              src={mapSrc}
              title="Авто_рихтовка на Яндекс.Картах"
              className="h-[360px] w-full rounded-md md:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
