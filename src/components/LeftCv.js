import React, { Component } from 'react';
import BasicBox from './BasicBox';
import PersonalDataBox from './PersonalDataBox';

class LeftCv extends Component {
  render() {
    return(
      <div className="cv-left">
        <PersonalDataBox name={this.props.name}/>
        <BasicBox/>
      </div>
    );
  }
}

export default LeftCv;
