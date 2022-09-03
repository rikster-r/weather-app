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


/***/ }),

/***/ "./src/dataFunctions.js":
/*!******************************!*\
  !*** ./src/dataFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData),
/* harmony export */   "processResponse": () => (/* binding */ processResponse)
/* harmony export */ });
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./units */ "./src/units.js");


async function getWeatherData(city) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=${_units__WEBPACK_IMPORTED_MODULE_0__.units}&appid=f0230951adbf6fbf33eb40741168ca99`,
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

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendCard": () => (/* binding */ appendCard)
/* harmony export */ });
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./units */ "./src/units.js");


function createCardDOM(data) {
  let card = document.createElement('div');
  card.classList.add('card');

  let row = document.createElement('div');
  row.classList.add('row');
  card.append(row);

  let h1 = document.createElement('h1');
  h1.innerText = `${data.name}, ${data.temp}${_units__WEBPACK_IMPORTED_MODULE_0__.unitsSign}`;
  row.append(h1);

  let img = document.createElement('img');
  img.src = `http://openweathermap.org/img/wn/${data.weather}@2x.png`;
  row.append(img);

  let p1 = document.createElement('p');
  p1.innerText = `Feels like: ${data.feelsTemp}${_units__WEBPACK_IMPORTED_MODULE_0__.unitsSign}`;
  card.append(p1)

  let p2 = document.createElement('p');
  p2.innerText = `Humidity: ${data.humidity}%`;
  card.append(p2)

  let p3 = document.createElement('p');
  p3.innerText = `Wind speed: ${data.windSpeed}${_units__WEBPACK_IMPORTED_MODULE_0__.speedUnits}`;
  card.append(p3)

  return card;
}

function appendCard(data, place) {
  place.replaceChild(createCardDOM(data), place.firstElementChild);
}

/***/ }),

/***/ "./src/units.js":
/*!**********************!*\
  !*** ./src/units.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeUnit": () => (/* binding */ changeUnit),
/* harmony export */   "speedUnits": () => (/* binding */ speedUnits),
/* harmony export */   "units": () => (/* binding */ units),
/* harmony export */   "unitsSign": () => (/* binding */ unitsSign)
/* harmony export */ });
let units = 'metric';
let unitsSign = '°C';
let speedUnits = 'm/s';


function changeUnit(checkbox) {
  if (checkbox.checked) {
    units = 'imperial';
    unitsSign = '°F';
    speedUnits = 'mph';
  } else {
    units = 'metric';
    unitsSign = '°C';
    speedUnits = 'm/s';
  }
}

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/* harmony import */ var _dataFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataFunctions */ "./src/dataFunctions.js");
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./units */ "./src/units.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/display.js");





async function handleNewCity(cityName) {
  try {
    let response = await (0,_dataFunctions__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(cityName);
    let data = await (0,_dataFunctions__WEBPACK_IMPORTED_MODULE_1__.processResponse)(response);
    (0,_display__WEBPACK_IMPORTED_MODULE_3__.appendCard)(data, main);
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
  (0,_units__WEBPACK_IMPORTED_MODULE_2__.changeUnit)(e.target);

  if (main.firstElementChild.innerHTML) { //if card already shown
    handleNewCity(searchBar.value);
  }
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUM5QjtBQUNPO0FBQ1A7QUFDQSx5REFBeUQsWUFBWSxTQUFTLHlDQUFLLENBQUM7QUFDcEYsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QjhDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVUsSUFBSSxVQUFVLEVBQUUsNkNBQVMsQ0FBQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsYUFBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZSxFQUFFLDZDQUFTLENBQUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGNBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWUsRUFBRSw4Q0FBVSxDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUMwQztBQUM3QjtBQUNFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4REFBYztBQUN2QyxxQkFBcUIsK0RBQWU7QUFDcEMsSUFBSSxvREFBVTtBQUNkLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLGtEQUFVO0FBQ1o7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0YUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VuaXRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHt1bml0c30gZnJvbSAnLi91bml0cyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY2l0eSkge1xyXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5LnRyaW0oKX0mdW5pdHM9JHt1bml0c30mYXBwaWQ9ZjAyMzA5NTFhZGJmNmZiZjMzZWI0MDc0MTE2OGNhOTlgLFxyXG4gICAgeyBtb2RlOiAnY29ycycgfVxyXG4gICk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGxldCByZXF1aXJlZERhdGEgPSB7XHJcbiAgICBuYW1lOiBkYXRhLm5hbWUsXHJcblxyXG4gICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXHJcbiAgICBmZWVsc1RlbXA6IGRhdGEubWFpbi5mZWVsc19saWtlLFxyXG4gICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcclxuXHJcbiAgICB3aW5kU3BlZWQ6IGRhdGEud2luZC5zcGVlZCxcclxuICAgIHdlYXRoZXI6IGRhdGEud2VhdGhlclsnMCddLmljb24sXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVxdWlyZWREYXRhO1xyXG59IiwiaW1wb3J0IHt1bml0c1NpZ24sIHNwZWVkVW5pdHN9IGZyb20gJy4vdW5pdHMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZERPTShkYXRhKSB7XHJcbiAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuXHJcbiAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcclxuICBjYXJkLmFwcGVuZChyb3cpO1xyXG5cclxuICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGgxLmlubmVyVGV4dCA9IGAke2RhdGEubmFtZX0sICR7ZGF0YS50ZW1wfSR7dW5pdHNTaWdufWA7XHJcbiAgcm93LmFwcGVuZChoMSk7XHJcblxyXG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWcuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyfUAyeC5wbmdgO1xyXG4gIHJvdy5hcHBlbmQoaW1nKTtcclxuXHJcbiAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAxLmlubmVyVGV4dCA9IGBGZWVscyBsaWtlOiAke2RhdGEuZmVlbHNUZW1wfSR7dW5pdHNTaWdufWA7XHJcbiAgY2FyZC5hcHBlbmQocDEpXHJcblxyXG4gIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwMi5pbm5lclRleHQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5odW1pZGl0eX0lYDtcclxuICBjYXJkLmFwcGVuZChwMilcclxuXHJcbiAgbGV0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAzLmlubmVyVGV4dCA9IGBXaW5kIHNwZWVkOiAke2RhdGEud2luZFNwZWVkfSR7c3BlZWRVbml0c31gO1xyXG4gIGNhcmQuYXBwZW5kKHAzKVxyXG5cclxuICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENhcmQoZGF0YSwgcGxhY2UpIHtcclxuICBwbGFjZS5yZXBsYWNlQ2hpbGQoY3JlYXRlQ2FyZERPTShkYXRhKSwgcGxhY2UuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG59IiwibGV0IHVuaXRzID0gJ21ldHJpYyc7XHJcbmxldCB1bml0c1NpZ24gPSAnwrBDJztcclxubGV0IHNwZWVkVW5pdHMgPSAnbS9zJztcclxuZXhwb3J0IHt1bml0cywgdW5pdHNTaWduLCBzcGVlZFVuaXRzfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VVbml0KGNoZWNrYm94KSB7XHJcbiAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgIHVuaXRzID0gJ2ltcGVyaWFsJztcclxuICAgIHVuaXRzU2lnbiA9ICfCsEYnO1xyXG4gICAgc3BlZWRVbml0cyA9ICdtcGgnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1bml0cyA9ICdtZXRyaWMnO1xyXG4gICAgdW5pdHNTaWduID0gJ8KwQyc7XHJcbiAgICBzcGVlZFVuaXRzID0gJ20vcyc7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCB7Z2V0V2VhdGhlckRhdGEsIHByb2Nlc3NSZXNwb25zZX0gZnJvbSAnLi9kYXRhRnVuY3Rpb25zJztcclxuaW1wb3J0IHtjaGFuZ2VVbml0fSBmcm9tICcuL3VuaXRzJztcclxuaW1wb3J0IHthcHBlbmRDYXJkfSBmcm9tICcuL2Rpc3BsYXknO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTmV3Q2l0eShjaXR5TmFtZSkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShjaXR5TmFtZSk7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHByb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICBhcHBlbmRDYXJkKGRhdGEsIG1haW4pO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgYWxlcnQoJ0luY29ycmVjdCBDaXR5IE5hbWUnKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtc1swXTtcclxuY29uc3Qgc2VhcmNoQmFyID0gZm9ybS5jaXR5O1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5jb25zdCB1bml0c0NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdW5pdHMtY2hlY2tib3hdJyk7XHJcbnVuaXRzQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgaGFuZGxlTmV3Q2l0eShzZWFyY2hCYXIudmFsdWUpO1xyXG59KTtcclxuXHJcbnVuaXRzQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICBjaGFuZ2VVbml0KGUudGFyZ2V0KTtcclxuXHJcbiAgaWYgKG1haW4uZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MKSB7IC8vaWYgY2FyZCBhbHJlYWR5IHNob3duXHJcbiAgICBoYW5kbGVOZXdDaXR5KHNlYXJjaEJhci52YWx1ZSk7XHJcbiAgfVxyXG59KVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9