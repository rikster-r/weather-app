/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");


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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EseURBQXlELFlBQVksU0FBUyxNQUFNO0FBQ3BGLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVUsSUFBSSxVQUFVLEVBQUUsVUFBVTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsYUFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZSxFQUFFLFVBQVU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWUsRUFBRSxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHkudHJpbSgpfSZ1bml0cz0ke3VuaXRzfSZhcHBpZD1mMDIzMDk1MWFkYmY2ZmJmMzNlYjQwNzQxMTY4Y2E5OWAsXHJcbiAgICB7IG1vZGU6ICdjb3JzJyB9XHJcbiAgKTtcclxuXHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NSZXNwb25zZShyZXNwb25zZSkge1xyXG4gIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBsZXQgcmVxdWlyZWREYXRhID0ge1xyXG4gICAgbmFtZTogZGF0YS5uYW1lLFxyXG5cclxuICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxyXG4gICAgZmVlbHNUZW1wOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcclxuICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXHJcblxyXG4gICAgd2luZFNwZWVkOiBkYXRhLndpbmQuc3BlZWQsXHJcbiAgICB3ZWF0aGVyOiBkYXRhLndlYXRoZXJbJzAnXS5pY29uLFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcXVpcmVkRGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZERPTShkYXRhKSB7XHJcbiAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuXHJcbiAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcclxuICBjYXJkLmFwcGVuZChyb3cpO1xyXG5cclxuICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGgxLmlubmVyVGV4dCA9IGAke2RhdGEubmFtZX0sICR7ZGF0YS50ZW1wfSR7dW5pdHNTaWdufWA7XHJcbiAgcm93LmFwcGVuZChoMSk7XHJcblxyXG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWcuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyfUAyeC5wbmdgO1xyXG4gIHJvdy5hcHBlbmQoaW1nKTtcclxuXHJcbiAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAxLmlubmVyVGV4dCA9IGBGZWVscyBsaWtlOiAke2RhdGEuZmVlbHNUZW1wfSR7dW5pdHNTaWdufWA7XHJcbiAgY2FyZC5hcHBlbmQocDEpXHJcblxyXG4gIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwMi5pbm5lclRleHQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5odW1pZGl0eX0lYDtcclxuICBjYXJkLmFwcGVuZChwMilcclxuXHJcbiAgbGV0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAzLmlubmVyVGV4dCA9IGBXaW5kIHNwZWVkOiAke2RhdGEud2luZFNwZWVkfSR7c3BlZWRVbml0c31gO1xyXG4gIGNhcmQuYXBwZW5kKHAzKVxyXG5cclxuICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTmV3Q2l0eShjaXR5TmFtZSkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShjaXR5TmFtZSk7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHByb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICBtYWluLnJlcGxhY2VDaGlsZChjcmVhdGVDYXJkRE9NKGRhdGEpLCBtYWluLmZpcnN0RWxlbWVudENoaWxkKTtcclxuICB9IGNhdGNoIHtcclxuICAgIGFsZXJ0KCdJbmNvcnJlY3QgQ2l0eSBOYW1lJyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbMF07XHJcbmNvbnN0IHNlYXJjaEJhciA9IGZvcm0uY2l0eTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuY29uc3QgdW5pdHNDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXVuaXRzLWNoZWNrYm94XScpO1xyXG51bml0c0NoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbmxldCB1bml0cyA9ICdtZXRyaWMnO1xyXG5sZXQgdW5pdHNTaWduID0gJ8KwQyc7XHJcbmxldCBzcGVlZFVuaXRzID0gJ20vcyc7XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBoYW5kbGVOZXdDaXR5KHNlYXJjaEJhci52YWx1ZSk7XHJcbn0pO1xyXG5cclxudW5pdHNDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICB1bml0cyA9ICdpbXBlcmlhbCc7XHJcbiAgICB1bml0c1NpZ24gPSAnwrBGJztcclxuICAgIHNwZWVkVW5pdHMgPSAnbXBoJztcclxuICB9IGVsc2Uge1xyXG4gICAgdW5pdHMgPSAnbWV0cmljJztcclxuICAgIHVuaXRzU2lnbiA9ICfCsEMnO1xyXG4gICAgc3BlZWRVbml0cyA9ICdtL3MnO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1haW4uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MKSB7IC8vaWYgY2FyZCBhbHJlYWR5IHNob3duXHJcbiAgICBoYW5kbGVOZXdDaXR5KHNlYXJjaEJhci52YWx1ZSlcclxuICB9XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9