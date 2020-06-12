import { combineReducers } from "redux";
import auth from "./auth/reducer";
import orders from "./orders/reducer";
import products from "./products/reducer";
import user from "./user/reducer";

const reducer = combineReducers({
  auth: auth,
  orders: orders,
  products: products,
  user: user,
});

export default reducer;
