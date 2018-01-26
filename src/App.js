import React, { Component } from 'react';
import './index.css';
import Header from './components/Header';
import SectionGeneral from './components/SectionGeneral';
import Tabs from './components/Tabs';
import Form from './components/Form';
import ButtonsForm from './components/ButtonsForm';
import RightCv from './components/RightCv';
import LeftCv from './components/LeftCv';

class App extends Component {
  render() {
    return (
      <div className="App">
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
          <input type="button" className="buttonPrint" defaultValue="Imprimir" />
        </aside>
      </div>
      </div>
      </main>
      </div>
    );
  }
}

export default App;
