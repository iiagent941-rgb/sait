import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">GFL Holdings</div>
          <nav className="nav">
            <a href="#hero">Главная</a>
            <a href="#how-it-works">Как это работает</a>
            <a href="#pricing">Тарифы</a>
            <a href="#calculator">Калькулятор</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
