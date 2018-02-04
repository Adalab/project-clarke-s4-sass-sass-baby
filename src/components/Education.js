import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Colapsable from './Colapsable';

class Education extends Component {

  render() {
    const handleChange = (event) => {
      const name = event.target.id;
      this.props.handleChange(name, event.target.value);
    };
    return (
      <Fieldset title="Formación">
        <Colapsable box= "firstEducationBox" link="Añadir formación 1">
          <div className="drop-down">
          <input className="input-form title-education main-value" type="text" name="title-education" placeholder="Título" required />
          <input className="input-form center-education" type="text" name="company-project" placeholder="Centro de formación" required />
          <input className="input-form date-start-education" type="date" name="start-date-project" placeholder="Fecha inicio" required />
          <input className="input-form date-end-education" type="date" name="finish-date-project" placeholder="Fecha fin" required />
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
    );
  }
}

export default Education;
