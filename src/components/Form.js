import React, { Component } from 'react';
import FieldsetPersonal from './FieldsetPersonal';
import FieldsetCollapse from './FieldsetCollapse';

class Form extends Component {
  render(){
    return (
      <form className="main-form" id="main-form" action method="post">
      <FieldsetPersonal/>
      <FieldsetCollapse/>
      </form>
    );
  }
}

export default Form;
