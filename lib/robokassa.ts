import crypto from 'crypto';

const ROBOKASSA_BASE_URL = 'https://auth.robokassa.ru/Merchant/Index.aspx';

export function createPaymentUrl({
  merchantLogin,
  password,
  amount,
  invoiceId,
  description,
  isTest
}: {
  merchantLogin: string;
  password: string;
  amount: number;
  invoiceId: string;
  description: string;
  isTest?: boolean;
}) {
  const outSum = amount.toFixed(2);
  const signature = md5(`${merchantLogin}:${outSum}:${invoiceId}:${password}`);
  const query = new URLSearchParams({
    MerchantLogin: merchantLogin,
    OutSum: outSum,
    InvId: invoiceId,
    Description: description,
    SignatureValue: signature,
    IsTest: isTest ? '1' : '0'
  });

  return `${ROBOKASSA_BASE_URL}?${query.toString()}`;
}

export function validateResultSignature({
  outSum,
  invoiceId,
  signatureValue,
  password
}: {
  outSum: string;
  invoiceId: string;
  signatureValue: string;
  password: string;
}) {
  const expected = md5(`${outSum}:${invoiceId}:${password}`).toLowerCase();
  return expected === signatureValue.toLowerCase();
}

function md5(value: string) {
  return crypto.createHash('md5').update(value).digest('hex');
}
