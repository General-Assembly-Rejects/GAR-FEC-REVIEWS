import React from 'react';
import ReactDOM from 'react-dom';
import FormModal from './FormModal.jsx';
import ReviewCounts from './ReviewCounts.jsx';
import StarRating from './StarRating.jsx';

function ReviewSnapShot() {
  return (
    <div className="ReviewSnapShot">
      <div className="actionBox">
        <h2>Reviews</h2>
        <FormModal />
      </div>
      <div>
        <ReviewCounts />
      </div>
      <div>
        <StarRating />
      </div>
    </div>
  );
}

export default ReviewSnapShot;
