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
var currentStep = 0;
var fieldsetInformation = document.querySelectorAll ('.fieldset-information');
var buttonsMenu = document.querySelectorAll ('.button-menu');

function showFieldsets(event) {
  var id = event.currentTarget.getAttribute('data-id');
  for(var i = 0; i < fieldsetInformation.length; i++){
    fieldsetInformation[i].classList.add('display-none');
  }
  fieldsetInformation[id].classList.remove('display-none');
 currentStep = id;
  console.log("click en ",currentStep);
}

for (var i = 0; i < buttonsMenu.length; i++) {
  buttonsMenu[i].addEventListener('click', showFieldsets);
};

var buttonContinue = document.querySelector(".buttonContinue");
buttonContinue.addEventListener('click',nextStep);
function nextStep(){
  console.log("current en continue",currentStep);
  for(var i= 0; i< fieldsetInformation.length;i++){
    fieldsetInformation[i].classList.add('display-none');
  }
  currentStep++;
  fieldsetInformation[currentStep].classList.remove('display-none');
}
//FIN MENÚ NAVEGACIÓN POR PESTAÑAS


/* ===============================
IMPRIMIR DATOS PERSONALES EN CV
================================= */
//VARIABLES
var dayStartEducation = document.querySelector('.cv-date-start-education');

function userAnswer(className) {
  var inputAnswer = document.querySelector('input.'+ className);
  document.querySelector('.cv-' + className).textContent = inputAnswer.value;
}

function textAreaAnswer (className) {
  var textAnswer = document.querySelector('textarea.'+ className);
  document.querySelector('.cv-' + className).textContent = textAnswer.value;
}

var buttonContinue = document.querySelector('.buttonContinue');
buttonContinue.addEventListener('click', function(){
  //DATOS GENERALES
  userAnswer('firstname');
  userAnswer('profession');
  userAnswer('residence');
  userAnswer('email');
  userAnswer('telephone');
  userAnswer('social');
  userAnswer('personal-website');
  textAreaAnswer('personal-description');
  //EDUCACIÓN
  userAnswer('title-education');
  userAnswer('center-education');
  //fecha inicio y fin
  textAreaAnswer('description-studies');

  /*

  //PROYECTOS
  userAnswer('name-project');
  userAnswer('company-project');
  //fecha proyecto
  textAreaAnswer('description-project');

  //EXPERIENCIA
  userAnswer('name-company');
  userAnswer('position');
  //fecha inicio y fin
  textAreaAnswer('description-experience');
  */

});


/* ===============================
ACORDEON
================================= */

var newField = document.querySelectorAll ('.addfield');
var openInput = document.querySelectorAll ('.drop-down');
var saveButton = document.querySelectorAll ('.buttonSave');
var mainValue = document.querySelectorAll ('.main-value');
var textAdd = document.querySelectorAll ('.textadd');

function acordeon (event){
  var newFieldId = event.currentTarget.getAttribute('data-id');
  openInput[newFieldId].classList.toggle('hidden');
  saveButton[newFieldId].classList.toggle ('hidden');


}

for (var i = 0; i < newField.length; i++) {
  newField[i].addEventListener('click', acordeon);
  saveButton[i].addEventListener('click', acordeon);
}

function saveMain () {
    var iDen = event.currentTarget.getAttribute('data-id');
    textAdd[iDen].innerHTML =  mainValue[iDen].value;

}

for (var i = 0; i <=saveButton.length; i++) {
  saveButton[i].addEventListener('click', saveMain);
}

/* ===============================
FIN ACORDEON
================================= */

/* ===============================
IMPRIMIR
================================= */
/* ===============================
FIN IMPRIMIR
================================= */




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
