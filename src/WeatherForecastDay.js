import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="card">
      <span className="emojii">
        <WeatherIcon code={props.data.weather[0].icon} />{" "}
      </span>
      <div className="card-body">
        <div className="card-text">
          {" "}
          H: {Math.round(props.data.temp.max)}° <br /> L:{" "}
          {Math.round(props.data.temp.min)}° <br />
          <div className="forecast-day"> {day()}</div>{" "}
        </div>
      </div>
    </div>
  );
}
