import React, { Component } from 'react';

class Input extends Component {
  render() {
    console.log(this.props.value)
    return (
        <div>
          <input onChange={this.props.onChange} className={this.props.className} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} required />
          <img className="buttons-project margin-right-buttons papelera" src="img/trash.png" alt="Icono de papelera" onClick={(e) => {this.props.deleteState(this.props.name)}}/>
        </div>
    );
  }
}

export default Input;
