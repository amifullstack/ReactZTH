import React, { Component } from 'react';

import './Projects.css'
import ProjectItemsList from '../ProjectItemsList/ProjectItemsList';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  deleteProject(id) {
    
    // send id as props to parent
    this.props.onDelete(id)
  }

  render() {
    let projectItemsList;
    if(this.props.projects) {
      projectItemsList = this.props.projects.map((project) => {
      return(
        <ProjectItemsList onDelete={(id) => this.deleteProject(id)} key={project.title} project={project} /> // we are fixed id
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
