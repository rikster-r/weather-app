import {units} from './units';

export async function getWeatherData(city) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=${units}&appid=f0230951adbf6fbf33eb40741168ca99`,
    { mode: 'cors' }
  );

  if (response.status === 400) {
    throw new Error(response.statusText);
  }

  return response;
}

export async function processResponse(response) {
  let data = await response.json();

  let requiredData = {
    name: data.name,

    temp: data.main.temp,
    feelsTemp: data.main.feels_like,
    humidity: data.main.humidity,

    windSpeed: data.wind.speed,
    weather: data.weather['0'].icon,
  }

  return requiredData;
}