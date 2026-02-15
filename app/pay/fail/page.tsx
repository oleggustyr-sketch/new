export default function PayFailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="glass-card max-w-xl text-center">
        <h1 className="text-3xl font-semibold text-white">Платёж не прошёл</h1>
        <p className="mt-4 text-sm text-slate-300">
          Мы не получили подтверждение оплаты. Попробуйте снова или напишите нам.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="/#pricing"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
          >
            Вернуться к тарифам
          </a>
          <a
            href="/#contacts"
            className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </div>
  );
}
