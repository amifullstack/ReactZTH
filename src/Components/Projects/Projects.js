import React, { Component } from 'react';

import './Projects.css'
import ProjectItemsList from '../ProjectItemsList/ProjectItemsList';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let projectItemsList;
    if(this.props.projects) {
      projectItemsList = this.props.projects.map((project) => {
      return(
        <ProjectItemsList key={project.title} project={project} /> // we are passing at every iteration, BAD!!
      )
    })    
  }
    return(
      <div className="projects">

        Project Page Test::
        {projectItemsList}

      </div>
    )
  }
}
export default Projects;
