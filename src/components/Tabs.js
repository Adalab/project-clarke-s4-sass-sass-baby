import React, { Component } from 'react';

class Tabs extends Component {
  render(){
    return (
      <nav className="main-nav">
      <ul className="main-nav-list">

      <li className="button-menu" data-id={0}>
      <button className="main-nav-button active">
      <img src="img/woman-avatar.png" alt="icon personal data" className="nav-icon icon-personal" />
      <p className="nav-text nav-personalData">Datos personales</p>
      </button>
      </li>

      <li className="button-menu" data-id={1}>
      <button className="main-nav-button">
      <img src="img/hat-education.png" alt="icon education" className="nav-icon icon-education" />
      <p className="nav-text nav-education">Formación</p>
      </button>
      </li>

      <li className="button-menu" data-id={2}>
      <button className="main-nav-button">
      <img src="img/presentation.png" alt="icon projects" className="nav-icon icon-projects" />
      <p className="nav-text nav-project">Proyectos</p>
      </button>
      </li>

      <li className="button-menu" data-id={3}>
      <button className="main-nav-button">
      <img src="img/suitcase.png" alt="icon experience" className="nav-icon icon-experience" />
      <p className="nav-text nav-experience">Experiencia Laboral</p>
      </button>
      </li>

      </ul>

      </nav>

    );
  }
}

export default Tabs;
