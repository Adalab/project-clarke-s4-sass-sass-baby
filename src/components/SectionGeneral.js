import React, { Component } from 'react';
import Tabs from './Tabs';
import Form from './Form';


class SectionGeneral extends Component {
  render(){
    return (
      <section id="section-form">
        <Tabs/>
        <Form handleChange={ this.props.handleChange }/>
      </section>
    );
  }
}

export default SectionGeneral;
