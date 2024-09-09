import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart() {
  const contextCart = useContext(CartContext);

  return contextCart;
}
