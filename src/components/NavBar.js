import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Switch, Route } from "react-router-dom";
import { selectOrder } from "../store/orders/selector";

export default function NavBar() {
  const order = useSelector(selectOrder);
  console.log("What is my order", order);
  console.log("and how big is it?", order.productIds.length);
  const totalItems = order.productIds.length;
  return (
    <div>
      {" "}
      {/* //hey people ! */}
      <nav className="navbar">
        <NavLink className="NavLink" to="/">
          Webshop
        </NavLink>
        <NavLink className="NavLink" to="/signup">
          Sign up
        </NavLink>
        <NavLink className="NavLink" to="/login">
          Log in
        </NavLink>
        <NavLink className="NavLink" to="/backoffice">
          backoffice
        </NavLink>
        <NavLink className="NavLink" to="/order">
          Order Page
        </NavLink>
        <p>Items: {totalItems}</p>
      </nav>
    </div>
  );
}
