import React, { useState } from "react";
import axios from "axios";

export default function HighestLowestTemp(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponce(responce) {
    setForecast(responce.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="hl">
          H:{Math.round(forecast[0].temp.max)} | L:
          {Math.round(forecast[0].temp.min)}
        </div>
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
