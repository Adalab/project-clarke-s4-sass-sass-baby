'use strict';

//Función para selector Year en formulario

function addYears(initYear, currentYear) {
  var acumulador = '';
  for (var i = initYear; i < currentYear; i++) {
    acumulador = acumulador + '<option>' + i + '</option>';
  }
  return acumulador;
}


var selectYears = document.querySelector('#selectorYear');

selectorYear.innerHTML = addYears(1950, 2017);
