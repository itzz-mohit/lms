import React, { useState } from "react";
import RatingBar from "../RatingBar/RatingBar";

const CoursesCards = ({value}) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="w-full md:w-[330px] h-[380px] rounded-md border my-7 mx-4 relative overflow-hidden">
      <img
        src="https://lms.kochiva.com/assets/images/LMS.png"
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />

      <div
        className="p-5 rounded-full bg-white absolute top-2 right-2"
        onClick={() => setFavorite(!favorite)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={favorite ? "Red" : "None"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="w-6 h-6 absolute top-2 right-2 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>

      <div className="p-4">
        <h1 className="text-lg font-semibold">{value.title}</h1>
        <p
          className="mt-3 text-sm text-gray-600 overflow-hidden"
          style={{ maxHeight: "3rem" }}
        >
          {value.subtitle}
        </p>
        <RatingBar />
      </div>

      <button
        type="button"
        className="absolute bottom-2 left-4 rounded-md bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Enroll
      </button>
    </div>
  );
};

export default CoursesCards;
