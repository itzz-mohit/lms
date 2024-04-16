import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function RatingBar() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex p-0 m-0">
      <Rating
        style={{ maxWidth: "100px" }}
        value={rating}
        onChange={setRating}
        className="text-yellow-400 text-sm"
      />
      <span className="text-gray-600 text-sm m-2">
        {rating === 0 ? "No rating" : `${rating} out of 5 stars`}
      </span>
    </div>
  );
}

export default RatingBar;
