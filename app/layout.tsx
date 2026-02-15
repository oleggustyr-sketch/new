import type { Metadata } from 'next';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'HR-ON — современный HR-сервис',
  description: 'Современный лендинг HR-ON: подбор, адаптация и сопровождение персонала.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
