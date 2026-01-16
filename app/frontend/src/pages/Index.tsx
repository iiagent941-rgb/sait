import { useState } from 'react';
import { Menu, X, TrendingUp, Shield, Target, Users, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold text-gray-900">Вениамин Левитан</div>

            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('mechanics')} className="text-gray-700 hover:text-[#2C5F8D] transition">Механика</button>
              <button onClick={() => scrollToSection('models')} className="text-gray-700 hover:text-[#2C5F8D] transition">Модели</button>
              <button onClick={() => scrollToSection('approach')} className="text-gray-700 hover:text-[#2C5F8D] transition">Подход</button>
              <button onClick={() => scrollToSection('red-flags')} className="text-gray-700 hover:text-[#2C5F8D] transition">Red Flags</button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-[#2C5F8D] transition">Контакты</button>
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <button onClick={() => scrollToSection('mechanics')} className="block w-full text-left py-2 text-gray-700">Механика</button>
              <button onClick={() => scrollToSection('models')} className="block w-full text-left py-2 text-gray-700">Модели</button>
              <button onClick={() => scrollToSection('approach')} className="block w-full text-left py-2 text-gray-700">Подход</button>
              <button onClick={() => scrollToSection('red-flags')} className="block w-full text-left py-2 text-gray-700">Red Flags</button>
              <button onClick={() => scrollToSection('contacts')} className="block w-full text-left py-2 text-gray-700">Контакты</button>
            </div>
          )}
        </div>
      </header>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Профессиональная аналитика финансовых моделей
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Помогаю разобраться в механике онлайн-инвестиций, оценить риски и принять взвешенное решение
              </p>
              <button
                onClick={() => scrollToSection('contacts')}
                className="bg-[#2C5F8D] text-white px-8 py-3 rounded-lg hover:bg-[#244d73] transition shadow-md"
              >
                Связаться со мной
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/expert-photo.jpg"
                alt="Вениамин Левитан"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mechanics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Как работают онлайн-инвестиции
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <TrendingUp className="text-[#2C5F8D] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Источники дохода</h3>
              <p className="text-gray-600">
                Анализ реальных источников прибыли проектов: торговля, майнинг, арбитраж или перераспределение средств
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <Shield className="text-[#2C5F8D] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Структура выплат</h3>
              <p className="text-gray-600">
                Разбор механизмов начислений, условий вывода средств и реальной прозрачности операций
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <AlertCircle className="text-[#2C5F8D] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Факторы риска</h3>
              <p className="text-gray-600">
                Оценка юридических, технических и репутационных рисков инвестиционных платформ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="models" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Аналитика финансовых моделей
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Детальный разбор наиболее распространённых схем онлайн-инвестирования
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F0F4F8] p-6 rounded-xl hover:shadow-md transition">
              <div className="text-2xl font-bold text-[#2C5F8D] mb-2">01</div>
              <h3 className="text-xl font-semibold mb-3">Классическая модель</h3>
              <p className="text-gray-600">
                Фиксированная доходность, стабильные выплаты, минимальные реферальные бонусы
              </p>
            </div>

            <div className="bg-[#F0F4F8] p-6 rounded-xl hover:shadow-md transition">
              <div className="text-2xl font-bold text-[#2C5F8D] mb-2">02</div>
              <h3 className="text-xl font-semibold mb-3">Высокодоходная модель</h3>
              <p className="text-gray-600">
                Повышенная доходность, короткие сроки возврата, высокие риски
              </p>
            </div>

            <div className="bg-[#F0F4F8] p-6 rounded-xl hover:shadow-md transition">
              <div className="text-2xl font-bold text-[#2C5F8D] mb-2">03</div>
              <h3 className="text-xl font-semibold mb-3">Реферальная система</h3>
              <p className="text-gray-600">
                Многоуровневая структура партнёрских вознаграждений и комиссий
              </p>
            </div>

            <div className="bg-[#F0F4F8] p-6 rounded-xl hover:shadow-md transition">
              <div className="text-2xl font-bold text-[#2C5F8D] mb-2">04</div>
              <h3 className="text-xl font-semibold mb-3">MLM-структура</h3>
              <p className="text-gray-600">
                Сетевая модель с акцентом на привлечение новых участников
              </p>
            </div>

            <div className="bg-[#F0F4F8] p-6 rounded-xl hover:shadow-md transition">
              <div className="text-2xl font-bold text-[#2C5F8D] mb-2">05</div>
              <h3 className="text-xl font-semibold mb-3">Гибридная модель</h3>
              <p className="text-gray-600">
                Сочетание различных элементов: доходность + реферальная программа + бонусы
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/InvestmentExpert.jpg"
                alt="Вениамин Левитан"
                className="rounded-full w-32 h-32 object-cover shadow-lg mb-6"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Мой подход к аналитике
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                За годы работы я проанализировал сотни инвестиционных проектов и выработал методологию объективной оценки рисков.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Моя задача — предоставить вам всю необходимую информацию для принятия взвешенного решения, указав на реальные риски и возможности.
              </p>
              <p className="text-lg text-gray-600">
                Я не даю инвестиционных рекомендаций, но помогаю видеть полную картину.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Target className="text-[#2C5F8D] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Объективный анализ</h3>
                  <p className="text-gray-600">Исследую проекты без конфликта интересов, основываясь только на фактах</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="text-[#2C5F8D] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Прозрачная методология</h3>
                  <p className="text-gray-600">Все критерии оценки открыты и понятны</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="text-[#2C5F8D] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Образовательный подход</h3>
                  <p className="text-gray-600">Обучаю самостоятельно оценивать риски и принимать решения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="red-flags" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Red Flags: на что обратить внимание
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="font-semibold text-lg mb-2">🚩 Нереалистичная доходность</h3>
              <p className="text-gray-700">Обещания доходности выше рыночной без объяснения источников</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="font-semibold text-lg mb-2">🚩 Отсутствие юридических данных</h3>
              <p className="text-gray-700">Нет информации о регистрации компании, лицензиях или реквизитах</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="font-semibold text-lg mb-2">🚩 Давление и срочность</h3>
              <p className="text-gray-700">Искусственное создание дефицита времени для принятия решения</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="font-semibold text-lg mb-2">🚩 Сложный вывод средств</h3>
              <p className="text-gray-700">Множество условий, комиссий и задержек при выводе</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="font-semibold text-lg mb-2">🚩 Акцент на рефералке</h3>
              <p className="text-gray-700">Основной фокус на привлечении новых участников, а не на инвестициях</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h3 className="font-semibold text-lg mb-2">🚩 Непрозрачная отчётность</h3>
              <p className="text-gray-700">Отсутствие детальной информации о сделках и операциях</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Важное предупреждение</h3>
              <p className="text-gray-700 mb-2">
                Информация на этом сайте носит исключительно образовательный характер и не является инвестиционной рекомендацией.
              </p>
              <p className="text-gray-700">
                Любые инвестиции сопряжены с рисками. Принимайте решения самостоятельно и инвестируйте только те средства, потерю которых вы можете себе позволить.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-[#2C5F8D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы разобраться в механике инвестиций?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Свяжитесь со мной для получения профессионального анализа
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="mb-3" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@levitin-invest.ru" className="opacity-90 hover:opacity-100">
                info@levitin-invest.ru
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="mb-3" size={32} />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <a href="tel:+79001234567" className="opacity-90 hover:opacity-100">
                +7 (900) 123-45-67
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="mb-3" size={32} />
              <h3 className="font-semibold mb-2">Telegram</h3>
              <a href="https://t.me/levitin_invest" className="opacity-90 hover:opacity-100">
                @levitin_invest
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Вениамин Левитан. Все права защищены.</p>
          <p className="mt-2 text-sm">
            Информация на сайте не является инвестиционной рекомендацией
          </p>
        </div>
      </footer>
    </div>
  );
}
