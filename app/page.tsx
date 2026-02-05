import BuyButton from "@/components/BuyButton";
import site from "@/content/site.json";
import clsx from "clsx";

export default function HomePage() {
  const { hero, about, services, testimonials, process, faq, contacts, site: meta } = site;

  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-ink">
            {meta.name}
          </span>
          <nav className="hidden items-center gap-6 text-sm text-steel md:flex">
            <a className="transition hover:text-ink" href="#about">
              Обо мне
            </a>
            <a className="transition hover:text-ink" href="#services">
              Тарифы
            </a>
            <a className="transition hover:text-ink" href="#reviews">
              Отзывы
            </a>
            <a className="transition hover:text-ink" href="#faq">
              FAQ
            </a>
            <a className="transition hover:text-ink" href="#contacts">
              Контакты
            </a>
          </nav>
          <a
            className="rounded-full border border-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink transition hover:bg-ink hover:text-white"
            href="#contacts"
          >
            Связаться
          </a>
        </div>
      </header>

      <main>
        <section className="bg-mist">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-steel">{meta.tagline}</p>
                <h1 className="text-4xl font-semibold leading-tight text-ink md:text-6xl">
                  {hero.title}
                </h1>
                <p className="text-lg text-steel md:text-xl">{hero.subtitle}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-ink px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-black"
                  href="#contacts"
                >
                  {hero.ctaPrimary}
                </a>
                <a
                  className="rounded-full border border-ink px-8 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-ink hover:text-white"
                  href="#services"
                >
                  {hero.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-soft">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-steel">{meta.name}</h2>
              <p className="mt-6 text-2xl font-semibold text-ink">{meta.description}</p>
              <div className="mt-8 space-y-4 text-sm text-steel">
                <div className="flex items-center justify-between border-b border-black/5 pb-3">
                  <span>Формат</span>
                  <span className="font-semibold text-ink">Внешний HR-директор</span>
                </div>
                <div className="flex items-center justify-between border-b border-black/5 pb-3">
                  <span>Сроки</span>
                  <span className="font-semibold text-ink">от 1 месяца</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>География</span>
                  <span className="font-semibold text-ink">онлайн / офлайн</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-steel">{about.title}</p>
              <h2 className="text-3xl font-semibold text-ink md:text-4xl">Карьерный консультант для роста</h2>
              <p className="text-lg text-steel">{about.text}</p>
            </div>
            <div className="space-y-4 rounded-3xl border border-black/10 bg-white p-8 shadow-soft">
              {about.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-steel">
                  <span className="mt-1 h-2 w-2 rounded-full bg-ink" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-mist">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-steel">{services.title}</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">Тарифы для карьерного роста</h2>
              </div>
              <p className="max-w-sm text-sm text-steel">{services.note}</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.items.map((plan) => (
                <div
                  key={plan.id}
                  className={clsx(
                    "flex h-full flex-col rounded-3xl border p-8 shadow-soft",
                    plan.featured
                      ? "border-ink bg-white"
                      : "border-black/10 bg-white/80"
                  )}
                >
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-steel">{plan.name}</p>
                    <div>
                      <p className="text-3xl font-semibold text-ink">{plan.price}</p>
                      <p className="text-sm text-steel">{plan.period}</p>
                    </div>
                    <p className="text-sm text-steel">{plan.description}</p>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3 text-sm text-steel">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <BuyButton productId={plan.id} label="Купить" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-steel">{testimonials.title}</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">Результаты клиентов</h2>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.items.map((item) => (
              <div key={item.name} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
                <p className="text-sm text-steel">{item.text}</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-steel">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="bg-mist">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-steel">{process.title}</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">Пошаговый путь к офферу</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {process.steps.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.3em] text-steel">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm text-steel">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-steel">{faq.title}</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">Частые вопросы</h2>
            </div>
            <div className="space-y-4">
              {faq.items.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-ink">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm text-steel">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="bg-ink text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">{contacts.title}</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Готовы обсудить карьерный рост?</h2>
              <p className="text-base text-white/70">
                Напишите в любой удобный канал. Отвечаю в течение 24 часов.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Email</p>
                <a className="text-lg font-semibold" href={`mailto:${contacts.email}`}>
                  {contacts.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Телефон</p>
                <a className="text-lg font-semibold" href={`tel:${contacts.phone}`}>
                  {contacts.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Telegram</p>
                <a className="text-lg font-semibold" href={contacts.telegram}>
                  {contacts.telegram.replace("https://", "")}
                </a>
              </div>
              <div className="pt-4 text-sm text-white/70">{contacts.address}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-steel md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} HR-ON. Все права защищены.</span>
          <div className="flex gap-4">
            <a className="transition hover:text-ink" href={site.links.privacy}>
              Политика конфиденциальности
            </a>
            <a className="transition hover:text-ink" href={site.links.terms}>
              Оферта
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
