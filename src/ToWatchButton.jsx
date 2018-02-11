import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { Button } from 'react-bootstrap'

let ToWatchButton = (props) => {
    return (
        <Button onClick={
            props.onClick
            
            
            } bsStyle={props.styleState ? "default" :   "success"} >To Watch</Button>
    )
}

export default ToWatchButton;