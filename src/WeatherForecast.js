import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponce(responce) {
    setForecast(responce.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast[0]} />
        </div>{" "}
      </div>
    );
  } else {
    const apiKey = `6a809824c32cedbbe5da28815dd90f96`;
    const lat = props.coord.lat;
    const lon = props.coord.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponce);

    return null;
  }
}
