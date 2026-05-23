"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { validateLeadInput } from "@/lib/validation";

type FormState = "idle" | "loading" | "success" | "error";

const contactMethods = [
  { value: "call", label: "звонок" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "telegram", label: "Telegram" },
];

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [contactMethod, setContactMethod] = useState("call");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      car: formData.get("car"),
      damage: formData.get("damage"),
      contactMethod,
      comment: formData.get("comment"),
      source: "landing",
      company: formData.get("company"),
    };

    const validation = validateLeadInput(payload);
    if (!validation.success) {
      setErrors(validation.errors);
      setState("error");
      setMessage("Проверьте поля формы.");
      return;
    }

    setState("loading");
    setErrors({});
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...validation.data, company: "" }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState("error");
        setMessage(result.message ?? "Не получилось отправить заявку. Попробуйте ещё раз.");
        return;
      }

      setState("success");
      setMessage(
        "Заявка отправлена. Мастер свяжется с вами, чтобы уточнить повреждение и удобное время осмотра",
      );
      form.reset();
      setContactMethod("call");
    } catch {
      setState("error");
      setMessage("Не получилось отправить заявку. Позвоните мастеру или попробуйте ещё раз.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="steel-card rounded-lg p-5 text-paper md:p-6"
      noValidate
    >
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="rail-label">Форма заявки</p>
          <h3 className="mt-1 text-2xl font-black">Передать авто на оценку</h3>
        </div>
        <span className="hidden rounded-md border border-electric/30 bg-electric/10 px-3 py-2 text-xs font-black text-electric sm:inline-flex">
          landing
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-zinc-200">Имя</span>
          <input
            name="name"
            autoComplete="name"
            className="focus-ring mt-2 min-h-12 w-full rounded-lg border border-white/12 bg-black/32 px-4 text-base text-paper placeholder:text-zinc-500"
            placeholder="Как к вам обращаться"
            minLength={2}
            required
          />
          {errors.name ? (
            <span className="mt-1 block text-sm text-amber">{errors.name}</span>
          ) : null}
        </label>

        <label className="block">
          <span className="text-sm font-bold text-zinc-200">Телефон</span>
          <input
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            className="focus-ring mt-2 min-h-12 w-full rounded-lg border border-white/12 bg-black/32 px-4 text-base text-paper placeholder:text-zinc-500"
            placeholder="+7 (___) ___-__-__"
            required
          />
          {errors.phone ? (
            <span className="mt-1 block text-sm text-amber">{errors.phone}</span>
          ) : null}
        </label>

        <label className="block">
          <span className="text-sm font-bold text-zinc-200">Марка и модель автомобиля</span>
          <input
            name="car"
            className="focus-ring mt-2 min-h-12 w-full rounded-lg border border-white/12 bg-black/32 px-4 text-base text-paper placeholder:text-zinc-500"
            placeholder="Например: Kia Rio"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-zinc-200">Что повреждено?</span>
          <input
            name="damage"
            className="focus-ring mt-2 min-h-12 w-full rounded-lg border border-white/12 bg-black/32 px-4 text-base text-paper placeholder:text-zinc-500"
            placeholder="Например: бампер, дверь, крыло, пороги, ржавчина"
          />
        </label>
      </div>

      <fieldset className="mt-4">
        <legend className="text-sm font-bold text-zinc-200">Удобный способ связи</legend>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {contactMethods.map((method) => (
            <label
              key={method.value}
              className={`cursor-pointer rounded-lg border px-3 py-3 text-center text-sm font-black transition-colors duration-200 focus-within:ring-3 ${
                contactMethod === method.value
                  ? "border-amber bg-amber text-ink"
                  : "border-white/12 bg-black/32 text-zinc-300 hover:border-electric"
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method.value}
                checked={contactMethod === method.value}
                onChange={() => setContactMethod(method.value)}
                className="sr-only"
              />
              {method.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-4 block">
        <span className="text-sm font-bold text-zinc-200">Комментарий</span>
        <textarea
          name="comment"
          rows={4}
          className="focus-ring mt-2 w-full rounded-lg border border-white/12 bg-black/32 px-4 py-3 text-base text-paper placeholder:text-zinc-500"
          placeholder="Можно указать удобное время для звонка или кратко описать повреждение"
        />
      </label>

      <label className="hidden" aria-hidden="true">
        Компания
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        type="submit"
        disabled={state === "loading"}
        className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3 font-black text-ink transition-colors duration-200 hover:bg-[#ffc247] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-5 w-5" aria-hidden="true" />
        {state === "loading" ? "Отправляем..." : "Отправить на оценку"}
      </button>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        Перезвоним или напишем, чтобы уточнить повреждение и предложить время
        осмотра.
      </p>
      {message ? (
        <p
          className={`mt-4 rounded-lg p-3 text-sm leading-6 ${
            state === "success"
              ? "border border-green-400/30 bg-green-400/10 text-green-100"
              : "border border-amber/30 bg-amber/10 text-amber"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
