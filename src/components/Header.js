import React, { Component } from 'react';

class Header extends Component {
render(){
return (
  <header className="header">
    <a href="#"><img className="logo" src="img/logo.svg" alt="logo" /></a>
    <button className="button-CV">Previsualizar</button>
  </header>
);
}
}

export default Header;
