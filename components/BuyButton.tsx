"use client";

import { useState } from "react";

type BuyButtonProps = {
  productId: string;
  label: string;
};

export default function BuyButton({ productId, label }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/pay/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId })
      });

      if (!response.ok) {
        throw new Error("Не удалось создать платеж");
      }

      const data = (await response.json()) as { paymentUrl: string };
      window.location.href = data.paymentUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка платежа");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-black disabled:opacity-60"
      >
        {loading ? "Переход..." : label}
      </button>
      {error ? <p className="text-xs text-rose-500">{error}</p> : null}
    </div>
  );
}
