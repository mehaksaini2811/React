import React from "react";
import Weather from "./components/weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <p>Helps you find weather conditions in cities</p>
        <Weather />
      </div>
    );
  }
}
