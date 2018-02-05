import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Colapsable from './Colapsable';
import Input from './Input';

class Education extends Component {

  render() {
    const handleChange = (event) => {
      const name = event.target.name;
      this.props.handleChange(name, event.target.value);
    };
    return (
      <Fieldset title="Formación">
        <Colapsable box= "firstEducationBox" link="Añadir formación 1" ref="firstEducationBox">
          <div className="drop-down">
            <Input onChange={handleChange} className="input-form title-education main-value" type="text" name="titleEducation" placeholder="Título" value={this.props.data.titleEducation} deleteState={this.props.deleteState} required />
            <Input onChange={handleChange} className="input-form center-education" type="text" name="trainingCenterEducation" placeholder="Centro de formación" value={this.props.data.trainingCenterEducation} deleteState={this.props.deleteState} required={true}/>
            <Input onChange={handleChange} className="input-form date-start-education" type="date" name="startDateEducation" placeholder="Fecha inicio" value={this.props.data.startDateEducation} deleteState={this.props.deleteState} required={true} />
            <Input onChange={handleChange} className="input-form date-end-education" type="date" name="finishDateEducation" placeholder="Fecha fin" value={this.props.data.finishDateEducation} deleteState={this.props.deleteState} required={true} />
          </div>
        </Colapsable>

        <Colapsable box= "secondEducationBox" link="Añadir formación 2">
        <div className="drop-down">
          <Input onChange={handleChange} className="input-form title-education1 main-value" type="text" name="titleEducation2" placeholder="Título" value={this.props.data.titleEducation2} deleteState={this.props.deleteState} required={true}/>
          <Input onChange={handleChange} className="input-form center-education1" type="text" name="trainingCenterEducation2" placeholder="Centro de formación" value={this.props.data.trainingCenterEducation2} deleteState={this.props.deleteState} required={true} />
          <Input onChange={handleChange} className="input-form date-start-education1" type="date" name="startDateEducation2" placeholder="Fecha inicio" value={this.props.data.startDateEducation2} deleteState={this.props.deleteState} required={true} />
          <Input onChange={handleChange} className="input-form date-end-education1" type="date" name="finishDateEducation2" placeholder="Fecha inicio" value={this.props.data.startDateEducation2} deleteState={this.props.deleteState} required={true} />
        </div>
        </Colapsable>
      </Fieldset>
    );
  }
}

export default Education;
