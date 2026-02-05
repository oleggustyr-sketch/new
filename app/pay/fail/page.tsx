export default function PayFailPage() {
  return (
    <main className="min-h-screen bg-mist px-6 py-24 text-ink">
      <div className="mx-auto max-w-xl rounded-3xl border border-black/10 bg-white p-10 text-center shadow-soft">
        <p className="text-xs uppercase tracking-[0.3em] text-steel">Платеж не завершен</p>
        <h1 className="mt-4 text-3xl font-semibold">Что-то пошло не так</h1>
        <p className="mt-4 text-sm text-steel">
          Попробуйте повторить оплату или свяжитесь с нами — поможем разобраться.
        </p>
        <a
          className="mt-8 inline-flex rounded-full border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink"
          href="/"
        >
          Вернуться на главную
        </a>
      </div>
    </main>
  );
}
