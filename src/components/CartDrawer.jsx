import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import "../styles/cart.css";

function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <aside className={`cart ${isOpen ? "cart--open" : ""}`}>
      <div className="cart__header">
        <h3 className="cart__title">Carrito</h3>
        <button className="cart__close" onClick={onClose} aria-label="Cerrar carrito">
          ✕
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="cart__empty">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart__list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onRemove={removeFromCart} />
            ))}
          </div>

          <div className="cart__footer">
            <p className="cart__total">
              Total: <span>${total.toLocaleString("es-CL")}</span>
            </p>

            <Link to="/checkout" className="cart__checkout" onClick={onClose}>
              Ir a pagar
            </Link>
          </div>
        </>
      )}
    </aside>
  );
}

export default CartDrawer;