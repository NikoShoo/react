const products = [
  {
    id: 1,
    title: 'Диагностика',
    description: 'НМГ 10-14 дней',
  },
  {
    id: 2,
    title: 'Разбор',
    description: 'Консультация',
  },
  {
    id: 3,
    title: 'Сопровождение',
    description: '1 месяц ведения',
  },
  {
    id: 4,
    title: 'Премиум',
    description: 'Полный пакет',
  },
];

export default function Products() {
  return (
    <section className="products">
      <div className="container">
        <h2>Продуктовая линейка</h2>

        <div className="products__grid">
          {products.map((product) => (
            <div
              className="product-card"
              key={product.id}
            >
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
