import React, { Component } from 'react';

class PersonalDataBox extends Component {
  render() {
    return(
      <div className="cv-contact">
				<h2 className="cv-name cv-firstname">{ this.props.cv.name }</h2>
				<h3 className="cv-position cv-profession">{ this.props.cv.profession }</h3>
				<h4>Contacto</h4>
				<ul className="list-none">
					<li id="city-cv" className="cv-residence"> { this.props.cv.residence }</li>
					<li id="email-cv" className="cv-telephone">{ this.props.cv.telephone }</li>
					<li id="tel-cv" className="cv-email">{ this.props.cv.email }</li>
					<li id="rrss-cv" className="cv-social">{ this.props.cv.social }</li>
					<li id="web-cv" className="cv-personal-website">{ this.props.cv.personalWebsite }</li>
				</ul>
				<div className="cv-description">
  				<h4>Descripción</h4>
  				<p className="description-text cv-personal-description"> { this.props.cv.personalDescription }</p>
  			</div>
			</div>
    );
  }
}

export default PersonalDataBox;
