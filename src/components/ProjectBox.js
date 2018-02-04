import React, { Component } from 'react';

class ProjectBox extends Component {
	render() {
	return(
		<div className="proyects">
			<h3 className="seccion tittle-projects">PROYECTOS</h3>
			<ul className="list-none">
				{/*   PROJECTS 1  -------------*/}
				<li className="cv-name-project bold">{ this.props.cv.nameProject }</li>
				<li className="cv-company-project">{ this.props.cv.companyProject }</li>
				<li className="write-date put-inline">{ this.props.cv.monthProject }</li>
				<li className="write-date put-inline">{ this.props.cv.yearProject }</li>
			</ul>
			<p className="cv-description-project">{ this.props.cv.descriptionProject }
			</p>
			{/*   PROJECTS 2  -------------*/}
			<ul className="list-none">
				<li className="cv-name-project1 bold">{ this.props.cv.nameProject2 }</li>
				<li className="cv-company-project1">{ this.props.cv.companyProject2}</li>
				<li className="write-date put-inline">{ this.props.cv.monthProject2 }</li>
				<li className="write-date put-inline">{ this.props.cv.yearProject2 }</li>
			</ul>
			<p className="cv-description-project1"> { this.props.cv.descriptionProject2 }
			</p>
		</div>
  );
}
}

export default ProjectBox;
