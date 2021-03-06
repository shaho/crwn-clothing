import { createSelector } from "reselect";

const selectCart = (state) => {
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => {
    return cart.cartItems;
  },
);

export const selectorCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0,
    );
  },
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => {
    return cart.hidden;
  },
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0,
    );
  },
);
