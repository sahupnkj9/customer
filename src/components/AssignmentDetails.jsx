import React, { useState } from "react";


const AssignmentDetails = () => {
  const [filter, setFilter] = useState("today");
  const [selectedTask, setSelectedTask] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  const assignments = [
    {
      assignmentId: "A101",
      orderId: "ORD2025",
      employee: "Rohit Sharma",
      assignmentDate: "2025-08-10",
      status: "Completed",
      lastUpdateTime: "2025-08-12 14:35",
      message: "No Issues",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=60",
    },
    {
      assignmentId: "A102",
      orderId: "ORD2026",
      employee: "Rohit Sharma",
      assignmentDate: "2025-08-17",
      status: "Completed",
      lastUpdateTime: "2025-08-17 10:20",
      message: "No Issue",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=60",
    },
    {
      assignmentId: "A103",
      orderId: "ORD2027",
      employee: "Rohit Sharma",
      assignmentDate: "2025-08-18",
      status: "Completed",
      lastUpdateTime: "2025-08-18 09:10",
      message: "Tyre Puncture Found",
      image: [
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      assignmentId: "A104",
      orderId: "ORD2028",
      employee: "Rohit Sharma",
      assignmentDate: "2025-08-20",
      status: "In Progress",
      lastUpdateTime: "2025-08-12 14:35",
      message: "No Issues",
      image: null,
    },
    {
      assignmentId: "A105",
      orderId: "ORD2029",
      employee: "Rohit Sharma",
      assignmentDate: "2025-08-21",
      status: "Pending",
      lastUpdateTime: "2025-08-12 14:35",
      message: "No Issues",
      image: null,
    },
  ];

  // ✅ Status-wise color
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Pending":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // ✅ Order by date desc
  const sortedAssignments = [...assignments].sort(
    (a, b) => new Date(b.assignmentDate) - new Date(a.assignmentDate)
  );

  // ✅ Filter logic
  const filteredAssignments = sortedAssignments.filter((task) => {
    if (filter === "today") return task.assignmentDate === today;
    if (filter === "tomorrow") {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return task.assignmentDate === tomorrow.toISOString().split("T")[0];
    }
    if (filter === "future") return task.assignmentDate > today;
    if (filter === "past") return task.assignmentDate < today;
    return true; // "all"
  });

  // ✅ Summary counts based on filteredAssignments
  const total = filteredAssignments.length;
  const completed = filteredAssignments.filter(
    (a) => a.status === "Completed"
  ).length;
  const inProgress = filteredAssignments.filter(
    (a) => a.status === "In Progress"
  ).length;
  const pending = filteredAssignments.filter(
    (a) => a.status === "Pending"
  ).length;

  return (
    <div className="bg-white font-outfit border rounded-2xl p-6 shadow-md dark:bg-[#171F2F] dark:text-[#FFFFFF]">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2 dark:text-[#FFFFFF] ">
        📋 Assignments
      </h2>

      {/* ✅ Filters */}
      <div className="flex flex-wrap gap-3 mb-5">
        {["today", "tomorrow", "future", "past", "all"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition 
              ${
                filter === f
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* ✅ Filter-based Summary */}
      <div className="mb-4 text-gray-700 font-medium dark:text-[#FFFFFF] dark:bg-[#171F2F]">
        📌 Total: {total} | ✅ Completed: {completed} | ⏳ In Progress:{" "}
        {inProgress} | 🟥 Pending: {pending}
      </div>

      {/* ✅ Table */}
      <div className="overflow-x-auto ">
        <table className="w-full border text-sm ">
          <thead>
            <tr className="bg-gray-100 text-left font-medium text-gray-600 dark:text-[#FFFFFF] dark:bg-[#171F2F]">
              <th className="px-4 py-2 border-b">AssignmentID</th>
              <th className="px-4 py-2 border-b">OrderID</th>
              <th className="px-4 py-2 border-b">Date</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Last Update</th>
              <th className="px-4 py-2 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssignments.map((task) => (
              <tr
                key={task.assignmentId}
                className="hover:bg-gray-50 dark:hover:bg-gray-800  transition duration-200"
              >
                <td className="px-4 py-2 border-b">{task.assignmentId}</td>
                <td className="px-4 py-2 border-b">{task.orderId}</td>
                <td className="px-4 py-2 border-b">
                  {new Date(task.assignmentDate).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-2 py-2 border-b">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b">{task.lastUpdateTime}</td>
                <td className="px-4 py-2 border-b">
                  {" "}
                  {task.status === "Completed" ? (
                    <button
                      className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"
                      onClick={() => setSelectedTask(task)}
                    >
                      {" "}
                      View Details{" "}
                    </button>
                  ) : (
                    "-"
                  )}{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 ">
          <div className="bg-white w-[95%] h-[90%]  shadow-xl p-6 relative overflow-y-auto dark:bg-[#171F2F] dark:text-[#FFFFFF]">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl dark:text-gray-500 hover:dark:text-[#FFFFFF] "
              onClick={() => setSelectedTask(null)}
            >
              ✖
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2 dark:text-[#FFFFFF]">
              {selectedTask.status === "Completed"
                ? "✅ Assignment Details"
                : "⚠️ Issue Details"}
            </h2>

            {/* Details */}
            <div className="space-y-3 text-gray-700 text-lg dark:text-[#FFFFFF]">
              <p>
                <span className="font-semibold">Assignment ID:</span>{" "}
                {selectedTask.assignmentId}
              </p>
              <p>
                <span className="font-semibold">Order ID:</span>{" "}
                {selectedTask.orderId}
              </p>
              <p>
                <span className="font-semibold">Message:</span>{" "}
                {selectedTask.message || "—"}
              </p>
              <p>
                <span className="font-semibold">Last Update:</span>{" "}
                {selectedTask.lastUpdateTime}
              </p>
            </div>

            {/* Image(s) */}
            {selectedTask.image && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 dark:text-[#FFFFFF]">
                  Attached Images
                </h3>

                {/* Multiple Images */}
                {Array.isArray(selectedTask.image) ? (
                  <div className="flex gap-4 overflow-x-auto">
                    {selectedTask.image.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Task-${idx}`}
                        className="rounded-lg shadow-md w-[600px] h-[400px] object-cover flex-shrink-0"
                      />
                    ))}
                  </div>
                ) : (
                  /* Single Image */
                  <img
                    src={selectedTask.image}
                    alt="Task"
                    className="rounded-lg  shadow-md w-[600px] h-[400px] object-cover flex-shrink-0"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentDetails;
