import { Edit } from "lucide-react";
import Editprofile from "./Editprofile";
import { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

const ProfileDetails = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  return (
    <div className="space-y-6 dark:bg-[#171F2F] ">
      {/* Profile Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between shadow-md hover:shadow-lg transition-shadow duration-300 font-outfit dark:bg-[#171F2F]  ">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold dark:text-[#FFFFFF] ">
              Rohit Bakalwar
            </h2>
            <p className="text-gray-500 dark:text-[#FFFFFF]">
              Software Developer <span className="mx-2">|</span> Pune, India
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button
            className="px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-100 flex items-center gap-2 dark:text-[#FFFFFF]"
            onClick={() => setIsEditOpen(true)}
          >
            <MdOutlineEdit size={20} /> Edit
          </button>
        </div>
      </div>

      {/* Personal Info */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-[#171F2F] ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold dark:text-[#FFFFFF]">
            Personal Information
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-y-4 text-gray-700">
          <div>
            <p className="text-sm text-gray-500 dark:text-[#FFFFFF]">
              First Name
            </p>
            <p className="font-medium dark:text-[#FFFFFF]">Rohit</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-[#FFFFFF]">
              Last Name
            </p>
            <p className="font-medium dark:text-[#FFFFFF]">Bakalwar</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-[#FFFFFF]">
              Email address
            </p>
            <p className="font-medium dark:text-[#FFFFFF]">rohit@example.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-[#FFFFFF]">Phone</p>
            <p className="font-medium dark:text-[#FFFFFF]">+91 98765 43210</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-[#FFFFFF]">Bio</p>
            <p className="font-medium dark:text-[#FFFFFF]">
              Software Developer
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-[#171F2F] dark:text-[#FFFFFF]">
        <div className="flex justify-between items-center mb-4 ">
          <h3 className="text-lg font-semibold dark:text-[#FFFFFF]">
            Address Details
          </h3>
          <button className="px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-100 flex items-center gap-2">
            <MdOutlineEdit size={20} /> Edit
          </button>
        </div>
        <div className="flex items-center justify-between ">
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2 dark:text-[#FFFFFF]">
              <span className="font-medium w-24 dark:text-[#FFFFFF]">
                Street:
              </span>{" "}
              123, MG Road
            </p>
            <p className="flex items-center gap-2 dark:text-[#FFFFFF]">
              <span className="font-medium w-24 dark:text-[#FFFFFF]">
                City:
              </span>{" "}
              Bangalore
            </p>
            <p className="flex items-center gap-2 dark:text-[#FFFFFF]">
              <span className="font-medium w-24 dark:text-[#FFFFFF]">
                State:
              </span>{" "}
              Karnataka
            </p>
            <p className="flex items-center gap-2 dark:text-[#FFFFFF]">
              <span className="font-medium w-24 dark:text-[#FFFFFF]">
                Pin Code:
              </span>{" "}
              560001
            </p>
          </div>
        </div>
      </div>
      <Editprofile isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
    </div>
  );
};

export default ProfileDetails;
