'use strict';

//Función para selector Year en formulario

function addValues(selector, initValue, currentValue) {
  var selectValues = document.querySelector(selector);
  var acumulador = '';
  for (var i = initValue; i <= currentValue; i++) {
    acumulador = acumulador + '<option>' + i + '</option>';
  }
  selectValues.innerHTML = selectValues.innerHTML + acumulador;
}


addValues('#selectorYear', 1950, 2017);

//MENÚ DE NAVEGACIÓN POR PESTAÑAS

function showFieldsets() {
  var fieldsetData = document.querySelector('#fieldset-data');
  fieldsetData.classList.remove('display-none');
}

var personalDataButton = document.querySelector('#personal-data');
personalDataButton.addEventListener('click', showFieldsets);



//FIN MENÚ NAVEGACIÓN POR PESTAÑAS



//Función para prompt en cv primera versión

    //Nombre y apellidos
/*
var name = prompt('Dime tu nombre y dos apellidos');

var nameCV = document.querySelector('.cv-name');

nameCV.innerHTML = name;

    //Ciudad

var city = prompt('Dime tu ciudad');

var cityCV = document.querySelector('#city-cv');

cityCV.innerHTML = city;

    //Correo electrónico

var email = prompt('Dime tu email');

var emailCV = document.querySelector('#email-cv');

emailCV.innerHTML = email;
*/
