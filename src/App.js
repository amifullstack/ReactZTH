import React, { Component } from 'react';
import ProjectItems from './Components/ProjectItems/ProjectItems'
import Projects from './Components/Projects/Projects';


class App extends Component {
  render() {
    return(
      <div className='App'>
        App Main Page        
        <ProjectItems name="testme"/>   
      </div>
    )
  }
}

export default App;