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
      <input onChange={handleChange} className="input-form main-value name-project" id="name-project" type="text" name="nameProject" placeholder="Nombre del proyecto" required />
      <input onChange={handleChange} className="input-form company-project" id="company-project" type="text" name="companyProject" placeholder="Empresa o proyecto personal" required />
      <div className="containter-data-project">
      <select onChange={handleChange} className="input-form select-date" name="monthProject">
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
      <select onChange={handleChange} className="input-form select-date" name="yearProject" id="selectorYear">
      <option className="option-form" disabled selected>Año</option>
      <option>2018</option>
      <option>2017</option>
      <option>2016</option>
      <option>2015</option>
      <option>2014</option>
      <option>2013</option>
      <option>2012</option>
      <option>2011</option>
      <option>2010</option>
      <option>2009</option>
      <option>2008</option>
      <option>2007</option>
      </select>
      </div>
      <textarea onChange={handleChange} className="input-form description-project" name="descriptionProject" rows={8} cols={80} defaultValue={""} />
      </div>
      </Colapsable>

      <Colapsable box= "secondProyectBox" link="Añadir proyecto 2">
      <div className= "drop-down">
      <input onChange={handleChange}  className="input-form main-value name-project" id="name-project" type="text" name="nameProject2" placeholder="Nombre del proyecto" required />
      <input onChange={handleChange}  className="input-form company-project" id="company-project" type="text" name="companyProject2" placeholder="Empresa o proyecto personal" required />
      <div className="containter-data-project">
      <select onChange={handleChange} className="input-form select-date" name="monthProjectProject2">
      <option className="option-form grey"  disabled selected>Mes</option>
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
      <select onChange={handleChange} className="input-form select-date" name="yearProject2" id="selectorYear">
      <option className="option-form" disabled selected>Año</option>
      </select>
      </div>
      <textarea onChange={handleChange} className="input-form description-project" name="descriptionProject2" rows={8} cols={80} defaultValue={""} />
      </div>
      </Colapsable>
      </Fieldset>
    );
  }
}

export default Projects;
