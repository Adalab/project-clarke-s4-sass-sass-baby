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

/*
function dateDisplay(className){
  var dayStartEducation = document.querySelector('.date-start-education');
  var dayEndEducation = document.querySelector('.date-end-education');
  document.querySelector('.cv-' + className).textContent= dayStartEducation.value + " al " + dayEndEducation.value;
}


function dateExperienceDisplay(className){
  var dayStartExperience = document.querySelector('input.' + className);
  var dayEndExperience = document.querySelector('input.' + className);
  document.querySelector('.cv-' + className).textContent= dayStartExperience.value + " al " + dayEndExperience.value;
}


function selectDateDisplay(className) {
  var monthDisplay = document.querySelector('.data-month');
  var yearDisplay = document.querySelector('.data-month');
  document.querySelector('.cv-' + className).textContent = monthDisplay.value + yearDisplay.value;
} */


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
  //dateDisplay('date-start-education');
  userAnswer('title-education1');
  userAnswer('center-education1');
  //dateDisplay('date-start-education1');


  //PROYECTOS
  userAnswer('name-project');
  userAnswer('company-project');
  textAreaAnswer('description-project');
  userAnswer('name-project1');
  userAnswer('company-project1');
  textAreaAnswer('description-project1');

  //fecha proyecto cv-date
  //textAreaAnswer('description-project');
  //userAnswer('name-project');
  //userAnswer('company-project');
  //fecha proyecto
  //textAreaAnswer('description-project');

  //EXPERIENCIA
  userAnswer('name-company');
  userAnswer('name-position');
  //dateExperienceDisplay('start-experience');
  textAreaAnswer('description-experience');
  userAnswer('name-company1');
  userAnswer('name-position1');
  //dateExperienceDisplay('start-experience1');
  textAreaAnswer('description-experience1');


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

for (var i = 0; i <saveButton.length; i++) {
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


/* ===============================
Botón previsualizar
================================= */

var sectionForm = document.querySelector('#section-form');
var sectionCV = document.querySelector('.cv-content');
var buttonPreview = document.querySelector('.button-CV');

buttonPreview.addEventListener('click', toogleClass);

function toogleClass() {
  sectionForm.classList.toggle('display-none');
  if (sectionCV.style.display !== 'block') {
      sectionCV.style.display = 'block'
    } else {
      sectionCV.style.display = 'none'
    }
};


/* ===============================
Fin Botón previsualizar
================================= */

/* ===============================
Flechas y Papelera
================================= */


var educacionNodes = document.querySelectorAll(".caja-experiencia");
var eliminarElemento = document.querySelectorAll(".papelera");
var arrowDownFirstElement = document.querySelector("#arrowDownFirstElement");
var arrowDownSecondElement = document.querySelector("#arrowDownSecondElement");
var arrowUpFirstElement = document.querySelector("#arrowUpFirstElement");
var arrowUpSecondElement = document.querySelector("#arrowUpSecondElement");
var firstEducationBox= document.querySelector("#firstEducationBox");
var secondEducationBox= document.querySelector("#secondEducationBox");

function borrar(event) {
 event.currentTarget.closest('.caja-educacion').remove();
 event.currentTarget.closest('.caja-proyectos').remove();
 event.currentTarget.closest('.caja-experiencia').remove();
};

for (var i = 0; i < educacionNodes.length; i++) {
 eliminarElemento[i].addEventListener ('click',borrar);
}

//Mover flechas en Formación

arrowDownFirstElement.addEventListener('click',function () {
  if(firstEducationBox.nextElementSibling)
      firstEducationBox.parentNode.insertBefore(firstEducationBox.nextElementSibling, firstEducationBox);
});
arrowDownSecondElement.addEventListener('click',function () {
    if(secondEducationBox.nextElementSibling)
        secondEducationBox.parentNode.insertBefore(secondEducationBox.nextElementSibling,secondEducationBox);
});

arrowUpFirstElement.addEventListener('click',function () {
    if(firstEducationBox.previousElementSibling)
        firstEducationBox.parentNode.insertBefore( firstEducationBox,firstEducationBox.previousElementSibling);
});
arrowUpSecondElement.addEventListener('click',function () {
    if(secondEducationBox.previousElementSibling)
        secondEducationBox.parentNode.insertBefore(secondEducationBox,secondEducationBox.previousElementSibling);
});

//Mover flechas en Proyectos

var arrowUpFirstProject = document.querySelector(".arrowUpFirstProject");
var arrowDownFirstProject = document.querySelector(".arrowDownFirstProject");
var arrowUpSecondProject = document.querySelector(".arrowUpSecondProject");
var arrowDownSecondProject = document.querySelector(".arrowDownSecondProject");
var firstProyectBox= document.querySelector("#firstProyectBox");
var secondProyectBox= document.querySelector("#secondProyectBox");

arrowDownFirstProject.addEventListener('click',function () {
    if(firstProyectBox.nextElementSibling)
        firstProyectBox.parentNode.insertBefore(firstProyectBox.nextElementSibling, firstProyectBox);
});
arrowDownSecondProject.addEventListener('click',function () {
    if(secondProyectBox.nextElementSibling)
        secondProyectBox.parentNode.insertBefore(secondProyectBox.nextElementSibling,secondProyectBox);
});

arrowUpFirstProject.addEventListener('click',function () {
    if(firstProyectBox.previousElementSibling)
        firstProyectBox.parentNode.insertBefore( firstProyectBox,firstProyectBox.previousElementSibling);
});
arrowUpSecondProject.addEventListener('click',function () {
    if(secondEducationBox.previousElementSibling)
        secondProyectBox.parentNode.insertBefore(secondProyectBox,secondProyectBox.previousElementSibling);
});

//Mover flechas en Experiencia Laboral

var arrowUpFirstExperience = document.querySelector(".arrowUpFirstExperience");
var arrowDownFirstExperience = document.querySelector(".arrowDownFirstExperience");
var arrowUpSecondExperience = document.querySelector(".arrowUpSecondExperience");
var arrowDownSecondExperience = document.querySelector(".arrowDownSecondExperience");
var firstExperienceBox= document.querySelector("#firstExperienceBox");
var secondExperienceBox= document.querySelector("#secondExperienceBox");

arrowDownFirstExperience.addEventListener('click',function () {
    if(firstExperienceBox.nextElementSibling)
        firstExperienceBox.parentNode.insertBefore(firstExperienceBox.nextElementSibling, firstExperienceBox);
});
arrowDownSecondExperience.addEventListener('click',function () {
    if(secondExperienceBox.nextElementSibling)
        secondExperienceBox.parentNode.insertBefore(secondExperienceBox.nextElementSibling,secondExperienceBox);
});

arrowUpFirstExperience.addEventListener('click',function () {
    if(firstExperienceBox.previousElementSibling)
        firstExperienceBox.parentNode.insertBefore( firstExperienceBox,firstExperienceBox.previousElementSibling);
});
arrowUpSecondExperience.addEventListener('click',function () {
    if(secondExperienceBox.previousElementSibling)
        secondExperienceBox.parentNode.insertBefore(secondExperienceBox,secondExperienceBox.previousElementSibling);
});

/* ===============================
Fin flechas
================================= */


/* ===============================
Imprimir
================================= */
var buttonprint = document.querySelector('.buttonPrint');
buttonprint.addEventListener('click',function printlistener() {
  window.print();
})

/* ===============================
Fin imprimir
================================= */

/* ===============================
Pestañas de navegación, elemento seleccionado
================================= */

var allButtonsNavigation = document.querySelectorAll('.main-nav-button');

function showSelectedButton(event) {

    for(var i= 0; i< allButtonsNavigation.length;i++){
        allButtonsNavigation[i].classList.remove('active');
        if (allButtonsNavigation[i] != allButtonsNavigation.currentTarget) {
            event.currentTarget.classList.add('active')
        }
    }
}

/* ===============================
Fin Pestañas de navegación, elemento seleccionado
================================= */


for (var j= 0; j < allButtonsNavigation.length; j++) {
    allButtonsNavigation[j].addEventListener('click', showSelectedButton);
}