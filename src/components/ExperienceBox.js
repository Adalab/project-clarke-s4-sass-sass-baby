import React, { Component } from 'react';

class ExperienceBox extends Component {
	render() {
	return(
  	   <ul className="list-none">
                  <li className="cv-name-company bold"> { this.props.value } </li>
                  <li className="cv-name-position"> { this.props.value } </li>
                  <li className="cv-date-start-experience"> { this.props.value } </li>
                  <li className="cv-date-end-experience"> { this.props.value] } </li>
                </ul>
                <ul className="list-style cv-description-experience">
                  <li className="cv-description-experience"> { this.props.value] } </li>
                </ul>
  );
}
}
export default ExperienceBox;
