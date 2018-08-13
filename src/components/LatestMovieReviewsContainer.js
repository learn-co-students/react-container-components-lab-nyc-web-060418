import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import Movie from './Movie'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    constructor () {
      super()
      this.state = {
        reviews: []
      }
    }

    render() {
      return (<div className='latest-movie-reviews'> <h2> All Movies </h2> <div > < MovieReviews reviews={this.state.reviews}/>
       </div></div>)
    }

    componentDidMount() {
      fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=fa48c760360f40bfa31f78db70d9e27d")
      .then(data => data.json())
      .then(info => this.setState({
        reviews: info.results
      }))
    }

    // componentDidUpdate() {
    //   fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=fa48c760360f40bfa31f78db70d9e27d")
    //   .then(data => data.json())
    //   .then(info => this.setState({
    //     reviews: info["results"]
    //   }))
    // }
}
