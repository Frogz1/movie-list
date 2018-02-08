import React, { Component, unstable_renderSubtreeIntoContainer }  from 'react';
import { ListGroupItem, Col, Badge} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import  WatchedBadge  from './WatchedBadge';


var Search = (props) => {
    
    
    var titles = props.movies.map((ele, ind) => { 

        if (ind > 4 || props.movies.length === 5) {

                return ele.title.toLowerCase().indexOf(props.query.toLowerCase()) !== -1 ? 
            <ListGroupItem button="false" key={ind} ind={ind} >{ele.title}</ListGroupItem> : null; 
            // } else {
            //     return ele.title.toLowerCase().indexOf(props.query.toLowerCase()) !== -1 ? 
            //     <ListGroupItem key={ind} ind={ind} >{  ele.title   } </ListGroupItem> : null; 
            // }
        }
        
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
        

        


       }
       
    //    )
    // );
// }

// < Badge bsStyle = "success" hidden = {
//     props.hidden
// }
// onClick = {
//     (e) => {

//         if (e.target.className === props.classNames.default) {
//             e.target.className = props.classNames.success
//         } else {
//             e.target.className = props.classNames.default
//         }
//     }
// } > {
//     props.watched === true
//         ? 'watched'
//         : 'watched'
// } < /Badge>


export default Search;
