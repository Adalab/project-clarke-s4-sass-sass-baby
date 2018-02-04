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
			</div>
	  );
	}
}

export default PersonalDataBox;
