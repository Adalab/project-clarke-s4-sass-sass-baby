import React, { Component } from 'react';

class ProjectBox extends Component {
	render() {
	return(
		<div className="proyects">
			<h3 className="seccion tittle-projects">PROYECTOS</h3>
			<ul className="list-none">
				{/*   PROJECTS 1  -------------*/}
				<li className="cv-name-project bold">Nombre del proyecto</li>
				<li className="cv-company-project">Empresa</li>
				<li className="write-date put-inline"> Mes </li>
				<li className="write-date put-inline"> Año </li>
			</ul>
			<p className="cv-description-project"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa.
			</p>
			{/*   PROJECTS 2  -------------*/}
			<ul className="list-none">
				<li className="cv-name-project1 bold">Nombre del proyecto</li>
				<li className="cv-company-project1">Empresa</li>
				<li className="write-date put-inline"> Mes </li>
				<li className="write-date put-inline"> Año </li>
			</ul>
			<p className="cv-description-project1"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa.
			</p>
		</div>
  );
}
}

export default ProjectBox;
