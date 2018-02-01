import React, { Component } from 'react';

class Fieldset extends Component {
  render(){
    return (

      <fieldset className="fieldset-information fieldset-background">
      <legend className="title">{this.props.title}</legend>
      <hr/>
      <div>
      {this.props.children}
      </div>
      </fieldset>

    );
  }

}

export default Fieldset;
