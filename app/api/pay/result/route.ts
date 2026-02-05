import crypto from "crypto";
import { NextResponse } from "next/server";

const buildSignature = ({
  outSum,
  invId,
  password,
  customParams
}: {
  outSum: string;
  invId: string;
  password: string;
  customParams: Record<string, string>;
}) => {
  const sortedCustom = Object.keys(customParams)
    .sort()
    .map((key) => `${key}=${customParams[key]}`)
    .join(":");
  const base = [outSum, invId, password, sortedCustom].filter(Boolean).join(":");
  return crypto.createHash("md5").update(base).digest("hex");
};

export async function POST(request: Request) {
  const bodyText = await request.text();
  const params = new URLSearchParams(bodyText);

  const outSum = params.get("OutSum") ?? "";
  const invId = params.get("InvId") ?? "";
  const signatureValue = (params.get("SignatureValue") ?? "").toLowerCase();

  const password2 = process.env.ROBOKASSA_PASSWORD2;
  if (!password2) {
    return NextResponse.json({ error: "Robokassa credentials missing" }, { status: 500 });
  }

  const customParams: Record<string, string> = {};
  params.forEach((value, key) => {
    if (key.startsWith("shp_")) {
      customParams[key] = value;
    }
  });

  const expectedSignature = buildSignature({ outSum, invId, password: password2, customParams });

  if (expectedSignature.toLowerCase() !== signatureValue) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
  }

  return new Response(`OK${invId}`);
}
