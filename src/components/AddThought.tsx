import Avatar from "./Avatar";

const AddThought = () => {
  return (
    <div className=" flex items-center justify-center flex-grow  bg-white h-fit p-4">
      <div className="w-12 h-12 overflow-hidden rounded-full">
        <Avatar />
      </div>
      <input
        type="text"
        placeholder="Leave your thoughts..."
        className=" w-4/5 border-2 border-black px-4 py-2  cursor-pointer focus:border-[#fca311] focus:outline-none "
        readOnly
      />
    </div>
  );
};

export default AddThought;
