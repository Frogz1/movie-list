import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';


class App extends Component {

  constructor() {
    super();
    this.state = {
      movies:
      [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]

    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
          <ul className="list-group">
            { 
              this.state.movies.map(movie => {
               return <li className="list-group-item">{ movie.title }</li>
              })
            }
          
        </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
