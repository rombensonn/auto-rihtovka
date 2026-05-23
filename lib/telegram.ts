import type { LeadPayload } from "@/lib/validation";
import { contactMethodLabels, formatPhone } from "@/lib/validation";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function valueOrDash(value?: string) {
  return value ? escapeHtml(value) : "не указано";
}

export async function sendLeadToTelegram(payload: LeadPayload, createdAt: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, reason: "not_configured" as const };
  }

  const time = new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Moscow",
  }).format(new Date(createdAt));

  const contactMethod = payload.contactMethod
    ? contactMethodLabels[payload.contactMethod]
    : "не указано";

  const text = [
    "<b>Новая заявка с сайта Авто_рихтовка</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(payload.name)}`,
    `<b>Телефон:</b> ${escapeHtml(formatPhone(payload.phone))}`,
    `<b>Автомобиль:</b> ${valueOrDash(payload.car)}`,
    `<b>Повреждение:</b> ${valueOrDash(payload.damage)}`,
    `<b>Удобный способ связи:</b> ${escapeHtml(contactMethod)}`,
    `<b>Комментарий:</b> ${valueOrDash(payload.comment)}`,
    `<b>Источник:</b> лендинг`,
    `<b>Время заявки:</b> ${escapeHtml(time)}`,
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    throw new Error(`Telegram API error: ${response.status}`);
  }

  return { ok: true, reason: "sent" as const };
}
