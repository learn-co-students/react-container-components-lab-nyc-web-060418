// Code MovieReviews Here
import React from "react";
import Review from "./Review";

const MovieReviews = props => {
  const movieReviewGenerator = props => {
    return props.reviews.map((element, idx) => (
      <Review key={idx} className="review" {...element} />
    ));
  };
  return <div className="review-list">{movieReviewGenerator(props)}</div>;
};

export default MovieReviews;
