import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import ListUsers from './ListUsers';
import ListProject from './components/project';
import AddProject from './components/addProject';

import AddUsers from './AddUsers';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listUsers: [],  
      listProjects: []
    };
    
  }

  componentDidMount() {

    fetch('https://kickass-sdw-3a.herokuapp.com/api/users/')
    .then(function(response) {
      return response.json()
    }).then((json) => {
      console.log('parsed json', json)

      this.setState({
          listUsers: json
        });

      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });

      fetch('https://kickass-sdw-3a.herokuapp.com/api/projects/')
    .then(function(response) {
      return response.json()
    }).then((json) => {
      console.log('parsed json', json)
      this.setState({
          listProjects: json
        });

      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Liste des Users</h2>
        </div>
        <div className="container">
          <ListUsers listUsers={this.state.listUsers} />
          <ListProject listProjects={this.state.listProjects} />
          
          <AddUsers listUsers={this.state.listUsers} componentDidMount={this.componentDidMount.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;