import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Menu, X, TrendingUp, Users, AlertCircle, BarChart3, Network, Layers, Shield, Phone, MessageCircle, Target, Clock, CheckCircle, ArrowUp, DollarSign, Activity, Scale, Eye, FileText, TrendingDown, Zap, AlertTriangle, Lock, Award } from 'lucide-react';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'mechanics', 'models', 'for-whom', 'results', 'methodology', 'red-flags', 'scenarios', 'mistakes', 'checklist', 'faq', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      setShowBackToTop(window.scrollY > 500);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC] text-[#121417]">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#F4F1EC]/95 backdrop-blur-sm border-b border-[#E3DDD4] z-50">
        <div className="max-w-[1180px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-[#121417] tracking-wide">ВЕНИАМИН ЛЕВИТАН</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'mechanics', label: 'Механика' },
                { id: 'models', label: 'Модели' },
                { id: 'for-whom', label: 'Для кого' },
                { id: 'results', label: 'Результат' },
                { id: 'methodology', label: 'Методика' },
                { id: 'red-flags', label: 'Красные флаги' },
                { id: 'scenarios', label: 'Сценарии' },
                { id: 'mistakes', label: 'Ошибки' },
                { id: 'checklist', label: 'Чек-лист' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[11px] font-medium transition-colors ${
                    activeSection === item.id ? 'text-[#B8945E]' : 'text-[#4E5560] hover:text-[#121417]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="sm"
                className="bg-[#B8945E] hover:bg-[#A88552] text-white px-4 py-2 text-xs font-semibold rounded-full ml-2"
                onClick={() => window.open('https://t.me/top_investmentss', '_blank')}
              >
                Telegram
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#4E5560]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-[#E3DDD4] pt-4">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'mechanics', label: 'Механика' },
                { id: 'models', label: 'Модели' },
                { id: 'for-whom', label: 'Для кого' },
                { id: 'results', label: 'Результат' },
                { id: 'methodology', label: 'Методика' },
                { id: 'red-flags', label: 'Красные флаги' },
                { id: 'scenarios', label: 'Сценарии' },
                { id: 'mistakes', label: 'Ошибки' },
                { id: 'checklist', label: 'Чек-лист' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-xs font-medium transition-colors ${
                    activeSection === item.id ? 'text-[#B8945E]' : 'text-[#4E5560]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#B8945E] text-white rounded-full shadow-lg hover:bg-[#A88552] transition-all z-40 flex items-center justify-center"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-24 px-6">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-[32px] md:text-[46px] font-bold text-[#121417] leading-[1.1]">
                Разбираю финансовые модели спокойно и по механике
              </h1>
              <p className="text-[18px] md:text-[19px] text-[#4E5560] leading-[1.6]">
                Я объясняю, откуда появляется доходность, как устроены выплаты, почему стадия системы меняет результат и где на практике находятся реальные риски. Работаю с разными форматами, от классических инвестиций до высокорисковых проектов и сетевых моделей. Моя задача простая, дать ясную логику, чтобы решение было осознанным.
              </p>
              <p className="text-xs text-[#4E5560] tracking-wide">
                Без обещаний. Без гарантий. Без управления средствами. Только аналитика и образование.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#B8945E] hover:bg-[#A88552] text-white px-8 py-6 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open('https://t.me/top_investmentss', '_blank')}
                >
                  Перейти в Telegram-канал
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#E3DDD4] text-[#121417] hover:bg-[#EFEAE2] px-8 py-6 text-sm font-semibold rounded-full transition-all"
                  onClick={() => scrollToSection('contacts')}
                >
                  Связаться со мной
                </Button>
              </div>

              <Card className="bg-[#EFEAE2] border border-[#E3DDD4] rounded-[20px] shadow-sm mt-6">
                <CardContent className="p-5">
                  <p className="text-[15px] text-[#4E5560] leading-relaxed">
                    Я не продаю проекты и не уговариваю входить. Я разбираю механику и показываю слабые места заранее.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B8945E]/10 to-transparent rounded-[22px]"></div>
                <img
                  src="/assets/expert-photo.jpg"
                  alt="Вениамин Левитан"
                  className="rounded-[22px] shadow-2xl w-full max-w-md object-cover border-2 border-[#E3DDD4] relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanics Section */}
      <section id="mechanics" className="py-24 px-6 bg-[#EFEAE2]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417] mb-6">
              Как работают онлайн-инвестиции на практике
            </h2>
            <p className="text-[17px] text-[#4E5560] leading-[1.65] max-w-4xl">
              Любая инвестиционная система устроена как механизм. В ней есть вход денег, правила распределения, обязательства и выход. Доходность не возникает сама по себе. Она зависит от источника денег и от того, как система их перераспределяет. Пока поток растет, модель выглядит сильной. Когда поток падает, проверяется устойчивость и качество правил. Если понимать механику, становится ясно кто платит, за что платит, что держит баланс и в какой момент риск становится критическим.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <DollarSign className="w-6 h-6" />, 
                title: 'Источник доходности', 
                text: 'Откуда система берет деньги на выплаты. Активы, бизнес, комиссии, продукт, маркетинг, приток участников или комбинация.' 
              },
              { 
                icon: <Activity className="w-6 h-6" />, 
                title: 'Выплаты зависят от потока', 
                text: 'Важно понимать, какие выплаты фиксированные, какие плавающие, и что происходит при просадке.' 
              },
              { 
                icon: <Clock className="w-6 h-6" />, 
                title: 'Стадия системы меняет результат', 
                text: 'Ранняя стадия, рост, пик, замедление. На каждой фазе разные риски и разная динамика выплат.' 
              },
              { 
                icon: <Target className="w-6 h-6" />, 
                title: 'Ликвидность и выход', 
                text: 'Правила вывода, ограничения, очереди, штрафы, окна. Непрозрачный выход часто главный риск.' 
              },
              { 
                icon: <AlertCircle className="w-6 h-6" />, 
                title: 'Риск это механика', 
                text: 'Риск это конкретные слабые точки. Дефицит потока, перегрев, перекос бонусов, паника, отток.' 
              },
              { 
                icon: <Users className="w-6 h-6" />, 
                title: 'Участник решает многое', 
                text: 'Дисциплина, размер риска, план выхода и эмоции часто важнее названия проекта.' 
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white border-2 border-[#E3DDD4] hover:border-[#B8945E] transition-all rounded-[20px] shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-[16px] bg-[#F4F1EC] border border-[#E3DDD4] flex items-center justify-center text-[#B8945E]">
                    {item.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#121417]">{item.title}</h3>
                  <p className="text-[16px] text-[#4E5560] leading-[1.65]">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="py-24 px-6">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417] mb-6">
              Аналитика финансовых моделей
            </h2>
            <p className="text-[17px] text-[#4E5560] leading-[1.65] max-w-4xl">
              Модели отличаются не ярлыками, а устройством денежного потока и устойчивостью. Заработок возможен в разных форматах, включая высокорисковые и сетевые, если человек понимает механику, фазу цикла и принимает риск осознанно. Ключевые переменные почти всегда одинаковые, источник денег, правила выплат, стадия и поведение участников.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { 
                icon: <Shield className="w-5 h-5" />, 
                title: 'Классические инвестиции', 
                subtitle: 'Недвижимость, бизнес, фондовый рынок',
                bullets: [
                  'Доход от активов и реальной экономики',
                  'Горизонт длиннее, стабильность выше',
                  'Нужны стратегия и диверсификация',
                  'Риски чаще медленные, но заметные',
                  'Есть регулирование и юридические рамки',
                  'Ликвидность зависит от инструмента',
                  'Ошибка, ждать быстрый результат'
                ]
              },
              { 
                icon: <TrendingUp className="w-5 h-5" />, 
                title: 'Высокорисковые проекты', 
                subtitle: 'Высокая доходность, высокая волатильность',
                bullets: [
                  'Потенциал выше, но риск реализуется быстрее',
                  'Временной фактор критичен',
                  'Стадия цикла влияет на все',
                  'Часто важна динамика аудитории и потока',
                  'Выход и ликвидность главный фильтр',
                  'Ошибка, входить на эмоциях',
                  'Нужен план риска и фиксации результата'
                ]
              },
              { 
                icon: <Users className="w-5 h-5" />, 
                title: 'Партнерские и реферальные системы', 
                subtitle: 'Рефералы, партнерства',
                bullets: [
                  'Доход зависит от качества потока и удержания',
                  'Важны правила бонусов и структура',
                  'Стабильность зависит от продукта или сервиса',
                  'Сеть усиливает результат, но повышает риск',
                  'Ошибка, строить только на бонусах',
                  'Нужна дисциплина и расчет',
                  'Важно понимать мотивацию участников'
                ]
              },
              { 
                icon: <Network className="w-5 h-5" />, 
                title: 'Сетевые структуры (MLM)', 
                subtitle: 'Многоуровневый маркетинг',
                bullets: [
                  'Доход строится на активности и структуре',
                  'Устойчивость зависит от поведения людей',
                  'Важна бонусная логика и продукт',
                  'Масштабирование повышает риски',
                  'Ошибка, входить без математики выплат',
                  'На разных стадиях разная реальность',
                  'Важны правила вывода и удержания'
                ]
              },
              { 
                icon: <AlertCircle className="w-5 h-5" />, 
                title: 'Схемные модели (MMM-подобные форматы)', 
                subtitle: 'Модели повышенного риска',
                bullets: [
                  'Сильная зависимость от притока и доверия',
                  'Стадия системы решает критически',
                  'Перегрев ломает баланс',
                  'Паника ускоряет просадку',
                  'Ошибка, входить без плана выхода',
                  'Контроль важнее эмоций',
                  'Вера в вечный рост опасна'
                ]
              },
              { 
                icon: <Layers className="w-5 h-5" />, 
                title: 'Гибридные модели', 
                subtitle: 'Комбинация источников и правил',
                bullets: [
                  'Смешивают активы, маркетинг, бонусы',
                  'Требуют разбора по слоям',
                  'Важно отделять источник денег от распределения',
                  'Ошибка, смотреть только на доходность',
                  'Ключ, как система ведет себя в стрессе',
                  'Проверка, ликвидность и обязательства',
                  'Стадия и поведение людей решают'
                ]
              }
            ].map((model, index) => (
              <Card key={index} className="bg-white border-2 border-[#E3DDD4] hover:border-[#B8945E] transition-all rounded-[20px] shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-[14px] bg-[#F4F1EC] border border-[#E3DDD4] flex items-center justify-center flex-shrink-0 text-[#B8945E]">
                      {model.icon}
                    </div>
                    <div>
                      <h3 className="text-[18px] font-semibold text-[#121417] mb-1">{model.title}</h3>
                      <p className="text-[13px] text-[#4E5560]">{model.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {model.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[15px] text-[#4E5560]">
                        <span className="text-[#B8945E] text-xs mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-[#EFEAE2] border-2 border-[#B8945E] rounded-[22px] shadow-md">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-[22px] font-semibold text-[#121417] mb-4">Без ярлыков, только механика</h3>
              <div className="space-y-3 text-[17px] text-[#4E5560] leading-[1.65]">
                <p>
                  Я не делю модели на хорошие и плохие. Я смотрю на поток денег, обязательства и то, чем они поддерживаются. Чем прозрачнее механика, тем проще принимать спокойные решения. Главный источник потерь почти всегда один, отсутствие понимания и дисциплины.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* For Whom Section */}
      <section id="for-whom" className="py-24 px-6 bg-[#EFEAE2]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417]">
              Для кого это полезно
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white border-2 border-green-700/30 rounded-[20px] shadow-md">
              <CardContent className="p-7 space-y-5">
                <h3 className="text-[20px] font-semibold text-[#121417] flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Подходит, если:
                </h3>
                <ul className="space-y-4">
                  {[
                    'Вы хотите понимать механику доходности',
                    'Вы рассматриваете проект и хотите увидеть риски заранее',
                    'Вам важно понимать стадию цикла и правила выплат',
                    'Вы хотите действовать спокойно, без иллюзий',
                    'Вы хотите научиться оценивать модели самостоятельно',
                    'Вам нужен план входа, лимитов и выхода'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[16px] text-[#4E5560] leading-[1.65]">
                      <span className="text-green-600 text-sm mt-1 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-red-700/30 rounded-[20px] shadow-md">
              <CardContent className="p-7 space-y-5">
                <h3 className="text-[20px] font-semibold text-[#121417] flex items-center gap-2">
                  <X className="w-5 h-5 text-red-600" />
                  Не подойдет, если:
                </h3>
                <ul className="space-y-4">
                  {[
                    'Вы ищете гарантии и стабильный процент навсегда',
                    'Вы хотите, чтобы за вас приняли решение',
                    'Вы верите только словам и обещаниям',
                    'Вы не готовы разбираться в базовых правилах',
                    'Вам нужны сигналы и кнопка быстрого результата',
                    'Вы игнорируете риск и временной фактор'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[16px] text-[#4E5560] leading-[1.65]">
                      <span className="text-red-600 text-sm mt-1 flex-shrink-0">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#B8945E]/10 border-2 border-[#B8945E] rounded-[20px] shadow-md">
            <CardContent className="p-7">
              <h3 className="text-[20px] font-semibold text-[#121417] mb-4">Что я не делаю:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  'Не обещаю прибыль',
                  'Не гарантирую доходность',
                  'Не даю сигналы',
                  'Не беру деньги в управление',
                  'Не продаю проекты',
                  'Не убеждаю входить и не отговариваю'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[16px] text-[#121417]">
                    <Lock className="w-4 h-4 text-[#B8945E] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 px-6">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417]">
              Что вы получите после разбора
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { 
                icon: <BarChart3 className="w-5 h-5" />, 
                title: 'Механика денег', 
                text: 'Кто и за что формирует выплаты' 
              },
              { 
                icon: <Scale className="w-5 h-5" />, 
                title: 'Логика устойчивости', 
                text: 'Что держит баланс' 
              },
              { 
                icon: <Activity className="w-5 h-5" />, 
                title: 'Стадия модели', 
                text: 'Ранняя, рост, пик, замедление' 
              },
              { 
                icon: <AlertCircle className="w-5 h-5" />, 
                title: 'Риск-карта', 
                text: 'Где система ломается' 
              },
              { 
                icon: <Zap className="w-5 h-5" />, 
                title: 'Красные флаги', 
                text: 'Что настораживает заранее' 
              },
              { 
                icon: <Users className="w-5 h-5" />, 
                title: 'Ошибки участников', 
                text: 'Где чаще теряют' 
              },
              { 
                icon: <Eye className="w-5 h-5" />, 
                title: 'Что мониторить', 
                text: 'Признаки перегрева и просадки' 
              },
              { 
                icon: <FileText className="w-5 h-5" />, 
                title: 'План действий', 
                text: 'Как действовать осторожно' 
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white border-2 border-[#E3DDD4] hover:border-[#B8945E] transition-all rounded-[20px] shadow-md">
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-[14px] bg-[#F4F1EC] border border-[#E3DDD4] flex items-center justify-center text-[#B8945E]">
                    {item.icon}
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#121417]">{item.title}</h3>
                  <p className="text-[16px] text-[#4E5560] leading-[1.65]">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-[#EFEAE2] border border-[#E3DDD4] rounded-[20px] shadow-sm">
            <CardContent className="p-6">
              <p className="text-[17px] text-[#4E5560] leading-[1.65] text-center">
                Это не совет куда вложить. Это карта механики, чтобы решение было вашим.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24 px-6 bg-[#EFEAE2]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417]">
              Как я анализирую модель
            </h2>
          </div>
          <div className="space-y-6 mb-8">
            {[
              {
                step: '1',
                title: 'Источник денег и экономика модели',
                text: 'Первый вопрос, откуда реально берутся деньги на выплаты. Это может быть экономика активов (недвижимость, бизнес, рынок), оборот средств, комиссионные, продукт, маркетинговая динамика или приток участников. Важно понять, источник устойчивый или зависит от внешних факторов. Если источник слабый или неясный, риски растут автоматически.'
              },
              {
                step: '2',
                title: 'Правила распределения и обязательства',
                text: 'Второй слой, как устроены выплаты и какие обязательства создает система. Фиксированные проценты, плавающие бонусы, реферальная структура, комиссии, штрафы, лимиты вывода. Важно понять баланс, сколько система обещает и сколько может выполнить при разных сценариях притока. Если обязательства растут быстрее источника, это красный флаг.'
              },
              {
                step: '3',
                title: 'Динамика притока и оттока, устойчивость',
                text: 'Третий уровень, как ведет себя система при изменении потока участников. Что происходит при росте притока, что при замедлении, что при оттоке. Устойчивая модель выдерживает просадку потока без критических сбоев. Неустойчивая ломается при первом замедлении. Здесь важна стадия цикла, ранняя, рост, пик, замедление.'
              },
              {
                step: '4',
                title: 'Поведение участников и временной фактор',
                text: 'Четвертый слой, как ведут себя люди внутри системы и как это влияет на результат. Дисциплина, эмоции, план выхода, размер риска, реинвестирование или фиксация. Временной фактор критичен, вход на ранней стадии и вход на пике это разные истории. Понимание поведения участников позволяет предсказать сценарии стресса.'
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white border-l-4 border-[#B8945E] rounded-[20px] shadow-md">
                <CardContent className="p-7 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#B8945E] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[19px] font-semibold text-[#121417] mb-3">{item.title}</h3>
                    <p className="text-[16px] text-[#4E5560] leading-[1.65]">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-[#B8945E]/10 to-[#B8945E]/5 border-2 border-[#B8945E] rounded-[22px] shadow-md">
            <CardContent className="p-8 text-center space-y-4">
              <Award className="w-12 h-12 text-[#B8945E] mx-auto" />
              <h3 className="text-[22px] font-semibold text-[#121417]">Формула анализа</h3>
              <p className="text-[18px] text-[#4E5560] leading-[1.6] max-w-3xl mx-auto">
                Доходность = источник денег + правила выплат + стадия цикла + поведение участников
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Red Flags Section */}
      <section id="red-flags" className="py-24 px-6">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417]">
              Красные флаги, которые важно видеть заранее
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Доходность выше логики источника денег',
                text: 'Если обещанная доходность не объясняется источником денег и экономикой модели, это сигнал проверить устойчивость системы.'
              },
              {
                title: 'Выплаты растут быстрее, чем поток',
                text: 'Когда обязательства системы растут быстрее притока участников или оборота средств, баланс нарушается.'
              },
              {
                title: 'Нет понятных правил вывода',
                text: 'Отсутствие четких условий вывода, скрытые комиссии, штрафы или окна вывода, признак проблем с ликвидностью.'
              },
              {
                title: 'Бонусы важнее продукта',
                text: 'Когда система держится только на маркетинге и бонусах, а не на реальном продукте или услуге, устойчивость под вопросом.'
              },
              {
                title: 'Давление входи сейчас вместо логики',
                text: 'Агрессивный маркетинг с давлением последний шанс и срочно вместо спокойного объяснения логики, красный флаг.'
              },
              {
                title: 'Задержки и постоянные оправдания',
                text: 'Если выплаты идут с задержками, а администрация объясняет это техническими проблемами, система в стрессе.'
              },
              {
                title: 'Сложные правила без смысла',
                text: 'Когда правила выплат запутанные и непонятные, а объяснений нет, это способ скрыть слабые места модели.'
              },
              {
                title: 'Перекос на приведи людей',
                text: 'Если основной доход строится на привлечении новых участников, а не на экономике активов, зависимость от притока критична.'
              },
              {
                title: 'Скрытые комиссии и штрафы',
                text: 'Неожиданные комиссии при выводе, штрафы за досрочный выход или заморозка средств, признак проблем с ликвидностью.'
              },
              {
                title: 'Паника ускоряет просадку',
                text: 'Если в сообществе начинается паника, а администрация не может успокоить логикой, отток ускоряется и система ломается.'
              }
            ].map((flag, idx) => (
              <Card key={idx} className="bg-white border-2 border-[#E3DDD4] hover:border-red-400 transition-all rounded-[20px] shadow-md">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#121417] mb-2">{flag.title}</h3>
                    <p className="text-[16px] text-[#4E5560] leading-[1.65]">{flag.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section id="scenarios" className="py-24 px-6 bg-[#EFEAE2]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417]">
              Сценарии развития системы
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Рост',
                color: 'border-green-600',
                bgColor: 'bg-green-50',
                text: 'Приток ускоряется, выплаты выглядят стабильными, уверенность растет. Это оптимальная фаза для участия, но важно помнить, рост не вечен. Нужно заранее планировать стратегию фиксации результата и не поддаваться эйфории. Главный риск на этой стадии, упустить момент пика и остаться в системе на стадии замедления.'
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Пик',
                color: 'border-yellow-600',
                bgColor: 'bg-yellow-50',
                text: 'Максимальная нагрузка, перегрев, растут обязательства и риск сбоев. Система достигает максимальной активности, но появляются первые признаки напряжения, небольшие задержки, изменения условий, усиление маркетингового давления. Это момент, когда нужно быть особенно внимательным и готовым к выходу.'
              },
              {
                icon: <TrendingDown className="w-6 h-6" />,
                title: 'Замедление',
                color: 'border-orange-600',
                bgColor: 'bg-orange-50',
                text: 'Приток падает, система ищет баланс, условия ужесточаются. Выплаты замедляются или становятся нестабильными. Администрация может вводить лимиты, увеличивать комиссии, усиливать давление на участников. На этой стадии риск критических потерь резко возрастает. Выход становится сложнее, и многие участники остаются в ловушке.'
              },
              {
                icon: <AlertTriangle className="w-6 h-6" />,
                title: 'Стресс',
                color: 'border-red-600',
                bgColor: 'bg-red-50',
                text: 'Отток, очередь на вывод, нехватка ликвидности, паника. Массовый отток, задержки или полная остановка выплат, изменение правил без объяснений, токсичная модерация или исчезновение администрации. Система находится в критическом состоянии. Вероятность вывода средств минимальна. Это финальная стадия.'
              }
            ].map((scenario, idx) => (
              <Card key={idx} className={`bg-white border-2 ${scenario.color} rounded-[20px] shadow-md`}>
                <CardContent className="p-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-[16px] ${scenario.bgColor} border-2 ${scenario.color} flex items-center justify-center`}>
                      {scenario.icon}
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#121417]">{scenario.title}</h3>
                  </div>
                  <p className="text-[16px] text-[#4E5560] leading-[1.65]">{scenario.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-[#B8945E]/10 border-2 border-[#B8945E] rounded-[20px] shadow-sm">
            <CardContent className="p-6">
              <p className="text-[17px] text-[#4E5560] leading-[1.65] text-center">
                Одна и та же модель на разных фазах дает разные результаты.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mistakes Section */}
      <section id="mistakes" className="py-24 px-6">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417]">
              Ошибки участников, которые стоят денег
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Вход без понимания источника денег',
                text: 'Участник не понимает, откуда берутся выплаты и как устроена система. Принимает решение на основе обещаний, а не логики.'
              },
              {
                title: 'Игнорирование стадии цикла',
                text: 'Фокус на процентах вместо стадии. Участник входит на стадии замедления, когда система уже перегружена обязательствами.'
              },
              {
                title: 'Завышение риска из-за эмоций',
                text: 'Участник поддается маркетинговому давлению, заходи срочно, последний шанс. Принимает решения в спешке, без анализа.'
              },
              {
                title: 'Нет плана выхода',
                text: 'Участник не планирует, когда и как будет фиксировать результат. Надеется еще немного заработать и упускает момент.'
              },
              {
                title: 'Переинвестирование без контроля',
                text: 'Участник не выводит прибыль, а реинвестирует все обратно в систему. Увеличивает риск вместо его снижения.'
              },
              {
                title: 'Ставка только на бонусы',
                text: 'Участник строит стратегию только на реферальных бонусах, игнорируя источник денег и устойчивость модели.'
              },
              {
                title: 'Вера словам вместо механики',
                text: 'Участник принимает решения на основе мнения блогеров или успешных участников, не проверяя информацию самостоятельно.'
              },
              {
                title: 'Поздний вывод',
                text: 'Участник видит признаки проблем (задержки выплат, изменение правил), но игнорирует их, надеясь, что все наладится.'
              },
              {
                title: 'Решения толпой',
                text: 'Участник следует за толпой, входит, когда все входят, и выходит, когда уже поздно. Эмоции вместо анализа.'
              },
              {
                title: 'Нет дисциплины и лимитов',
                text: 'Участник не может признать ошибку и выйти с убытком, надеясь отыграться. Превращает небольшой убыток в критическую потерю.'
              }
            ].map((mistake, idx) => (
              <Card key={idx} className="bg-white border-2 border-[#E3DDD4] hover:border-[#B8945E] transition-all rounded-[20px] shadow-md">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#B8945E] text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#121417] mb-2">{mistake.title}</h3>
                    <p className="text-[16px] text-[#4E5560] leading-[1.65]">{mistake.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section id="checklist" className="py-24 px-6 bg-[#EFEAE2]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417]">
              Чек-лист перед участием
            </h2>
          </div>
          <div className="space-y-4 mb-6">
            {[
              'Откуда берутся деньги на выплаты?',
              'Что будет при падении притока?',
              'Есть ли понятные условия вывода?',
              'Кто несет обязательства?',
              'Есть ли комиссии и штрафы?',
              'Как устроены бонусы?',
              'Где слабое место?',
              'Как выглядит стресс-сценарий?',
              'Какие лимиты риска нужны?',
              'Какой риск вы готовы принять лично?'
            ].map((question, idx) => (
              <Card key={idx} className="bg-white border-2 border-[#E3DDD4] hover:border-[#B8945E] transition-all rounded-[18px] shadow-md">
                <CardContent className="p-5 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#B8945E] text-white flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <p className="text-[17px] text-[#121417] pt-1">{question}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-[20px] shadow-md">
            <CardContent className="p-7 text-center">
              <AlertCircle className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <p className="text-[18px] text-[#121417] font-semibold">
                Если вы не можете ответить хотя бы на половину, вы входите вслепую.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417]">
              Частые вопросы
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Вы гарантируете доход?',
                a: 'Нет. Никто не может гарантировать доходность в инвестициях, особенно в высокорисковых моделях. Я даю понимание структуры системы и возможных сценариев развития, но результат зависит от множества факторов, включая время входа, дисциплину и поведение других участников. Все материалы носят образовательный и аналитический характер.'
              },
              {
                q: 'Вы управляете средствами?',
                a: 'Нет. Я не принимаю средства в управление, не выступаю финансовым посредником и не имею доступа к вашим деньгам. Моя роль, объяснить механику и помочь принять осознанное решение. Все действия со средствами вы совершаете самостоятельно. Это образовательная и аналитическая деятельность.'
              },
              {
                q: 'Вы даете сигналы?',
                a: 'Нет. Я не даю сигналы входи или выходи. Я объясняю механику системы, показываю риски и помогаю понять логику работы модели. Решение всегда принимаете вы самостоятельно на основе понимания, а не чужих указаний. Это образовательный подход.'
              },
              {
                q: 'Вы продаете проекты?',
                a: 'Нет. Я не продаю проекты и не получаю комиссию за привлечение участников. Моя задача, дать объективный анализ механики, чтобы вы могли принять решение на основе фактов, а не маркетинга. Это независимая аналитическая работа.'
              },
              {
                q: 'Почему стадия так важна?',
                a: 'Потому что одна и та же модель на разных стадиях дает разный результат. Обещание 20% в месяц на стадии роста с растущим притоком, это одна история. То же обещание на стадии замедления, когда приток падает, а обязательства растут, совсем другая. Стадия это реальность, проценты это обещание.'
              },
              {
                q: 'Почему в разных моделях можно заработать?',
                a: 'Потому что результат зависит не от названия модели, а от понимания механики, стадии цикла и дисциплины участника. Высокорисковые и сетевые модели могут быть прибыльными на ранней стадии для тех, кто понимает риски и имеет четкую стратегию выхода. Главное не иллюзии, а осознанность.'
              },
              {
                q: 'Чем опасны эмоции?',
                a: 'Эмоции заставляют входить на хайпе и выходить в панике. Это приводит к входу на пике (когда риски максимальны) и выходу на дне (когда уже поздно). Эмоциональная стратегия, главная причина потерь. Логика и дисциплина важнее чувств.'
              },
              {
                q: 'Что такое устойчивость?',
                a: 'Устойчивость, это способность системы выполнять обязательства при изменении потока участников. Устойчивая модель выдерживает просадку притока без критических сбоев. Неустойчивая ломается при первом замедлении. Устойчивость определяется источником денег и балансом обязательств.'
              },
              {
                q: 'Как понять перегрев?',
                a: 'Признаки, рост обещаний при падении устойчивости, агрессивный маркетинг с давлением заходи срочно, задержки выплат или изменение правил без объяснений, токсичная модерация с запретом вопросов, исчезновение прозрачности в коммуникации. Если видите несколько признаков одновременно, система на стадии замедления или стресса.'
              },
              {
                q: 'Что делать, если я не понимаю механику?',
                a: 'Не входить. Если вы не понимаете, откуда берутся деньги, как устроен баланс притока и оттока, и на какой стадии находится система, вы входите вслепую. Это главный риск. Лучше потратить время на понимание, чем потерять деньги из-за непонимания.'
              }
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-2 border-[#E3DDD4] rounded-[18px] px-6 shadow-sm">
                <AccordionTrigger className="text-[17px] font-semibold text-[#121417] hover:text-[#B8945E] py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-[#4E5560] leading-[1.65] pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section id="disclaimer" className="py-24 px-6 bg-[#EFEAE2]">
        <div className="max-w-[1180px] mx-auto">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-[#B8945E] rounded-[22px] shadow-lg">
            <CardContent className="p-10 space-y-6">
              <div className="flex items-center gap-4 justify-center">
                <div className="w-14 h-14 rounded-full bg-[#B8945E] flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-[32px] font-semibold text-[#121417]">Важно</h2>
              </div>
              <Separator className="bg-[#B8945E]/20" />
              <div className="space-y-4 text-[18px] text-[#121417] leading-[1.65] max-w-3xl mx-auto">
                <p className="font-semibold">
                  Все материалы носят образовательный и информационный характер и не являются инвестиционной рекомендацией.
                </p>
                <p className="font-semibold">
                  Я не обещаю прибыль и не гарантирую доходность.
                </p>
                <p>
                  Я не брокер, не посредник и не управляю средствами клиентов.
                </p>
                <p className="font-semibold">
                  Любые решения вы принимаете самостоятельно и несете за них ответственность.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-24 px-6">
        <div className="max-w-[1180px] mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-[34px] md:text-[36px] font-semibold text-[#121417] mb-4">
              Связаться со мной
            </h2>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-6">
            <p className="text-[18px] text-[#4E5560] leading-[1.65]">
              Подписывайтесь на Telegram. Там разборы моделей, логика систем, риск-карты и понятные объяснения.
            </p>
            <Button
              size="lg"
              className="bg-[#B8945E] hover:bg-[#A88552] text-white px-10 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://t.me/top_investmentss', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Перейти в Telegram-канал
            </Button>
          </div>

          <Separator className="bg-[#E3DDD4]" />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card 
              className="bg-white border-2 border-green-600/30 hover:border-green-600/50 transition-all cursor-pointer rounded-[20px] shadow-md"
              onClick={() => window.open('https://wa.me/77003866509', '_blank')}
            >
              <CardContent className="p-8 flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#121417] text-sm mb-2">WhatsApp</div>
                  <div className="text-xl text-[#121417] font-medium">+7 700 386 6509</div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="bg-white border-2 border-blue-600/30 hover:border-blue-600/50 transition-all cursor-pointer rounded-[20px] shadow-md"
              onClick={() => window.open('https://t.me/VeniaminLV', '_blank')}
            >
              <CardContent className="p-8 flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#121417] text-sm mb-2">Telegram</div>
                  <div className="text-xl text-[#121417] font-medium">+7 700 386 6509</div>
                  <div className="text-xs text-[#4E5560] mt-2">Ник: @VeniaminLV</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#EFEAE2] border-t border-[#E3DDD4]">
        <div className="max-w-[1180px] mx-auto text-center space-y-3">
          <p className="text-sm font-semibold text-[#121417]">© Вениамин Левитан. Аналитика финансовых моделей и образование.</p>
          <p className="text-xs text-[#4E5560]">
            Все материалы носят информационный характер и не являются инвестиционной рекомендацией.
          </p>
        </div>
      </footer>
    </div>
  );
}