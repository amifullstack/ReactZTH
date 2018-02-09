import React, { Component } from 'react';
import Projects from '../Projects/Projects';

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
  render() {
    return(
      <div className="projectstore">
        <p>This is ProjectItems {this.props.name}</p>  
        <Projects projects={this.state.projects}/>      
      </div>
    )
  }
}

export default ProjectItems;