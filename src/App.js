import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Grid, Button, ListGroup, Badge,  FormControl, FormGroup, InputGroup, Panel, Col, PageHeader, ButtonProps, ButtonGroup} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'
import Search from './Search';
import WatchedBadge from './WatchedBadge';
import MovieListItem from './MovieListItem';
import WatchButton from './WatchButton';
import ToWatchButton from './ToWatchButton';
import MoviePanel from './MoviePanel';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: 'Mean Girls',
          watched: false,
          display: true,
        }, {
          title: 'Hackers',
          watched: false,
          display: true,
        }, {
          title: 'The Grey',
          watched: false,
          display: true,
        }, {
          title: 'Sunshine',
          watched: false,
          display: true,
        }, {
          title: 'Ex Machina',
          watched: false,
          display: true
        }
      ],

      query: '',
      mode: true,
      display: false,
      newTitle: '',
      watched: true,
      classNames: {
        success: 'success',
        default: 'default'
      },
      badge: <Badge bsStyle="success"></Badge>,
      hidden: true      
    }
  }
  
  handleWatched(e) {
    this.setState({
      mode: false
    })
    MovieListItem.componentWillUpdate;
    
  }
  handleUnwatched() {
    this.setState({
      mode: true
    })
    MovieListItem.componentWillUpdate;
    
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
                            movies.push({'title': this.state.newTitle, 'watched':false} );
                            this.setState({movies: movies, newTitle: ''});
                            this.input.value = ''
                        }}}>
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
          <ButtonGroup>
          <WatchButton styleState={this.state.mode} onClick={(e) => {
            console.log(`clicked with ${e}`)
           this.handleUnwatched();
          }}  />
          <ToWatchButton styleState={this.state.mode} onClick={(e) => {
            this.handleWatched();
           }} />
           </ButtonGroup>
            <ListGroup >
            {/* <MoviePanel  watchUnWatch ={ this.state.mode} query={this.state.query} classNames={this.state.classNames} toggle={this.toggleBadge.bind(this)} display={this.state.hidden} movies={this.state.movies}></MoviePanel>       */}
              <MovieListItem  watchUnWatch ={ this.state.mode} query={this.state.query} classNames={this.state.classNames} toggle={this.toggleBadge.bind(this)} display={this.state.hidden} movies={this.state.movies}></MovieListItem>             
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
