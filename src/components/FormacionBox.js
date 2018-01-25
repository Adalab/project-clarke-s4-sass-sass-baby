import React, { Component } from 'react';

class PersonalDataBox extends Component {
	render() {
	return(
		<div className="cv-contact">
      <h4>Contacto</h4>
   		 <ul className="list-none margin-bottom esconder formacionuno">
    			 <li className="cv-title-education bold"> { this.props.value } </li>
     			 <li className="cv-center-education"> { this.props.value } </li>
           <li className="date cv-date-start-education put-inline"> { this.props.value } </li>
           <li className="cv-date-end-education put-inline"> { this.value } </li>
   		 </ul>
    </div>
  );
}
}

export default PersonalDataBox;
