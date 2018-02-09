import React, { Component } from 'react';

class ProjectItemsList extends Component {
  constructor(props) {
    super(props);
  }

  removeProject(e,id) {
    alert('Remove Project ?');
    
    // pass to parent
    this.props.onDelete(id)
    
  }

  render() {
    return(
      <div className="projectitemslist">        
          <div>
            <ul>
              <li>
                {this.props.project.id} - {this.props.project.title} - {this.props.project.platform}
                <button onClick={(e) => this.removeProject(e, this.props.project.id)}>X</button>
              </li>
            </ul>
          </div>
      </div>
    )
  }
}
export default ProjectItemsList;