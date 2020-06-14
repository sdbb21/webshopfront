import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import UserPage from "./pages/UserPage";
import OrderPage from "./pages/OrderPage";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <NavBar />
      {user.firstName ? <p>Hello {user.firstName}! </p> : <span></span>}
      <Switch>
        <Route path="/signup" component={UserPage} />
        <Route path="/login" component={AuthPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/order" component={OrderPage} />
      </Switch>
    </div>
  );
}

export default App;
