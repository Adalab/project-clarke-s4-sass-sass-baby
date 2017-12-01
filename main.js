'use strict';

//Función para selector Year en formulario

function addYears(initYear, currentYear) {
  var acumulador = '';
  for (var i = initYear; i <= currentYear; i++) {
    acumulador = acumulador + '<option>' + i + '</option>';
  }
  return  acumulador;
}

var selectYears = document.querySelector('#selectorYear');

selectorYear.innerHTML = selectorYear.innerHTML + addYears(1950, 2017);


//Función para prompt en cv primera versión

    //Nombre y apellidos

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
