import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Grid, Button, ListGroup, Badge,  FormControl, FormGroup, InputGroup, Panel, Col, PageHeader, ButtonProps} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'
import Search from './Search';
import WatchedBadge from './WatchedBadge';
import MovieListItem from './MovieListItem';
import WatchButton from './WatchButton';
import ToWatchButton from './ToWatchButton';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: 'Mean Girls',
          watched: false
        }, {
          title: 'Hackers',
          watched: false
        }, {
          title: 'The Grey',
          watched: false
        }, {
          title: 'Sunshine',
          watched: false
        }, {
          title: 'Ex Machina',
          watched: false
        }
      ],

      query: '',
      show: false,
      newTitle: '',
      watched: true,
      classNames: {
        success: 'badge badge-success',
        default: 'badge badge-danger'
      },
      badge: <Badge bsStyle="success"></Badge>,
      hidden: true
      
    }
  }

  componentWillReceiveProps(e) {
    this.setState({query: e.target.value})
  }
  
  toggleBadge(i) {
    let watchedMovies = this.state.movies;
    watchedMovies[i].watched = !this.state.movies[i].watched;
    this.setState({
      movies: watchedMovies
    });
  }
  addMovie() {
    return ( 
      <WatchedBadge />
    )
    // var movies = this.state.movies console.log(movies); movies.push({'title':
    // this.state.newTitle}) console.log(movies) this.setState({   movies :
    // this.movies.slice()   // movies: newMovie })

  }

  render() {
    return (

      <div className="App">

      <Grid>
      <Col  xs={6} md={4} lg={6}>
       <Panel>
       

          <PageHeader>Movie List</PageHeader>

          <Panel.Body>
       

          <form>
          <FormGroup>
          <InputGroup>
          <FormControl
                  onChange={(e) => this.setState({newTitle: e.target.value})}
                  button="false"
                  type="text"
                  ref="newtitle"
                  inputRef ={ ref => this.input = ref }
                  placeholder="add movie title here" 
                  onSubmit={(e) => {
                        e.preventDefault();
                    
                        if (e.key === 'Enter') {                      
                        var movies = this.state.movies;
                        movies.push({'title': this.state.newTitle, 'watched':false});
                        this.setState({movies: movies, newTitle: ''});
                        this.input.value = ''
                        
                    }}}
                      >

                  </FormControl>
                  <InputGroup.Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
              var movies = this.state.movies;
              movies.push({'title': this.state.newTitle, 'watched':false});
              this.setState({movies: movies, newTitle: ''});
              this.input.value = ''
            }}  type="submit" bsStyle="primary">Add</Button>
              </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </form>
          <form>
          <FormGroup>
          <InputGroup>
              <FormControl
                type="text"
                placeholder="search...."
                // inputRef={ ref => this.input = ref}
                onChange={(e) => {
                  this.setState({query: e.target.value})
                  MovieListItem.componentWillUpdate;
                  }}
                className="form-control"
                id="movies">
                </FormControl>
            <Button onClick={ () => this.input.value = ''}>Go !!!</Button>
            </InputGroup>
            </FormGroup>
          </form>
          
          
          <WatchButton bsStyle="btn btn-success" />
          <ToWatchButton />
          <ListGroup >
          <MovieListItem query={this.state.query} classNames={this.state.classNames} toggle={this.toggleBadge.bind(this)} display={this.state.hidden} movies={this.state.movies}></MovieListItem>
             
            </ListGroup>
            

          </Panel.Body>
        </Panel>
        </Col>
        </Grid>
       
      </div>



    );
  }
}

export default App;
