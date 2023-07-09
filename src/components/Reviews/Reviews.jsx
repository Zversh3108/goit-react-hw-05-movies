import React, { useEffect, useState, useCallback, useMemo } from 'react';
import getReviewsAPI from 'services/getReviews';
import { useParams } from 'react-router-dom';

export function Reviews(props) {
  const { movieId } = useParams();
  const apiService = useMemo(() => new getReviewsAPI(), []);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const fetchReviews = useCallback(async () => {
    try {
      const response = await apiService.getReviews(movieId);
      setReviews(response.results.results);
    } catch (error) {
      setError(error);
    }
  }, [apiService, movieId]);

  useEffect(() => {
    if (!reviews.length) {
      fetchReviews();
    }
  }, [fetchReviews, reviews.length]);

  if (error) {
    return <div>Error. No reviews</div>;
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
