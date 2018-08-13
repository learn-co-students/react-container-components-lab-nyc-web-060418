import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  handleChanges = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
    const URL =
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?` +
      `api-key=${NYT_API_KEY}` +
      "&query=" +
      this.state.searchTerm;
    fetch(URL)
      .then(response => response.json())
      //   .then(data => console.log(data.results));
      .then(data => this.setState({ reviews: data.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <label>
              Search:
              <input
                id="username"
                name="username"
                type="text"
                value={this.state.searchTerm}
                onChange={this.handleChanges}
              />
            </label>
            <button>Submit</button>
          </form>
        </div>
        <h2>Filtered Movie Reviews</h2>
        <MovieReviews {...this.state} />
      </div>
    );
  }
}
