import React, { Component }  from 'react';

import './ReactCountDown.css';

class ReactCountDown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p> This is ReactCountDown Component {this.props.name}</p>
      </div>
    );
  };
};

export default ReactCountDown;