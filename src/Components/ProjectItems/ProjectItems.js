import React, { Component } from 'react';
import Projects from '../Projects/Projects';
import AddProjects from '../AddProjects/AddProjects';

class ProjectItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    }
  }

  // LifeCycle Mathods
  // componentWillMount() {  // Nope
  // }

  // api calles, and subscrib here-dont forget to unsubscrib in unmount
  componentDidMount() {
    this.setState( {
      projects: [
        {
          title: 'React Web APP',
          platform: 'Browser'

        },
        {
          title: 'React-Native',
          platform: 'Mobile-Tablet'
        }
      ]
    })
  }

  handleAddProjects(project) {
    // Receiving props -> Set to main state Note. sate is immutable

    // get current state
    let projects = this.state.projects;
    // Push new state to current state
    projects.push(project);

    // Not done yet set it
    this.setState( {projects: projects})
  }
  render() {
    return(
      <div className="projectstore">
        <p>This is ProjectItems {this.props.name}</p>  
        {/* pass state and recieve props */}
        <AddProjects addProject={ (project) => this.handleAddProjects(project) } /> {/* AddProject we receiving*/}
        <Projects projects={this.state.projects}/>      
      </div>
    )
  }
}

export default ProjectItems;