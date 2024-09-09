export const initialCartState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART": {
      const { id } = payload;

      const productInCartIndex = state.findIndex((item) => item.id === id);

      let newCartState;

      if (productInCartIndex >= 0) {
        newCartState = structuredClone(state);
        newCartState[productInCartIndex].quantity += 1;
      } else {
        newCartState = [
          ...state,
          {
            ...payload,
            quantity: 1,
          },
        ];
      }

      updateLocalStorage(newCartState);
      return newCartState;
    }

    case "DECREASE_QUANTITY": {
      const { id } = payload;

      const newCartState = state
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

      updateLocalStorage(newCartState);
      return newCartState;
    }

    case "REMOVE_FROM_CART": {
      const { id } = payload;

      const newCartState = state.filter((item) => item.id !== id);

      updateLocalStorage(newCartState);
      return newCartState;
    }

    case "CLEAR_CART": {
      updateLocalStorage(initialCartState);
      return initialCartState;
    }
  }
  return state;
};
