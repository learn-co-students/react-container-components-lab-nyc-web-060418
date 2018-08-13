import React from "react";

const Review = props => {
  return (
    <div>
      <h2>{props.headline}</h2>
      <h3>Reviewer: {props.byline}</h3>
      <h3>Movie: {props.display_title}</h3>
      <h4>Rating: {props.mpaa_rating}</h4>
      {props.multimedia ? <img src={props.multimedia.src} alt="" /> : null}
      <div>
        <p>Summary: {props.summary_short}</p>
        <a href={props.link.url}>{props.link.suggested_link_text}</a>
      </div>
    </div>
  );
};

export default Review;
