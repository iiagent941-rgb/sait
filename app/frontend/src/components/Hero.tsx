import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Профессиональная инвестиционная аналитика
          </h1>
          <p className="hero-subtitle">
            Помогаем разобраться в механике онлайн-инвестиций, оценить риски и принять взвешенное решение
          </p>
          <div className="hero-buttons">
            <a href="#pricing" className="btn btn-primary">Начать</a>
            <a href="#how-it-works" className="btn btn-secondary">Узнать больше</a>
          </div>
        </div>
      </div>
    </section>
  )
}
