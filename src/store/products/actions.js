import axios from "axios";

const API_URL = `http://localhost:5001`;

export function startLoading() {
  return {
    type: "products/Loading",
  };
}

export function productsFetched(moreProducts) {
  return {
    type: "products/Fetched",
    payload: moreProducts,
  };
}

export function fetchNext5Products() {
  return async function thunk(dispatch, getState) {
    dispatch(startLoading());
    try {
      console.log("hey hey");
      const res = await axios.get(`${API_URL}/products`);
      const moreProducts = res.data;
      console.log("What is my res", res.data);

      dispatch(productsFetched(moreProducts));
    } catch (e) {
      console.log(e);
    }
  };
}
