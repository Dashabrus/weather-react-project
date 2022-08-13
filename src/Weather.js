import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import DateTime from "./DateTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import WeatherForecast from "./WeatherForecast";
import HighestLowestTemp from "./HighestLowestTemp";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function search() {
    const apiKey = "6a809824c32cedbbe5da28815dd90f96";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponce(responce) {
    setWeatherData({
      coord: responce.data.coord,
      ready: true,
      temperature: Math.round(responce.data.main.temp),
      hum: responce.data.main.humidity,
      dateTime: new Date(responce.data.dt * 1000),
      mainEmojii: responce.data.weather[0].icon,
      description:
        responce.data.weather[0].description.charAt(0).toUpperCase() +
        responce.data.weather[0].description.slice(1),
      windSpeed: Math.round(responce.data.wind.speed),
      city: responce.data.name,
      feels: Math.round(responce.data.main.feels_like),
      highest: Math.round(responce.data.main.temp_max),
      lowest: Math.round(responce.data.main.temp_min),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="mainBody">
        <div className="row justify-content-between">
          <div className="col-8">
            <h1 className="header"> {weatherData.city} </h1>
            <span>
              {" "}
              <DateTime date={weatherData.dateTime} className="current_dt" />
            </span>
          </div>
          <div className="col-4">
            <form className="city-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-search"
                placeholder="🔍 Search for a city..."
                autoComplete="off"
                onChange={handleCityChange}
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <WeatherTemp celsius={weatherData.temperature} />
            <span className="emojii_main">
              {" "}
              <WeatherIcon code={weatherData.mainEmojii} />
            </span>
            <div className="description">"{weatherData.description}"</div>
            <HighestLowestTemp coord={weatherData.coord} />
            <div className="feels">Feels like {weatherData.feels}°C</div>
          </div>
          <div className="col-5 climate mb-2 mt-4">
            <span>Wind: {weatherData.windSpeed} km/h</span>
            <br />
            <span>Humidity: {weatherData.hum}%</span>
          </div>
        </div>
        <div className="container">
          <WeatherForecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    const override = {
      display: "block",
      margin: "0 auto",
      marginTop: "90px",
    };

    return (
      <ClipLoader color={"#163541"} cssOverride={override} size={"150px"} />
    );
  }
}
