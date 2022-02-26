import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import PizzaForm from "./Components/PizzaForm";
import schema from "./validation/formSchema";
import * as yup from "yup";
import axios from "axios";

const initialFormValues = {
  name: "",
  size: "",
  onions: false,
  tomatoes: false,
  bellPeppers: false,
  roastedGarlic: false,
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

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [orders, setOrders] = useState([]);

  const handleSubmit = () => {
    axios
      .post("https://reqres.in/api/orders", formValues)
      .then((res) => {
        console.log(res);
        // setOrders([res.data, ...orders]);
      })
      .catch((err) => console.error(err));
  };
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() =>
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      )
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
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
          <PizzaForm
            values={formValues}
            change={inputChange}
            errors={formErrors}
            submit={handleSubmit}
          />
          {orders.map((order) => {
            return (
              <div key={order.id}>
                <p>{order.name}</p>
              </div>
            );
          })}
        </Route>
      </Switch>
    </div>
  );
};
export default App;
