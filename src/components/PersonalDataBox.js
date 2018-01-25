import React, { Component } from 'react';

class PersonalDataBox extends Component {
	render() {
	return(
		<div className="cv-contact">
               		 <h4>Contacto</h4>
               		 <ul className="list-none">
                			 <li id="city-cv" className="cv-residence"> { this.props.value } </li>
                 			 <li id="email-cv" className="cv-telephone"> { this.props.value } </li>
                 			 <li id="tel-cv" className="cv-email"> { this.props.value } </li>
                 			 <li id="rrss-cv" className="cv-social"> { this.props.valuel } </li>
                 			 <li id="web-cv" className="cv-personal-website"> { this.props.value} </li>
               		 </ul>
            	 </div>
  );
}
}

export default PersonalDataBox;
