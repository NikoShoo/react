import './expert.css';

export default function Expert() {
  return (
    <section className="expert">
      <div className="container expert__content">

        <div className="expert__image">
          {/* <img src={expertImage} alt="Эксперт" /> */}
          <img src="https://placehold.co/350x450" alt="" />
        </div>

        <div className="expert__info">
          <h2>Ваш эксперт</h2>

          <h3>Анна Иванова</h3>

          <p>
            Нутрициолог и специалист по метаболическому здоровью.
          </p>

          <p>
            Более 10 лет помогает людям улучшать качество жизни.
          </p>
        </div>

      </div>
    </section>
  );
}
