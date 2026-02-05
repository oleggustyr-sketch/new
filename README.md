# HR-ON Landing (Next.js + Tailwind)

Современный минималистичный лендинг для HR-ON с тарифами и интеграцией Robokassa.

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Переменные окружения

Создайте `.env.local` и заполните:

```bash
ROBOKASSA_LOGIN=your_login
ROBOKASSA_PASSWORD1=your_password1
ROBOKASSA_PASSWORD2=your_password2
```

## Контент

Все тексты и тарифы лежат в `content/site.json`.

## Платежи Robokassa

### Создание платежа

`POST /api/pay/create`

```json
{
  "productId": "growth",
  "email": "user@example.com",
  "phone": "+79990000000"
}
```

Возвращает:

```json
{
  "paymentUrl": "https://auth.robokassa.ru/Merchant/Index.aspx?..."
}
```

### ResultURL

`POST /api/pay/result`

Проверяет подпись `SignatureValue` по паролю #2 и отвечает `OK<invId>`.

### Страницы результата

- `/pay/success` — успешная оплата
- `/pay/fail` — ошибка оплаты

## Сборка

```bash
npm run build
npm run start
```
