import { NextResponse } from 'next/server';
import { validateResultSignature } from '@/lib/robokassa';

export async function POST(request: Request) {
  const formData = await request.formData();
  const outSum = String(formData.get('OutSum') ?? '');
  const invoiceId = String(formData.get('InvId') ?? '');
  const signatureValue = String(formData.get('SignatureValue') ?? '');

  const password2 = process.env.ROBOKASSA_PASSWORD_2;

  if (!password2) {
    return NextResponse.json(
      { error: 'Robokassa result password is not configured.' },
      { status: 500 }
    );
  }

  const isValid = validateResultSignature({
    outSum,
    invoiceId,
    signatureValue,
    password: password2
  });

  if (!isValid) {
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 });
  }

  return new NextResponse(`OK${invoiceId}`);
}
