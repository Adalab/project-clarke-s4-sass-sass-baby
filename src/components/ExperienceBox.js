import React, { Component } from 'react';

class ExperienceBox extends Component {
	render() {
	return(
		<div className="experience">
			<h3 className="seccion tittle-experience">EXPERIENCIA</h3>
			{/*   EXPERIENCE 1 -------------*/}
			<ul className="list-none">
				<li className="cv-name-company bold">{ this.props.cv.companyName }</li>
				<li className="cv-name-position">{ this.props.cv.titleExperiencie }</li>
				<li className="cv-date-start-experience">{ this.props.cv.startDateExperience }</li>
				<li className="cv-date-end-experience">{ this.props.cv.finishDateExperience }</li>
			</ul>
			<ul className="list-style cv-description-experience">
				<li className="cv-description-experience">{ this.props.cv.descriptionExperience }</li>
			</ul>
			{/*   EXPERIENCE 2 -------------*/}
			<ul className="list-none">
				<li className="cv-name-company1 bold margin-top">{ this.props.cv.companyName2 }</li>
				<li className="cv-name-position1">{ this.props.cv.titleExperiencie2 }</li>
				<li className="cv-date-start-experience1">{ this.props.cv.startDateExperience2 }</li>
				<li className="cv-date-end-experience1">{ this.props.cv.finishDateExperience2 }</li>
			</ul>
			<ul className="list-style ul-experience">
				<li className="cv-description-experience1">{ this.props.cv.descriptionExperience2 }</li>
			</ul>
		</div>
  );
}
}
export default ExperienceBox;
