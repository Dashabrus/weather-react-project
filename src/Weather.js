import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponce(responce) {
    setWeatherData({
      ready: true,
      temperature: Math.round(responce.data.main.temp),
      hum: responce.data.main.humidity,
      dateTime: "Thursday, 12:54",
      mainEmojii: "☁️",
      description:
        responce.data.weather[0].description.charAt(0).toUpperCase() +
        responce.data.weather[0].description.slice(1),
      windSpeed: Math.round(responce.data.wind.speed),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="mainBody">
        <div className="row justify-content-between">
          <div className="col-8">
            <h1 className="header"> {props.defaultCity} </h1>
            <p className="current_dt"> {weatherData.dateTime}</p>
          </div>
          <div className="col-4">
            <form className="city-form">
              <input
                type="text"
                className="form-search"
                placeholder="🔍 Search for a city..."
                autoComplete="off"
              />
            </form>
            <span className="page">
              <button className="currentLocation">📍 Location</button>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="current_temp">
              {weatherData.temperature}
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>
                &#124;
                <a href="/">°F</a>
              </span>
            </div>
            <p className="emojii_main"> {weatherData.mainEmojii}</p>
            <div className="description">"{weatherData.description}"</div>
            <div className="feels">Feels like {weatherData.feels}°C</div>
          </div>
          <div className="col-5 climate mb-2 mt-4">
            <span>Wind: {weatherData.windSpeed} km/h</span>
            <br />
            <span>Humidity: {weatherData.hum}%</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6a809824c32cedbbe5da28815dd90f96";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);

    const override = {
      display: "block",
      margin: "0 auto",
      marginTop: "90px",
    };

    return <ClipLoader color={"#163541"} cssOverride={override} size={"150"} />;
  }
}
