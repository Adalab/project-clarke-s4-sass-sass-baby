import React, { Component } from 'react';


class FieldsetPersonal extends Component {
render(){
return(

  <fieldset className="fieldset-information fieldset-personal">
  <legend className="title">Datos personales</legend>
  <hr />

  <label className="label-form firstname" htmlFor="firstname">Nombre</label>
  <input className="input-form firstname" id="firstname" type="text" name="firstname" placeholder="Nombre y apellidos" required />

  <label className="label-form profession" htmlFor="profession">Profesión actual</label>
  <input className="input-form profession" id="profession" type="text" name="profession" placeholder="Profesión actual" required />

  <label className="label-form residence" htmlFor="residence">Lugar de residencia</label>
  <input className="input-form residence" id="residence" type="text" name="residence" placeholder="Lugar de residencia" required />

  <div id="input_container">
  <label className="label-form telephone" htmlFor="telephone">Teléfono</label>
  <input className="input-form telephone" id="telephone" type="tel" name="telephone" placeholder="Teléfono" required />
  <img src="img/phone.png" id="input_img" />
  </div>

  <div id="input_container">
  <label className="label-form email" htmlFor="email">Email</label>
  <input className="input-form email" id="email" type="email" name="email" placeholder="Email" required />
  <img src="img/email.png" id="input_img" />
  </div>

  <div id="input_container">
  <label className="label-form social" htmlFor="social">Redes sociales</label>
  <input className="input-form social" id="social" type="url" name="social" placeholder="Red social - https://miredsocial.com" />
  <img src="img/github-logo.png" id="input_img" />
  </div>

  <label className="label-form personal-website" htmlFor="personal-website">Web personal</label>
  <input className="input-form personal-website" id="personal-website" type="url" name="personal-website" placeholder="Web personal- https://miwebpersonal.com" />

  <label htmlFor="personal-description">
  Descripción personal:
  </label>
  <textarea className="input-form personal-description" name="personal-description" rows={8} cols={80} defaultValue={""} />
  </fieldset>

);
}
}

export default FieldsetPersonal;
