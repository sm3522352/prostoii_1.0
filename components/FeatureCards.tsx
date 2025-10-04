/**
 * A small card used in the advantages section. Each card displays a
 * heading and a description summarising the benefit of the service.
 */
function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-panel/70 backdrop-blur rounded-2xl p-6 border border-border shadow-panel">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  );
}

export default function FeatureCards() {
  const features = [
    {
      title: 'Быстро и просто',
      description: 'Запускайте генерацию текста или изображений в пару кликов — ничего лишнего.'
    },
    {
      title: 'Гибкие модели',
      description: 'Выбирайте модели, подходящие под ваши задачи — от копирайтинга до иллюстраций.'
    },
    {
      title: 'Честные лимиты',
      description: 'Прозрачные ограничения для бесплатного тарифа и полноценный доступ в PRO.'
    },
    {
      title: 'Оплата в РФ',
      description: 'Удобная оплата в рублях — банковские карты, безопасное списание.'
    }
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}