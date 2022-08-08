import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="current_temp">
        {props.celsius}
        <span className="units">
          <a href="/" className="active">
            °C
          </a>
          &#124;
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="current_temp">
        {fahrenheit()}
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          &#124;
          <a href="/" className="active">
            °F
          </a>
        </span>
      </div>
    );
  }
}
