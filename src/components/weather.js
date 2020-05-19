import React, { useState } from "react";
import Form from "./form";
import axios from "axios";

const Weather = () => {
  const [responseObj, setResponseObj] = useState({});
  const [description, setDescription] = useState();
  const [temperature, setTemperature] = useState();
  const [feelsLike, setFeelsLike] = useState();
  const getWeather = async () => {
    await axios
      .get("./weatherData.json/")
      .then(response => {
        response.data.weather.map(weatherData => {
          setDescription(weatherData.description);
          console.log(description);
        });
        setResponseObj(response.data);
        setTemperature(response.data.main.temp);
        setFeelsLike(response.data.main.feels_like);
        console.log(response.data.main.temp);
        console.log(feelsLike);
      })
      .catch(() => {
        alert("error");
      });
  };
  return (
    <div>
      <Form loadWeather={getWeather} />
      <p>Temperature:{temperature}</p>
      <p>Consitions:{description}</p>
      <p>Feels Like:{feelsLike}</p>
    </div>
  );
};
export default Weather;
