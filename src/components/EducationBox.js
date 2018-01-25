import React, { Component } from 'react';

class EducationBox extends Component {
	render() {
	return(
		<div className="education">
		<h3 className="seccion tittle-education">FORMACIÓN</h3>
			{/*   FORMACIÓN 1   -------------*/}
			<ul className="list-none margin-bottom esconder formacionuno">
				<li className="cv-title-education bold">Título de la formación</li>
				<li className="cv-center-education">Centro y ciudad</li>
				<li className="date cv-date-start-education put-inline">Fecha inicio </li>
				<li className="cv-date-end-education put-inline">Fecha finalización </li>
			</ul>
			{/*   FORMACIÓN 2   -------------*/}
			<ul className="list-none esconder formaciondos">
				<li className="cv-title-education1 bold">Título de la formación</li>
				<li className="cv-center-education1">Centro y ciudad</li>
				<li className="cv-date-start-education1 put-inline">Fecha inicio </li>
				<li className="cv-date-end-education1 put-inline">Fecha finalización </li>
			</ul>
		</div>
  );
}
}

export default EducationBox;
