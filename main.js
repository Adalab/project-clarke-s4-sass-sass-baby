'use strict';

//Función para selector Year en formulario

function addYears(initYear, currentYear) {
  var acumulador = '';
  for (var i = initYear; i <= currentYear; i++) {
    acumulador = acumulador + '<option>' + i + '</option>';
  }
  return '<option class="option-form" disabled selected>Elige un año</option>' + acumulador;
}

var selectYears = document.querySelector('#selectorYear');

selectorYear.innerHTML = addYears(1950, 2017);
