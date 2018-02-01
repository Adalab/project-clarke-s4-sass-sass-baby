import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Colapsable from './Colapsable';
import PersonalData from './PersonalData';


class Form extends Component {
  render(){
    return (
      <form className="main-form" id="main-form" action method="post">

      <PersonalData/>

      <Fieldset title="Formación">
        <Colapsable box= "firstEducationBox">
          <div className="drop-down hidden">
          <input className="input-form title-education main-value" type="text" name="title-education" placeholder="Título" required />
          <input className="input-form center-education" type="text" name="company-project" placeholder="Centro de formación" required />
          <input className="input-form date-start-education" type="date" name="company-project" placeholder="Fecha inicio" required />
          <input className="input-form date-end-education" type="date" name="company-project" placeholder="Fecha fin" required />
          </div>
        </Colapsable>

        <Colapsable box= "secondEducationBox">
        <div className="drop-down hidden">
          <input className="input-form title-education1 main-value" type="text" name="title-education1" placeholder="Título" required />
          <input className="input-form center-education1" type="text" name="company-project" placeholder="Centro de formación" required />
          <input className="input-form date-start-education1" type="date" name="company-project" placeholder="Fecha inicio" required />
          <input className="input-form date-end-education1" type="date" name="company-project" placeholder="Fecha inicio" required />
        </div>
        </Colapsable>
      </Fieldset>

      <Fieldset title= "Proyectos">
      <Colapsable box="firstProyectBox">
        <div className= "drop-down hidden">
          <input className="input-form main-value name-project" id="name-project" type="text" name="name-project" placeholder="Nombre del proyecto" required />
          <input className="input-form company-project" id="company-project" type="text" name="company-project" placeholder="Empresa o proyecto personal" required />
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
          <textarea className="input-form description-project" name="description-project" rows={8} cols={80} defaultValue={""} />
        </div>
      </Colapsable>

      <Colapsable box= "secondProyectBox">
        <div className= "drop-down hidden">
          <input className="input-form main-value name-project" id="name-project" type="text" name="name-project" placeholder="Nombre del proyecto" required />
          <input className="input-form company-project" id="company-project" type="text" name="company-project" placeholder="Empresa o proyecto personal" required />
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
          <textarea className="input-form description-project" name="description-project" rows={8} cols={80} defaultValue={""} />
        </div>
      </Colapsable>
      </Fieldset>

      <Fieldset title= "Experiencia">
      <Colapsable box="firstExperienceBox">
      <div className="drop-down hidden">
        <input className="input-form title-education main-value" type="text" name="title-education" placeholder="Título" required />
        <input className="input-form center-education" type="text" name="company-project" placeholder="Centro de formación" required />
        <input className="input-form date-start-education" type="date" name="company-project" placeholder="Fecha inicio" required />
        <input className="input-form date-end-education" type="date" name="company-project" placeholder="Fecha fin" required />
      </div>
      </Colapsable>

      <Colapsable box="secondExperienceBox">
      <div className="drop-down hidden">
        <input className="input-form main-value name-company" id="company" type="text" name="company" placeholder="Empresa" required />
        <input className="input-form name-position" id="position" type="text" name="position" placeholder="Puesto de trabajo" required />
        <input className="input-form date-start-experience" id="init-data-experience" type="date" name="date-start-experience'" required />
        <input className="input-form date-end-experience" id="finish-data-experience" type="date" name="date-end-experience" required />
        <textarea className="input-form description-experience" name="description-experience" rows={8} cols={80} defaultValue={"                      "} />
      </div>
      </Colapsable>
      </Fieldset>
      </form>
    );
  }
}

export default Form;
