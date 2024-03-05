import { useState } from "react";
import { useEffect } from "react";

const Popup = ({ onClose }: any) => {
  const [comment, setComment] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
  };

  const handleFullNameChange = (e: any) => {
    setFullName(e.target.value);
  };

  const handleCompanyChange = (e: any) => {
    setCompany(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg w-fit h-fit ">
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Comment:</label>
          <textarea value={comment} onChange={handleCommentChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Full Name:</label>
          <input type="text" value={fullName} onChange={handleFullNameChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Company:</label>
          <input type="text" value={company} onChange={handleCompanyChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <div className="justify-end">
          <button onClick={onClose} className="mt-4 p-2  rounded-md bg-green-500">
            Save
          </button>
        </div>
        <button onClick={onClose} className="mt-4 p-2 rounded-md float-right bg-red-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
