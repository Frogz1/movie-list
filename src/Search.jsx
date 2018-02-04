import React, { Component }  from 'react';

import { ListGroupItem } from 'react-bootstrap';
var Search = (props) => {
     this.modal = {
        show: false
        
    }
    this.toggleMe = () =>
        {
        this.modal.show = !this.modal.show
        }   
    

    

    var titles = props.movies.map((ele, ind) => {

        if (ind > 4 || props.movies.length === 5){

        return ele.title.toLowerCase().indexOf(props.query.toLowerCase()) !== -1 ?
           <li key={ind} className="list-group-item" > {  ele.title  }</li> : 
       null;
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




export default Search;
