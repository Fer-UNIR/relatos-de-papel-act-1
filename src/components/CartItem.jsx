import "../styles/cart.css";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart__item">
      <img
        className="cart__item-cover"
        src={item.cover}
        alt={`Portada de ${item.title}`}
      />

      <div className="cart__item-info">
        <p className="cart__item-title">{item.title}</p>
        <p className="cart__item-meta">
          {item.quantity} × ${item.price.toLocaleString("es-CL")}
        </p>
      </div>

      <button
        className="cart__item-remove"
        onClick={() => onRemove(item.id)}
        aria-label={`Quitar ${item.title} del carrito`}
      >
        ✕
      </button>
    </div>
  );
}

export default CartItem;