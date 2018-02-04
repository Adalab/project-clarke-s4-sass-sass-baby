import React, { Component } from 'react';

class Colapsable extends Component {
  constructor(props){
    super(props)
    this.state={
      collapsed:true
    }
  this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({collapsed : !this.state.collapsed});
  }

  render(){

    const collapse = this.state.collapsed ? 'hidden' : '';

    return(
      <div  id={this.props.box}>
      <div className="add-project caja-educacion">
      <div className="addfield" data-id={0}>
      <a onClick={this.handleClick} className="textadd">{this.props.link}</a>
      </div>

      <div className="buttons-project-container">
      <img className="buttons-project margin-right-buttons papelera" src="img/trash.png" alt="Icono de papelera" data-id={0} />
      <img id="arrowUpFirstElement" className="buttons-project margin-right-buttons" src="img/arrowup.png" alt="Flecha hacia arriba" />
      <img id="arrowDownFirstElement" className="buttons-project flecha-abajo" src="img/arrowdown.png" alt="Flecha hacia abajo" />
      </div>
      </div>

      <div className= {`drop-down ${collapse}`}>
      {this.props.children}
      </div>
      </div>

    );
  }

}
export default Colapsable;
