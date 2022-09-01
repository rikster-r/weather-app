import './style.scss';

async function getWeatherData(city) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=${units}&appid=f0230951adbf6fbf33eb40741168ca99`,
    { mode: 'cors' }
  );

  if (response.status === 400) {
    throw new Error(response.statusText);
  }

  return response;
}

async function processResponse(response) {
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
  h1.innerText = `${data.name}, ${data.temp}${unitsSign}`;
  row.append(h1);

  let img = document.createElement('img');
  img.src = `http://openweathermap.org/img/wn/${data.weather}@2x.png`;
  row.append(img);

  let p1 = document.createElement('p');
  p1.innerText = `Feels like: ${data.feelsTemp}${unitsSign}`;
  card.append(p1)

  let p2 = document.createElement('p');
  p2.innerText = `Humidity: ${data.humidity}%`;
  card.append(p2)

  let p3 = document.createElement('p');
  p3.innerText = `Wind speed: ${data.windSpeed}${speedUnits}`;
  card.append(p3)

  return card;
}

async function handleNewCity(cityName) {
  try {
    let response = await getWeatherData(cityName);
    let data = await processResponse(response);
    main.replaceChild(createCardDOM(data), main.firstElementChild);
  } catch {
    alert('Incorrect City Name');
  }
}

const form = document.forms[0];
const searchBar = form.city;
const main = document.querySelector('main');
const unitsCheckbox = document.querySelector('[data-units-checkbox]');
unitsCheckbox.checked = false;

let units = 'metric';
let unitsSign = '°C';
let speedUnits = 'm/s';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  handleNewCity(searchBar.value);
});

unitsCheckbox.addEventListener('change', function (e) {
  if (e.target.checked) {
    units = 'imperial';
    unitsSign = '°F';
    speedUnits = 'mph';
  } else {
    units = 'metric';
    unitsSign = '°C';
    speedUnits = 'm/s';
  }

  if (main.firstElementChild.innerHTML) { //if card already shown
    handleNewCity(searchBar.value)
  }
})