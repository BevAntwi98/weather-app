import React, { useState } from "react";
import "./App.css";

//A lot of code on one page! in the future we would have this be the parent component which would take in the child components upon render

const api = {
  key: "cc67b19dc916f461ab3e7d8d3c68bb27",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const retrieveResult = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };
  const error = () => {
    return (
        <div className="form-alert" role="alert">
            Please Enter City !
        </div>
    );
};

  const dateBuild = (D) => {

    let months = [ "January","February","March","April","May","June","July","August","September","October","November","December", ];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

    let day = days[D.getDay()];
    let date = D.getDate();
    let month = months[D.getMonth()];
    let year = D.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="weather-app">
      <header className="weather-app">
        <h3>React Weather App</h3>
      </header>

      <div
        className={
          typeof weather.main != "undefined"
            ? weather.weather[0].main === "Clouds"  ? "app cloud" : "app" &&
            weather.weather[0].main === "Clear" ? "app sunny": "app" &&
            weather.weather[0].main === "Snow" ? "app snow" : "app" &&
            weather.weather[0].main === "Rain" ? "app rain" : "app"

      : "app" }
      >

        <main>
          <div className="search-box">
            <div>
              {error ? error() : "Hey! Enter a city to get started"}
              <input
                type="text"
                className="searchbar"
                placeholder="Enter a city..."
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={retrieveResult}
                value={query}
              />
            </div>
          </div>


          {/* <div className= "button"><NextButton/></div> */}

          {typeof weather.main != "undefined" ? (
            <div className="location-box">
              <div className="main-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
                <div className="date">{dateBuild(new Date())}</div>
                <div className = "icon">{weather.weather[0].icon}</div>
                <div className="temp"> {Math.round(weather.main.temp)}°c</div>
                <div className="description">
                  {weather.weather[0].description}
                </div>
              </div>

              <div className="extra-info-box">
                <div className="feels-like">
                  Feels like: {weather.main.feels_like} °c{" "}
                </div>
                <div className="humidity">
                  Humidity: {weather.main.humidity} %
                </div>
                <div className="pressure">
                  Pressure: {weather.main.pressure} hPa
                </div>
                <div className="wind">Wind: {weather.wind.speed} mph </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </main>
        <footer className="footer">
          <h4>Created by Jamell, Bev , Meltem, Haze and Kenneth</h4>
        </footer>
      </div>
      </div>
    
  );
}
export default App;

