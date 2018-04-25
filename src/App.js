import React, { Component } from 'react';
import './App.css';
import AppContainer from './containers/AppContainer';

class App extends Component {
  render() {

    const categories = [
      {name: "All", url: "http://hp-api.herokuapp.com/api/characters"},
      {name: "Students", url: "http://hp-api.herokuapp.com/api/characters/students"},
      {name: "Staff", url: "http://hp-api.herokuapp.com/api/characters/staff"},
      {name: "slytherin", url: "http://hp-api.herokuapp.com/api/characters/house/slytherin"}
      {name: "ravenclaw", url: "http://hp-api.herokuapp.com/api/characters/house/ravenclaw"}
      {name: "hufflepuff", url: "http://hp-api.herokuapp.com/api/characters/house/hufflepuff"}
      {name: "gryffindor", url: "http://hp-api.herokuapp.com/api/characters/house/gryffindor"}
    ]
    return (
    <AppContainer />
    );
  }
}

export default App;
