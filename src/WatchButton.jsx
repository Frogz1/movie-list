import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { Button } from 'react-bootstrap'

let WatchedButton = (props) => {
    return (
        <Button onClick={props.onClick} bsStyle={props.styleState ? "success" :   "default"}>Watched</Button>
    )
}

export default WatchedButton;