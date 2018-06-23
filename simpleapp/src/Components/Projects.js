import React, { Component } from 'react';
// import logo from './logo.svg';


class Projects extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Projects">
        <b><i>Simple project</i></b>
          {this.props.test}
      </div>
    );
  }
}

export default Projects;
