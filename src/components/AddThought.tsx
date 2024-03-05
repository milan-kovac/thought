import { useState } from "react";
import Avatar from "./Avatar";
import Popup from "./Popup";

const AddThought = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleInputClick = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white h-fit p-4 rounded-lg">
      <div className="w-12 rounded-full">
        <Avatar />
      </div>
      <input
        type="text"
        placeholder="Leave your thoughts..."
        className="w-full border-2 border-black px-4 py-2 cursor-pointer focus:border-[#fca311] focus:outline-none rounded-lg"
        onClick={handleInputClick}
        readOnly
      />
      {isPopupOpen && <Popup onClose={closePopup} />}
    </div>
  );
};

export default AddThought;
