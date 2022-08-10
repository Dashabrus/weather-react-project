import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <span className="emojii">
            <WeatherIcon code="01d" />{" "}
          </span>
          <div className="card-body">
            <p className="card-text">
              {" "}
              H: 19° <br /> L: 16° <br />
              <div className="forecast-day"> Thu</div>{" "}
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
