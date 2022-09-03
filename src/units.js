let units = 'metric';
let unitsSign = '°C';
let speedUnits = 'm/s';
export {units, unitsSign, speedUnits};

export function changeUnit(checkbox) {
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