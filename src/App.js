import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIShown, setCartIShown] = useState();

  function showCartHandler() {
    setCartIShown(true);
  }
  function hideCartHandler() {
    setCartIShown(false);
  }

  return (
    <CartProvider>
      {cartIShown && <div>Cart....</div>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
