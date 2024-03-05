import Thought from "./Thought";

const Thoughts = () => {
  const thoughtsArray = Array.from({ length: 100 }, (_, index) => index + 1);
  return (
    <div className="mt-2">
      {thoughtsArray.map((index) => (
        <Thought key={index} />
      ))}
    </div>
  );
};

export default Thoughts;
