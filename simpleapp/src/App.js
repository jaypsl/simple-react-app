import React, { Component } from 'react';
// import logo from './logo.svg';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {

  //create a constructor define intial state
  constructor(){
      super();
    this.state = {
      projects: [
        {
          title:'social websites',
          category: 'social media'
        },
        {
          title:'stock app',
          category: 'stock market'
        },
        {
          title:'Housing websites',
          category: 'Real estate'
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <b><i>Simple app</i></b>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
