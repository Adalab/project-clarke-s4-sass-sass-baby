import React, { Component } from 'react';

class ProjectBox extends Component {
	render() {
	return(
    <ul className="list-none">
      <li className="cv-name-project bold"> { this.props.value } </li>
      <li className="cv-company-project"> { this.props.value } </li>
      <li className="write-date put-inline"> { this.props.value } </li>
      <li className="write-date put-inline"> { this.props.value } </li>
    </ul>
    <p className="cv-description-project1"> { this.props.value } </p>
  );
}
}

export default ProjectBox;
