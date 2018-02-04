import React, { Component }  from 'react';
import keydown from 'react-keydown';
var Search = (props) => {



   return (
       props.movies. map((ele, ind) =>{

        return ele.title.toLowerCase().indexOf(props.query.toLowerCase()) !== -1 ?
            <li key={ind} className="list-group-item" > {  ele.title  }</li> : 
        null
       }
       )
    );
}




export default Search;
