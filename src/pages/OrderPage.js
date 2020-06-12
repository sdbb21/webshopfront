import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../store/orders/actions";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  //   useEffect(() => {
  //     dispatch(fetchCart(id));
  //   }, [dispatch, id]);
  return (
    <div>
      <h1>Your shopping cart</h1>
    </div>
  );
}
