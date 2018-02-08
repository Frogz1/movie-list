import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {ListGroupItem, Badge} from 'react-bootstrap'

var MovieListItem = (props) => {
  return props.movies.map((movie, i) => {
    return <ListGroupItem onClick={() => props.toggle(i)}><Badge hidden={props.display}>hi</Badge>   {movie.title}  </ListGroupItem>
  });
}

export default MovieListItem;