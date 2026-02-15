import { NextResponse } from 'next/server';
import { createPaymentUrl } from '@/lib/robokassa';

export async function POST(request: Request) {
  const body = await request.json();
  const amount = Number(body.amount ?? 0);
  const description = String(body.description ?? 'Оплата услуг HR-ON');
  const invoiceId = String(body.invoiceId ?? Date.now());

  const merchantLogin = process.env.ROBOKASSA_MERCHANT_LOGIN;
  const password1 = process.env.ROBOKASSA_PASSWORD_1;

  if (!merchantLogin || !password1) {
    return NextResponse.json(
      { error: 'Robokassa credentials are not configured.' },
      { status: 500 }
    );
  }

  if (!amount || Number.isNaN(amount)) {
    return NextResponse.json({ error: 'Invalid amount.' }, { status: 400 });
  }

  const url = createPaymentUrl({
    merchantLogin,
    password: password1,
    amount,
    invoiceId,
    description,
    isTest: process.env.ROBOKASSA_IS_TEST === '1'
  });

  return NextResponse.json({ url, invoiceId });
}
