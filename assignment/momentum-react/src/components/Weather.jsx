import { useEffect, useState } from "react";
import apiKey from "./apikey.js";
const { API_KEY } = apiKey;

export default function Weather() {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("");

  function getWeather(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        setTemp(`${json.main.temp}℃`);
        setWeather(json.weather[0].description);
        setLocation(json.name);
      });
  }

  function handleGeoSuccess(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    getWeather(latitude, longitude);
  }

  function handleGeoError() {
    console.log("error!");
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }, []);

  return (
    <header className="weather">
      <p>
        {temp}/{weather}
      </p>
      <p>{location}</p>
    </header>
  );
}
