'use client';

export default function ContactForm() {
  return (
    <form className="glass-card grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm text-slate-200">
          Имя
        </label>
        <input
          id="name"
          name="name"
          placeholder="Как к вам обращаться"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm text-slate-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm text-slate-200">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Опишите задачу"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
      >
        Отправить запрос
      </button>
    </form>
  );
}
