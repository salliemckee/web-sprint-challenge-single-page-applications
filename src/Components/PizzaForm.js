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
          <select
            id="size-dropdown"
            name="size"
            type="dropdown"
            placeholder="Select pizza size"
          ></select>
        </label>
      </div>
    </form>
  );
};

export default PizzaForm;
