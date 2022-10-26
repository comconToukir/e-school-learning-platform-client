import React from "react";

const Rating = ({ className }) => {
  return (
    <div className={`rating rating-sm ${className}`}>
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        disabled
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        disabled
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        disabled
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        disabled
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        disabled
        checked
      />
    </div>
  );
};

export default Rating;
