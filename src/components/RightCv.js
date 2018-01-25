import React, { Component } from 'react';

class RightCv extends Component {
  render() {
    return(
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
    );
  }
}
export default RightCv;
