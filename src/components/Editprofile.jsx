import React from "react";
import { IoMdClose } from "react-icons/io";

const Editprofile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50 font-outfit">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold   ">
              Edit Personal Information
            </h2>
            <p className="text-sm font-light mb-1"> 
              update your details to keep your profile up-to-date.
            </p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-gray-400 text-2xl bg-gray-100 hover:bg-gray-200 hover:text-gray-700">
            <IoMdClose  />
          </button>
        </div>

        <form className="space-y-4 my-2">
          <div>
            <label className="block text-sm text-gray-500">First Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              defaultValue="Rohit"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500">Last Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              defaultValue="Bakalwar"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2"
              defaultValue="rohit@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500">Phone</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              defaultValue="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500">Bio</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              defaultValue="Software Developer"
            />
          </div>
          <div className="flex justify-between gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editprofile;
