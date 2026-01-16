import './Pricing.css'

export default function Pricing() {
  const plans = [
    {
      name: 'Базовый',
      price: '5 000',
      features: [
        'Экспресс-анализ проекта',
        'Оценка основных рисков',
        'Рекомендации по решению',
        'Ответ в течение 24 часов'
      ]
    },
    {
      name: 'Стандарт',
      price: '15 000',
      popular: true,
      features: [
        'Детальный анализ механики',
        'Комплексная оценка рисков',
        'Прогноз доходности',
        'Консультация с экспертом',
        'Ответ в течение 12 часов'
      ]
    },
    {
      name: 'Премиум',
      price: '35 000',
      features: [
        'Глубокий анализ нескольких проектов',
        'Сравнительный анализ',
        'Индивидуальная стратегия',
        'Приоритетная поддержка 24/7',
        'Сопровождение в течение месяца'
      ]
    }
  ]

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <h2 className="section-title">Тарифы</h2>
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Популярный</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price-amount">{plan.price}</span>
                <span className="price-currency">₽</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                Выбрать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
