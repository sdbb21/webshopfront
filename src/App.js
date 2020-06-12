import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import OrderPage from "./pages/OrderPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import UserPage from "./pages/UserPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* more pages to be added here later */}
        <Route path="/login" component={AuthPage} />
        <Route path="/order/cart" component={OrderPage} />
        <Route component={HomePage} />
      </Switch>{" "}
    </div>
  );
}

export default App;
