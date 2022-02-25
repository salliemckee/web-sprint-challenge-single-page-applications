import React from "react";

const PizzaForm = () => {
  return (
    <form id="pizza-form">
      <div className="pizza-form submit">
        <h3>
          Please fill out all available boxes and hit "Submit" to place your
          order.
        </h3>
        <label>
          Name&nbsp;
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="Type your name here"
          ></input>
        </label>
        <label>
          &nbsp;Pizza Size&nbsp;
          <select id="size-dropdown" name="size" type="dropdown">
            <option value="">---Select Pizza Size---</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <h4>Select Toppings Here:</h4>
        <label>
          &nbsp;Onions&nbsp;
          <input name="onions" type="checkbox"></input>
        </label>
        <label>
          &nbsp;Tomatos&nbsp;
          <input name="tomatoes" type="checkbox"></input>
        </label>
        <label>
          &nbsp;Bell Peppers&nbsp;
          <input name="bellPeppers" type="checkbox"></input>
        </label>
        <label>
          &nbsp;Roasted Garlic&nbsp;
          <input name="roastedGarlic" type="checkbox"></input>
        </label>
      </div>
    </form>
  );
};

export default PizzaForm;
