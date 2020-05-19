import React, { useState } from "react";
import Form from "./form";
import axios from "axios";

const Weather = () => {
  const [responseObj, setResponseObj] = useState({});
  const [description, setDescription] = useState();
  const [weather, setWeather] = useState({});
  const getWeather = async () => {
    await axios
      .get("./weatherData.json/")
      .then(response => {
        console.log(response.data);
        setResponseObj(response.data);
      })
      .catch(() => {
        alert("error");
      });
    setWeather(responseObj.weather);
    console.log(weather);
  };
  return (
    <div>
      <Form loadWeather={getWeather} />
      <p>{responseObj.base}</p>
    </div>
  );
};
export default Weather;
