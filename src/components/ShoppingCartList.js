import React from "react";

export default function ShoppingCartList(props) {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
    </>
  );
}
