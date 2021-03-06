import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// Actual localStorage object on our wondow browser
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryRducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rooReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryRducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rooReducer);
