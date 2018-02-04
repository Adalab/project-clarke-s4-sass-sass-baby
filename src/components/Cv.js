import React, { Component } from 'react';
import PersonalDataBox from './PersonalDataBox';
import EducationBox from './EducationBox';
import ProjectBox from './ProjectBox';
import ExperienceBox from './ExperienceBox';


class Cv extends Component {
  render() {
    return(
      <div className="print-cv">
        <div className="cv-left">
          <PersonalDataBox cv={this.props.cv} />
        </div>
        <div className="cv-right">
          <EducationBox cv={this.props.cv} />
          <ProjectBox cv={this.props.cv} />
          <ExperienceBox cv={this.props.cv} />
        </div>
      </div>
    );
  }
}
export default Cv;
