import { createSelector } from "reselect";

const selectDirecory = (state) => {
  return state.directory;
};

export const selectDirectorySections = createSelector(
  [selectDirecory],
  (directory) => {
    return directory.sections;
  },
);
