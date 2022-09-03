import {unitsSign, speedUnits} from './units';

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

export function appendCard(data, place) {
  place.replaceChild(createCardDOM(data), place.firstElementChild);
}