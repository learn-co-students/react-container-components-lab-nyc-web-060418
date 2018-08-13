// Code MovieReviews Here
import React, {Component} from 'react'

function imageTag(review) {
  if (review.multimedia === null){
    return null
  } else {
    return <img src={review.multimedia.src} alt={review.display_title} />
  }
}

export default function MovieReviews(props) {
  return (
    <div className="review-list">
      {props.reviews.map((review)=>{
        return (
          <div className="review" key={review.display_title + review.opening_date}>
            <h3>{review.display_title}</h3>
            {imageTag(review)}
            <h4>{review.headline}</h4>
            <a href={review.link.url}>{review.link.suggested_link_text}</a>
            <p>{review.summary_short}</p>
          </div>
        )
      })}
    </div>
  )
}
