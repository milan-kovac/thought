import StarRating from "./StarRating";

const Rating = () => {
  return (
    <div className="p-3 flex flex-col bg-white h-fit justify-around items-center flex-grow">
      <StarRating />
      <span className="sm:text-sm md:text-md lg:text-lg xl:text-xl">Average: 4.5</span>
    </div>
  );
};

export default Rating;
