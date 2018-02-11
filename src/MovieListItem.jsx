import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {ListGroupItem, Badge} from 'react-bootstrap'

var MovieListItem = (props) => {
  var mappedMovies = props
    .movies
    .map((movie, i) => {
      if (i > 4 || props.movies.length === 5) {
        return movie.title.toLowerCase().indexOf(props.query.toLowerCase()) !== -1 && movie.watched === props.watchUnWatch ? <ListGroupItem button="false" key={i} onClickCapture={() => props.toggle(i)}>
          <Badge hidden={!movie.watched} bsClass='badge badge-success'>watched</Badge>
          {movie.title}
        </ListGroupItem> : null;
        
      }
      
    });
    console.log(mappedMovies)
  if (mappedMovies.filter((x, y) => x).length < 1) {
    console.log(mappedMovies)
    return <ListGroupItem
      className="list-group-item list-group-item-danger"
      style={{
      color: 'red',
      border: 'none'
    }}>no movie by that name found..<br/>
      <em>please try again</em>
    </ListGroupItem>

  } else {
    return mappedMovies;
  }
}


export default MovieListItem;