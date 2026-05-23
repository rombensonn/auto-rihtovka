import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/leads-storage";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { sendLeadToTelegram } from "@/lib/telegram";
import { validateLeadInput } from "@/lib/validation";

const successMessage =
  "Заявка отправлена. Мастер свяжется с вами, чтобы уточнить повреждение и удобное время осмотра.";

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message: "Слишком много заявок подряд. Попробуйте отправить форму немного позже.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfter) },
      },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Не удалось прочитать данные заявки." },
      { status: 400 },
    );
  }

  const validation = validateLeadInput(body);
  if (!validation.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Проверьте имя и телефон перед отправкой.",
        errors: validation.errors,
      },
      { status: 400 },
    );
  }

  const createdAt = new Date().toISOString();
  const leadRecord = {
    id: randomUUID(),
    createdAt,
    ip,
    payload: validation.data,
    delivery: "local" as const,
  };

  try {
    const telegram = await sendLeadToTelegram(validation.data, createdAt);

    if (telegram.ok) {
      return NextResponse.json({
        ok: true,
        message: successMessage,
        delivery: "telegram",
      });
    }

    await saveLead(leadRecord);
    return NextResponse.json({
      ok: true,
      message: successMessage,
      delivery: "local",
    });
  } catch {
    try {
      await saveLead({ ...leadRecord, delivery: "telegram-fallback" });
      return NextResponse.json({
        ok: true,
        message: successMessage,
        delivery: "local",
      });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          message: "Сервер не смог сохранить заявку. Позвоните мастеру напрямую.",
        },
        { status: 500 },
      );
    }
  }
}
