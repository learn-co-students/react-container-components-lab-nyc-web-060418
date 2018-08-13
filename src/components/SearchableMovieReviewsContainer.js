import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{
  state = {
    query: "",
    reviews: []
  }

  fetchReviews = (queryInput) => {
    fetch(URL.concat(queryInput))
    .then(r=> r.json())
    .then(data => this.setState({
      reviews: data.results
    }, () => console.log(this.state.reviews)))
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    }, () => console.log(this.state.query))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchReviews(this.state.query)
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={ this.handleSubmit }>
          <label>Search Movie Reviews</label>
          <input type="text" onChange={ this.handleInputChange } />
          <button type="submit">Submit</button>
        </form>
        < MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
