import axios from "axios";
import { API_URL } from "../../config";

// export async function displayCurrentCart() {
//   return { type: "DISPLAY_CURRENT_CART", payload: data };
// }

export const checkout = () => {
  return async (dispatch, getState) => {
    console.log("got here ", getState().orders);
    const productIds = getState().orders.productIds;

    const response = axios.post(`${API_URL}/orders`, {
      userId: 1,
      productIds,
    });
  };
};
