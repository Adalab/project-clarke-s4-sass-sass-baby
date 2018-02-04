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
      cv: {
        name: 'Nombre', profession: 'profesión actual'
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

  render() {
    if (this.state.printing) {
      return (
        <div className="print-cv" style={{height: '100%', margin: 0}}>
          <LeftCv cv={this.state.cv} />
          <RightCv cv={this.state.cv} />
        </div>
      );
    }

    return (
      <div className="App">
      <iframe id="ifmcontentstoprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>
      <Header/>
      <div className="formandcv">
      <Form handleChange={this.updateCv}/>
      <div className="cv-content">
      <aside>
      <div className="print-cv">
        <LeftCv cv={this.state.cv} />
        <RightCv cv={this.state.cv} />
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
