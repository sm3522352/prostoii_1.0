/**
 * HowItWorks displays a simple three‑step sequence illustrating how the
 * service works. Each item has a title and a short explanation. Icons
 * could be added in the future using an icon library.
 */
export default function HowItWorks() {
  const steps = [
    {
      title: '1. Пробная подписка',
      description: 'Активируйте пробный доступ за 1 ₽ и получите первые лимиты на тексты и изображения.'
    },
    {
      title: '2. Использование',
      description: 'Генерируйте контент, наблюдайте за лимитами в реальном времени и получайте результат в пару секунд.'
    },
    {
      title: '3. Продление или пакеты',
      description: 'Автопродление каждую неделю или покупка пакетов изображений — выбирайте, что выгоднее.'
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {steps.map((step) => (
        <div key={step.title} className="bg-panel/70 backdrop-blur rounded-2xl p-6 border border-border shadow-panel space-y-2">
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="text-sm text-muted">{step.description}</p>
        </div>
      ))}
    </div>
  );
}