import "../styles/checkout.css";

function OrderSummary({ items }) {
  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <section className="checkout__summary">
      <h3 className="checkout__subtitle">Resumen</h3>

      <div className="checkout__items">
        {items.map((item) => (
          <div key={item.id} className="checkout__item">
            <div className="checkout__item-left">
              <p className="checkout__item-title">{item.title}</p>
              <p className="checkout__item-meta">
                {item.quantity} × ${item.price.toLocaleString("es-CL")}
              </p>
            </div>

            <p className="checkout__item-subtotal">
              ${(item.price * item.quantity).toLocaleString("es-CL")}
            </p>
          </div>
        ))}
      </div>

      <div className="checkout__total">
        <span>Total</span>
        <span>${total.toLocaleString("es-CL")}</span>
      </div>
    </section>
  );
}

export default OrderSummary;