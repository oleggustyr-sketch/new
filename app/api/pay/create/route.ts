import site from "@/content/site.json";
import crypto from "crypto";
import { NextResponse } from "next/server";

const ROBOKASSA_BASE_URL = "https://auth.robokassa.ru/Merchant/Index.aspx";

const normalizeAmount = (value: string) => {
  const numeric = value.replace(/[^0-9.,]/g, "").replace(",", ".");
  const parsed = Number.parseFloat(numeric);
  return Number.isFinite(parsed) ? parsed.toFixed(2) : "0.00";
};

const buildSignature = ({
  login,
  outSum,
  invId,
  password,
  customParams
}: {
  login: string;
  outSum: string;
  invId: string;
  password: string;
  customParams: Record<string, string>;
}) => {
  const sortedCustom = Object.keys(customParams)
    .sort()
    .map((key) => `${key}=${customParams[key]}`)
    .join(":");
  const base = [login, outSum, invId, password, sortedCustom].filter(Boolean).join(":");
  return crypto.createHash("md5").update(base).digest("hex");
};

export async function POST(request: Request) {
  const { productId, email, phone } = (await request.json()) as {
    productId?: string;
    email?: string;
    phone?: string;
  };

  if (!productId) {
    return NextResponse.json({ error: "productId is required" }, { status: 400 });
  }

  const plan = site.services.items.find((item) => item.id === productId);
  if (!plan) {
    return NextResponse.json({ error: "Unknown product" }, { status: 404 });
  }

  const login = process.env.ROBOKASSA_LOGIN;
  const password1 = process.env.ROBOKASSA_PASSWORD1;

  if (!login || !password1) {
    return NextResponse.json({ error: "Robokassa credentials missing" }, { status: 500 });
  }

  const outSum = normalizeAmount(plan.price);
  const invId = `${Date.now()}`;
  const description = encodeURIComponent(`${site.site.name}: ${plan.name}`);

  const customParams: Record<string, string> = {};
  if (phone) {
    customParams.shp_phone = phone;
  }
  if (email) {
    customParams.shp_email = email;
  }

  const signature = buildSignature({ login, outSum, invId, password: password1, customParams });

  const params = new URLSearchParams({
    MerchantLogin: login,
    OutSum: outSum,
    InvId: invId,
    Description: description,
    SignatureValue: signature,
    Culture: "ru",
    Encoding: "utf-8",
    ...(email ? { Email: email } : {}),
    ...(Object.keys(customParams).length ? customParams : {})
  });

  return NextResponse.json({ paymentUrl: `${ROBOKASSA_BASE_URL}?${params.toString()}` });
}
