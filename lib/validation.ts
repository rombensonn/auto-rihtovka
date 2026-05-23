export const contactMethodLabels = {
  call: "звонок",
  whatsapp: "WhatsApp",
  telegram: "Telegram",
} as const;

export type ContactMethod = keyof typeof contactMethodLabels;

export type LeadPayload = {
  name: string;
  phone: string;
  car?: string;
  damage?: string;
  contactMethod?: ContactMethod;
  comment?: string;
  source: "landing";
};

type ValidationResult =
  | { success: true; data: LeadPayload }
  | { success: false; errors: Record<string, string> };

function readString(value: unknown, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export function normalizeRuPhone(value: unknown) {
  const raw = readString(value, 40);
  const digits = raw.replace(/\D/g, "");

  if (digits.length === 10) {
    return `+7${digits}`;
  }

  if (digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"))) {
    return `+7${digits.slice(1)}`;
  }

  return null;
}

export function formatPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 11) return phone;
  return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`;
}

export function validateLeadInput(input: Record<string, unknown>): ValidationResult {
  const errors: Record<string, string> = {};
  const honeypot = readString(input.company ?? input.website ?? input.honeypot, 100);

  if (honeypot) {
    errors.company = "Заявка не прошла проверку.";
  }

  const name = readString(input.name, 80);
  if (!name || name.length < 2) {
    errors.name = "Укажите имя минимум из 2 символов.";
  }

  const phone = normalizeRuPhone(input.phone);
  if (!phone) {
    errors.phone = "Укажите телефон в российском формате.";
  }

  const source = readString(input.source, 20);
  if (source !== "landing") {
    errors.source = "Не указан источник заявки.";
  }

  const contactMethodRaw = readString(input.contactMethod, 30);
  const contactMethod =
    contactMethodRaw && contactMethodRaw in contactMethodLabels
      ? (contactMethodRaw as ContactMethod)
      : undefined;

  if (contactMethodRaw && !contactMethod) {
    errors.contactMethod = "Выберите удобный способ связи.";
  }

  if (Object.keys(errors).length > 0 || !phone) {
    return { success: false, errors };
  }

  const payload: LeadPayload = {
    name,
    phone,
    source: "landing",
  };

  const car = readString(input.car, 120);
  const damage = readString(input.damage, 200);
  const comment = readString(input.comment, 700);

  if (car) payload.car = car;
  if (damage) payload.damage = damage;
  if (contactMethod) payload.contactMethod = contactMethod;
  if (comment) payload.comment = comment;

  return { success: true, data: payload };
}
