import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FetchReviews from '../../components/FetchAPIs/FetchReviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = () => {
      FetchReviews(movieId)
        .then(function (response) {
          setReviews(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && <p>There are no reviews found</p>}

      {reviews.map(review => (
        <ul key={review.id}>
          <li>
            <h2> Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        </ul>
      ))}
    </>
  );
};
export default Reviews;
