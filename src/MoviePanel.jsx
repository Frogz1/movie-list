import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {Panel, PanelGroup} from 'react-bootstrap';
import MovieListItem from './MovieListItem';

class MoviePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }

    handleExpand() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            // <MovieListItem  watchUnWatch ={ this.props.watchUnWatch} query={this.props.query} classNames={this.props.classNames} toggle={this.props.toggle.bind(this)} display={this.props.hidden} movies={this.props.movies}>
            <PanelGroup>
            <Panel id="collapsible-panel-example-1" expanded={this.state.open} onToggle={this.handleExpand.bind(this)}>
            <Panel.Collapse>
                <Panel.Body>
                MovieTitle

                </Panel.Body>
            </Panel.Collapse>
            </Panel>
            </PanelGroup>
            // </MovieListItem>

        )
    }
}

export default MoviePanel;