import React, { Component } from 'react';
import TabsItem from './TabsItem';
import { NavLink } from 'react-router-dom';


class Tabs extends Component {
  render(){
    return (
      <nav className="main-nav">
        <ul className="main-nav-list">
          <NavLink exact to="/" activeClassName="active">
            <TabsItem dataid={0} logo="woman-avatar" alt="icon personal data" className="icon-personal" navClass="nav-personalData" titleTab="Datos personales"/>
          </NavLink>
          <NavLink exact to="/studies" activeClassName="active">
            <TabsItem dataid={1} logo="hat-education" alt="icon education" className="icon-education" navClass="nav-education" titleTab="Formación"/>
          </NavLink>
          <NavLink exact to="/projects" activeClassName="active">
            <TabsItem dataid={2} logo="presentation" alt="icon projects" className="icon-projects" navClass="nav-project" titleTab="Proyectos"/>
          </NavLink>
          <NavLink exact to="/experience" activeClassName="active">
            <TabsItem dataid={3} logo="suitcase" alt="icon experience" className="icon-experience" navClass="nav-experience" titleTab="Experiencia Laboral"/>
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default Tabs;
