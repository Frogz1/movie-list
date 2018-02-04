import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Jumbotron, Button, ListGroup, ListGroupItem, FormControl, FormGroup, ButtonGroup, InputGroup, InputGroupButton} from 'react-bootstrap';
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
      show: false,
      newTitle: ''
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
  addMovie() {
    // var movies = this.state.movies console.log(movies); movies.push({'title':
    // this.state.newTitle}) console.log(movies) this.setState({   movies :
    // this.movies.slice()   // movies: newMovie })

  }

  render() {
    return (

      <div className="App">
      
        <div className="page-header">
          <h1 className="header">Movie List</h1>
        </div>
        <div className="container">

          <form
            style={{margin: '10px' }} className="form-inline">
          <FormGroup>
          <InputGroup>
          <FormControl
                  onChange={(e) => this.setState({newTitle: e.target.value})}
                  type="text"
                  ref="newtitle"
                  inputRef ={ ref => this.input = ref }
                  placeholder="add movie title here" >
                  </FormControl>
                  <InputGroup.Button>
            <Button
              onClick={() => {
              var movies = this
                .state
                .movies
              movies.push({'title': this.state.newTitle});
              this.setState({movies: movies, newTitle: ''});
              this.input.value = ''
            }}  type="button">Add Movie</Button>
              </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </form>
          <form style={{
            margin: '10px'
          }} className="form-inline">
          <FormGroup>
          <InputGroup>
              <FormControl
                type="text"
                placeholder="search...."
                inputRef={ ref => this.input = ref}
                onChange={(e) => {
                this.setState({query: e.target.value})
                Search.componentWillUpdate;
              }}
                className="form-control"
                id="movies">
                </FormControl>

            <InputGroup.Button>
            <Button onClick={ () =>
                this.input.value = ''}>
              Go !!!
            </Button>
            </InputGroup.Button>
            </InputGroup>
            </FormGroup>
          </form>

        <div className="container">
          <Jumbotron>
            <ListGroup className="list-group">
              <Search
                movies={this.state.movies}
                query={this.state.query}
                modalToggle={this
                .toggleModal
                .bind(this)}/>
            </ListGroup>
          </Jumbotron>
        </div>
      </div>
      </div>



    );
  }
}

export default App;
