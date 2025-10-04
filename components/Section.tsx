import { ReactNode } from 'react';
export default function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
