import { createSelector } from "reselect";

const selectShop = (state) => {
  return state.shop;
};

export const selectCollections = createSelector(
  [selectShop],
  (shop) => {
    return shop.collections;
  },
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]),
);

export const selectCollection = (collectionUrlParam) => {
  return createSelector(
    [selectCollections],
    (collections) => {
      // return collections.find((collection) => {
      //   return collection.id === COLLECTION_ID_MAP[collectionUrlParam];
      // });
      return collections[collectionUrlParam];
    },
  );
};
