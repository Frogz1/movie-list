import React, { Component }  from 'react';
import { ListGroupItem, Col, Badge} from 'react-bootstrap';
import ReactDOM from 'react-dom';


class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watched: true,
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
              ]
        }
    }
    toggleBadge(e) {
    
        this.setState({
          hidden: !this.state.hidden
        })
      }
}
    
    var titles = this.state.movies.map((ele, ind) => {

        if (ind > 4 || props.movies.length === 5){

            return ele.title.toLowerCase().indexOf(props.query.toLowerCase()) !== -1 ?
            <ListGroupItem
            key={ind}
            onMouseDown={ (e) => {
                toggleBadge(e);
            }}> {  ele.title  } <Badge bsStyle="success" hidden={this.state.watched}>
            { 'watched' }</Badge></ListGroupItem> : null; }
        
    });

    if (titles.filter((x,y) => x !== null).length < 1) {
        return <ListGroupItem className="list-group-item list-group-item-danger" style={{color: 'red', border: 'none'}} >no movie by that name found..<br /><em>please try again</em></ListGroupItem>
            
    } else {
        return titles
    }

//    return (
//      titles = props.movies.map((ele, ind) =>{

//          return ele.title.toLowerCase().indexOf(props.query.toLowerCase()) !== -1 ?
//             <li key={ind} className="list-group-item" > {  ele.title  }</li> : 
//         null;
//      })
        

        


       
       
    //    )
    // );
// }




export default Movies;
