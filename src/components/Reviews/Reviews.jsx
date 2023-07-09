import React, { useEffect, useState } from 'react';
import getReviewsAPI from 'services/getReviews';
import { useParams } from 'react-router-dom';

export function Reviews(props) {
  const { movieId } = useParams();
  const apiService = new getReviewsAPI();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  async function fetchReviews() {
    try {
      const response = await apiService.getReviews(movieId);
      setReviews(response.results.results);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    if (!reviews) {
      return <div>Loading...</div>;
    }
  });

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews ]);

  if (error) {
    return <div>Error. No reviews </div>;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </div>
  );
}
