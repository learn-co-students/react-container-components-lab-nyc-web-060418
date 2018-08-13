import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchReviews(this.state.searchTerm)
    this.setState({
      searchTerm: ''
    })
  }

  fetchReviews = (query) => {
    const url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json'
    const apiKey = '91085d5cf84f42cca05e053f80c0e9ca'
    return fetch(url + '?api-key=' + apiKey + '&query=' + query)
    .then(res=>res.json())
    .then(data=>{console.log(data.results); return data.results})
    .then(results=>{this.setState({
      reviews: results
    })})
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.searchTerm}></input>
            <input type="submit"/>
          </form>
        </div>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
