import React from "react";
import { useDispatch } from "react-redux";

export default function ShoppingCartList(props) {
  const dispatch = useDispatch();
  const removeHandler = (event) => {
    console.log("remove one item from the list please", props.id);
    dispatch({ type: "REMOVE_ITEM", payload: props.id });
  };
  return (
    <>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td onClick={removeHandler}>💰</td>
    </>
  );
}
