import {
  ArrowUpRight,
  ClipboardList,
  Clock3,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import { address, phoneDisplay, phoneHref, yandexMapsUrl } from "@/lib/seo";

const navigation = [
  { href: "#services", label: "Услуги и цены" },
  { href: "#before-after", label: "До/после" },
  { href: "#process", label: "Процесс" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
  { href: "#faq", label: "FAQ" },
];

const services = [
  "Покраска автомобиля",
  "Ремонт бамперов",
  "Замена порогов",
  "Восстановление пластика",
  "Сварочные работы",
  "Полировка кузова и фар",
];

export function Footer() {
  return (
    <footer className="industrial-section border-t border-white/10 bg-[#07090d] pb-28 pt-12 text-white md:pb-12">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr]">
          <div className="max-w-md">
            <a href="#top" className="focus-ring inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-amber text-sm font-black text-ink">
                AP
              </span>
              <span>
                <span className="block text-lg font-black">Авто_рихтовка</span>
                <span className="block text-sm text-zinc-400">Кузовной ремонт · Подольск</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-6 text-zinc-300">
              Кузовной ремонт, покраска авто, ремонт бамперов, замена порогов,
              восстановление пластика и устранение ржавчины. Точную стоимость
              мастер подтверждает после осмотра повреждения.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#lead"
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-lg bg-amber px-4 py-2 text-sm font-black text-ink transition-colors duration-200 hover:bg-[#ffc247]"
              >
                <ClipboardList className="h-4 w-4" aria-hidden="true" />
                Записаться на оценку
              </a>
              <a
                href={phoneHref}
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/14 px-4 py-2 text-sm font-black transition-colors duration-200 hover:border-amber hover:bg-white/8"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Позвонить
              </a>
            </div>
          </div>

          <nav aria-label="Навигация по сайту">
            <h2 className="rail-label">Навигация</h2>
            <ul className="mt-4 grid gap-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="focus-ring inline-flex items-center gap-2 text-zinc-300 transition-colors duration-200 hover:text-amber"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="rail-label">Работы</h2>
            <ul className="mt-4 grid gap-3 text-sm text-zinc-300">
              {services.map((item) => (
                <li key={item} className="border-l border-amber/45 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="steel-card rounded-lg p-5">
            <h2 className="rail-label">Контакты</h2>
            <div className="mt-4 grid gap-4 text-sm text-zinc-300">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
                <span>{address}</span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
                <a href={phoneHref} className="focus-ring hover:text-amber">
                  {phoneDisplay}
                </a>
              </p>
              <p className="flex gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
                <span>Ежедневно 09:00–21:00</span>
              </p>
              <p className="flex gap-3">
                <Star className="mt-0.5 h-4 w-4 shrink-0 fill-amber text-amber" aria-hidden="true" />
                <span>4,8 на Яндекс.Картах · 20 оценок</span>
              </p>
            </div>
            <a
              href={yandexMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-electric/35 bg-electric/10 px-4 py-2 text-sm font-black transition-colors duration-200 hover:bg-electric/16"
            >
              Открыть в Яндекс.Картах
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs leading-5 text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Авто_рихтовка. Данные на сайте основаны на переданной информации о сервисе.</p>
          <p>Оплата: картой, онлайн, наличными. Предварительная запись на осмотр.</p>
        </div>
      </div>
    </footer>
  );
}
