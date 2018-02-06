import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import Tabs from './components/Tabs';
import Cv from './components/Cv';
import PersonalDataBox from './components/PersonalDataBox';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      printing: false,
      cv: {
        name: 'Nombre',
        profession: 'Profesión Actual',
        residence: 'Ciudad',
        telephone: 'Correo electrónico',
        email: 'email',
        social: 'Redes sociales',
        personalWebsite: 'Web personal',
        personalDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
        titleEducation: 'Título de la formación',
        titleEducation2: 'Título de la formación 2',
        trainingCenterEducation: 'Centro de formación',
        trainingCenterEducation2: 'Centro de formación 2',
        startDateEducation: 'Fecha de inicio',
        finishDateEducation: 'Fecha de fin',
        startDateEducation2: 'Fecha de inicio',
        finishDateEducation2: 'Fecha de fin',
        companyName: 'Nombre empresa',
        titleExperiencie: 'Puesto de trabajo',
        titleExperiencie2: 'Puesto de trabajo 2',
        startDateExperience: 'Fecha de inicio',
        finishDateExperience: 'Fecha de fin',
        startDateExperience2: 'Fecha de inicio',
        finishDateExperience2: 'Fecha de fin',
        descriptionExperience: 'Describe aquí tu experiencia profesional',
        descriptionExperience2: 'Describe aquí tu experiencia profesional',
        nameProject: 'Nombre del proyecto',
        nameProject2: 'Nombre del proyecto 2',
        companyProject: 'Empresa',
        companyProject2: 'Empresa 2',
        descriptionProject: 'Describe aquí tu proyecto',
        descriptionProject2: 'Describe aquí tu proyecto',
        monthProject: 'Mes',
        yearProject: 'Año',
        monthProject2: 'Mes',
        yearProject2: 'Año'
      }
    }

    this.updateCv =  this.updateCv.bind(this);
    this.print =  this.print.bind(this);
  }

  updateCv(name, value) {
    const cv = this.state.cv;
    cv[name] = value;
    this.setState({cv: cv});
  }

  componentDidMount() {
    window.onafterprint = () => this.setState({printing: false});
  }

  print() {
    this.setState({printing: true})
    setTimeout(() => window.print(), 1000);
  }

  deleteState = (key) => {
    const newCV = Object.assign({}, this.state.cv, {[key]: ''})
    this.setState({cv: newCV});
  }

  render() {
    if (this.state.printing) {
      return (
        <Cv style={{height: '100%', margin: 0}} cv={this.state.cv} />
      );
    }

    return (
      <div className="App">
      <iframe id="ifmcontentstoprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>
      <Header/>
      <div className="formandcv">
      <Form data={this.state.cv} handleChange={this.updateCv} deleteState={this.deleteState}/>
      <div className="cv-content">
      <aside>
      <Cv cv={this.state.cv} />
      <input type="button" onClick={ this.print } className="buttonPrint" defaultValue="Imprimir" />
      </aside>
      </div>
      </div>
      <footer className="footer">
      <p>Powered by<span><a className="adalab" target="_blank" href="http://adalab.es/"> &nbsp;Adalab</a></span></p>
      </footer>
      </div>
    );
  }
}

export default App;
