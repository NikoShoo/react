import './results.css';

export default function Results() {
  return (
    <section className="results">
      <div className="container">

        <h2>Что вы получите</h2>

        <div className="results__grid">

          <div className="result">
            Персональный отчет
          </div>

          <div className="result">
            Анализ питания
          </div>

          <div className="result">
            Рекомендации по продуктам
          </div>

          <div className="result">
            План действий
          </div>

        </div>

      </div>
    </section>
  );
}
