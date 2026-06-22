import './audience.css';

export default function Audience() {
  return (
    <section className="audience">
      <div className="container">

        <h2>Для кого программа</h2>

        <div className="audience__grid">

          <div className="audience__card">
            Хотите снизить вес
          </div>

          <div className="audience__card">
            Испытываете постоянную усталость
          </div>

          <div className="audience__card">
            Хотите улучшить сон
          </div>

          <div className="audience__card">
            Следите за здоровьем
          </div>

        </div>

      </div>
    </section>
  );
}
