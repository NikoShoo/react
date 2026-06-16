import './hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="hero__text">
          <h1>
            <span>PRO</span> САХАР
          </h1>

          <p className="hero__subtitle">
            Персональная настройка питания и метаболизма
            через датчик глюкозы
          </p>

          <h2>
            Узнайте, какие продукты повышают ваш сахар
          </h2>

          <p>
            и мешают худеть, спать и чувствовать энергию
          </p>

          <button>
            За 14 дней с датчиком глюкозы
          </button>
        </div>

        <div className="hero__image">
          <img
            src="/images/hero-girl.png"
            alt="Девушка"
          />
        </div>
      </div>
    </section>
  );
}
