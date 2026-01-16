# Вениамин Левитан - Личный сайт эксперта по инвестициям

## Концепция дизайна

### Референсы дизайна
- **Основной стиль**: https://popovajulia.com/investart - чистый, минималистичный, профессиональный
- **Подход**: Спокойный, элегантный, много воздуха, светлый фон, премиальная типографика

### Цветовая палитра
- Primary Background: #FFFFFF (Белый)
- Secondary Background: #F8F9FA (Очень светло-серый)
- Accent Background: #F0F4F8 (Светло-голубой для карточек)
- Primary Text: #1A1A1A (Почти черный)
- Secondary Text: #6B7280 (Серый)
- Accent Color: #2C5F8D (Глубокий синий - для кнопок и акцентов)
- Border: #E5E7EB (Светло-серый)
- Warning Background: #FEF3C7 (Светло-желтый для disclaimer)

### Типографика
- Heading1: Inter font-weight 700 (56px desktop, 36px mobile)
- Heading2: Inter font-weight 600 (40px desktop, 28px mobile)
- Heading3: Inter font-weight 600 (28px desktop, 22px mobile)
- Body Large: Inter font-weight 400 (18px)
- Body Normal: Inter font-weight 400 (16px)
- Body Small: Inter font-weight 400 (14px)
- Navigation: Inter font-weight 500 (15px)

### Ключевые элементы стиля
- **Кнопки**: Синий фон (#2C5F8D), белый текст, 8px rounded, мягкая тень, hover: осветление на 10%
- **Карточки**: Белый фон, 1px серая граница, 16px rounded, мягкая тень при hover
- **Фото эксперта**: 
  - Hero: большое (400-500px), rounded-2xl (16px), мягкая тень
  - Avatar: маленькое круглое (80px), в секции "Мой подход"
- **Иконки**: Lucide React, размер 24px, цвет #2C5F8D

### Layout и отступы
- Hero section: Full viewport height, двухколоночный на desktop
- Максимальная ширина контента: 1200px
- Отступы секций: 80px vertical (desktop), 60px (mobile)
- Отступы карточек: 24px padding
- Grid gaps: 32px

### Изображения для генерации
1. **Фото эксперта используется из загруженного файла** - мужчина в костюме, пожимающий руку
   - Использование: Hero section (большое), секция "Мой подход" (аватар)
   - Обработка: обрезка по грудь, rounded corners, мягкая тень

2. **background-pattern-light.png** - Минималистичный светлый паттерн для фона секций (Style: minimal, geometric, light gray on white)

3. **icon-analytics.svg** - Иконка аналитики для секции моделей (Style: line icon, blue)

4. **icon-education.svg** - Иконка образования для disclaimer (Style: line icon, blue)

---

## План разработки

### 1. Подготовка структуры
- Обновить index.html с правильным title и meta
- Настроить глобальные стили в index.css
- Подготовить uploaded фото эксперта в public/assets/

### 2. Компоненты
- Header с навигацией (sticky)
- Hero секция с фото эксперта
- Секция "Как работают онлайн-инвестиции"
- Секция "Аналитика финансовых моделей" (5 карточек)
- Секция "Мой подход" с аватаром
- Disclaimer секция
- CTA + Контакты
- Footer

### 3. Навигация
- Sticky header с якорными ссылками
- Плавная прокрутка
- Мобильное меню (hamburger)

### 4. Адаптивность
- Desktop: 1200px+ (двухколоночные layouts)
- Tablet: 768px-1199px
- Mobile: до 767px (одноколоночные layouts, фото над текстом)

### 5. Финальная проверка
- Lint check
- Build
- UI rendering check