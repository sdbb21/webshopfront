import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import UserPage from "./pages/UserPage";
import OrderPage from "./pages/OrderPage";
import NavBar from "./components/NavBar";
import Backoffice from "./pages/Backoffice";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route exact path="/" component={HomePage} />
        <Route path="/order" component={OrderPage} /> */}

        <Route path="/signup" component={UserPage} />
        <Route path="/login" component={AuthPage} />

        <Route exact path="/backoffice" component={Backoffice} />
        <Route exact path="/" component={HomePage} />

        <Route path="/order" component={OrderPage} />
      </Switch>
    </div>
  );
}

export default App;
