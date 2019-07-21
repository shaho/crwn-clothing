import { createSelector } from "reselect";

const selectUser = (state) => {
  return state.user;
};

export const selecCurrentUser = createSelector(
  [selectUser],
  (user) => {
    return user.currentUser;
  },
);
