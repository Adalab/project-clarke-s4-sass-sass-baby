import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Colapsable from './Colapsable';
import Input from './Input';

class Experience extends Component {

  render() {
    const handleChange = (event) => {
      const name = event.target.name;
      this.props.handleChange(name, event.target.value);
    };
    return (
      <Fieldset title= "Experiencia">
      <Colapsable box="firstExperienceBox" link="Añadir experiencia 1">
      <div className="drop-down">
      <Input onChange={handleChange} className="input-form title-education main-value" type="text" name="companyName" placeholder="Empresa" value={this.props.data.companyName} deleteState={this.props.deleteState} required={true}/>
      <Input onChange={handleChange} className="input-form center-education" type="text" name="titleExperiencie" placeholder="Puesto de trabajo" value={this.props.data.titleExperiencie} deleteState={this.props.deleteState} required={true}/>
      <input onChange={handleChange} className="input-form date-start-education" type="date" name="startDateExperience" placeholder="Fecha inicio" />
      <input onChange={handleChange} className="input-form date-end-education" type="date" name="finishDateExperience" placeholder="Fecha fin"/>
      <textarea onChange={handleChange} className="input-form description-experience" name="descriptionExperience" rows={8} cols={80} defaultValue={""} value={this.props.data.descriptionExperience} deleteState={this.props.deleteState} required={true}/>
      </div>
      </Colapsable>

      <Colapsable box="secondExperienceBox" link="Añadir experiencia 2">
      <div className="drop-down">
      <Input onChange={handleChange} className="input-form main-value name-company" id="company" type="text" name="companyName2" placeholder="Empresa" value={this.props.data.companyName2} deleteState={this.props.deleteState} required={true}/>
      <Input onChange={handleChange} className="input-form name-position" id="position" type="text" name="titleExperiencie2" placeholder="Puesto de trabajo" value={this.props.data.titleExperiencie2} deleteState={this.props.deleteState} required={true}/>
      <input onChange={handleChange} className="input-form date-start-experience" id="init-data-experience" type="date" name="startDateExperience2"/>
      <input onChange={handleChange} className="input-form date-end-experience" id="finish-data-experience" type="date" name="finishDateExperience2"/>
      <textarea onChange={handleChange} className="input-form description-experience" name="descriptionExperience2" rows={8} cols={80} defaultValue={""} value={this.props.data.descriptionExperience2} deleteState={this.props.deleteState} required={true}/>
      </div>
      </Colapsable>
      </Fieldset>
    );
  }
}

export default Experience;
