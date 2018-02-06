import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Input from './Input';

class PersonalData extends Component {

  render() {
    const handleChange = (event) => {
      const name = event.target.name;
      this.props.handleChange(name, event.target.value);
    };
    return (
      <Fieldset title="Datos personales">
      <Input onChange={handleChange} className="input-form firstname" id="firstname" type="text" name="name" placeholder="Nombre y apellidos" value={this.props.data.name} deleteState={this.props.deleteState} required={true}/>
      <Input onChange={handleChange} className="input-form profession" id="profession" type="text" name="profession" placeholder="Profesión actual" value={this.props.data.profession} deleteState={this.props.deleteState} required={true}/>
      <Input onChange={handleChange} className="input-form residence" id="residence" type="text" name="residence" placeholder="Lugar de residencia" value={this.props.data.residence} deleteState={this.props.deleteState} required={true}/>

      <div id="input_container">
      <Input onChange={handleChange} className="input-form telephone" id="telephone" type="tel" name="telephone" placeholder="Teléfono" value={this.props.data.telephone} deleteState={this.props.deleteState} required={true} />
      <img src="img/phone.png" id="input_img" alt="telephone icon" />
      </div>

      <div id="input_container">
      <Input onChange={handleChange} className="input-form email" id="email" type="email" name="email" placeholder="Email" value={this.props.data.email} deleteState={this.props.deleteState} required={true} />
      <img src="img/email.png" id="input_img" alt="email icon" />
      </div>

      <div id="input_container">
      <Input onChange={handleChange} className="input-form social" id="social" type="url" name="social" placeholder="Red social - https://miredsocial.com" value={this.props.data.social} deleteState={this.props.deleteState} />
      <img src="img/github-logo.png" id="input_img" alt="icon social media" />
      </div>

      <Input onChange={handleChange} className="input-form personal-website" id="personal-website" type="url" name="personalWebsite" placeholder="Web personal- https://miwebpersonal.com" value={this.props.data.personalWebsite} deleteState={this.props.deleteState} />
      <textarea onChange={handleChange} className="input-form personal-description" name="personalDescription" rows={8} cols={80} defaultValue={""} />
      </Fieldset>
    );
  }
}

export default PersonalData;
