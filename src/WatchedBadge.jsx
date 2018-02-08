import React, { Component }  from 'react';
import { Badge } from 'react-bootstrap';
import ReactDOM from 'react-dom';

var WatchedBadge = (props) => {
    return (
        <Badge bsStyle="success" hidden={props.hidden}>watched</Badge>
    );
};

export default WatchedBadge;