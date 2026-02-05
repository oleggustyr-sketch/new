'use client';

import { useState } from 'react';

type Plan = {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export default function Pricing({ plans }: { plans: Plan[] }) {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handlePay(plan: Plan) {
    try {
      setLoadingId(plan.id);
      const response = await fetch('/api/pay/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: plan.price,
          description: `HR-ON тариф «${plan.name}»`,
          invoiceId: `${plan.id}-${Date.now()}`
        })
      });

      if (!response.ok) {
        throw new Error('Ошибка при создании платежа');
      }

      const data = (await response.json()) as { url: string };
      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      alert('Не удалось создать платеж. Попробуйте позже.');
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`glass-card relative flex h-full flex-col gap-6 ${
            plan.popular ? 'border-brand-400/60 shadow-brand-500/40' : ''
          }`}
        >
          {plan.popular ? (
            <span className="absolute -top-3 left-6 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
              Популярный
            </span>
          ) : null}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
            <p className="text-sm text-slate-300">{plan.description}</p>
          </div>
          <div>
            <div className="text-4xl font-semibold text-white">
              {plan.price.toLocaleString('ru-RU')} ₽
            </div>
            <div className="text-sm text-slate-400">{plan.period}</div>
          </div>
          <ul className="space-y-2 text-sm text-slate-200">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => handlePay(plan)}
            className="mt-auto rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]"
            disabled={loadingId === plan.id}
          >
            {loadingId === plan.id ? 'Создаём ссылку...' : 'Купить'}
          </button>
        </div>
      ))}
    </div>
  );
}
