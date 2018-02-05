import React, {Component} from 'react';
import './App.css';
import { Grid, Button, ListGroup, Badge,  FormControl, FormGroup, InputGroup, Panel, Col, PageHeader, ButtonProps} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'
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
      newTitle: '',
      watched: true,
      classNames: {
        success: 'badge badge-success',
        default: 'badge badge-danger'
      }
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
            }}  type="button" >Add</Button>
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
                Search.componentWillUpdate;
              }}
                className="form-control"
                id="movies">
                </FormControl>


            <Button bsStyle="default" onClick={ () =>
                this.input.value = ''}>
              Go !!!
              
            </Button>
            </InputGroup>
            </FormGroup>
          </form>
          
          

          <ListGroup >
              <Search
                classNames={this.state.classNames}
                watched={this.state.watched}
                movies={this.state.movies}
                query={this.state.query}
                modalToggle={this
                .toggleModal
                .bind(this)} />
                
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
