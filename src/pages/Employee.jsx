import React, { useRef, useState, useEffect } from "react";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";

const Employee = () => {
  const employees = [
    {
      id: 1,
      name: "Ravi Kumar",
      email: "ravi.kumar@example.com",
      phone: "+91 9876543210",
      position: "Frontend Developer",
      department: "Engineering",
      location: "Bangalore",
      lastSeen: "2 hours ago",
      joinedOn: "Jan 12, 2023",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Pooja Sharma",
      email: "pooja.sharma@example.com",
      phone: "+91 9123456780",
      position: "HR Manager",
      department: "Human Resources",
      location: "Mumbai",
      lastSeen: "30 min ago",
      joinedOn: "Mar 3, 2022",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  ];

  const [menuOpenId, setMenuOpenId] = useState(null);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpenId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to determine if the employee is the last one
  const isLastEmployee = (id) => {
    return id === employees[employees.length - 1].id;
  };

  return (
    <div className="p-6 font-outfit dark:bg-[#171F2F] dark:text-[#FFFFFF]">
      <h2 className="text-2xl font-semibold mb-6">Employees</h2>

      {/* Search & Add */}
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search employees..."
          className="border dark:text-[#FFFFFF] border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition p-2 rounded-full w-64 outline-none"
        />
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition">
          + Add Employee
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow dark:bg-[#171F2F]">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="text-gray-600 bg-gray-50 sticky top-0 dark:bg-[#171F2F] dark:text-[#FFFFFF]">
            <tr>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Position</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Last Seen</th>
              <th className="p-3 text-left">Joined On</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-800 transition dark:bg-[#171F2F] dark:text-[#FFFFFF]">
                {/* Name + Avatar */}
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={emp.avatar}
                    alt={emp.name}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100"
                  />
                  <span className="font-medium">{emp.name}</span>
                </td>
                <td className="p-3">{emp.email}</td>
                <td className="p-3">{emp.phone}</td>
                <td className="p-3">{emp.position}</td>
                <td className="p-3">{emp.department}</td>
                <td className="p-3">{emp.location}</td>
                <td className="p-3 text-gray-500 dark:text-[#FFFFFF]">{emp.lastSeen}</td>
                <td className="p-3">{emp.joinedOn}</td>
                {/* More Menu */}
                <td className="p-3 relative">
                  <button
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-full transition"
                    onClick={() =>
                      setMenuOpenId(menuOpenId === emp.id ? null : emp.id)
                    }
                  >
                    <IoIosMore size={20} />
                  </button>
                  {menuOpenId === emp.id && (
                    <div
                      ref={menuRef}
                      className={`absolute font-outfit right-8 w-40 bg-white border rounded-xl border-gray-100 shadow-lg z-50 animate-fadeIn dark:text-[#FFFFFF] dark:bg-[#171F2F] ${
                        isLastEmployee(emp.id) ? "bottom-10" : "top-10"
                      }`}
                    >
                     <Link to={`/profile`}  >
                       <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800  rounded-t-xl">
                        View More
                      </button>
                     </Link>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800  text-red-500 rounded-b-xl">
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Employee;
