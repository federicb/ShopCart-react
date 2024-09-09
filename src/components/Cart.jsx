import { useId } from "react";
import "./Cart.css";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export function CartItem({ thumbnail, title, price, quantity, addToCart, decreaseQuantity }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - {price}€
      </div>
      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={decreaseQuantity}>-</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartIconId = useId();
  const { cart, addToCart, decreaseQuantity, clearCart } = useCart();
  return (
    <>
      <label htmlFor={cartIconId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartIconId} hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => {
            return (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                decreaseQuantity={() => decreaseQuantity(product)}
                {...product}
              />
            );
          })}
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
