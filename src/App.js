import React, { Component } from 'react';
import './index.css';
import RightCv from './components/RightCv';
import LeftCv from './components/LeftCv';

class App extends Component {
  render() {
    return (
      <div className="App">
      <main>

    <header className="header">
      <a href="#">
        <img className="logo" src="img/logoCV.png" alt="logo" />
      </a>
      <button className="button-CV">Previsualizar</button>
    </header>

    <div className="formandcv">

      <section id="section-form">

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li className="button-menu" data-id={0}>
              <button className="main-nav-button active">
                <img src="img/woman-avatar.png" alt="icon personal data" className="nav-icon icon-personal" />
                <p className="nav-text nav-personalData">Datos personales</p>
              </button>
            </li>
            <li className="button-menu" data-id={1}>
              <button className="main-nav-button">
                <img src="img/hat-education.png" alt="icon education" className="nav-icon icon-education" />
                <p className="nav-text nav-education">Formación</p>
              </button>
            </li>
            <li className="button-menu" data-id={2}>
              <button className="main-nav-button">
                <img src="img/presentation.png" alt="icon projects" className="nav-icon icon-projects" />
                <p className="nav-text nav-project">Proyectos</p>
              </button>
            </li>
            <li className="button-menu" data-id={3}>
              <button className="main-nav-button">
                <img src="img/suitcase.png" alt="icon experience" className="nav-icon icon-experience" />
                <p className="nav-text nav-experience">Experiencia Laboral</p>
              </button>
            </li>
          </ul>
        </nav>

        <form className="main-form" id="main-form" action method="post">
          <fieldset className="fieldset-information fieldset-personal">

            <legend className="title">Datos personales</legend>
            <hr />

            <label className="label-form firstname" htmlFor="firstname">Nombre</label>
            <input className="input-form firstname" id="firstname" type="text" name="firstname" placeholder="Nombre y apellidos" required />

            <label className="label-form profession" htmlFor="profession">Profesión actual</label>
            <input className="input-form profession" id="profession" type="text" name="profession" placeholder="Profesión actual" required />
            <label className="label-form residence" htmlFor="residence">Lugar de residencia</label>
            <input className="input-form residence" id="residence" type="text" name="residence" placeholder="Lugar de residencia" required />

              <div id="input_container">
              <label className="label-form telephone" htmlFor="telephone">Teléfono</label>
              <input className="input-form telephone" id="telephone" type="tel" name="telephone" placeholder="Teléfono" required />
              <img src="img/phone.png" id="input_img" />
            </div>

            <div id="input_container">
              <label className="label-form email" htmlFor="email">Email</label>
              <input className="input-form email" id="email" type="email" name="email" placeholder="Email" required />
              <img src="img/email.png" id="input_img" />
            </div>

            <div id="input_container">
              <label className="label-form social" htmlFor="social">Redes sociales</label>
              <input className="input-form social" id="social" type="url" name="social" placeholder="Red social - https://miredsocial.com" />
              <img src="img/github-logo.png" id="input_img" />
            </div>

            <label className="label-form personal-website" htmlFor="personal-website">Web personal</label>
            <input className="input-form personal-website" id="personal-website" type="url" name="personal-website" placeholder="Web personal- https://miwebpersonal.com" />

            <label htmlFor="personal-description">
              Descripción personal:
            </label>
            <textarea className="input-form personal-description" name="personal-description" rows={8} cols={80} defaultValue={""} />
          </fieldset>

          <fieldset className="fieldset-information fieldset-background display-none">

            <legend className="title">Formación</legend>
            <hr />
            <div>
              <div id="firstEducationBox">
                <div className="add-project caja-educacion">
                  <div className="addfield" data-id={0}>
                    <a href="#" className="textadd">Añadir formación 1</a>
                  </div>
                  <div className="buttons-project-container">
                    <img className="buttons-project margin-right-buttons papelera" src="img/trash.png" alt="Icono de papelera" data-id={0} />
                    <img id="arrowUpFirstElement" className="buttons-project margin-right-buttons" src="img/arrowup.png" alt="Flecha hacia arriba" />
                    <img id="arrowDownFirstElement" className="buttons-project flecha-abajo" src="img/arrowdown.png" alt="Flecha hacia abajo" />
                  </div>
                </div>
                <div className="drop-down hidden">
                  <label className="label-form" htmlFor="title-education">
                    Título
                  </label>
                  <input className="input-form title-education main-value" type="text" name="title-education" placeholder="Título" required />
                  <label className="label-form" htmlFor="center-education">
                    Centro de formación
                  </label>
                  <input className="input-form center-education" type="text" name="company-project" placeholder="Centro de formación" required />
                  <label htmlFor="date-start-education">
                    Fecha de inicio
                  </label>
                  <input className="input-form date-start-education" type="date" name="company-project" placeholder="Fecha inicio" required />
                  <label htmlFor="date-end-education">
                    Fecha de finalización
                  </label>
                  <input className="input-form date-end-education" type="date" name="company-project" placeholder="Fecha fin" required />
                </div>
              </div>
              <div id="secondEducationBox">
                <div className="add-project caja-educacion">
                  <div className="addfield" data-id={1}>
                    <a href="#" className="textadd">Añadir formación 2</a>
                  </div>
                  <div className="buttons-project-container">
                    <img className="buttons-project margin-right-buttons papelera" src="img/trash.png" alt="Icono de papelera" data-id={1} />
                    <img id="arrowUpSecondElement" className="buttons-project margin-right-buttons" src="img/arrowup.png" alt="Flecha hacia arriba" />
                    <img id="arrowDownSecondElement" className="buttons-project" src="img/arrowdown.png" alt="Flecha hacia abajo" />
                  </div>
                </div>
                <div className="drop-down hidden">
                  <label className="label-form" htmlFor="title-education1">
                    Título
                  </label>
                  <input className="input-form title-education1 main-value" type="text" name="title-education1" placeholder="Título" required />
                  <label className="label-form" htmlFor="center-education1">
                    Centro de formación
                  </label>
                  <input className="input-form center-education1" type="text" name="company-project" placeholder="Centro de formación" required />
                  <label htmlFor="date-start-education1">
                    Fecha de inicio
                  </label>
                  <input className="input-form date-start-education1" type="date" name="company-project" placeholder="Fecha inicio" required />
                  <label htmlFor="date-end-education1">
                    Fecha de finalización
                  </label>
                  <input className="input-form date-end-education1" type="date" name="company-project" placeholder="Fecha inicio" required />
                </div>
              </div>
            </div>
          </fieldset>
          {/*PROJECTS DATA FORM - ANA  */}
          <fieldset className="fieldset-information fieldset-projects display-none">
            <legend className="title">Proyectos</legend>
            <hr />
            <div>
              <div id="firstProyectBox">
                <div className="add-project caja-proyectos">
                  <div className="addfield" data-id={2}>
                    <a href="#" className="textadd">Añadir proyecto 1</a>
                  </div>
                  <div className="buttons-project-container">
                    <img className="buttons-project margin-right-buttons papelerauno" src="img/trash.png" alt="Icono de papelera" data-id={0} />
                    <img className="buttons-project margin-right-buttons arrowUpFirstProject" src="img/arrowup.png" alt="Flecha hacia arriba" />
                    <img className="buttons-project arrowDownFirstProject" src="img/arrowdown.png " alt="Flecha hacia abajo" />
                  </div>
                </div>
                <div className="drop-down hidden">
                  <label className="label-form" htmlFor="name-project">
                    Nombre del proyecto
                  </label>
                  <input className="input-form main-value name-project" id="name-project" type="text" name="name-project" placeholder="Nombre del proyecto" required />
                  <label className="label-form" htmlFor="company-project">
                    Empresa o proyecto personal
                  </label>
                  <input className="input-form company-project" id="company-project" type="text" name="company-project" placeholder="Empresa o proyecto personal" required />
                  <label htmlFor="month-project">
                    Fecha de realización:
                  </label>
                  <div className="containter-data-project">
                    <select className="input-form select-date" name="month-project">
                      <option className="option-form grey" disabled selected>Mes</option>
                      <option>Enero</option>
                      <option>Febrero</option>
                      <option>Marzo</option>
                      <option>Abril</option>
                      <option>Mayo</option>
                      <option>Junio</option>
                      <option>Julio</option>
                      <option>Agosto</option>
                      <option>Septiembre</option>
                      <option>Octubre</option>
                      <option>Noviembre</option>
                      <option>Diciembre</option>
                    </select>
                    <select className="input-form select-date" name="year-project" id="selectorYear">
                      <option className="option-form" disabled selected>Año</option>
                    </select>
                  </div>
                  <label htmlFor="description-project">
                    Descripción del proyecto :
                  </label>
                  <textarea className="input-form description-project" name="description-project" rows={8} cols={80} defaultValue={""} />
                </div>
              </div>
              <div id="secondProyectBox">
                <div className="add-project caja-proyectos">
                  <div className="addfield" data-id={3}>
                    <a href="#" className="textadd">Añadir proyecto 2</a>
                  </div>
                  <div className="buttons-project-container ">
                    <img className="buttons-project margin-right-buttons papelerauno" src="img/trash.png" alt="Icono de papelera" data-id={1} />
                    <img className="buttons-project margin-right-buttons arrowUpSecondProject" src="img/arrowup.png" alt="Flecha hacia arriba" />
                    <img className="buttons-project arrowDownSecondProject" src="img/arrowdown.png" alt="Flecha hacia abajo" />
                  </div>
                </div>
                <div className="drop-down hidden">
                  <label className="label-form" htmlFor="name-project1">
                    Nombre del proyecto
                  </label>
                  <input className="input-form main-value name-project1" id="name-project" type="text" name="name-project1" placeholder="Nombre del proyecto" required />
                  <label className="label-form" htmlFor="company-project1">
                    Empresa o proyecto personal
                  </label>
                  <input className="input-form company-project1" id="company-project" type="text" name="company-project" placeholder="Empresa o proyecto personal" required />
                  <label htmlFor="month-project">
                    Fecha de realización:
                  </label>
                  <div className="containter-data-project">
                    <select className="input-form select-date" name="month-project">
                      <option className="option-form grey" disabled selected>Mes</option>
                      <option>Enero</option>
                      <option>Febrero</option>
                      <option>Marzo</option>
                      <option>Abril</option>
                      <option>Mayo</option>
                      <option>Junio</option>
                      <option>Julio</option>
                      <option>Agosto</option>
                      <option>Septiembre</option>
                      <option>Octubre</option>
                      <option>Noviembre</option>
                      <option>Diciembre</option>
                    </select>
                    <select className="input-form select-date" name="year-project" id="selectorYearSecond">
                      <option className="option-form" disabled selected>Año</option>
                    </select>
                  </div>
                  <label htmlFor="description-project1">
                    Descripción del proyecto :
                  </label>
                  <textarea className="input-form description-project1" name="description-project1" rows={8} cols={80} defaultValue={""} />
                </div>
              </div>
            </div>
          </fieldset>
          {/*EXPERIENCE DATA FORM - ANA*/}
          <fieldset className="fieldset-information fieldset-experience display-none">  {/* Anita Experiencia */}
            <legend className="title">Experiencia laboral</legend>
            <hr />
            <div>
              <div id="firstExperienceBox">
                <div className="add-project caja-experiencia">
                  <div className="addfield" data-id={4}>
                    <a href="#" className="textadd">Añadir experiencia 1</a>
                  </div>
                  {/*BUTTONS INSIDE EDUCATION, EXPERIENCE AND PROJECTS */}
                  <div className="buttons-project-container ">
                    <img className="buttons-project margin-right-buttons papelerados" src="img/trash.png" alt="Icono de papelera" data-id={0} />
                    <img className="buttons-project margin-right-buttons arrowUpFirstExperience" src="img/arrowup.png" alt="Flecha hacia arriba" />
                    <img className="buttons-project arrowDownFirstExperience" src="img/arrowdown.png" alt="Flecha hacia arriba" />
                  </div>
                </div>
                <div className="drop-down hidden">
                  <label className="label-form" htmlFor="name-company">
                    Empresa
                  </label>
                  <input className="input-form main-value name-company" id="company" type="text" name="company" placeholder="Empresa" required />
                  <label className="label-form" htmlFor="name-position">
                    Puesto de trabajo
                  </label>
                  <input className="input-form name-position" id="position" type="text" name="position" placeholder="Puesto de trabajo" required />
                  <label htmlFor="date-start-experience">
                    Fecha de inicio:
                  </label>
                  <input className="input-form date-start-experience" id="init-data-experience" type="date" name="date-start-experience'" required />
                  <label htmlFor="date-end-experience">
                    Fecha fin:
                  </label>
                  <input className="input-form date-end-experience" id="finish-data-experience" type="date" name="date-end-experience" required />
                  <label htmlFor="description-experience">
                    Descripción del puesto:
                  </label>
                  <textarea className="input-form description-experience" name="description-experience" rows={8} cols={80} defaultValue={"                      "} />
                </div>
              </div>
              <div id="secondExperienceBox">
                <div className="add-project caja-experiencia">
                  <div className="addfield" data-id={5}>
                    <a href="#" className="textadd">Añadir experiencia 2</a>
                  </div>
                  {/*BUTTONS INSIDE EDUCATION, EXPERIENCE AND PROJECTS  */}
                  <div className="buttons-project-container">
                    <img className="buttons-project margin-right-buttons papelerados" src="img/trash.png" alt="Icono de papelera" data-id={1} />
                    <img className="buttons-project margin-right-buttons arrowUpSecondExperience" src="img/arrowup.png" alt="Flecha hacia arriba" />
                    <img className="buttons-project arrowDownSecondExperience" src="img/arrowdown.png" alt="Flecha hacia abajo" />
                  </div>
                </div>
                <div className="drop-down hidden">
                  <label className="label-form" htmlFor="name-company1">
                    Empresa
                  </label>
                  <input className="input-form main-value name-company1" id="company" type="text" name="name-company1" placeholder="Empresa" required />
                  <label className="label-form" htmlFor="name-position1">
                    Puesto de trabajo          {/*   FORMACIÓN   -------------*/}
                  </label>
                  <input className="input-form name-position1" id="position" type="text" name="name-position1" placeholder="Puesto de trabajo" required />
                  <label htmlFor="date-start-experience1">
                    Fecha de inicio:
                  </label>
                  <input className="input-form date-start-experience1" id="init-data-experience" type="date" name="init-data-experience" required />
                  <label htmlFor="date-end-experience1">
                    Fecha fin:
                  </label>
                  <input className="input-form date-end-experience1" id="finish-data-experience" type="date" name="finish-data-experience" required />
                  <label htmlFor="description-experience1">
                    Descripción del puesto:
                  </label>
                  <textarea className="input-form description-experience1" name="description-experience1" rows={8} cols={80} defaultValue={"                      "} />
                </div>
              </div>
            </div>
          </fieldset>
        </form>
        {/*BUTTONS FORM */}
        <div className="buttonsChangeForm">
          <button className="buttonSave hidden" data-id={0}>Guardar</button>
          <button className="buttonSave hidden" data-id={1}>Guardar</button>
          <button className="buttonSave hidden" data-id={2}>Guardar</button>
          <button className="buttonSave hidden" data-id={3}>Guardar</button>
          <button className="buttonSave hidden" data-id={4}>Guardar</button>
          <button className="buttonSave hidden" data-id={5}>Guardar</button>
          <button className="buttonContinue">Continuar</button>
        </div>
      </section>

      <div className="cv-content">
        <aside>
          <div className="print-cv">
            <LeftCv/>
            <RightCv/>
          </div>
          <input type="button" className="buttonPrint" defaultValue="Imprimir" />
        </aside>
      </div>
    </div>
  </main>
      </div>
    );
  }
}

export default App;
