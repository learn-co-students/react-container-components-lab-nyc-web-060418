// Code MovieReviews Here

import React from 'react';
import Movie from './Movie'

const movieReviews = (props) => {
  let moviesHTML =  props.reviews.map(movie => < Movie className='review' title={movie.display_title} rating={movie.mpaa_rating} summary={movie.summary_short} />)
  // let allMovies =  props.movies.map(movie => < Movie className='review' title={movie.display_title} rating={movie.mpaa_rating} summary={movie.summary_short} />)


  return (<div className='review-list'>
    {moviesHTML}
    </div>)
}

export default movieReviews;
