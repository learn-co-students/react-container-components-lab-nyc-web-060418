import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import Movie from './Movie'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${"fa48c760360f40bfa31f78db70d9e27d"}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  updateForm = (event) => {
    this.setState({
      ...this.state,
      searchTerm: event.target.value
    })
  }

  // movieHTML() {
  //   return this.state.reviews.map(movie => < Movie className='review' title={movie.display_title} rating={movie.mpaa_rating} summary={movie.summary_short} />)
  // }

  render() {
    return(<div className='searchable-movie-reviews'>
    <form onSubmit={this.findReviews}>
    <label>
    <input value={this.state.searchTerm} onChange={this.updateForm} type='text' name='searchField'/>
    </label>
    <button type="submit" value ='Submit'>Submit</button>
    </form>
    <h2> Search Movies </h2>
    < MovieReviews reviews={this.state.reviews} /> </div>
  )
  }

  findReviews = (event) => {
    event.preventDefault()
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=fa48c760360f40bfa31f78db70d9e27d&query=' + this.state.searchTerm)
    .then(data => data.json())
    .then(info => {
    this.setState({
      reviews: info.results
    })
  })
  }
}
