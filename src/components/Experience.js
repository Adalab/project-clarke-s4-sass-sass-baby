import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Colapsable from './Colapsable';

class Experience extends Component {

  render() {
    const handleChange = (event) => {
      const name = event.target.id;
      this.props.handleChange(name, event.target.value);
    };
    return (
      <Fieldset title= "Experiencia">
        <Colapsable box="firstExperienceBox" link="Añadir experiencia 1">
        <div className="drop-down">
          <input className="input-form title-education main-value" type="text" name="title-education" placeholder="Título" required />
          <input className="input-form center-education" type="text" name="company-project" placeholder="Centro de formación" required />
          <input className="input-form date-start-education" type="date" name="company-project" placeholder="Fecha inicio" required />
          <input className="input-form date-end-education" type="date" name="company-project" placeholder="Fecha fin" required />
        </div>
        </Colapsable>

        <Colapsable box="secondExperienceBox" link="Añadir experiencia 2">
        <div className="drop-down">
          <input className="input-form main-value name-company" id="company" type="text" name="company" placeholder="Empresa" required />
          <input className="input-form name-position" id="position" type="text" name="position" placeholder="Puesto de trabajo" required />
          <input className="input-form date-start-experience" id="init-data-experience" type="date" name="date-start-experience'" required />
          <input className="input-form date-end-experience" id="finish-data-experience" type="date" name="date-end-experience" required />
          <textarea className="input-form description-experience" name="description-experience" rows={8} cols={80} defaultValue={"                      "} />
        </div>
        </Colapsable>
      </Fieldset>
    );
  }
}

export default Experience;
