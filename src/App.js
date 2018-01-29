

import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import SectionGeneral from './components/SectionGeneral';
import Tabs from './components/Tabs';
import Form from './components/Form';
import ButtonsForm from './components/ButtonsForm';
import RightCv from './components/RightCv';
import LeftCv from './components/LeftCv';

// import './print_media_query.scss'

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      printing: false
    }

  }

  componentDidMount() {
    var self = this;
    window.onafterprint = () => {
      self.setState({printing: false})
    };
  }


  imprimir() {
    this.setState({printing: true})
    setTimeout(() => {
      window.print();
    }, 1000);

  }


  renderApplication() {

      if (this.state.printing === true) {
        return (
          <div className="print-cv" style={{height: '100%', margin: 0}}>
            <LeftCv/>
            <RightCv/>
          </div>
        )
      }

      return (
        <div className="App">
          <iframe id="ifmcontentstoprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>
          <main>
            <Header/>
            <div className="formandcv">
              <SectionGeneral/>
              <div className="cv-content">
                <aside>
                  <div className="print-cv">
                    <LeftCv/>
                    <RightCv/>
                  </div>
                  <input type="button" onClick={ this.imprimir.bind(this) } className="buttonPrint" defaultValue="Imprimir" />
                </aside>
              </div>
            </div>
          </main>
        </div>
      )
  }


  render() {

    return (
      this.renderApplication()
    );
  }
}

export default App;
