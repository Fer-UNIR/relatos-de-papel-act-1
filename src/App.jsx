import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import BookPage from "./components/BookPage";
import CheckoutPage from "./components/CheckoutPage";
import MainLayout from "./components/MainLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;