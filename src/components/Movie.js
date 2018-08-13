import React from 'react';

const Movie = (props) => {

  return (<div className='review'>
   {props.title}
   {props.rating}
   {props.summary}
   <br></br><br></br>
   </div>)
}

export default Movie;
