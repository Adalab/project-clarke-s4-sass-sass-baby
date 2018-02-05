import React, { Component } from 'react';

class EducationBox extends Component {
	render() {
	return(
		<div className="education">
			<h3 className="seccion tittle-education">FORMACIÓN</h3>
			{/*   FORMACIÓN 1   -------------*/}
			<ul className="list-none margin-bottom esconder formacionuno">
				<li className="cv-title-education bold">{ this.props.cv.titleEducation }</li>
				<li className="cv-center-education">{ this.props.cv.trainingCenterEducation }</li>
				<li className="date cv-date-start-education put-inline">{ this.props.cv.startDateEducation }</li>
				<li className="cv-date-end-education put-inline">{ this.props.cv.finishDateEducation }</li>
			</ul>
			{/*   FORMACIÓN 2   -------------*/}
			<ul className="list-none esconder formaciondos">
				<li className="cv-title-education1 bold">{ this.props.cv.titleEducation2 }</li>
				<li className="cv-center-education1">{ this.props.cv.trainingCenterEducation2 }</li>
				<li className="cv-date-start-education1 put-inline">{ this.props.cv.startDateEducation2 }</li>
				<li className="cv-date-end-education1 put-inline">{ this.props.cv.finishDateEducation2 }</li>
			</ul>
		</div>
  );
}
}

export default EducationBox;
