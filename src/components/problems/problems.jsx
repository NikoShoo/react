import './problems.css';

const items = [
  'Вы устаете, даже если выспались',
  'Тянет на сладкое каждые 2–3 часа',
  'Вес не уходит, несмотря на питание',
];

export default function Problems() {
  return (
    <section className="problems">
      <div className="container">
        <h2>Что вас беспокоит?</h2>

        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="warning">
          Возможно дело в скачках сахара
        </p>
      </div>
    </section>
  );
}
