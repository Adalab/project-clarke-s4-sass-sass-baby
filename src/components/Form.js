import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Colapsable from './Colapsable';
import PersonalData from './PersonalData';
import { Link, Route, Switch } from 'react-router-dom';
// const { Link, Route, Switch } = 'react-router-dom';

class Form extends Component {
  render(){
    return (
      <form className="main-form" id="main-form" action method="post">

      <Route exact path="/" render={()=>
        <div>
          <PersonalData handleChange={this.props.handleChange}/>
          <div className="buttonsChangeForm">
            <button className="buttonContinue"><Link to="/studies">Continuar</Link></button>
          </div>
        </div>
      }/>

      <Route path="/studies" render={()=>
        <div>
        <Fieldset title="Formación">
          <Colapsable box= "firstEducationBox" link="Añadir formación 1">
            <div className="drop-down">
            <input className="input-form title-education main-value" type="text" name="title-education" placeholder="Título" required />
            <input className="input-form center-education" type="text" name="company-project" placeholder="Centro de formación" required />
            <input className="input-form date-start-education" type="date" name="company-project" placeholder="Fecha inicio" required />
            <input className="input-form date-end-education" type="date" name="company-project" placeholder="Fecha fin" required />
            </div>
          </Colapsable>

          <Colapsable box= "secondEducationBox" link="Añadir formación 2">
          <div className="drop-down">
            <input className="input-form title-education1 main-value" type="text" name="title-education1" placeholder="Título" required />
            <input className="input-form center-education1" type="text" name="company-project" placeholder="Centro de formación" required />
            <input className="input-form date-start-education1" type="date" name="company-project" placeholder="Fecha inicio" required />
            <input className="input-form date-end-education1" type="date" name="company-project" placeholder="Fecha inicio" required />
          </div>
          </Colapsable>
        </Fieldset>
        <div className="buttonsChangeForm">
          <button className="buttonContinue"><Link to="/projects">Continuar</Link></button>
        </div>
      </div>
      }/>

      <Route path="/projects" render={()=>
        <div>
      <Fieldset title= "Proyectos">
      <Colapsable box="firstProyectBox" link="Añadir proyecto 1">
        <div className= "drop-down">
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

      <Colapsable box= "secondProyectBox" link="Añadir proyecto 2">
        <div className= "drop-down">
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
      <div className="buttonsChangeForm">
        <button className="buttonContinue"><Link to="/experience">Continuar</Link></button>
      </div>
    </div>
    }/>

    <Route path="/experience" render={()=>
      <div>
      <Fieldset title= "Experiencia">
      <Colapsable box="firstExperienceBox" link="Añadir educación 1">
      <div className="drop-down">
        <input className="input-form title-education main-value" type="text" name="title-education" placeholder="Título" required />
        <input className="input-form center-education" type="text" name="company-project" placeholder="Centro de formación" required />
        <input className="input-form date-start-education" type="date" name="company-project" placeholder="Fecha inicio" required />
        <input className="input-form date-end-education" type="date" name="company-project" placeholder="Fecha fin" required />
      </div>
      </Colapsable>

      <Colapsable box="secondExperienceBox" link="Añadir educación 2">
      <div className="drop-down">
        <input className="input-form main-value name-company" id="company" type="text" name="company" placeholder="Empresa" required />
        <input className="input-form name-position" id="position" type="text" name="position" placeholder="Puesto de trabajo" required />
        <input className="input-form date-start-experience" id="init-data-experience" type="date" name="date-start-experience'" required />
        <input className="input-form date-end-experience" id="finish-data-experience" type="date" name="date-end-experience" required />
        <textarea className="input-form description-experience" name="description-experience" rows={8} cols={80} defaultValue={"                      "} />
      </div>
      </Colapsable>
      </Fieldset>
      <div className="buttonsChangeForm">
        <button className="buttonContinue"><Link exact to="/">Continuar</Link></button>
      </div>
    </div>
      }/>

      </form>
    );
  }
}

export default Form;
