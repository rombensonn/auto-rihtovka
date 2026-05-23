import { MapPin, Phone, Star } from "lucide-react";
import { phoneDisplay, phoneHref, yandexMapsUrl } from "@/lib/seo";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-40 text-white md:top-4">
      <div className="section-shell">
        <div className="steel-card flex h-16 items-center justify-between gap-4 rounded-lg px-3 backdrop-blur-md md:px-4">
          <a
            href="#top"
            className="focus-ring flex items-center gap-3 rounded-md px-1"
            aria-label="Авто_рихтовка, перейти наверх"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md border border-amber/45 bg-amber text-sm font-black text-ink">
              АР
            </span>
            <span>
              <span className="block text-base font-extrabold">Авто_рихтовка</span>
              <span className="hidden text-xs text-steel sm:block">
                кузовной цех · Подольск
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-md border border-white/10 bg-black/18 p-1 text-sm text-zinc-300 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-3 py-2 transition-colors duration-200 hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 text-sm md:flex">
            <span className="inline-flex items-center gap-1 rounded-md border border-electric/35 bg-electric/10 px-3 py-2 font-semibold text-zinc-100">
              <Star className="h-4 w-4 fill-amber text-amber" aria-hidden="true" />
              4,8
            </span>
            <a
              href={yandexMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/12 px-3 py-2 text-zinc-200 transition-colors duration-200 hover:border-electric hover:text-white"
            >
              <MapPin className="h-4 w-4 text-electric" aria-hidden="true" />
              Карты
            </a>
            <a
              href={phoneHref}
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2 font-extrabold text-ink transition-colors duration-200 hover:bg-[#ffc247]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {phoneDisplay}
            </a>
          </div>

          <a
            href={phoneHref}
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2 text-sm font-extrabold text-ink transition-colors duration-200 hover:bg-[#ffc247] md:hidden"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Позвонить
          </a>
        </div>
      </div>
    </header>
  );
}
