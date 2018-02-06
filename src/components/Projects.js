import React, { Component } from 'react';
import Fieldset from './Fieldset';
import Colapsable from './Colapsable';
import Input from './Input';

class Projects extends Component {
  static defaultProps = {
      yearexp: ['Año','1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','202','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018']
    }

  render() {
    let yearOptions = this.props.yearexp.map((yearexp) => {
              return <option className="option-form" key={yearexp} value={yearexp} >{yearexp}</option>
        });

    const handleChange = (event) => {
      const name = event.target.name;
      this.props.handleChange(name, event.target.value);
    };

    return (
      <Fieldset title= "Proyectos">
      <Colapsable box="firstProyectBox" link="Añadir proyecto 1">
      <div className= "drop-down">
      <Input onChange={handleChange} className="input-form main-value name-project" id="name-project" type="text" name="nameProject" placeholder="Nombre del proyecto" value={this.props.data.nameProject} deleteState={this.props.deleteState} required={true} />
      <Input onChange={handleChange} className="input-form company-project" id="company-project" type="text" name="companyProject" placeholder="Empresa o proyecto personal" value={this.props.data.companyProject} deleteState={this.props.deleteState} required={true} />
      <div className="containter-data-project">
      <select onChange={handleChange} className="input-form select-date" name="monthProject">
      <option className="option-form grey" selected>Mes</option>
      <option>Enero</option>
      <option>Febrero</option>
      <option>Marzo</option>
      <option>Abril</option>
      <option>Mayo</option>
      <option>Junio</option>
      <option>Julio</option>
      <option>Agosto</option>
      <option>Septiembre</option>
      <option>Octubre</option>
      <option>Noviembre</option>
      <option>Diciembre</option>
      </select>
      <select onChange={handleChange} className="input-form select-date" name="yearProject" id="selectorYear">
        {yearOptions}
      </select>
      </div>
      <textarea onChange={handleChange} className="input-form description-project" name="descriptionProject" rows={8} cols={80} defaultValue={""} required={true}/>
      </div>
      </Colapsable>

      <Colapsable box= "secondProyectBox" link="Añadir proyecto 2">
      <div className= "drop-down">
      <Input onChange={handleChange}  className="input-form main-value name-project" id="name-project" type="text" name="nameProject2" placeholder="Nombre del proyecto" value={this.props.data.nameProject2} deleteState={this.props.deleteState} required={true} />
      <Input onChange={handleChange}  className="input-form company-project" id="company-project" type="text" name="companyProject2" placeholder="Empresa o proyecto personal" value={this.props.data.companyProject2} deleteState={this.props.deleteState} required={true} />
      <div className="containter-data-project">
      <select onChange={handleChange} className="input-form select-date" name="monthProject2">
      <option className="option-form grey" selected>Mes</option>
      <option>Enero</option>
      <option>Febrero</option>
      <option>Marzo</option>
      <option>Abril</option>
      <option>Mayo</option>
      <option>Junio</option>
      <option>Julio</option>
      <option>Agosto</option>
      <option>Septiembre</option>
      <option>Octubre</option>
      <option>Noviembre</option>
      <option>Diciembre</option>
      </select>
      <select onChange={handleChange} className="input-form select-date" name="yearProject2" id="selectorYear" defaultValue={""}>
      {yearOptions}
      </select>
      </div>
      <textarea onChange={handleChange} className="input-form description-project" name="descriptionProject2" rows={8} cols={80} defaultValue={""} required={true}/>
      </div>
      </Colapsable>
      </Fieldset>
    );
  }
}

export default Projects;
