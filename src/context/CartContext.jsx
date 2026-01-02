import { createContext, useContext, useReducer, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "INIT_CART":
      return action.payload;

    case "ADD_ITEM": {
      const existing = state.find((i) => i.id === action.payload.id);

      if (existing) {
        return state.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_ITEM":
      return state.filter((i) => i.id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [storedCart, setStoredCart] = useLocalStorage("rp_cart", []);
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    dispatch({ type: "INIT_CART", payload: storedCart });
  }, []);

  useEffect(() => {
    setStoredCart(cart);
  }, [cart, setStoredCart]);

  const addToCart = (book) => {
    dispatch({ type: "ADD_ITEM", payload: book });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };