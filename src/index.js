import './style.scss';
import {getWeatherData, processResponse} from './dataFunctions';
import {changeUnit} from './units';
import {appendCard} from './display';

async function handleNewCity(cityName) {
  try {
    let response = await getWeatherData(cityName);
    let data = await processResponse(response);
    appendCard(data, main);
  } catch {
    alert('Incorrect City Name');
  }
}

const form = document.forms[0];
const searchBar = form.city;
const main = document.querySelector('main');
const unitsCheckbox = document.querySelector('[data-units-checkbox]');
unitsCheckbox.checked = false;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  handleNewCity(searchBar.value);
});

unitsCheckbox.addEventListener('change', function (e) {
  changeUnit(e.target);

  if (main.firstElementChild.innerHTML) { //if card already shown
    handleNewCity(searchBar.value);
  }
})

