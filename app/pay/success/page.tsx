export default function PaySuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="glass-card max-w-xl text-center">
        <h1 className="text-3xl font-semibold text-white">Оплата прошла успешно</h1>
        <p className="mt-4 text-sm text-slate-300">
          Спасибо! Мы получили оплату и скоро свяжемся с вами, чтобы запустить работу.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}
