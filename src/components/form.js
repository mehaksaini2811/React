import React, { useState } from "react";
import axios from "axios";

const Form = props => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleChange = event => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    if (fieldName === "city") {
      setCity(fieldValue);
    } else if (fieldName === "country") {
      setCountry(fieldValue);
    }
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.loadWeather();
        }}
      >
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="country"
          name="country"
          onChange={handleChange}
        />
        <button>Get Weather</button>
      </form>
    </div>
  );
};
export default Form;
