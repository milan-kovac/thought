import StarRating from "./StarRating";

const Rating = () => {
  return (
    <div className="p-3 flex flex-col bg-white h-fit justify-center items-center rounded-lg">
      <StarRating />
      <span>Average: 4.5</span>
    </div>
  );
};

export default Rating;
