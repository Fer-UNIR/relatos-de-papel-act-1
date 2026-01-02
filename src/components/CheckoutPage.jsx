import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import OrderSummary from "./OrderSummary";
import "../styles/checkout.css";

function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const handlePay = () => {
    alert("Pedido realizado");
    clearCart();
    navigate("/home");
  };

  if (cart.length === 0) {
    return (
      <main className="checkout">
        <h2 className="checkout__title">Checkout</h2>
        <p className="checkout__empty">No tienes productos en el carrito.</p>
        <Link className="checkout__back" to="/home">
          Volver al catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="checkout">
      <h2 className="checkout__title">Checkout</h2>
      <p className="checkout__text">
        Revisa tu pedido antes de finalizar la compra.
      </p>

      <OrderSummary items={cart} />

      <button className="checkout__pay" onClick={handlePay}>
        Pagar
      </button>
    </main>
  );
}

export default CheckoutPage;