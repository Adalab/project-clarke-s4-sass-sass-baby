import React, { Component } from 'react';

class ExperienceBox extends Component {
	render() {
	return(
		<div className="experience">
			<h3 className="seccion tittle-experience">EXPERIENCIA</h3>
			{/*   EXPERIENCE 1 -------------*/}
			<ul className="list-none">
				<li className="cv-name-company bold">Nombre empresa</li>
				<li className="cv-name-position">Cargo ejercido</li>
				<li className="cv-date-start-experience">Fecha inicio</li>
				<li className="cv-date-end-experience">Fecha fin</li>
			</ul>
			<ul className="list-style cv-description-experience">
				<li className="cv-description-experience">Tarea realizada</li>
			</ul>
			{/*   EXPERIENCE 2 -------------*/}
			<ul className="list-none">
				<li className="cv-name-company1 bold margin-top">Nombre empresa</li>
				<li className="cv-name-position1">Cargo ejercido</li>
				<li className="cv-date-start-experience1">Fecha inicio</li>
				<li className="cv-date-end-experience1">Fecha fin</li>
			</ul>
			<ul className="list-style ul-experience">
				<li className="cv-description-experience1">Tarea realizada</li>
			</ul>
		</div>
  );
}
}
export default ExperienceBox;
