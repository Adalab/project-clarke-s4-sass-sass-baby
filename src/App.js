import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import Tabs from './components/Tabs';
import RightCv from './components/RightCv';
import LeftCv from './components/LeftCv';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      printing: false,
      name: ''
    }
    this.updateState =  this.updateState.bind(this);
    this.print =  this.print.bind(this);
  }

  updateState(name, value) {
    const state = {};
    state[name] = value;
    this.setState(state);
  }

  componentDidMount() {
    window.onafterprint = () => this.setState({printing: false});
  }

  print() {
    this.setState({printing: true})
    setTimeout(() => window.print(), 1000);
  }

  render() {
    if (this.state.printing) {
      return (
        <div className="print-cv" style={{height: '100%', margin: 0}}>
        <LeftCv/>
        <RightCv/>
        </div>
      );
    }

    return (
      <div className="App">
      <iframe id="ifmcontentstoprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>
      <Header/>
      <div className="formandcv">
      <Form handleChange={this.updateState}/>
      <div className="cv-content">
      <aside>
      <div className="print-cv">
      <LeftCv name={this.state.name}/>
      <RightCv/>
      </div>
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
