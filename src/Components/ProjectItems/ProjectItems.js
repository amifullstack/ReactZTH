import React, { Component } from 'react';
import uid from 'uuid'
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
          id: uid.v4(),
          title: 'React Web APP',
          platform: 'Browser'

        },
        {
          id: uid.v4(),
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

  // Delete
  handleDeleteProject(id) {

    // get current state as new (because you canot mutate main)
    let projects = this.state.projects;

    // match current state id and received
    let index = projects.findIndex((x) => x.id == id)

    // Remove from state
    projects.splice(index, 1);    

    // set/reste state
    this.setState( { projects: projects})    

  }


  render() {
    return(
      <div className="projectstore">
        <p>This is ProjectItems {this.props.name}</p>  
        {/* pass state and recieve props */}
        <AddProjects addProject={ (project) => this.handleAddProjects(project) } /> {/* AddProject we receiving*/}
        <Projects onDelete={(id) => this.handleDeleteProject(id)} projects={this.state.projects}/>      {/*received props from child*/}
      </div>
    )
  }
}

export default ProjectItems;