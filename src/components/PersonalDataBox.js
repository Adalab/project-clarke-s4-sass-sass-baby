import React, { Component } from 'react';

class PersonalDataBox extends Component {
  render() {
    return(
      <div className="cv-contact">
				<h2 className="cv-name cv-firstname">{ this.props.cv.name }</h2>
				<h3 className="cv-position cv-profession">{ this.props.cv.profession }</h3>
				<h4>Contacto</h4>
				<ul className="list-none">
					<li id="city-cv" className="cv-residence">Ciudad</li>
					<li id="email-cv" className="cv-telephone">Correo electrónico</li>
					<li id="tel-cv" className="cv-email">Teléfono</li>
					<li id="rrss-cv" className="cv-social">Redes sociales</li>
					<li id="web-cv" className="cv-personal-website">Web personal</li>
				</ul>
				<div className="cv-description">
  				<h4>Descripción</h4>
  				<p className="description-text cv-personal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  			</div>
			</div>
    );
  }
}

export default PersonalDataBox;
