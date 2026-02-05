export default function PaySuccessPage() {
  return (
    <main className="min-h-screen bg-mist px-6 py-24 text-ink">
      <div className="mx-auto max-w-xl rounded-3xl border border-black/10 bg-white p-10 text-center shadow-soft">
        <p className="text-xs uppercase tracking-[0.3em] text-steel">Платеж успешен</p>
        <h1 className="mt-4 text-3xl font-semibold">Спасибо за оплату</h1>
        <p className="mt-4 text-sm text-steel">
          Мы получили ваш платеж и уже готовим старт работы. Скоро свяжемся для уточнения деталей.
        </p>
        <a
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white"
          href="/"
        >
          Вернуться на главную
        </a>
      </div>
    </main>
  );
}
