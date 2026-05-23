import { ClipboardList, MapPin, Phone } from "lucide-react";
import { phoneHref, yandexMapsUrl } from "@/lib/seo";

export function StickyMobileBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#090b0f]/94 px-3 py-2 text-paper shadow-2xl backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={phoneHref}
          className="focus-ring flex min-h-12 flex-col items-center justify-center rounded-lg bg-amber text-xs font-black text-ink"
        >
          <Phone className="mb-1 h-4 w-4" aria-hidden="true" />
          Позвонить
        </a>
        <a
          href="#lead"
          className="focus-ring flex min-h-12 flex-col items-center justify-center rounded-lg border border-electric/35 bg-electric/12 text-xs font-black text-white"
        >
          <ClipboardList className="mb-1 h-4 w-4" aria-hidden="true" />
          Заявка
        </a>
        <a
          href={yandexMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring flex min-h-12 flex-col items-center justify-center rounded-lg border border-white/14 text-xs font-black"
        >
          <MapPin className="mb-1 h-4 w-4" aria-hidden="true" />
          Карты
        </a>
      </div>
    </nav>
  );
}
