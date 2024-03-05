import React, { useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const Thought = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="bg-white h-auto justify-center mt-5 p-4 rounded-lg">
      <h1 className="break-words">＂I used to have a job at a calendar factory but I got the sack because I took a couple of days off.＂</h1>

      <div className="mt-4 italic text-xs break-words text-gray-500">
        <p>Written by: John Doe</p>
        <p>Company: ABC Corporation</p>
      </div>

      <div className="flex  flex-col md:flex-row justify-end">
        <button onClick={handleLike} className="flex items-center mr-2">
          <AiOutlineLike className="text-green-500" />
          <span className="ml-1">{likes}</span>
        </button>

        <button onClick={handleDislike} className="flex items-center">
          <AiOutlineDislike className="text-red-500" />
          <span className="ml-1">{dislikes}</span>
        </button>
      </div>
    </div>
  );
};

export default Thought;
