import React, { useState } from "react";
import { useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const API_KEY = API_KEY;

  const getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then((response) => response.json)
      .then((json) => {
        console.log(json);
        const temp = json.main.temp;
        const place = json.name;
        setWeather(`${temp} @ ${place}`);
      });
  };

  const handleGeoSucces = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  };
  const handleGeoError = () => {
    console.log("error");
  };

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  };

  useEffect(() => {
    askForCoords();
  });

  return <div className="js-weather">{weather && <p>{weather}</p>}</div>;
};

export default Weather;
