import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRater = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label>
            <input
              type="radio"
              name="rating"
              onClick={() => setRating(ratingValue)}
              value={ratingValue}
            />
            <FaStar
              className="star"
              size={20}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRater;
