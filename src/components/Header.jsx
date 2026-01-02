import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/header.css";

function Header({ onOpenCart }) {
  const { cart } = useCart();

  const count = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <h1 className="header__logo">
        <Link to="/home">Relatos de Papel</Link>
      </h1>

      <nav className="header__nav">
        <button className="header__cart-button" onClick={onOpenCart}>
          Carrito
          {count > 0 ? <span className="header__badge">{count}</span> : null}
        </button>
      </nav>
    </header>
  );
}

export default Header;