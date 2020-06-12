import axios from "axios";
import { API_URL } from "../../config";

export function fetchPaidOrders() {
  return async function thunk(dispatch, getState) {
    try {
      const res = await axios.get(`${API_URL}/orders`);
      console.log("what is my response", res.data);
      dispatch({ type: "ALL_ORDERS", payload: res.data });
      //please write an action here {type: "ALL_ORDERS", payload: res.data}
      //or use an action creator: an function that returns: {type: "ALL_ORDERS", payload: res.data}
    } catch (e) {
      console.log(e);
    }
  };
}
