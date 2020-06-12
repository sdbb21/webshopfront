import React from "react";
import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import UserPage from "./pages/UserPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <div className="App">
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
        <NavLink className="NavLink" to="/order">
          Order Page
        </NavLink>
      </nav>
      <Switch>
        {/* <Route exact path="/" component={HomePage} />
        <Route path="/order" component={OrderPage} /> */}

        <Route path="/signup" component={UserPage} />
        <Route path="/login" component={AuthPage} />

       
        <Route exact path="/" component={HomePage} />

        <Route path="/order" component={OrderPage} />


      </Switch>
    </div>
  );
}

export default App;
