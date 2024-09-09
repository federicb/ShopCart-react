import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialCartState = [];
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART": {
      const { id } = payload;

      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newCartState = structuredClone(state);
        newCartState[productInCartIndex].quantity += 1;
        return newCartState;
      }

      return [
        ...state,
        {
          ...payload,
          quantity: 1,
        },
      ];
    }

    case "DECREASE_QUANTITY": {
      const { id } = payload;

      return state
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    }

    case "REMOVE_FROM_CART": {
      const { id } = payload;

      return state.filter((item) => item.id !== id);
    }

    case "CLEAR_CART": {
      return initialCartState;
    }
  }
  return state;
};

export function CartProvider({ children }) {
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

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
