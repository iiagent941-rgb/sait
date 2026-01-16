import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>GFL Holdings</h3>
            <p>Профессиональная инвестиционная аналитика</p>
          </div>
          <div className="footer-section">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#hero">Главная</a></li>
              <li><a href="#how-it-works">Как это работает</a></li>
              <li><a href="#pricing">Тарифы</a></li>
              <li><a href="#calculator">Калькулятор</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Контакты</h4>
            <ul>
              <li>Email: info@gflholdings.com</li>
              <li>Telegram: @gfl_support</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} GFL Holdings. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
