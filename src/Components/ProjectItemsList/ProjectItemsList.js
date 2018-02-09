import React, { Component } from 'react';

class ProjectItemsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="projectitemslist">        
          <div>
            <ul>
              <li>
                {this.props.project.title} - {this.props.project.platform}
              </li>
            </ul>
          </div>
      </div>
    )
  }
}
export default ProjectItemsList;