getCurrentWeather = async (city) => {
  let apiKey = config.apiKey;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  let response = await fetch(url);

  if (response.ok) {
    let weather = await response.json();
    let currentTemperature = Math.round(weather.main.temp) - 273;
    return currentTemperature;
  } else return "City does not exist";
};
