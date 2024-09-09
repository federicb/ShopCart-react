import { useReducer } from "react";
import { cartReducer, initialCartState } from "../reducer/cartReducer";

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const decreaseQuantity = (product) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return { state, addToCart, removeFromCart, decreaseQuantity, clearCart };
}
