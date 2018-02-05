import React, { Component } from 'react';

class Header extends Component {

handleDoubleClick() {
  const sectionForm = document.querySelector('#section-form');
  const sectionCV = document.querySelector('.cv-content');
  const buttonPreview = document.querySelector('.button-CV');

  buttonPreview.addEventListener('click', toogleClass);

  function toogleClass() {
    sectionForm.classList.toggle('display-none');
    if (sectionCV.style.display !== 'block') {
      sectionCV.style.display = 'block'
    } else {
      sectionCV.style.display = 'none'
    }
  };

  }

  render(){
    return (
      <header className="header">
      <a href="#"><img className="logo" src="img/logo.svg" alt="logo" /></a>
      <button className="button-CV" onClick={this.handleDoubleClick.bind(this)}>Previsualizar</button>
      </header>
    );
  }
}

export default Header;
