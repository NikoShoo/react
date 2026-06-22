const steps = [
  'Установка датчика',
  '10-14 дней наблюдения',
  'Сопровождение',
  'Разбор результатов',
];

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <h2>Как проходит</h2>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
