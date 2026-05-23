# Авто_рихтовка

Одностраничный лендинг для кузовного ремонта и покраски автомобилей в Подольске.

## Стек

- Next.js 16, App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- API route `/api/lead` для заявок
- Telegram Bot API при наличии env-переменных
- Локальный fallback в `data/leads.json`

## Запуск

```bash
npm install
npm run dev
```

Локальный адрес по умолчанию: `http://localhost:3000`.

## Переменные окружения

Создайте `.env.local` в корне проекта:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` нужны только для отправки заявок в Telegram. Если они не заданы или Telegram недоступен, заявка сохраняется в `data/leads.json`.

Для production замените `NEXT_PUBLIC_SITE_URL` на реальный домен. Если домен ещё не выбран, проект использует `http://localhost:3000`, чтобы не выдумывать публичный URL.

## Как добавить фото

В блоке до/после сейчас стоят сгенерированные реалистичные фотопримеры типовых задач. Когда появятся реальные фотографии работ сервиса, замените файлы в `public/images` с теми же именами:

- `hero-car-repair.jpg` — запасной placeholder из первой версии
- `photo-bumper-before.jpg` и `photo-bumper-after.jpg` — пара до/после для бампера
- `photo-rust-before.jpg` и `photo-rust-after.jpg` — пара до/после для порога и арки

Старые файлы `before-1.jpg`, `after-1.jpg`, `before-2.jpg` и `after-2.jpg` оставлены в проекте как резервные копии.

Случайные стоковые фото лучше не использовать как реальные работы: блок до/после должен показывать именно результаты сервиса.

Дополнительно в проекте есть тематические сгенерированные изображения для нового industrial-дизайна:

- `industrial-hero-bodyshop.jpg` — первый экран
- `industrial-inspection-panel.jpg` — блок процесса
- `industrial-paint-prep.jpg` — блок сценариев восстановления

Эти изображения используются как визуальная атмосфера сайта и не подписаны как реальные работы сервиса.

## Проверка формы

1. Запустите `npm run dev`.
2. Откройте `http://localhost:3000`.
3. Заполните имя минимум из 2 символов и телефон в российском формате, например `+7 (915) 047-00-05`.
4. Отправьте форму.
5. Если Telegram не подключён, проверьте новую запись в `data/leads.json`.

API принимает `POST /api/lead`:

```json
{
  "name": "Иван",
  "phone": "+7 (915) 047-00-05",
  "car": "Kia Rio",
  "damage": "Бампер",
  "contactMethod": "call",
  "comment": "Удобно после 18:00",
  "source": "landing"
}
```

## Проверки

```bash
npm run lint
npm run build
```

В проекте есть базовая защита от пустых заявок, honeypot-поле и ограничение частоты отправки с одного IP.
