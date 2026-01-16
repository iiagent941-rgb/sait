import { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
  const [amount, setAmount] = useState(100000)
  const [rate, setRate] = useState(12)
  const [period, setPeriod] = useState(12)

  const calculateReturn = () => {
    const monthlyRate = rate / 100 / 12
    const totalReturn = amount * Math.pow(1 + monthlyRate, period)
    const profit = totalReturn - amount
    return {
      totalReturn: totalReturn.toFixed(0),
      profit: profit.toFixed(0)
    }
  }

  const result = calculateReturn()

  return (
    <section id="calculator" className="section">
      <div className="container">
        <h2 className="section-title">Калькулятор доходности</h2>
        <div className="calculator">
          <div className="calculator-inputs">
            <div className="input-group">
              <label>Сумма инвестиций (₽)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min="1000"
                step="1000"
              />
            </div>
            <div className="input-group">
              <label>Процентная ставка (% годовых)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                min="1"
                max="100"
                step="0.5"
              />
            </div>
            <div className="input-group">
              <label>Срок (месяцев)</label>
              <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                min="1"
                max="120"
              />
            </div>
          </div>
          <div className="calculator-result">
            <div className="result-card">
              <div className="result-label">Итоговая сумма</div>
              <div className="result-value">{Number(result.totalReturn).toLocaleString('ru-RU')} ₽</div>
            </div>
            <div className="result-card">
              <div className="result-label">Прибыль</div>
              <div className="result-value profit">{Number(result.profit).toLocaleString('ru-RU')} ₽</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
