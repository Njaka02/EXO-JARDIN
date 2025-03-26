import "../styles/Cart.css";
import { useEffect, useState } from "react";

export default function Cart({ cart, updateCart }) {
  const [isOpen, isClose] = useState(true);

  const total = cart
    .reduce((acc, plantType) => acc + plantType.price * plantType.amount, 0)
    .toFixed(2);
  useEffect(() => {
    document.title = `LMJ: ${total}$ d'achats`;
  }, [total]);

  return isOpen ? (
    <div className="lmj-cart">
      <button onClick={() => isClose(false)} className="lmj-cart-toggle-button">
        Fermer le panier
      </button>
      <h2>Panier</h2>

      {cart.map(({ name, price, amount }, index) => (
        <div key={`${index}`}>
          {name} {price}$ x {amount}
        </div>
      ))}

      <h3>Total : {total}$</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button onClick={() => isClose(true)} className="lmj-cart-toggle-button">
        Ouvrir le panier
      </button>
    </div>
  );
}
