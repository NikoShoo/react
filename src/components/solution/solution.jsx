import './solution.css';

const benefits = [
  {
    title: 'Датчик без уколов',
  },
  {
    title: '24/7 отслеживание',
  },
  {
    title: 'Реакция на еду',
  },
  {
    title: 'Отчёт и рекомендации',
  },
];

export default function Solution() {
  return (
    <section className="solution">
      <div className="container">
        <h2>Решение</h2>

        <div className="solution__grid">
          {benefits.map((item) => (
            <div
              className="solution__card"
              key={item.title}
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
