import Link from 'next/link';
import { goal } from '@/lib/metrics';
import { IMAGE_PACKS, TRIAL } from '@/config/pricing';

/**
 * Hero displays the main headline, subheadline and primary call-to-action
 * buttons for the landing page. It is intentionally concise and
 * highlights the key offering (trial and subscription).
 */
export default function Hero() {
  const billingUrl = process.env.NEXT_PUBLIC_BILLING_URL || '#';
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || '#';
  return (
    <div className="text-center space-y-8 pt-12 sm:pt-16">
      <h1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.02em]">
        ПростоИИ — текст и картинки по подписке
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-muted">
        Генерация текстов и изображений на мощных моделях по API.
        Прозрачные лимиты, пробный доступ 1 ₽ на 3 дня.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link
          href={`${billingUrl}?trial=1`}
          className="rounded-2xl bg-accent hover:bg-accent-hover px-6 py-3 text-base font-semibold shadow-soft"
          data-goal="click_trial"
          onClick={() => goal('click_trial')}
        >
          Начать за 1 ₽
        </Link>
        <Link
          href={appUrl}
          className="rounded-2xl border border-border bg-panel px-6 py-3 text-base font-medium hover:border-accent"
          data-goal="click_open_app"
          onClick={() => goal('click_open_app')}
        >
          Открыть приложение
        </Link>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {['Chat + Images', 'Trial 1 ₽/3 дня', 'Автопродление 949 ₽/7 дней', 'Пакеты 10/20/50'].map(t => (
          <span key={t} className="rounded-2xl border border-border/80 bg-panel px-3 py-1 text-sm text-muted">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
