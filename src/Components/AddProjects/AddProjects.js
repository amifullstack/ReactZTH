import React, { Component } from 'react';

class AddProjects extends Component {
  constructor(props) {
    super(props)   
    
    this.state = {
      newProjects: {}
    }
  }

  static defaultProps =  {
    platforms: ['Web', 'Mobile', 'Mobile-Tab', 'Machine'] 
  }

  // handleSubmit
  handleSubmit(e) {
    if(this.refs.title.value === '') {
      alert('Title is requred')
    } else {
    this.setState( {newProjects: {
      title: this.refs.title.value,
      platform: this.refs.platform.value
    }}, () => {
      
      // Pass state to main/parent as props      
      this.props.addProject(this.state.newProjects)
    });
  }
    e.preventDefault();
  }
  

  render() {
    // console.log(this.props.platforms);
    // console.log(this.state.newProjects);
    let platformOptions = this.props.platforms.map(platform => {
      return(
        <option key={platform}  value={platform}>{ platform }</option>
      )
    })
    return(
      <div className="form">
          <h3>Add Projects:</h3>
            <form onSubmit={ (e) => this.handleSubmit(e) }>
              <div>
                <label>Title</label><br/>
                <input type="text" ref="title" />
              </div>
              <div>
                <label>Platform</label><br/>
                <select ref="platform">
                  { platformOptions }
                </select>
              </div><br/>
              <input type="submit" value="Submit"/>
            </form>
      </div>

    )
  }
}

export default AddProjects;