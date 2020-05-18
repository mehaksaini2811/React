import React from "react";
import Form from "./components/form";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <p>Helps you find weather conditions in cities</p>
        <Form />
      </div>
    );
  }
}
