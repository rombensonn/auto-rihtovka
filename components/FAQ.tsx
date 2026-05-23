const questions = [
  {
    question: "Можно ли оценить ремонт по фото?",
    answer:
      "Да, можно отправить фото повреждения. Точную стоимость мастер подтвердит после осмотра, потому что часть дефектов может быть скрыта.",
  },
  {
    question: "Сколько стоит покраска автомобиля?",
    answer:
      "Ориентир — от 15 000 ₽. Итог зависит от детали, площади повреждения, подготовки и состояния ЛКП.",
  },
  {
    question: "Вы ремонтируете бамперы?",
    answer:
      "Да, сервис занимается ремонтом бамперов, восстановлением пластика и заменой бампера.",
  },
  {
    question: "Можно ли убрать ржавчину?",
    answer:
      "Да, по отзывам клиентов сервис устранял очаги ржавчины, менял пороги и арки. Стоимость зависит от состояния кузова.",
  },
  {
    question: "Работаете после ДТП?",
    answer:
      "Да, клиенты обращались после ДТП с повреждениями дверей, багажника, крыльев и бамперов.",
  },
  {
    question: "Есть ли гарантия?",
    answer:
      "В отзывах клиенты упоминают гарантию на выполненные работы. Условия лучше уточнить при осмотре автомобиля.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-paper py-16 text-ink md:py-24">
      <div className="section-shell">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase text-amber-dark">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal md:text-5xl">
            Вопросы перед записью
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {questions.map((item, index) => (
            <details
              key={item.question}
              className="plate-card group rounded-lg p-5"
            >
              <summary className="cursor-pointer list-none text-lg font-black marker:hidden">
                <span className="mr-3 text-amber-dark">0{index + 1}</span>
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
