import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({info}) => {
  return (
    <div className="weather">

      <div className="top">
     
        <div>
          <p className="city">{info.city}</p>
          <p className="weather-description">{info.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${info.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(info.main.temp)}°C</p>
        <div className="details">
          {/* <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div> */}
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(info.main.feels_like)}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{Math.round(info.wind.speed)} m/s</span>
          </div> 
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{Math.round(info.main.humidity)}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{Math.round(info.main.pressure)} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
