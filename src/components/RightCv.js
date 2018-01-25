import React, { Component } from 'react';
import EducationBox from './EducationBox';
import ProjectBox from './ProjectBox';
import ExperienceBox from './ExperienceBox';


class RightCv extends Component {
  render() {
    return(
      <div className="cv-right">
        {/*   FORMACIÓN -------------*/}
        <EducationBox/>
        {/*   PROJECTS  -------------*/}
        <ProjectBox/>
        {/*   EXPERIENCE  -------------*/}
        <ExperienceBox/>
      </div>
    );
  }
}
export default RightCv;
