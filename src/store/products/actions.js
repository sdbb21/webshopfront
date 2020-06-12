import axios from "axios";

const API_URL = `http://localhost:5000/`;

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

export async function fetchNext5Products(dispatch, getState) {
  dispatch(startLoading());

  const res = await axios.get(`${API_URL}/products`);

  const moreProducts = res.data.rows;

  dispatch(productsFetched(moreProducts));
}
