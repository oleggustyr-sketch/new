import Section from './components/Section';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';

import hero from '../content/hero.json';
import about from '../content/about.json';
import testimonials from '../content/testimonials.json';
import benefits from '../content/benefits.json';
import process from '../content/process.json';
import pricing from '../content/pricing.json';
import faq from '../content/faq.json';
import contacts from '../content/contacts.json';

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-lg font-semibold">HR-ON</div>
          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a href="#about" className="hover:text-white">
              Обо мне
            </a>
            <a href="#benefits" className="hover:text-white">
              Что получите
            </a>
            <a href="#process" className="hover:text-white">
              Как работаю
            </a>
            <a href="#pricing" className="hover:text-white">
              Тарифы
            </a>
            <a href="#contacts" className="hover:text-white">
              Контакты
            </a>
          </nav>
          <a
            href="#pricing"
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-white/40"
          >
            Выбрать тариф
          </a>
        </div>
      </header>

      <main>
        <Section id="hero" className="pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-6">
              <span className="w-fit rounded-full border border-brand-400/50 bg-brand-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-brand-200">
                {hero.badge}
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                {hero.title}
              </h1>
              <p className="text-lg text-slate-300">{hero.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={hero.primaryCta.href}
                  className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <div className="grid gap-4">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="glass-card">
                  <div className="text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="about">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-4">
              <h2 className="section-title">{about.title}</h2>
              <p className="section-subtitle">{about.subtitle}</p>
              <p className="text-sm text-slate-300 md:text-base">{about.description}</p>
            </div>
            <div className="grid gap-4">
              {about.highlights.map((item) => (
                <div key={item} className="glass-card text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="testimonials" className="bg-slate-900/40">
          <div className="flex flex-col gap-4">
            <h2 className="section-title">{testimonials.title}</h2>
            <p className="section-subtitle">{testimonials.subtitle}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.items.map((item) => (
              <div key={item.name} className="glass-card flex flex-col gap-4">
                <p className="text-sm text-slate-200">“{item.text}”</p>
                <div className="text-sm font-semibold text-white">{item.name}</div>
                <div className="text-xs text-slate-400">{item.role}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="benefits">
          <div className="flex flex-col gap-4">
            <h2 className="section-title">{benefits.title}</h2>
            <p className="section-subtitle">{benefits.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.items.map((item) => (
              <div key={item.title} className="glass-card">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="process" className="bg-slate-900/40">
          <div className="flex flex-col gap-4">
            <h2 className="section-title">{process.title}</h2>
            <p className="section-subtitle">{process.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {process.steps.map((step, index) => (
              <div key={step.title} className="glass-card">
                <div className="text-xs uppercase tracking-[0.3em] text-brand-300">
                  Шаг {index + 1}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="pricing">
          <div className="flex flex-col gap-4">
            <h2 className="section-title">{pricing.title}</h2>
            <p className="section-subtitle">{pricing.subtitle}</p>
          </div>
          <Pricing plans={pricing.plans} />
        </Section>

        <Section id="faq" className="bg-slate-900/40">
          <div className="flex flex-col gap-4">
            <h2 className="section-title">{faq.title}</h2>
            <p className="section-subtitle">{faq.subtitle}</p>
          </div>
          <div className="grid gap-4">
            {faq.items.map((item) => (
              <details key={item.question} className="glass-card">
                <summary className="cursor-pointer text-base font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section id="contacts">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-4">
              <h2 className="section-title">{contacts.title}</h2>
              <p className="section-subtitle">{contacts.subtitle}</p>
              <div className="space-y-2 text-sm text-slate-200">
                <div>Email: {contacts.email}</div>
                <div>Телефон: {contacts.phone}</div>
                <div>Адрес: {contacts.address}</div>
              </div>
              <div className="flex flex-wrap gap-3">
                {contacts.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs text-white transition hover:border-white/40"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© 2024 HR-ON. Все права защищены.</span>
          <span>Сделано на Next.js и Tailwind.</span>
        </div>
      </footer>
    </div>
  );
}
