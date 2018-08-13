import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  fetchReviews = () => {
    const url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json'
    const apiKey = '91085d5cf84f42cca05e053f80c0e9ca'
    return fetch(url + '?api-key=' + apiKey)
    .then(res=>res.json())
    .then(data=>{console.log(data.results); return data.results})
    .then(results=>{this.setState({
      reviews: results
    })})
  }

  render(){
    return (
      <div className="latest-movie-reviews">
        <h2>Latest Reviews</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  componentDidMount(){
    this.fetchReviews()
  }
}
