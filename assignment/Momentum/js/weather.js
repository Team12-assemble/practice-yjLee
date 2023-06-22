const weather = document.querySelector("#weatherAPI span:first-child");
const city = document.querySelector("#weatherAPI span:last-child");

const getWeatherInfo = () => {
  const cityName = "Seoul";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error occured!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${(
        data.main.temp - 273.15
      ).toFixed(2)}`;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

getWeatherInfo();
