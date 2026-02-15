import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
        {children}
      </div>
    </section>
  );
}
