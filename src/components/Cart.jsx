import { useId } from "react";
import "./Cart.css";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";

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
