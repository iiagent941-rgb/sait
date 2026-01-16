import './HowItWorks.css'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Выберите тариф',
      description: 'Подберите подходящий план в зависимости от ваших целей и задач'
    },
    {
      number: '02',
      title: 'Получите аналитику',
      description: 'Мы изучим интересующий вас проект и предоставим детальный разбор механики и рисков'
    },
    {
      number: '03',
      title: 'Примите решение',
      description: 'На основе нашей экспертизы вы сможете принять взвешенное инвестиционное решение'
    }
  ]

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="section-title">Как это работает</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
