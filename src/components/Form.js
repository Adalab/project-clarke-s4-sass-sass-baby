import React, { Component } from 'react';
import Tabs from './Tabs';
import PersonalData from './PersonalData';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import { Link, Route, Switch } from 'react-router-dom';

class Form extends Component {

  render(){

    return (
      <section id="section-form">
      <Tabs/>
      <form className="main-form" id="main-form" method="true">
      <Switch>
      <Route exact path="/" render={()=>
        <div>
        <PersonalData data={this.props.data} handleChange={this.props.handleChange} deleteState={this.props.deleteState}/>
        <div className="buttonsChangeForm">
        <button className="buttonContinue"><Link to="/studies">Continuar</Link></button>
        </div>
        </div>
      }/>
      </Switch>
      <Switch>
      <Route path="/studies" render={()=>
        <div>
        <Education data={this.props.data} handleChange={this.props.handleChange} deleteState={this.props.deleteState}/>
        <div className="buttonsChangeForm">
        <button className="buttonContinue"><Link to="/projects">Continuar</Link></button>
        </div>
        </div>
      }/>
      </Switch>
      <Switch>
      <Route path="/projects" render={()=>
        <div>
        <Projects data={this.props.data} handleChange={this.props.handleChange} deleteState={this.props.deleteState}/>
        <div className="buttonsChangeForm">
        <button className="buttonContinue"><Link to="/experience">Continuar</Link></button>
        </div>
        </div>
      }/>
      </Switch>
      <Switch>
      <Route path="/experience" render={()=>
        <div>
        <Experience data={this.props.data} handleChange={this.props.handleChange} deleteState={this.props.deleteState}/>
        <div className="buttonsChangeForm">
        <button className="buttonContinue"><Link exact to="/">Continuar</Link></button>
        </div>
        </div>
      }/>
      </Switch>
      </form>
      </section>
    );
  }
}

export default Form;
