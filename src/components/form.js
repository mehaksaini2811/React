import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  var apiUrl =
    "api.openweathermap.org/data/2.5/weather?q=seattle&appid=9a86288d70cb4dccd3ee569d6921af39";
  const [url, setUrl] = useState(apiUrl);
  const [responseObj, setResponse] = useState("");

  const handleChange = event => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    if (fieldName === "city") {
      setCity(fieldValue);
    } else if (fieldName === "country") {
      setCountry(fieldValue);
    }
  };
  const getWeather = async e => {
    e.preventDefault();
    await axios
      .get("./weatherData.json/")
      .then(response => {
        console.log(response.data);
      })
      .catch(() => {
        alert("error");
      });
  };
  return (
    <div>
      <form onSubmit={getWeather}>
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
      <p>{JSON.stringify(responseObj)}</p>
    </div>
  );
};
export default Form;
