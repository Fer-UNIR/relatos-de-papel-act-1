import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";

function MainLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Header onOpenCart={() => setIsCartOpen(true)} />
      <Outlet />
      <Footer />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default MainLayout;