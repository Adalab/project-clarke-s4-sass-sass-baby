import React, { Component } from 'react';

class BasicBox extends Component {
	render() {
	return(
				<div className="cv-description">
         <h4>Descripción</h4>
         <p className="description-text cv-personal-description"> { this.props.value } </p>
        </div>
  );
}
}

export default basicBox;
