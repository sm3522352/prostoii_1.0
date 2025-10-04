import Link from 'next/link';
import { TRIAL, IMAGE_PACKS, FREE_LIMITS } from '@/config/pricing';
import { goal } from '@/lib/metrics';

/**
 * PricingTable renders the available plans and add-ons. It is used on
 * both the home page and the dedicated /pricing page. Each tier
 * contains a list of included features and buttons to purchase.
 */
export default function PricingTable() {
  const billingUrl = process.env.NEXT_PUBLIC_BILLING_URL || '#';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Free tier */}
      <div className="bg-panel/70 border border-border rounded-2xl p-6 shadow-panel flex flex-col">
        <h3 className="text-xl font-semibold">Free</h3>
        <p className="text-3xl font-extrabold tracking-tight mt-2">0 ₽</p>
        <p className="text-sm text-muted mt-2">Бесплатный доступ с ежедневными лимитами</p>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li>до {FREE_LIMITS.textPerDay.toLocaleString()} символов текста/день</li>
          <li>до {FREE_LIMITS.imagesPerDay} изображений/день</li>
          <li>Chat + Images</li>
        </ul>
        <div className="mt-auto pt-6">
          <Link
            href={`${billingUrl}?trial=1`}
            data-goal="click_trial"
            onClick={() => goal('click_trial')}
            className="block text-center w-full rounded-2xl bg-accent hover:bg-accent-hover px-5 py-3 font-semibold shadow-soft"
          >
            Начать бесплатно
          </Link>
        </div>
      </div>
      {/* PRO tier */}
      <div className="bg-panel/70 border border-border rounded-2xl p-6 shadow-panel flex flex-col">
        <h3 className="text-xl font-semibold">PRO Trial</h3>
        <p className="text-3xl font-extrabold tracking-tight mt-2">{TRIAL.priceRub} ₽</p>
        <p className="text-sm text-muted mt-2">
          за {TRIAL.days} дня, затем автопродление {TRIAL.renewRub} ₽/{TRIAL.renewDays} дней
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li>Безлимит сообщений (soft rate-limit)</li>
          <li>Приоритетная очередь</li>
          <li>Поддержка Chat + Images</li>
        </ul>
        <div className="mt-auto pt-6">
          <Link
            href={`${billingUrl}?trial=1`}
            data-goal="click_trial"
            onClick={() => goal('click_trial')}
            className="block text-center w-full rounded-2xl bg-accent hover:bg-accent-hover px-5 py-3 font-semibold shadow-soft"
          >
            Начать за {TRIAL.priceRub} ₽
          </Link>
          <p className="text-xs text-muted mt-3 text-center">
            Деньги списываются автоматически — автопродление можно отключить на странице “Отменить подписку”.
          </p>
        </div>
      </div>
      {/* Image packs */}
      <div className="bg-panel/70 border border-border rounded-2xl p-6 shadow-panel flex flex-col">
        <h3 className="text-xl font-semibold">Пакеты изображений</h3>
        <p className="text-3xl font-extrabold tracking-tight mt-2">от {IMAGE_PACKS[0].priceRub} ₽</p>
        <p className="text-sm text-muted mt-2">Дополнительные изображения для Free и PRO</p>
        <div className="mt-4 space-y-3">
          {IMAGE_PACKS.map((pack) => (
            <div key={pack.count} className="flex flex-wrap items-center justify-between gap-3 border border-border/60 rounded-2xl p-4 bg-panel/40">
              <div>
                <p className="font-semibold">{pack.count} изображений</p>
                <p className="text-sm text-muted">{pack.priceRub} ₽</p>
              </div>
              <Link
                href={`${billingUrl}?${pack.query}`}
                onClick={() => goal(`click_buy_pack_${pack.count}`)}
                data-goal={`click_buy_pack_${pack.count}`}
                className="rounded-2xl bg-accent hover:bg-accent-hover px-5 py-3 font-semibold shadow-soft text-sm"
              >
                Купить
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}