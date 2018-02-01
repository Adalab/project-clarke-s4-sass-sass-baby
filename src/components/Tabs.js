import React, { Component } from 'react';
import TabsItem from './TabsItem';


class Tabs extends Component {
  render(){
    return (
      <nav className="main-nav">
      <ul className="main-nav-list">
      <TabsItem dataid={0} display="active" logo="woman-avatar" alt="icon personal data" className="icon-personal" navClass="nav-personalData" titleTab="Datos personales"/>
      <TabsItem dataid={1} logo="hat-education" alt="icon education" className="icon-education" navClass="nav-education" titleTab="Formación"/>
      <TabsItem dataid={2} logo="presentation" alt="icon projects" className="icon-projects" navClass="nav-project" titleTab="Proyectos"/>
      <TabsItem dataid={3} logo="suitcase" alt="icon experience" className="icon-experience" navClass="nav-experience" titleTab="Experiencia Laboral"/>
      </ul>
      </nav>
    );
  }
}

export default Tabs;
