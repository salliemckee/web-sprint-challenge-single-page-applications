import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import PizzaForm from "./Components/PizzaForm";

const initialFormValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  special: "",
};

const initialFormErrors = {
  name: "",
};

const initialOrders = [];

const App = () => {
  const history = useHistory();
  const routeToPizza = () => {
    history.push("/pizza");
  };
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <h1 className="page-header">Lambda Eats</h1>
          <p>Your favorite food, delivered while coding</p>
          <button id="order-pizza" onClick={routeToPizza}>
            Pizza?
          </button>
        </Route>
        <Route path="/pizza">
          <h2>Get Started On Your Order!</h2>
          <PizzaForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
