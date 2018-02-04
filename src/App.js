import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';
import Search from './Search';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: 'Mean Girls'
        }, {
          title: 'Hackers'
        }, {
          title: 'The Grey'
        }, {
          title: 'Sunshine'
        }, {
          title: 'Ex Machina'
        }
      ],

      query: '',
      show: false
    }
  }

  componentWillReceiveProps(e) {
    this.setState({query: e.target.value})
  }
  toggleModal() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (

      <div className="App">
        <div className="page-header">
          <h1 className="header">Movie List</h1>
        </div>
        <div className="container col-xs-offset-4 col-xs-4">
        <div className="form-group">
          <label >Search Movies</label>
          <input  className="form-control"
            type="text"
            onChange={(e) => {
            this.setState({query: e.target.value})
            Search.componentWillUpdate;
          }}
            className="form-control"
            id="movies"
            placeholder=''/>

        </div>
        
          <Jumbotron >

            <ul className="list-group">
            
              <Search movies={this.state.movies} query={this.state.query} modalToggle={this.toggleModal.bind(this)}/>

            </ul>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default App;
