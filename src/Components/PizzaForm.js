import React from "react";

const PizzaForm = (props) => {
  const { change, submit, errors } = props;
  const { name, size, onions, tomatoes, bellPeppers, roastedGarlic, special } =
    props.values;

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div className="pizza-form submit">
      <form id="pizza-form" onSubmit={onSubmit}>
        <h3>
          Please fill out all available boxes and hit "Submit" to place your
          order.
        </h3>
        <div className="errors">
          <div></div>
        </div>
        <label>
          Name&nbsp;
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="Type your name here"
            value={name}
            onChange={onChange}
          ></input>
        </label>
        <label>
          &nbsp;Pizza Size&nbsp;
          <select
            id="size-dropdown"
            name="size"
            type="dropdown"
            onChange={onChange}
          >
            <option value="">---Select Pizza Size---</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <h4>Select Toppings Here:</h4>
        <label>
          &nbsp;Onions&nbsp;
          <input
            checked={onions}
            name="onions"
            type="checkbox"
            onChange={onChange}
          ></input>
        </label>
        <label>
          &nbsp;Tomatoes&nbsp;
          <input
            checked={tomatoes}
            name="tomatoes"
            type="checkbox"
            onChange={onChange}
          ></input>
        </label>
        <label>
          &nbsp;Bell Peppers&nbsp;
          <input
            checked={bellPeppers}
            name="bellPeppers"
            type="checkbox"
            onChange={onChange}
          ></input>
        </label>
        <label>
          &nbsp;Roasted Garlic&nbsp;
          <input
            checked={roastedGarlic}
            name="roastedGarlic"
            type="checkbox"
            onChange={onChange}
          ></input>
        </label>
        <label>
          <h4>Special Instructions</h4>
          <input
            value={special}
            onChange={onChange}
            id="special-text"
            name="special"
            type="text"
          ></input>
        </label>

        <button id="order-button" onClick={onSubmit}>
          Add to Order
        </button>
      </form>
      <p>{errors.name}</p>
      <p>{errors.size}</p>
    </div>
  );
};

export default PizzaForm;
