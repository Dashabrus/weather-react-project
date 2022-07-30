import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    temperature: 28,
    feels: 22,
    dateTime: "Thursday, 7.07 18:32",
    description: "Overcast clouds",
    mainEmojii: "☁️",
    windSpeed: 1,
    hum: 62,
    locationEmoji: "📍",
  };

  return (
    <div className="mainBody">
      <div className="row justify-content-between">
        <div className="col-8">
          <h1 className="header"> {weatherData.city} </h1>
          <p className="currentdt"> {weatherData.dateTime}</p>
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
            <button className="currentLocation">
              {weatherData.locationEmoji} Location
            </button>
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
}
