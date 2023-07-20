import React, { useEffect, useState, useCallback, useMemo } from 'react';
import getReviewsAPI from 'services/getReviews';
import { useParams } from 'react-router-dom';
import Error from 'components/Error/Error';
import {
  ReviewContent,
  ReviewList,
  ReviewItem,
  ReviewsContainer,
  ReviewAuthor,
} from './Reviews.Styled';
const Reviews = props => {
  const { movieId } = useParams();
  const apiService = useMemo(() => new getReviewsAPI(), []);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const fetchReviews = useCallback(async () => {
    setError(false);
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

  return (
    <ReviewsContainer>
      {reviews.length > 0 && !error ? (
        <ReviewList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewAuthor>{review.author}</ReviewAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <Error>We don't have any reviews for this movie</Error>
      )}
    </ReviewsContainer>
  );
};
export default Reviews;
