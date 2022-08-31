import './style.scss';

async function getWeatherData(city) {

  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=metric&appid=f0230951adbf6fbf33eb40741168ca99`, { mode: 'cors' });

  if (response.status === 400) {
    throw new Error(response.statusText);
  }

  return response;
}

async function processResponse(promise) {
  let response = await promise;
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

function createCardDOM(data) {
  let card = document.createElement('div');
  card.classList.add('card');

  let row = document.createElement('div');
  row.classList.add('row');
  card.append(row);

  let h1 = document.createElement('h1');
  h1.innerText = `${data.name}, ${data.temp}°C`;
  row.append(h1);

  let img = document.createElement('img');
  img.src = `http://openweathermap.org/img/wn/${data.weather}@2x.png`;
  row.append(img);

  let p1 = document.createElement('p');
  p1.innerText = `Feels like: ${data.feelsTemp}°C`;
  card.append(p1)

  let p2 = document.createElement('p');
  p2.innerText = `Humidity: ${data.humidity}%`;
  card.append(p2)

  let p3 = document.createElement('p');
  p3.innerText = `Wind speed: ${data.windSpeed} m/s`;
  card.append(p3)

  return card;
}

function handleNewCity(cityName) {
  let responsePromise = getWeatherData(cityName);

  responsePromise
    .then(response => {
      let dataPromise = processResponse(responsePromise);

      dataPromise.then(data => {
        main.replaceChild(createCardDOM(data), main.firstElementChild)
      })
    })
    .catch(error => {
      alert("Incorrect City Name");
    })
}

const main = document.querySelector('main');
const form = document.forms[0];
const input = form.city;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  handleNewCity(input.value);
});