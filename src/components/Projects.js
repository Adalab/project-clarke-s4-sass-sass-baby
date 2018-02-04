import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Colapsable from './Colapsable';

class Projects extends Component {

  render() {
    const handleChange = (event) => {
      const name = event.target.name;
      this.props.handleChange(name, event.target.value);
    };
    return (
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
    );
  }
}

export default Projects;
