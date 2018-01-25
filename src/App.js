import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import SectionGeneral from './components/SectionGeneral';
import Tabs from './components/Tabs';
import Form from './components/Form';
import ButtonsForm from './components/ButtonsForm';

class App extends Component {
  render() {
    return (
      <div className="App">
      <main>

      <Header/>

      <div className="formandcv">

      <SectionGeneral/>


      <div className="cv-content">
      <aside>
      <div className="print-cv">
      <div className="cv-left">
      <h2 className="cv-name cv-firstname">Nombre <br /> Apellido <br /> Apellido
      </h2>
      <h3 className="cv-position cv-profession">Profesión actual</h3>
      <div className="cv-contact">
      <h4>Contacto</h4>
      <ul className="list-none">
      <li id="city-cv" className="cv-residence">Ciudad</li>
      <li id="email-cv" className="cv-telephone">Correo electrónico</li>
      <li id="tel-cv" className="cv-email">Teléfono</li>
      <li id="rrss-cv" className="cv-social">Redes sociales</li>
      <li id="web-cv" className="cv-personal-website">Web personal</li>
      </ul>
      </div>
      <div className="cv-description">
      <h4>Descripción</h4>
      <p className="description-text cv-personal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      </div>
      {/*   FORMACIÓN   -------------*/}
      <div className="cv-right">
      <h3 className="seccion tittle-education">FORMACIÓN</h3>
      <div className="education">
      {/*   FORMACIÓN 1   -------------*/}
      <ul className="list-none margin-bottom esconder formacionuno">
      <li className="cv-title-education bold">Título de la formación</li>
      <li className="cv-center-education">Centro y ciudad</li>
      <li className="date cv-date-start-education put-inline">Fecha inicio </li>
      <li className="cv-date-end-education put-inline">Fecha finalización </li>
      </ul>
      {/*   FORMACIÓN 2   -------------*/}
      <ul className="list-none esconder formaciondos">
      <li className="cv-title-education1 bold">Título de la formación</li>
      <li className="cv-center-education1">Centro y ciudad</li>
      <li className="cv-date-start-education1 put-inline">Fecha inicio </li>
      <li className="cv-date-end-education1 put-inline">Fecha finalización </li>
      </ul>
      </div>
      {/*   PROJECTS  -------------*/}
      <div className="proyects">
      <h3 className="seccion tittle-projects">PROYECTOS</h3>
      <ul className="list-none">
      {/*   PROJECTS 1  -------------*/}
      <li className="cv-name-project bold">Nombre del proyecto</li>
      <li className="cv-company-project">Empresa</li>
      <li className="write-date put-inline"> Mes </li>
      <li className="write-date put-inline"> Año </li>
      </ul>
      <p className="cv-description-project"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa.
      </p>
      {/*   PROJECTS 2  -------------*/}
      <ul className="list-none">
      <li className="cv-name-project1 bold">Nombre del proyecto</li>
      <li className="cv-company-project1">Empresa</li>
      <li className="write-date put-inline"> Mes </li>
      <li className="write-date put-inline"> Año </li>
      </ul>
      <p className="cv-description-project1"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa.
      </p>
      </div>
      {/*   EXPERIENCE  -------------*/}
      <div className="experience">
      <h3 className="seccion tittle-experience">EXPERIENCIA</h3>
      {/*   EXPERIENCE 1 -------------*/}
      <ul className="list-none">
      <li className="cv-name-company bold">Nombre empresa</li>
      <li className="cv-name-position">Cargo ejercido</li>
      <li className="cv-date-start-experience">Fecha inicio</li>
      <li className="cv-date-end-experience">Fecha fin</li>
      </ul>
      <ul className="list-style cv-description-experience">
      <li className="cv-description-experience">Tarea realizada</li>
      </ul>
      {/*   EXPERIENCE 2 -------------*/}
      <ul className="list-none">
      <li className="cv-name-company1 bold margin-top">Nombre empresa</li>
      <li className="cv-name-position1">Cargo ejercido</li>
      <li className="cv-date-start-experience1">Fecha inicio</li>
      <li className="cv-date-end-experience1">Fecha fin</li>
      </ul>
      <ul className="list-style ul-experience">
      <li className="cv-description-experience1">Tarea realizada</li>
      </ul>
      </div>
      </div>
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
