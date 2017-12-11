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

//MENÚ DESPLEGABLE (Gemma)
var newField = document.querySelector ('.addfield');
var openInput = document.querySelector ('.drop-down');
var saveButton = document.querySelector ('.buttonSave');

function acordeon (event){
  openInput.classList.toggle('hidden');
  saveButton.classList.toggle ('hidden');

}

newField.addEventListener('click', acordeon);
saveButton.addEventListener('click', acordeon);

function saveMain () {
    var titleEducation = document.querySelector ('.main-value')
    var textadd = document.querySelector ('.textadd')
    textadd.innerHTML = titleEducation.value;
}

saveButton.addEventListener('click', saveMain);



//FIN MENÚ DESPLEGABLE

//IMPRIMIR CV


// FIN IMPRIMIR CV


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
