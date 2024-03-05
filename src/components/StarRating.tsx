import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarHover = (hoveredRating: any) => {
    setRating(hoveredRating);
  };

  const handleStarLeave = () => {
    setRating(0);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onMouseOver={() => handleStarHover(star)}
          onMouseLeave={handleStarLeave}
          className={`cursor-pointer sm:text-sm md:text-md lg:text-xl xl:text-2xl ${star <= rating ? "text-[#fca311]" : "text-gray-300"}`}
        >
          {star === rating ? <FontAwesomeIcon icon={faStar} /> : <FontAwesomeIcon icon={faStarEmpty} />}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
