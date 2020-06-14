import React from "react";
import { logout } from "../store/auth/actions";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout);
  }

  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  return (
    <div>
      <nav className="navbar">
        <NavLink className="NavLink" to="/" isActive={checkActive}>
          Webshop
        </NavLink>
        <NavLink className="NavLink" to="/signup">
          Sign up
        </NavLink>
        {!user.firstName ? (
          <NavLink className="NavLink" to="/login">
            Log in
          </NavLink>
        ) : (
          <>
            <button onClick={handleLogout}>Log out</button>
          </>
        )}{" "}
        <NavLink className="NavLink" to="/order">
          Order Page
        </NavLink>
      </nav>
    </div>
  );
}
