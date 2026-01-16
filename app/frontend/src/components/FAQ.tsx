import { useState } from 'react'
import './FAQ.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Как быстро я получу анализ?',
      answer: 'Время зависит от выбранного тарифа. Базовый анализ готовится в течение 24 часов, Стандарт — 12 часов, Премиум — от 6 до 12 часов в зависимости от сложности.'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Мы предоставляем экспертное мнение на основе анализа доступной информации. Если вас не устроит качество анализа, мы вернем 100% средств в течение 7 дней.'
    },
    {
      question: 'Можно ли получить консультацию до покупки?',
      answer: 'Да, вы можете связаться с нами для предварительной консультации. Мы ответим на базовые вопросы о наших услугах бесплатно.'
    },
    {
      question: 'Работаете ли вы с зарубежными проектами?',
      answer: 'Да, мы анализируем как российские, так и зарубежные инвестиционные проекты и платформы.'
    },
    {
      question: 'Что включает в себя детальный анализ?',
      answer: 'Детальный анализ включает изучение бизнес-модели, источников дохода, юридической структуры, репутации команды, анализ рисков и прогноз возможной доходности.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <h2 className="section-title">Часто задаваемые вопросы</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
